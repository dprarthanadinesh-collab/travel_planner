/* ==========================================================================
   VOYAGECRAFT HOTEL BOOKINGS MODULE
   Search, Filters, Room Tier Selection, & Reservation Voucher
   ========================================================================== */

import { HOTELS } from './data.js';
import { store } from './store.js';

let currentHotels = [...HOTELS];
let selectedHotel = null;
let selectedRoomIndex = 0;

export function initHotelsView() {
  renderHotelCards(currentHotels);
  setupHotelFilters();
  setupHotelModal();
}

export function renderHotelCards(hotels) {
  const container = document.getElementById('hotels-list-container');
  if (!container) return;

  if (hotels.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-hotel" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No hotels found in this destination</h3>
        <p style="color: var(--text-secondary); max-width: 420px; margin: 0 auto 20px;">Try searching for Paris, Tokyo, Bali, Swiss Alps, Santorini, Dubai, Rome, or New York.</p>
        <button class="btn-primary" id="btn-reset-hotels">Reset Hotel Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-hotels');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentHotels = [...HOTELS];
        renderHotelCards(currentHotels);
      });
    }
    return;
  }

  container.innerHTML = hotels.map(hotel => {
    const formattedPrice = store.formatPrice(hotel.pricePerNight);
    const starIcons = '★'.repeat(hotel.stars);

    return `
      <div class="hotel-card" data-hotel-id="${hotel.id}">
        <div class="hotel-thumb-wrapper">
          <img src="${hotel.image}" alt="${hotel.name}" class="hotel-thumb" loading="lazy" />
          <div class="hotel-badge-rating">
            <i class="fa-solid fa-star"></i> ${hotel.rating}
          </div>
          <div class="hotel-stars">${starIcons}</div>
        </div>

        <div class="hotel-content">
          <div class="hotel-location">
            <i class="fa-solid fa-location-dot"></i> ${hotel.city}, ${hotel.country}
          </div>
          <h3 class="hotel-name">${hotel.name}</h3>

          <div class="hotel-amenities-list">
            ${hotel.amenities.slice(0, 3).map(amenity => `
              <span class="amenity-tag">
                <i class="fa-solid fa-check"></i> ${amenity}
              </span>
            `).join('')}
          </div>

          <div class="hotel-footer">
            <div class="hotel-price-box">
              <div class="hotel-price-num">${formattedPrice}</div>
              <div class="hotel-price-unit">per night • taxes included</div>
            </div>
            <button class="btn-primary btn-reserve-hotel" data-hotel-id="${hotel.id}">
              <i class="fa-solid fa-bed"></i> Reserve Stay
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.btn-reserve-hotel').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const hotelId = e.currentTarget.dataset.hotelId;
      openHotelReservationModal(hotelId);
    });
  });
}

function setupHotelFilters() {
  const cityFilter = document.getElementById('hotel-city-filter');
  const priceFilter = document.getElementById('hotel-price-filter');
  const cityChips = document.querySelectorAll('.hotel-city-chip');

  const applyFilters = () => {
    const cityVal = (cityFilter?.value || '').toLowerCase().trim();
    const maxPrice = Number(priceFilter?.value) || 2500;

    currentHotels = HOTELS.filter(hotel => {
      const matchCity = !cityVal || 
        hotel.city.toLowerCase().includes(cityVal) || 
        hotel.country.toLowerCase().includes(cityVal) ||
        hotel.name.toLowerCase().includes(cityVal);
      const matchPrice = hotel.pricePerNight <= maxPrice;
      return matchCity && matchPrice;
    });

    // Sync active state on city chips if applicable
    cityChips.forEach(chip => {
      const cCity = (chip.dataset.city || '').toLowerCase();
      if (!cityVal && cCity === 'all') {
        chip.classList.add('active');
      } else if (cityVal && (cCity === cityVal || cCity.includes(cityVal) || cityVal.includes(cCity))) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    renderHotelCards(currentHotels);
  };

  // Wire city filter chips
  cityChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      cityChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const targetCity = chip.dataset.city;
      if (cityFilter) {
        cityFilter.value = targetCity === 'all' ? '' : targetCity;
      }
      applyFilters();
    });
  });

  if (cityFilter) cityFilter.addEventListener('input', applyFilters);
  if (priceFilter) priceFilter.addEventListener('input', applyFilters);
}

export function searchHotels(destinationQuery) {
  if (!destinationQuery) {
    currentHotels = [...HOTELS];
  } else {
    currentHotels = HOTELS.filter(h => 
      h.city.toLowerCase().includes(destinationQuery.toLowerCase()) ||
      h.country.toLowerCase().includes(destinationQuery.toLowerCase()) ||
      h.name.toLowerCase().includes(destinationQuery.toLowerCase())
    );
  }
  renderHotelCards(currentHotels);
}

export function openHotelReservationModal(hotelId) {
  selectedHotel = HOTELS.find(h => h.id === hotelId);
  if (!selectedHotel) return;

  const modal = document.getElementById('hotel-booking-modal');
  if (!modal) return;

  selectedRoomIndex = 0;

  document.getElementById('modal-hotel-name').textContent = selectedHotel.name;
  document.getElementById('modal-hotel-loc').textContent = `${selectedHotel.city}, ${selectedHotel.country} • ${selectedHotel.address}`;
  
  renderRoomOptions();
  updateHotelTotal();

  modal.classList.add('active');
}

function renderRoomOptions() {
  const container = document.getElementById('hotel-rooms-container');
  if (!container || !selectedHotel) return;

  container.innerHTML = selectedHotel.rooms.map((room, idx) => `
    <div class="attraction-item-card room-option-card ${idx === selectedRoomIndex ? 'active' : ''}" data-index="${idx}" style="cursor: pointer; border-color: ${idx === selectedRoomIndex ? 'var(--primary)' : 'var(--border-color)'};">
      <div>
        <h4 style="font-size: 1rem; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
          <input type="radio" name="hotel-room-choice" ${idx === selectedRoomIndex ? 'checked' : ''} style="accent-color: var(--primary);">
          ${room.type}
        </h4>
        <p style="font-size: 0.8rem; color: var(--text-secondary);">${room.size} • ${room.perks}</p>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">${store.formatPrice(room.price)}</span>
        <div style="font-size: 0.75rem; color: var(--text-muted);">/ night</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.room-option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      selectedRoomIndex = Number(e.currentTarget.dataset.index);
      renderRoomOptions();
      updateHotelTotal();
    });
  });
}

function updateHotelTotal() {
  if (!selectedHotel) return;
  const nights = Math.max(1, Number(document.getElementById('hotel-nights-input')?.value) || 3);
  const room = selectedHotel.rooms[selectedRoomIndex];
  const totalPrice = room.price * nights;

  const totalEl = document.getElementById('modal-hotel-total-price');
  if (totalEl) {
    totalEl.textContent = `${store.formatPrice(totalPrice)} (${nights} nights)`;
  }
}

function setupHotelModal() {
  const modal = document.getElementById('hotel-booking-modal');
  const closeBtn = document.getElementById('btn-close-hotel-modal');
  const confirmBtn = document.getElementById('btn-confirm-hotel-booking');
  const nightsInput = document.getElementById('hotel-nights-input');

  if (nightsInput) {
    nightsInput.addEventListener('input', updateHotelTotal);
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (!selectedHotel) return;

      const guestNameInput = document.getElementById('hotel-guest-name');
      const guestName = (guestNameInput && guestNameInput.value.trim()) || 'Alexander Hayes';
      const checkInInput = document.getElementById('hotel-checkin-date');
      const checkIn = (checkInInput && checkInInput.value) || '2026-10-12';
      const nights = Math.max(1, Number(document.getElementById('hotel-nights-input')?.value) || 3);

      const room = selectedHotel.rooms[selectedRoomIndex];
      const totalPrice = room.price * nights;

      // Calculate checkout date
      const checkInDateObj = new Date(checkIn);
      checkInDateObj.setDate(checkInDateObj.getDate() + nights);
      const checkOut = checkInDateObj.toISOString().split('T')[0];

      const booking = store.addHotelBooking({
        hotelId: selectedHotel.id,
        hotelName: selectedHotel.name,
        city: selectedHotel.city,
        country: selectedHotel.country,
        address: selectedHotel.address,
        guestName,
        checkIn,
        checkOut,
        nights,
        roomType: room.type,
        guests: 2,
        totalPrice
      });

      modal.classList.remove('active');
      showHotelVoucherModal(booking);

      window.showToast?.(`Hotel reservation confirmed at ${selectedHotel.name}!`, 'success');
    });
  }
}

export function showHotelVoucherModal(booking) {
  const modal = document.getElementById('hotel-voucher-modal');
  const container = document.getElementById('hotel-voucher-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="background: var(--bg-card); border: 2px dashed var(--border-glow); border-radius: var(--radius-xl); overflow: hidden; padding: 28px;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 20px; margin-bottom: 20px;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-gold); font-weight: 700;">Official Reservation Confirmation</span>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary);">${booking.hotelName}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${booking.address}</p>
        </div>
        <div style="text-align: right;">
          <span class="pass-pnr-badge" style="background: var(--primary-dim); color: var(--primary);">VOUCHER: ${booking.voucherId}</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 24px;">
        <div>
          <div class="pass-field-label">Primary Guest</div>
          <div class="pass-field-val">${booking.guestName}</div>
        </div>
        <div>
          <div class="pass-field-label">Reserved Suite</div>
          <div class="pass-field-val">${booking.roomType}</div>
        </div>
        <div>
          <div class="pass-field-label">Check-In Date</div>
          <div class="pass-field-val">${booking.checkIn} (From 03:00 PM)</div>
        </div>
        <div>
          <div class="pass-field-label">Check-Out Date</div>
          <div class="pass-field-val">${booking.checkOut} (Until 12:00 PM)</div>
        </div>
        <div>
          <div class="pass-field-label">Duration & Guests</div>
          <div class="pass-field-val">${booking.nights} Nights • ${booking.guests} Guests</div>
        </div>
        <div>
          <div class="pass-field-label">Total Amount Paid</div>
          <div class="pass-field-val" style="color: var(--accent-emerald);">${store.formatPrice(booking.totalPrice)}</div>
        </div>
      </div>

      <div style="background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-md); font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 12px;">
        <i class="fa-solid fa-bell-concierge" style="color: var(--primary); font-size: 1.2rem;"></i>
        <span>Present this digital voucher or state your confirmation code upon arrival at the concierge desk. Free cancellation up to 48 hours prior.</span>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const closeBtn = document.getElementById('btn-close-voucher-modal');
  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('active');
  }

  const printBtn = document.getElementById('btn-print-voucher');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }
}

// Expose globally for cross-module interactions (e.g. from destination explorer modal)
if (typeof window !== 'undefined') {
  window.openHotelReservationModal = openHotelReservationModal;
}

