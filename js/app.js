/* ==========================================================================
   VOYAGECRAFT MAIN APPLICATION CONTROLLER
   Tab Routing, Global Currency & Theme Handlers, Search Engine & Toasts
   ========================================================================== */

import { store } from './store.js';
import { initFlightsView, searchFlights, renderFlightCards } from './flights.js';
import { initHotelsView, searchHotels, renderHotelCards } from './hotels.js';
import { initPlacesView, searchDestinations, initLeafletMap } from './places.js';
import { initPackagesView, renderPackageCards } from './packages.js';
import { initExpenditureView } from './expenditure.js';
import { initItineraryView } from './itinerary.js';
import { initAiAssistant } from './aiAssistant.js';
import { initI18n } from './i18n.js';
import { FLIGHTS, HOTELS, PACKAGES } from './data.js';

// Global Toast Manager
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: 'fa-circle-check',
    info: 'fa-circle-info',
    warning: 'fa-triangle-exclamation',
    error: 'fa-circle-xmark'
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-bell'}"></i>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme from store
  const currentTheme = store.getTheme();
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeToggleIcon(currentTheme);

  // Initialize Currency selector
  const currencySelect = document.getElementById('global-currency-select');
  if (currencySelect) {
    currencySelect.value = store.getCurrency();
    currencySelect.addEventListener('change', (e) => {
      store.setCurrency(e.target.value);
      window.showToast?.(`Currency updated to ${e.target.value}`, 'info');
      refreshAllViewsWithCurrency();
    });
  }

  // Theme Toggle Button
  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = store.getTheme();
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      store.setTheme(nextTheme);
      updateThemeToggleIcon(nextTheme);
      initLeafletMap(); // Re-center and update tile layer
      window.showToast?.(`Switched to ${nextTheme} mode`, 'info');
    });
  }

  // Initialize Modules
  initI18n();
  initFlightsView();
  initHotelsView();
  initPlacesView();
  initPackagesView();
  initExpenditureView();
  initItineraryView();
  initAiAssistant();

  // Setup Navigation Tabs & View Routing
  setupNavigation();

  // Setup Hero Search Tabs & Forms
  setupHeroSearch();

  // Setup Quick Tag Pills
  setupQuickTags();

  // Setup Trip Header Indicator
  setupTripIndicator();

  // Load rich demo trip if workspace is completely fresh
  const state = store.getState();
  if (state.activeTrip.bookedFlights.length === 0 && state.activeTrip.bookedHotels.length === 0) {
    store.loadDemoTrip();
  }
  updateTripIndicator();

  // Listen to store updates
  store.subscribe(() => {
    updateTripIndicator();
  });
});

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[data-view]');
  const views = document.querySelectorAll('.app-view');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetViewId = link.getAttribute('data-view');
      switchView(targetViewId);
    });
  });

  // Mobile menu button
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener('click', () => {
      const isVisible = navLinksContainer.style.display === 'flex';
      navLinksContainer.style.display = isVisible ? 'none' : 'flex';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.position = 'absolute';
      navLinksContainer.style.top = '72px';
      navLinksContainer.style.left = '0';
      navLinksContainer.style.width = '100%';
      navLinksContainer.style.background = 'var(--bg-glass-heavy)';
      navLinksContainer.style.padding = '20px';
      navLinksContainer.style.borderBottom = '1px solid var(--border-color)';
    });
  }
}

export function switchView(targetViewId) {
  const views = document.querySelectorAll('.app-view');
  const navLinks = document.querySelectorAll('.nav-link[data-view]');

  views.forEach(v => v.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));

  const targetView = document.getElementById(targetViewId);
  const targetLink = document.querySelector(`.nav-link[data-view="${targetViewId}"]`);

  if (targetView) targetView.classList.add('active');
  if (targetLink) targetLink.classList.add('active');

  // Trigger leaflet resize if switching to places view
  if (targetViewId === 'places-view') {
    setTimeout(() => {
      initLeafletMap();
    }, 150);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupHeroSearch() {
  const searchTabs = document.querySelectorAll('.search-tab-btn');
  const searchPanels = document.querySelectorAll('.search-form-panel');

  searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      searchTabs.forEach(t => t.classList.remove('active'));
      searchPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(tab.getAttribute('data-target'));
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Flight Hero Form
  const flightForm = document.getElementById('hero-flights-form');
  if (flightForm) {
    flightForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origin = document.getElementById('hero-flight-origin')?.value;
      const dest = document.getElementById('hero-flight-dest')?.value;
      switchView('flights-view');
      searchFlights(origin, dest);
    });
  }

  // Hotel Hero Form
  const hotelForm = document.getElementById('hero-hotels-form');
  if (hotelForm) {
    hotelForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = document.getElementById('hero-hotel-dest')?.value;
      switchView('hotels-view');
      searchHotels(dest);
    });
  }

  // Package Hero Form
  const pkgForm = document.getElementById('hero-packages-form');
  if (pkgForm) {
    pkgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      switchView('packages-view');
    });
  }

  // Places Hero Form
  const placesForm = document.getElementById('hero-places-form');
  if (placesForm) {
    placesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = document.getElementById('hero-places-search')?.value;
      switchView('places-view');
      searchDestinations(query);
    });
  }
}

function setupQuickTags() {
  document.querySelectorAll('.quick-tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tag = e.currentTarget.textContent.trim().replace(/^#/, '');
      switchView('places-view');
      searchDestinations(tag);
      window.showToast?.(`Filtering destinations matching "${tag}"`, 'info');
    });
  });
}

function setupTripIndicator() {
  const pillBtn = document.getElementById('btn-header-trip-pill');
  if (pillBtn) {
    pillBtn.addEventListener('click', () => {
      switchView('itinerary-view');
    });
  }
}

function updateTripIndicator() {
  const breakdown = store.getExpenditureBreakdown();
  const trip = store.getState().activeTrip;

  const totalBookingsCount = 
    (trip.bookedFlights?.length || 0) + 
    (trip.bookedHotels?.length || 0) + 
    (trip.bookedPackages?.length || 0) + 
    (trip.scheduledAttractions?.length || 0);

  const countBadge = document.getElementById('header-trip-count');
  const spentVal = document.getElementById('header-trip-spent');

  if (countBadge) countBadge.textContent = totalBookingsCount;
  if (spentVal) spentVal.textContent = store.formatPrice(breakdown.totalSpent);
}

function updateThemeToggleIcon(theme) {
  const icon = document.querySelector('#btn-theme-toggle i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
    icon.title = 'Switch to Light Mode';
  } else {
    icon.className = 'fa-solid fa-moon';
    icon.title = 'Switch to Dark Mode';
  }
}

function refreshAllViewsWithCurrency() {
  renderFlightCards(FLIGHTS);
  renderHotelCards(HOTELS);
  renderPackageCards(PACKAGES);
}
