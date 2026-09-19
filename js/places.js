/* ==========================================================================
   VOYAGECRAFT FAMOUS PLACES & DISCOVERY MODULE
   Destination Explorer, Leaflet Dark Mode Map, & Attraction Scheduler
   ========================================================================== */

import { DESTINATIONS, HOTELS } from './data.js';
import { store } from './store.js';

let mapInstance = null;
let mapMarkers = [];
let currentTileLayer = null;
let activeCategory = 'all';
let selectedDestination = null;

export function initPlacesView() {
  renderDestinationCards(DESTINATIONS);
  setupCategoryTabs();
  setupDestinationModal();
  initLeafletMap();
}

export function initLeafletMap() {
  const mapElement = document.getElementById('places-map');
  if (!mapElement || typeof L === 'undefined') return;

  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
    currentTileLayer = null;
  }

  // Centered on a global viewpoint
  mapInstance = L.map('places-map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([20.0, 10.0], 2);

  // Map defaults to 'light' theme as requested
  const savedMapTheme = store.getMapTheme?.() || 'light';
  applyMapTheme(savedMapTheme);
  setupMapThemeToggle();

  renderMapMarkers(DESTINATIONS);
}

export function applyMapTheme(theme) {
  if (!mapInstance || typeof L === 'undefined') return;

  if (currentTileLayer) {
    mapInstance.removeLayer(currentTileLayer);
  }

  const isLight = theme === 'light';
  const tileUrl = isLight 
    ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

  currentTileLayer = L.tileLayer(tileUrl, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 18,
    subdomains: 'abcd'
  }).addTo(mapInstance);

  // Also update map container background tone
  const mapEl = document.getElementById('places-map');
  if (mapEl) {
    mapEl.style.background = isLight ? '#eef2f6' : '#0b0f19';
  }

  updateMapThemeButtonUI(theme);
}

function setupMapThemeToggle() {
  const btn = document.getElementById('btn-toggle-map-theme');
  if (!btn) return;

  btn.onclick = (e) => {
    e.preventDefault();
    const current = store.getMapTheme?.() || 'light';
    const nextTheme = current === 'light' ? 'dark' : 'light';
    store.setMapTheme?.(nextTheme);
    applyMapTheme(nextTheme);
    window.showToast?.(`Switched map to ${nextTheme} style`, 'info');
  };
}

function updateMapThemeButtonUI(theme) {
  const btn = document.getElementById('btn-toggle-map-theme');
  if (!btn) return;

  const isLight = theme === 'light';
  const labelText = window.t 
    ? window.t(isLight ? 'map_light_btn' : 'map_dark_btn')
    : (isLight ? 'Light Map' : 'Dark Map');

  if (isLight) {
    btn.classList.remove('dark-active');
    btn.innerHTML = `<i class="fa-solid fa-sun" style="color: #f59e0b;"></i> <span id="map-theme-label" data-i18n="map_light_btn">${labelText}</span>`;
  } else {
    btn.classList.add('dark-active');
    btn.innerHTML = `<i class="fa-solid fa-moon" style="color: #38bdf8;"></i> <span id="map-theme-label" data-i18n="map_dark_btn">${labelText}</span>`;
  }
}

function renderMapMarkers(destinations) {
  if (!mapInstance || typeof L === 'undefined') return;

  // Clear existing markers
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];

  destinations.forEach(dest => {
    const customIcon = L.divIcon({
      className: 'custom-map-marker-pin',
      html: `
        <div style="
          width: 32px; 
          height: 32px; 
          background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); 
          border: 2.5px solid #ffffff; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: #ffffff; 
          font-weight: 800; 
          font-size: 13px; 
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.45); 
          cursor: pointer;
          transition: transform 0.2s ease;
        " title="${dest.name}, ${dest.country}">
          <i class="fa-solid fa-location-dot"></i>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker(dest.coordinates, { icon: customIcon }).addTo(mapInstance);

    marker.bindPopup(`
      <div style="padding: 6px 4px; font-family: 'Plus Jakarta Sans', sans-serif; min-width: 175px;">
        <strong style="font-size: 0.95rem; color: #0b0f19; display: block; margin-bottom: 2px;">${dest.name}, ${dest.country}</strong>
        <p style="font-size: 0.78rem; color: #475569; margin: 0 0 10px; line-height: 1.35;">${dest.tagline}</p>
        <button class="btn-primary btn-pin-explore" data-id="${dest.id}" style="padding: 6px 12px; font-size: 0.75rem; width: 100%; border-radius: 6px; cursor: pointer;">
          <i class="fa-solid fa-compass"></i> Explore Attractions
        </button>
      </div>
    `);

    marker.on('popupopen', () => {
      const btn = document.querySelector(`.btn-pin-explore[data-id="${dest.id}"]`);
      if (btn) {
        btn.onclick = () => openDestinationModal(dest.id);
      }
    });

    mapMarkers.push(marker);
  });
}

export function renderDestinationCards(destinations) {
  const container = document.getElementById('destinations-grid-container');
  if (!container) return;

  container.innerHTML = destinations.map(dest => {
    return `
      <div class="destination-card" data-dest-id="${dest.id}">
        <div class="dest-img-box">
          <img src="${dest.image}" alt="${dest.name}" class="dest-img" loading="lazy" />
          <span class="dest-tag-badge">
            <i class="fa-solid fa-compass"></i> ${capitalize(dest.category)}
          </span>
        </div>

        <div class="dest-content">
          <h3 class="dest-title">${dest.name}</h3>
          <div class="dest-country"><i class="fa-solid fa-location-dot"></i> ${dest.country}</div>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">${dest.tagline}</p>

          <div class="dest-stats">
            <span><i class="fa-solid fa-landmark"></i> ${dest.attractions.length} Landmarks</span>
            <span style="color: var(--primary); font-weight: 700;">~${store.formatPrice(dest.dailyBudgetEst)} / day</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const destId = e.currentTarget.dataset.destId;
      openDestinationModal(destId);

      // Pan to map marker
      const dest = DESTINATIONS.find(d => d.id === destId);
      if (dest && mapInstance) {
        mapInstance.flyTo(dest.coordinates, 6, { duration: 1.2 });
      }
    });
  });
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.places-category-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeCategory = e.currentTarget.dataset.category;

      const filtered = activeCategory === 'all' 
        ? DESTINATIONS 
        : DESTINATIONS.filter(d => d.category === activeCategory);

      renderDestinationCards(filtered);
      renderMapMarkers(filtered);
    });
  });
}

export function searchDestinations(query) {
  if (!query) {
    renderDestinationCards(DESTINATIONS);
    renderMapMarkers(DESTINATIONS);
    return;
  }
  const filtered = DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.country.toLowerCase().includes(query.toLowerCase()) ||
    d.tagline.toLowerCase().includes(query.toLowerCase())
  );
  renderDestinationCards(filtered);
  renderMapMarkers(filtered);
}

function openDestinationModal(destId) {
  selectedDestination = DESTINATIONS.find(d => d.id === destId);
  if (!selectedDestination) return;

  const modal = document.getElementById('destination-detail-modal');
  if (!modal) return;

  document.getElementById('modal-dest-title').textContent = `${selectedDestination.name}, ${selectedDestination.country}`;
  document.getElementById('modal-dest-tagline').textContent = selectedDestination.tagline;
  document.getElementById('modal-dest-desc').textContent = selectedDestination.description;
  document.getElementById('modal-dest-season').textContent = selectedDestination.bestSeason;
  document.getElementById('modal-dest-currency').textContent = selectedDestination.currency;
  document.getElementById('modal-dest-budget').textContent = `~${store.formatPrice(selectedDestination.dailyBudgetEst)} / day`;
  
  const heroImg = document.getElementById('modal-dest-image');
  if (heroImg) heroImg.src = selectedDestination.image;

  renderModalAttractions();
  renderModalHotels();
  modal.classList.add('active');
}

function renderModalAttractions() {
  const container = document.getElementById('modal-dest-attractions-list');
  if (!container || !selectedDestination) return;

  container.innerHTML = selectedDestination.attractions.map(att => {
    const feeFormatted = att.price === 0 ? 'Free' : store.formatPrice(att.price);

    return `
      <div class="attraction-item-card">
        <div class="attraction-meta">
          <h4>${att.name}</h4>
          <p>${att.desc}</p>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
            <i class="fa-solid fa-clock"></i> Recommended: ${att.time} (${att.duration})
          </div>
        </div>
        <div class="attraction-pricing">
          <div class="attraction-fee">${feeFormatted}</div>
          <button class="btn-primary btn-add-attraction" data-att-id="${att.id}" style="padding: 8px 14px; font-size: 0.85rem;">
            <i class="fa-solid fa-plus"></i> Add to Itinerary
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.btn-add-attraction').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const attId = e.currentTarget.dataset.attId;
      const att = selectedDestination.attractions.find(a => a.id === attId);
      if (att) {
        store.addAttraction(att, selectedDestination.name);
        window.showToast?.(`Added "${att.name}" to your trip itinerary!`, 'success');
        e.currentTarget.innerHTML = '<i class="fa-solid fa-check"></i> Added';
        e.currentTarget.disabled = true;
        e.currentTarget.style.opacity = '0.7';
      }
    });
  });
}

function renderModalHotels() {
  const container = document.getElementById('modal-dest-hotels-list');
  const cityEl = document.getElementById('modal-dest-hotel-city');
  const countEl = document.getElementById('modal-dest-hotel-count');
  if (!container || !selectedDestination) return;

  const cityName = selectedDestination.name;
  if (cityEl) cityEl.textContent = cityName;

  // Match hotels by city name, country, or keyword
  const nameQuery = cityName.toLowerCase();
  const countryQuery = selectedDestination.country.toLowerCase();

  const matchingHotels = HOTELS.filter(h => {
    const hCity = h.city.toLowerCase();
    const hCountry = h.country.toLowerCase();
    return hCity.includes(nameQuery) || nameQuery.includes(hCity) ||
           (countryQuery && (hCountry.includes(countryQuery) || countryQuery.includes(hCountry)));
  });

  if (countEl) {
    countEl.textContent = `${matchingHotels.length} Premier ${matchingHotels.length === 1 ? 'Property' : 'Properties'}`;
  }

  if (matchingHotels.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; background: var(--bg-tertiary); border-radius: var(--radius-md); grid-column: 1 / -1;">
        <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">Explore luxury accommodations across all global destinations in our main Hotels tab.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matchingHotels.map(hotel => {
    const formattedPrice = store.formatPrice(hotel.pricePerNight);
    const starIcons = '★'.repeat(hotel.stars);

    return `
      <div class="dest-modal-hotel-card">
        <div class="dest-modal-hotel-img-wrap">
          <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
          <span class="dest-modal-hotel-rating"><i class="fa-solid fa-star"></i> ${hotel.rating}</span>
        </div>
        <div class="dest-modal-hotel-info">
          <div class="dest-modal-hotel-stars">${starIcons}</div>
          <h4 class="dest-modal-hotel-name">${hotel.name}</h4>
          <p class="dest-modal-hotel-addr"><i class="fa-solid fa-location-dot"></i> ${hotel.address}</p>
          <div class="dest-modal-hotel-amenities">
            ${hotel.amenities.slice(0, 3).map(a => `<span class="amenity-chip"><i class="fa-solid fa-check"></i> ${a}</span>`).join('')}
          </div>
          <div class="dest-modal-hotel-footer">
            <div class="dest-modal-hotel-price">
              <span class="price-val">${formattedPrice}</span>
              <span class="price-lbl">/ night</span>
            </div>
            <button class="btn-primary btn-modal-reserve-hotel" data-hotel-id="${hotel.id}">
              <i class="fa-solid fa-bed"></i> Reserve Stay
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.btn-modal-reserve-hotel').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const hotelId = e.currentTarget.dataset.hotelId;
      // Close destination modal
      const destModal = document.getElementById('destination-detail-modal');
      if (destModal) destModal.classList.remove('active');

      // Open hotel reservation modal
      if (window.openHotelReservationModal) {
        window.openHotelReservationModal(hotelId);
      }
    });
  });
}

function setupDestinationModal() {
  const modal = document.getElementById('destination-detail-modal');
  const closeBtn = document.getElementById('btn-close-dest-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
