/* ==========================================================================
   VOYAGECRAFT FLIGHT BOOKINGS MODULE
   Search, Filtering, Interactive Seat Selection, & Boarding Pass Generator
   ========================================================================== */

import { FLIGHTS } from './data.js';
import { store } from './store.js';

let currentFlights = [...FLIGHTS];
let selectedFlight = null;
let selectedSeat = '12A';
let selectedCabin = 'economy';

export function initFlightsView() {
  renderFlightCards(currentFlights);
  setupFlightFilters();
  setupFlightModal();
}

export function renderFlightCards(flights) {
  const container = document.getElementById('flights-list-container');
  if (!container) return;

  if (flights.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-plane-slash" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching flights found</h3>
        <p style="color: var(--text-secondary); max-width: 420px; margin: 0 auto 20px;">Try adjusting your origin, destination, or filter criteria to discover more flight options.</p>
        <button class="btn-primary" id="btn-reset-flights">Reset Flight Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-flights');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentFlights = [...FLIGHTS];
        renderFlightCards(currentFlights);
      });
    }
    return;
  }

  container.innerHTML = flights.map(flight => {
    const price = flight.cabinClasses[selectedCabin] || flight.cabinClasses.economy;
    const formattedPrice = store.formatPrice(price);
    const hasLayover = flight.stops.includes('Stop');

    return `
      <div class="flight-card" data-flight-id="${flight.id}">
        <div class="airline-info">
          <div class="airline-logo-badge">
            <div class="airline-icon">
              <i class="fa-solid ${flight.logoIcon}"></i>
            </div>
            <div>
              <div class="airline-name">${flight.airline}</div>
              <div class="flight-number">${flight.flightNumber}</div>
            </div>
          </div>
          <span class="flight-cabin-tag">${capitalize(selectedCabin)} Class</span>
        </div>

        <div class="flight-timeline">
          <div class="time-point">
            <div class="point-time">${flight.departureTime}</div>
            <div class="point-city">${flight.origin.city}</div>
            <div class="point-code">${flight.origin.code}</div>
          </div>

          <div class="route-visual">
            <div class="route-duration">${flight.duration}</div>
            <div class="route-line-container">
              <div class="route-dot"></div>
              <div class="route-line">
                <i class="fa-solid fa-plane route-plane"></i>
              </div>
              <div class="route-dot"></div>
            </div>
            <div class="route-stops ${hasLayover ? 'has-layover' : ''}">
              <i class="fa-solid ${hasLayover ? 'fa-clock' : 'fa-check'}"></i> ${flight.stops}
            </div>
          </div>

          <div class="time-point">
            <div class="point-time">${flight.arrivalTime}</div>
            <div class="point-city">${flight.destination.city}</div>
            <div class="point-code">${flight.destination.code}</div>
          </div>
        </div>

        <div class="flight-pricing">
          <div class="price-label">Fare per passenger</div>
          <div class="price-amount">${formattedPrice}</div>
          <div class="price-sub"><i class="fa-solid fa-suitcase"></i> ${flight.baggage}</div>
          <button class="btn-primary btn-book-flight" data-flight-id="${flight.id}" style="margin-top: 6px; width: 100%; justify-content: center;">
            <i class="fa-solid fa-ticket"></i> Select Seat & Book
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach booking event handlers
  container.querySelectorAll('.btn-book-flight').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const flightId = e.currentTarget.dataset.flightId;
      openFlightBookingModal(flightId);
    });
  });
}

function setupFlightFilters() {
  const cabinFilter = document.getElementById('flight-cabin-filter');
  const stopsFilter = document.getElementById('flight-stops-filter');
  const airlineFilter = document.getElementById('flight-airline-filter');

  const applyFilters = () => {
    selectedCabin = cabinFilter ? cabinFilter.value : 'economy';
    const stopsVal = stopsFilter ? stopsFilter.value : 'all';
    const airlineVal = airlineFilter ? airlineFilter.value : 'all';

    currentFlights = FLIGHTS.filter(flight => {
      if (stopsVal === 'direct' && flight.stops !== 'Direct') return false;
      if (stopsVal === 'stops' && flight.stops === 'Direct') return false;
      if (airlineVal !== 'all' && flight.airline !== airlineVal) return false;
      return true;
    });

    renderFlightCards(currentFlights);
  };

  if (cabinFilter) cabinFilter.addEventListener('change', applyFilters);
  if (stopsFilter) stopsFilter.addEventListener('change', applyFilters);
  if (airlineFilter) airlineFilter.addEventListener('change', applyFilters);
}

export function searchFlights(originCode, destCode) {
  currentFlights = FLIGHTS.filter(f => {
    const matchOrigin = !originCode || f.origin.code.toLowerCase().includes(originCode.toLowerCase()) || f.origin.city.toLowerCase().includes(originCode.toLowerCase());
    const matchDest = !destCode || f.destination.code.toLowerCase().includes(destCode.toLowerCase()) || f.destination.city.toLowerCase().includes(destCode.toLowerCase());
    return matchOrigin && matchDest;
  });
  renderFlightCards(currentFlights);
}

function openFlightBookingModal(flightId) {
  selectedFlight = FLIGHTS.find(f => f.id === flightId);
  if (!selectedFlight) return;

  const modal = document.getElementById('flight-booking-modal');
  if (!modal) return;

  selectedSeat = '14A';
  const price = selectedFlight.cabinClasses[selectedCabin] || selectedFlight.cabinClasses.economy;

  document.getElementById('modal-flight-airline').textContent = `${selectedFlight.airline} (${selectedFlight.flightNumber})`;
  document.getElementById('modal-flight-route').textContent = `${selectedFlight.origin.city} (${selectedFlight.origin.code}) ➔ ${selectedFlight.destination.city} (${selectedFlight.destination.code})`;
  document.getElementById('modal-flight-cabin').textContent = capitalize(selectedCabin) + ' Class';
  document.getElementById('modal-flight-price').textContent = store.formatPrice(price);

  renderSeatMap();
  modal.classList.add('active');
}

function renderSeatMap() {
  const container = document.getElementById('interactive-seat-map');
  if (!container) return;

  const rows = [10, 11, 12, 14, 15, 16];
  const occupiedSeats = ['10B', '11C', '12E', '14C', '15F', '16B'];

  container.innerHTML = `
    <div class="seat-legend">
      <div class="seat-legend-item"><span class="seat-sample available"></span> Available</div>
      <div class="seat-legend-item"><span class="seat-sample selected"></span> Selected (${selectedSeat})</div>
      <div class="seat-legend-item"><span class="seat-sample occupied"></span> Occupied</div>
    </div>
    <div class="seat-grid-cabin">
      ${rows.map(row => {
        const seatsLeft = ['A', 'B', 'C'].map(letter => {
          const seatId = `${row}${letter}`;
          const isOccupied = occupiedSeats.includes(seatId);
          const isSelected = seatId === selectedSeat;
          return `<button type="button" class="seat-btn ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}" data-seat="${seatId}" ${isOccupied ? 'disabled' : ''}>${seatId}</button>`;
        }).join('');

        const seatsRight = ['D', 'E', 'F'].map(letter => {
          const seatId = `${row}${letter}`;
          const isOccupied = occupiedSeats.includes(seatId);
          const isSelected = seatId === selectedSeat;
          return `<button type="button" class="seat-btn ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}" data-seat="${seatId}" ${isOccupied ? 'disabled' : ''}>${seatId}</button>`;
        }).join('');

        return `
          <div class="seat-row">
            <div style="display:flex; gap:6px;">${seatsLeft}</div>
            <div class="seat-aisle">${row}</div>
            <div style="display:flex; gap:6px;">${seatsRight}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.seat-btn:not(.occupied)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedSeat = e.currentTarget.dataset.seat;
      renderSeatMap();
      const seatDisplay = document.getElementById('selected-seat-badge');
      if (seatDisplay) seatDisplay.textContent = selectedSeat;
    });
  });
}

function setupFlightModal() {
  const modal = document.getElementById('flight-booking-modal');
  const closeBtn = document.getElementById('btn-close-flight-modal');
  const confirmBtn = document.getElementById('btn-confirm-flight-booking');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (!selectedFlight) return;

      const passengerNameInput = document.getElementById('flight-passenger-name');
      const passengerName = (passengerNameInput && passengerNameInput.value.trim()) || 'Dr. Eleanor Vance';
      const passportInput = document.getElementById('flight-passport-id');
      const passport = (passportInput && passportInput.value.trim()) || 'P' + Math.floor(10000000 + Math.random() * 90000000);
      const departureDate = document.getElementById('flight-date-input')?.value || '2026-10-15';

      const price = selectedFlight.cabinClasses[selectedCabin] || selectedFlight.cabinClasses.economy;

      const booking = store.addFlightBooking({
        airline: selectedFlight.airline,
        flightNumber: selectedFlight.flightNumber,
        origin: selectedFlight.origin,
        destination: selectedFlight.destination,
        departureTime: selectedFlight.departureTime,
        arrivalTime: selectedFlight.arrivalTime,
        duration: selectedFlight.duration,
        cabinClass: capitalize(selectedCabin),
        seatNumber: selectedSeat,
        passengerName,
        passport,
        departureDate,
        totalPrice: price,
        gate: 'B' + (Math.floor(Math.random() * 25) + 1),
        boardingTime: '45 mins prior'
      });

      modal.classList.remove('active');
      showBoardingPassModal(booking);

      window.showToast?.(`Flight booked with ${booking.airline}! PNR: ${booking.pnr}`, 'success');
    });
  }
}

export function showBoardingPassModal(booking) {
  const modal = document.getElementById('boarding-pass-modal');
  const container = document.getElementById('boarding-pass-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="boarding-pass-card">
      <div class="boarding-pass-header">
        <div style="display:flex; align-items:center; gap:10px;">
          <i class="fa-solid fa-plane" style="font-size:1.4rem;"></i>
          <span class="pass-airline">${booking.airline}</span>
        </div>
        <span class="pass-pnr-badge">PNR: ${booking.pnr}</span>
      </div>

      <div class="boarding-pass-body">
        <div class="pass-info-grid">
          <div>
            <div class="pass-field-label">Passenger</div>
            <div class="pass-field-val">${booking.passengerName}</div>
          </div>
          <div>
            <div class="pass-field-label">Flight</div>
            <div class="pass-field-val">${booking.flightNumber}</div>
          </div>
          <div>
            <div class="pass-field-label">Origin</div>
            <div class="pass-field-val">${booking.origin.code} (${booking.origin.city})</div>
          </div>
          <div>
            <div class="pass-field-label">Destination</div>
            <div class="pass-field-val">${booking.destination.code} (${booking.destination.city})</div>
          </div>
          <div>
            <div class="pass-field-label">Departure Date & Time</div>
            <div class="pass-field-val">${booking.departureDate} at ${booking.departureTime}</div>
          </div>
          <div>
            <div class="pass-field-label">Gate / Seat</div>
            <div class="pass-field-val" style="color:var(--primary);">${booking.gate} / ${booking.seatNumber}</div>
          </div>
          <div>
            <div class="pass-field-label">Class</div>
            <div class="pass-field-val">${booking.cabinClass}</div>
          </div>
          <div>
            <div class="pass-field-label">Total Fare</div>
            <div class="pass-field-val" style="color:var(--accent-emerald);">${store.formatPrice(booking.totalPrice)}</div>
          </div>
        </div>

        <div class="pass-qr-box">
          <div class="qr-code-placeholder">
            <svg viewBox="0 0 100 100">
              <path d="M10 10h30v30h-30zM60 10h30v30h-30zM10 60h30v30h-30z" fill="#0b0f19"/>
              <path d="M18 18h14v14h-14zM68 18h14v14h-14zM18 68h14v14h-14z" fill="#ffffff"/>
              <path d="M22 22h6v6h-6zM72 22h6v6h-6zM22 72h6v6h-6z" fill="#0b0f19"/>
              <path d="M50 20h5v15h-5zM45 45h20v5h-20zM70 55h20v5h-20zM60 70h15v20h-15z" fill="#0b0f19"/>
            </svg>
          </div>
          <span style="font-size:0.75rem; font-family:monospace; color:var(--text-muted);">E-TICKET CONFIRMED</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const closeBtn = document.getElementById('btn-close-pass-modal');
  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('active');
  }

  const printBtn = document.getElementById('btn-print-pass');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
