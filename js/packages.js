/* ==========================================================================
   VOYAGECRAFT PLANNING PACKAGES MODULE
   Curated Multi-Day Holiday Packages & One-Click Trip Generator
   ========================================================================== */

import { PACKAGES } from './data.js';
import { store } from './store.js';

let currentPackages = [...PACKAGES];
let selectedPackage = null;

export function initPackagesView() {
  renderPackageCards(currentPackages);
  setupPackageModal();
}

export function renderPackageCards(packages) {
  const container = document.getElementById('packages-list-container');
  if (!container) return;

  container.innerHTML = packages.map(pkg => {
    const formattedPrice = store.formatPrice(pkg.price);
    const formattedOriginal = store.formatPrice(pkg.originalPrice);

    return `
      <div class="package-card" data-pkg-id="${pkg.id}">
        <div class="pkg-thumb-wrapper">
          <img src="${pkg.image}" alt="${pkg.title}" class="pkg-thumb" loading="lazy" />
          <span class="pkg-duration-badge">
            <i class="fa-solid fa-calendar-days"></i> ${pkg.duration}
          </span>
        </div>

        <div class="pkg-content">
          <div style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 4px;">
            ★ ${pkg.rating} (${pkg.reviews} verified reviews)
          </div>
          <h3 class="pkg-title">${pkg.title}</h3>
          <p class="pkg-desc">${pkg.highlights.join(' • ')}</p>

          <div class="pkg-inclusions-row">
            ${pkg.inclusions.slice(0, 3).map(inc => `
              <span class="pkg-inc-chip">
                <i class="fa-solid fa-check"></i> ${inc}
              </span>
            `).join('')}
          </div>

          <div class="pkg-footer">
            <div>
              <div style="font-size: 0.75rem; text-decoration: line-through; color: var(--text-muted);">${formattedOriginal}</div>
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary); font-family: 'Outfit', sans-serif;">
                ${formattedPrice} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">/ person</span>
              </div>
            </div>
            <button class="btn-primary btn-view-package" data-pkg-id="${pkg.id}">
              <i class="fa-solid fa-eye"></i> View Itinerary
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.btn-view-package').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pkgId = e.currentTarget.dataset.pkgId;
      openPackageModal(pkgId);
    });
  });
}

function openPackageModal(pkgId) {
  selectedPackage = PACKAGES.find(p => p.id === pkgId);
  if (!selectedPackage) return;

  const modal = document.getElementById('package-detail-modal');
  if (!modal) return;

  document.getElementById('modal-pkg-title').textContent = selectedPackage.title;
  document.getElementById('modal-pkg-duration').textContent = selectedPackage.duration;
  document.getElementById('modal-pkg-price').textContent = store.formatPrice(selectedPackage.price);
  
  const heroImg = document.getElementById('modal-pkg-image');
  if (heroImg) heroImg.src = selectedPackage.image;

  // Render inclusions
  const incContainer = document.getElementById('modal-pkg-inclusions');
  if (incContainer) {
    incContainer.innerHTML = selectedPackage.inclusions.map(inc => `
      <span class="pkg-inc-chip" style="background: var(--bg-secondary);">
        <i class="fa-solid fa-circle-check"></i> ${inc}
      </span>
    `).join('');
  }

  // Render timeline
  const timelineContainer = document.getElementById('modal-pkg-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = selectedPackage.itinerary.map(day => `
      <div class="timeline-day-card">
        <div class="day-header">
          <span class="day-number-badge">DAY ${day.day}</span>
          <span class="day-title">${day.title}</span>
        </div>
        <p class="day-activities">${day.desc}</p>
      </div>
    `).join('');
  }

  modal.classList.add('active');
}

function setupPackageModal() {
  const modal = document.getElementById('package-detail-modal');
  const closeBtn = document.getElementById('btn-close-pkg-modal');
  const bookBtn = document.getElementById('btn-book-package-confirm');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      if (!selectedPackage) return;

      const guestsCount = Math.max(1, Number(document.getElementById('package-guests-input')?.value) || 2);
      const startDate = document.getElementById('package-start-date')?.value || '2026-10-15';
      const totalPrice = selectedPackage.price * guestsCount;

      // 1. Add Package Booking
      const booking = store.addPackageBooking({
        packageId: selectedPackage.id,
        packageTitle: selectedPackage.title,
        destination: selectedPackage.destination,
        duration: selectedPackage.duration,
        guests: guestsCount,
        startDate,
        totalPrice
      });

      // 2. Automatically populate multi-day itinerary into active trip
      selectedPackage.itinerary.forEach((dayItem) => {
        store.addCustomActivity({
          dayNumber: dayItem.day,
          time: 'All Day',
          title: `[${selectedPackage.destination}] ${dayItem.title}`,
          notes: dayItem.desc,
          category: 'package'
        });
      });

      modal.classList.remove('active');
      window.showToast?.(`Booked "${selectedPackage.title}"! All ${selectedPackage.itinerary.length} days added to your Master Itinerary.`, 'success');

      // Direct user to My Trip Itinerary view to see their populated schedule
      const tripNavTab = document.querySelector('.nav-link[data-view="itinerary-view"]');
      if (tripNavTab) tripNavTab.click();
    });
  }
}
