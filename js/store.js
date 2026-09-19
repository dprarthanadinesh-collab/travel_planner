/* ==========================================================================
   VOYAGECRAFT REACTIVE STATE STORE
   LocalStorage Persistence, Currency Engine & Data Synchronization
   ========================================================================== */

import { CURRENCY_RATES } from './data.js';

const STORAGE_KEY = 'voyagecraft_travel_state_v1';

const DEFAULT_STATE = {
  currency: 'USD',
  theme: 'dark',
  mapTheme: 'light',
  activeTrip: {
    tripName: 'Grand World Odyssey',
    targetBudget: 6000,
    startDate: '2026-10-15',
    endDate: '2026-10-24',
    bookedFlights: [],
    bookedHotels: [],
    bookedPackages: [],
    scheduledAttractions: [],
    customExpenses: [],
    customActivities: []
  }
};

class Store {
  constructor() {
    this.listeners = [];
    this.state = this.loadState();
  }

  loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_STATE, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Could not parse stored state, using default:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  getState() {
    return this.state;
  }

  /* Currency Converter & Formatter */
  setCurrency(currencyCode) {
    if (CURRENCY_RATES[currencyCode]) {
      this.state.currency = currencyCode;
      this.save();
    }
  }

  getCurrency() {
    return this.state.currency;
  }

  formatPrice(usdAmount) {
    const cur = CURRENCY_RATES[this.state.currency] || CURRENCY_RATES.USD;
    const converted = usdAmount * cur.rate;

    if (this.state.currency === 'JPY' || this.state.currency === 'INR') {
      return `${cur.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${cur.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }

  /* Theme Management */
  setTheme(themeName) {
    this.state.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    this.save();
  }

  getTheme() {
    return this.state.theme;
  }

  setMapTheme(themeName) {
    this.state.mapTheme = themeName;
    this.save();
  }

  getMapTheme() {
    return this.state.mapTheme || 'light';
  }

  /* Budget Management */
  setTargetBudget(amount) {
    this.state.activeTrip.targetBudget = Math.max(100, Number(amount));
    this.save();
  }

  /* Booking Actions */
  addFlightBooking(booking) {
    const id = 'bk-fl-' + Date.now();
    const pnr = 'VC' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const completeBooking = {
      id,
      pnr,
      bookedAt: new Date().toISOString(),
      ...booking
    };
    this.state.activeTrip.bookedFlights.push(completeBooking);

    // Sync expense
    this.state.activeTrip.customExpenses.push({
      id: 'exp-' + id,
      title: `Flight: ${booking.airline} (${booking.origin.code} ✈ ${booking.destination.code})`,
      category: 'flights',
      amount: booking.totalPrice,
      date: booking.departureDate || new Date().toISOString().split('T')[0],
      refId: id
    });

    this.save();
    return completeBooking;
  }

  addHotelBooking(booking) {
    const id = 'bk-ht-' + Date.now();
    const voucherId = 'HTL-' + Math.floor(100000 + Math.random() * 900000);
    const completeBooking = {
      id,
      voucherId,
      bookedAt: new Date().toISOString(),
      ...booking
    };
    this.state.activeTrip.bookedHotels.push(completeBooking);

    // Sync expense
    this.state.activeTrip.customExpenses.push({
      id: 'exp-' + id,
      title: `Hotel: ${booking.hotelName} (${booking.roomType})`,
      category: 'hotels',
      amount: booking.totalPrice,
      date: booking.checkIn || new Date().toISOString().split('T')[0],
      refId: id
    });

    this.save();
    return completeBooking;
  }

  addPackageBooking(booking) {
    const id = 'bk-pkg-' + Date.now();
    const confirmationId = 'PKG-' + Math.floor(100000 + Math.random() * 900000);
    const completeBooking = {
      id,
      confirmationId,
      bookedAt: new Date().toISOString(),
      ...booking
    };
    this.state.activeTrip.bookedPackages.push(completeBooking);

    // Sync expense
    this.state.activeTrip.customExpenses.push({
      id: 'exp-' + id,
      title: `Holiday Package: ${booking.packageTitle}`,
      category: 'packages',
      amount: booking.totalPrice,
      date: booking.startDate || new Date().toISOString().split('T')[0],
      refId: id
    });

    this.save();
    return completeBooking;
  }

  addAttraction(attraction, destinationName, scheduledDate = null) {
    const id = 'bk-att-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
    const date = scheduledDate || this.state.activeTrip.startDate || new Date().toISOString().split('T')[0];
    const item = {
      id,
      destinationName,
      ...attraction,
      scheduledDate: date
    };
    this.state.activeTrip.scheduledAttractions.push(item);

    if (attraction.price > 0) {
      this.state.activeTrip.customExpenses.push({
        id: 'exp-' + id,
        title: `Attraction: ${attraction.name} (${destinationName})`,
        category: 'activities',
        amount: attraction.price,
        date: date,
        refId: id
      });
    }

    this.save();
    return item;
  }

  removeAttraction(id) {
    this.state.activeTrip.scheduledAttractions = this.state.activeTrip.scheduledAttractions.filter(a => a.id !== id);
    this.state.activeTrip.customExpenses = this.state.activeTrip.customExpenses.filter(e => e.refId !== id);
    this.save();
  }

  /* Manual Expense Management */
  addCustomExpense(expense) {
    const id = 'exp-man-' + Date.now();
    this.state.activeTrip.customExpenses.push({
      id,
      title: expense.title,
      category: expense.category || 'misc',
      amount: Number(expense.amount),
      date: expense.date || new Date().toISOString().split('T')[0]
    });
    this.save();
  }

  removeExpense(id) {
    this.state.activeTrip.customExpenses = this.state.activeTrip.customExpenses.filter(e => e.id !== id);
    this.save();
  }

  /* Custom Itinerary Activity */
  addCustomActivity(activity) {
    const id = 'act-' + Date.now();
    this.state.activeTrip.customActivities.push({
      id,
      dayNumber: Number(activity.dayNumber) || 1,
      time: activity.time || '10:00 AM',
      title: activity.title,
      notes: activity.notes || '',
      category: activity.category || 'custom'
    });
    this.save();
  }

  removeCustomActivity(id) {
    this.state.activeTrip.customActivities = this.state.activeTrip.customActivities.filter(a => a.id !== id);
    this.save();
  }

  /* Budget & Expenditure Calculations */
  getExpenditureBreakdown() {
    const trip = this.state.activeTrip;
    const expenses = trip.customExpenses || [];

    const categories = {
      flights: 0,
      hotels: 0,
      packages: 0,
      activities: 0,
      dining: 0,
      transit: 0,
      misc: 0
    };

    let totalSpent = 0;
    for (const exp of expenses) {
      const cat = categories[exp.category] !== undefined ? exp.category : 'misc';
      categories[cat] += exp.amount;
      totalSpent += exp.amount;
    }

    const targetBudget = trip.targetBudget || 5000;
    const remaining = targetBudget - totalSpent;
    const percentUsed = Math.min(100, Math.round((totalSpent / targetBudget) * 100));

    let health = 'safe';
    if (totalSpent > targetBudget) {
      health = 'danger';
    } else if (totalSpent > targetBudget * 0.8) {
      health = 'warning';
    }

    return {
      targetBudget,
      totalSpent,
      remaining,
      percentUsed,
      health,
      categories,
      expenses
    };
  }

  /* Load Rich Pre-seeded Demo Trip */
  loadDemoTrip() {
    this.state.activeTrip = {
      tripName: 'European & Alpine Splendor',
      targetBudget: 5500,
      startDate: '2026-10-10',
      endDate: '2026-10-17',
      bookedFlights: [
        {
          id: 'bk-fl-demo-1',
          pnr: 'VC792A',
          bookedAt: '2026-09-18T10:00:00Z',
          airline: 'Air France',
          flightNumber: 'AF 007',
          origin: { code: 'JFK', city: 'New York' },
          destination: { code: 'CDG', city: 'Paris' },
          departureDate: '2026-10-10',
          departureTime: '18:30',
          arrivalTime: '07:45 +1d',
          duration: '7h 15m',
          cabinClass: 'Premium Economy',
          seatNumber: '14A',
          passengerName: 'Alexander Hayes',
          totalPrice: 1150
        }
      ],
      bookedHotels: [
        {
          id: 'bk-ht-demo-1',
          voucherId: 'HTL-847291',
          bookedAt: '2026-09-18T10:15:00Z',
          hotelName: 'The Ritz-Carlton Paris',
          city: 'Paris',
          checkIn: '2026-10-11',
          checkOut: '2026-10-14',
          nights: 3,
          roomType: 'Deluxe King Room',
          guests: 2,
          totalPrice: 2550
        }
      ],
      bookedPackages: [],
      scheduledAttractions: [
        {
          id: 'bk-att-demo-1',
          destinationName: 'Paris',
          name: 'Louvre Museum Priority Access',
          price: 24,
          time: '02:00 PM',
          scheduledDate: '2026-10-12',
          duration: '4 hours'
        },
        {
          id: 'bk-att-demo-2',
          destinationName: 'Paris',
          name: 'Seine River Sunset Champagne Cruise',
          price: 45,
          time: '07:30 PM',
          scheduledDate: '2026-10-13',
          duration: '1.5 hours'
        }
      ],
      customExpenses: [
        {
          id: 'exp-fl-1',
          title: 'Flight: Air France (JFK ✈ CDG)',
          category: 'flights',
          amount: 1150,
          date: '2026-10-10'
        },
        {
          id: 'exp-ht-1',
          title: 'Hotel: The Ritz-Carlton Paris (3 Nights)',
          category: 'hotels',
          amount: 2550,
          date: '2026-10-11'
        },
        {
          id: 'exp-att-1',
          title: 'Attraction: Louvre Museum Priority Access',
          category: 'activities',
          amount: 24,
          date: '2026-10-12'
        },
        {
          id: 'exp-att-2',
          title: 'Attraction: Seine River Sunset Champagne Cruise',
          category: 'activities',
          amount: 45,
          date: '2026-10-13'
        },
        {
          id: 'exp-man-1',
          title: 'Fine Dining at Le Cinq',
          category: 'dining',
          amount: 320,
          date: '2026-10-12'
        },
        {
          id: 'exp-man-2',
          title: 'First-Class TGV High-Speed Rail Ticket',
          category: 'transit',
          amount: 180,
          date: '2026-10-14'
        }
      ],
      customActivities: [
        {
          id: 'act-demo-1',
          dayNumber: 2,
          time: '11:00 AM',
          title: 'Croissants & Café au Lait at Café de Flore',
          notes: 'Classic Saint-Germain-des-Prés breakfast experience',
          category: 'dining'
        }
      ]
    };
    this.save();
  }

  clearTrip() {
    this.state.activeTrip = {
      tripName: 'My New Journey',
      targetBudget: 4000,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      bookedFlights: [],
      bookedHotels: [],
      bookedPackages: [],
      scheduledAttractions: [],
      customExpenses: [],
      customActivities: []
    };
    this.save();
  }
}

export const store = new Store();
