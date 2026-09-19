/* ==========================================================================
   VOYAGECRAFT MASTER TRIP ITINERARY MODULE
   Chronological Timeline, Custom Activity Creator, & Travel Pass Export
   ========================================================================== */

import { store } from './store.js';
import { showBoardingPassModal } from './flights.js';
import { showHotelVoucherModal } from './hotels.js';

export function initItineraryView() {
  renderItinerary();
  setupItineraryControls();

  // Re-render when store updates
  store.subscribe(() => {
    renderItinerary();
  });
}

export function renderItinerary() {
  const container = document.getElementById('itinerary-timeline-container');
  if (!container) return;

  const state = store.getState();
  const trip = state.activeTrip;

  // Header Metrics
  const titleEl = document.getElementById('itinerary-trip-title');
  const datesEl = document.getElementById('itinerary-dates-summary');
  const countEl = document.getElementById('itinerary-items-count');

  if (titleEl) titleEl.textContent = trip.tripName;
  if (datesEl) datesEl.textContent = `${trip.startDate} to ${trip.endDate}`;

  // Aggregate all items into chronological days
  const dayBuckets = {};

  // 1. Flights
  (trip.bookedFlights || []).forEach(flight => {
    const dayKey = flight.departureDate || trip.startDate || 'Day 1';
    if (!dayBuckets[dayKey]) dayBuckets[dayKey] = [];
    dayBuckets[dayKey].push({
      type: 'flight',
      time: flight.departureTime,
      title: `Flight: ${flight.airline} (${flight.origin.code} ✈ ${flight.destination.code})`,
      subtitle: `${flight.flightNumber} • Seat ${flight.seatNumber} • Gate ${flight.gate}`,
      cost: flight.totalPrice,
      data: flight
    });
  });

  // 2. Hotels
  (trip.bookedHotels || []).forEach(hotel => {
    const checkInKey = hotel.checkIn || trip.startDate || 'Day 1';
    if (!dayBuckets[checkInKey]) dayBuckets[checkInKey] = [];
    dayBuckets[checkInKey].push({
      type: 'hotel',
      time: '03:00 PM',
      title: `Check-in: ${hotel.hotelName}`,
      subtitle: `${hotel.roomType} • ${hotel.nights} Nights • Voucher: ${hotel.voucherId}`,
      cost: hotel.totalPrice,
      data: hotel
    });

    const checkOutKey = hotel.checkOut || 'Day End';
    if (!dayBuckets[checkOutKey]) dayBuckets[checkOutKey] = [];
    dayBuckets[checkOutKey].push({
      type: 'hotel',
      time: '11:00 AM',
      title: `Check-out: ${hotel.hotelName}`,
      subtitle: `${hotel.city} • Return keys & airport transfer`,
      cost: 0,
      data: hotel
    });
  });

  // 3. Attractions
  (trip.scheduledAttractions || []).forEach(att => {
    const dayKey = att.scheduledDate || trip.startDate || 'Day 1';
    if (!dayBuckets[dayKey]) dayBuckets[dayKey] = [];
    dayBuckets[dayKey].push({
      type: 'activity',
      time: att.time || '10:00 AM',
      title: `Attraction: ${att.name}`,
      subtitle: `${att.destinationName} • Duration: ${att.duration || '2 hours'}`,
      cost: att.price || 0,
      data: att
    });
  });

  // 4. Custom Activities
  (trip.customActivities || []).forEach(act => {
    const dayKey = `Day ${act.dayNumber || 1}`;
    if (!dayBuckets[dayKey]) dayBuckets[dayKey] = [];
    dayBuckets[dayKey].push({
      type: 'custom',
      time: act.time,
      title: act.title,
      subtitle: act.notes,
      cost: 0,
      id: act.id
    });
  });

  const dayKeys = Object.keys(dayBuckets).sort();
  const totalItemsCount = Object.values(dayBuckets).reduce((acc, curr) => acc + curr.length, 0);
  if (countEl) countEl.textContent = `${totalItemsCount} scheduled items`;

  if (dayKeys.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 70px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-map-location-dot" style="font-size: 3.5rem; color: var(--primary); margin-bottom: 20px;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Your Itinerary is Fresh & Clean</h3>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 24px;">
          Explore flights, hotels, holiday packages, and attractions to start assembling your master schedule, or load our pre-configured demo trip.
        </p>
        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <button class="btn-primary" id="btn-load-demo-itinerary">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Load Sample Demo Trip
          </button>
          <button class="btn-secondary" id="btn-explore-now-itin">
            <i class="fa-solid fa-compass"></i> Explore Destinations
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-load-demo-itinerary')?.addEventListener('click', () => {
      store.loadDemoTrip();
      window.showToast?.('Loaded rich demo trip with flights, 5★ hotel, attractions, and dining!', 'success');
    });

    document.getElementById('btn-explore-now-itin')?.addEventListener('click', () => {
      document.querySelector('.nav-link[data-view="places-view"]')?.click();
    });

    return;
  }

  container.innerHTML = dayKeys.map((dayKey, index) => {
    const items = dayBuckets[dayKey];

    return `
      <div class="itinerary-day-block">
        <div class="itinerary-day-header">
          <div class="day-badge-title">
            <span class="day-number-badge" style="background: var(--primary); color: #0b0f19;">DAY ${index + 1}</span>
            <span>${dayKey}</span>
          </div>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">
            ${items.length} Activities
          </span>
        </div>

        <div class="itinerary-items-list">
          ${items.map(item => {
            const costFormatted = item.cost > 0 ? store.formatPrice(item.cost) : 'Included / Free';

            return `
              <div class="itin-item-row">
                <div class="itin-type-icon itin-type-${item.type}">
                  <i class="fa-solid ${getIconForType(item.type)}"></i>
                </div>

                <div class="itin-details">
                  <div class="itin-title">${item.title}</div>
                  <div class="itin-meta">${item.time} • ${item.subtitle}</div>
                </div>

                <div style="display: flex; align-items: center; gap: 14px;">
                  <div class="itin-cost-tag">${costFormatted}</div>

                  ${item.type === 'flight' ? `
                    <button class="btn-icon btn-view-pass" title="View Boarding Pass" style="width: 34px; height: 34px;">
                      <i class="fa-solid fa-qrcode" style="color: var(--primary);"></i>
                    </button>
                  ` : ''}

                  ${item.type === 'hotel' && item.subtitle.includes('Voucher') ? `
                    <button class="btn-icon btn-view-voucher" title="View Hotel Voucher" style="width: 34px; height: 34px;">
                      <i class="fa-solid fa-file-invoice" style="color: var(--secondary);"></i>
                    </button>
                  ` : ''}

                  ${item.type === 'custom' ? `
                    <button class="btn-icon btn-delete-custom-act" data-id="${item.id}" title="Remove Activity" style="width: 32px; height: 32px;">
                      <i class="fa-solid fa-xmark" style="color: var(--text-muted);"></i>
                    </button>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Attach handlers for boarding pass, voucher, and deletion
  container.querySelectorAll('.btn-view-pass').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const flight = trip.bookedFlights[i] || trip.bookedFlights[0];
      if (flight) showBoardingPassModal(flight);
    });
  });

  container.querySelectorAll('.btn-view-voucher').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const hotel = trip.bookedHotels[i] || trip.bookedHotels[0];
      if (hotel) showHotelVoucherModal(hotel);
    });
  });

  container.querySelectorAll('.btn-delete-custom-act').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      store.removeCustomActivity(id);
      window.showToast?.('Removed activity from itinerary', 'info');
    });
  });
}

function getIconForType(type) {
  switch (type) {
    case 'flight': return 'fa-plane';
    case 'hotel': return 'fa-hotel';
    case 'activity': return 'fa-ticket';
    default: return 'fa-bookmark';
  }
}

function setupItineraryControls() {
  const addActBtn = document.getElementById('btn-add-custom-plan');
  const printBtn = document.getElementById('btn-print-itinerary');
  const resetBtn = document.getElementById('btn-clear-entire-trip');

  if (addActBtn) {
    addActBtn.addEventListener('click', () => {
      const modal = document.getElementById('add-activity-modal');
      if (modal) modal.classList.add('active');
    });
  }

  const closeActModal = document.getElementById('btn-close-act-modal');
  if (closeActModal) {
    closeActModal.addEventListener('click', () => {
      document.getElementById('add-activity-modal')?.classList.remove('active');
    });
  }

  const saveActBtn = document.getElementById('btn-save-custom-activity');
  if (saveActBtn) {
    saveActBtn.addEventListener('click', () => {
      const title = document.getElementById('act-title-input')?.value.trim();
      const day = Number(document.getElementById('act-day-input')?.value) || 1;
      const time = document.getElementById('act-time-input')?.value || '10:00 AM';
      const notes = document.getElementById('act-notes-input')?.value.trim() || '';

      if (!title) {
        window.showToast?.('Please enter an activity title', 'warning');
        return;
      }

      store.addCustomActivity({
        dayNumber: day,
        time,
        title,
        notes
      });

      document.getElementById('add-activity-modal')?.classList.remove('active');
      window.showToast?.(`Added "${title}" to Day ${day}`, 'success');
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your entire trip itinerary and bookings?')) {
        store.clearTrip();
        window.showToast?.('Trip reset. Ready for a new travel adventure!', 'info');
      }
    });
  }
}
