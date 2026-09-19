# VoyageCraft — All-in-One Luxury Travel Planning Platform

**VoyageCraft** is a modern, all-in-one travel planning web application that seamlessly combines flight reservations with digital boarding passes, 5★ luxury hotel stays, interactive global maps, curated multi-day tour packages, real-time budget tracking with Chart.js analytics, 7-language localization, and an intelligent 24/7 AI travel concierge.

---

## ✨ Features

- ✈️ **Flight Bookings & Live Routes**: Search routes, filter by cabin class (Economy, Business, First Class), pick seats on an interactive cabin seat map, and generate downloadable digital boarding passes with QR codes & PNR.
- 🏨 **5★ Luxury Hotel Reservations**: Filter boutique villas, cliffside resorts, and 5-star sanctuaries with transparent pricing, star filters, and instant hotel voucher generation.
- 🗺️ **Interactive Discovery & Light/Dark Map**: Explore 22 global destinations with Leaflet vector maps, customizable light (Voyager) and dark styles, landmark highlights, and direct attraction scheduling.
- 🎒 **Curated Holiday Packages**: Multi-day signature expeditions (e.g., Kyoto Zen retreat, Swiss Alpine adventure, Dubai luxury escape) with day-by-day itineraries and 1-click booking synchronization.
- 📊 **Smart Budget Analytics & Expenditure Tracker**: Target budget manager, Chart.js doughnut analytics, category breakdowns, custom expense logger, and CSV report export.
- 📅 **Master Chronological Itinerary**: Unified timeline syncing flights, hotel stays, tours, and custom activities with a clean printable travel pass.
- 🤖 **VoyageAI Travel Concierge**: Floating AI chat assistant offering personalized travel advice, live budget health checks, destination tips, and quick-action shortcuts.
- 🌐 **Multi-Language (i18n) Engine**: Native support for 7 languages (English, Spanish, French, German, Japanese, Hindi, and Arabic with RTL text direction).
- 🌓 **Dynamic Theme Switcher**: Luxury dark twilight mode and crisp light mode.

---

## 🚀 Quick Start

No external runtime dependencies (Node.js/npm) required! The platform is built with vanilla HTML5, modern CSS3, and ES6 JavaScript modules.

### Option 1: Using Python's Built-in Server

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_URL>
cd travel-planner

# Start the local server
python -m http.server 8000
# or
python serve.py
```

Then open your browser and navigate to:
```
http://localhost:8000
```

---

## 📂 Project Structure

```
travel-planner/
├── index.html            # Main single-page application entry point
├── serve.py              # Lightweight development server script
├── .gitignore            # Git ignore file
├── css/
│   ├── variables.css     # Design tokens, color palettes, dark/light theme definitions
│   ├── style.css         # Typography, layout, hero banners, toasts
│   └── components.css    # Flight cards, hotel vouchers, map overlays, AI drawer
└── js/
    ├── app.js            # Main application router and event listeners
    ├── store.js          # Reactive state store with localStorage persistence
    ├── data.js           # 22 global destinations, 20 luxury hotels, 15 airline routes
    ├── flights.js        # Flight search, seat map, digital boarding pass
    ├── hotels.js         # Hotel directory, room tiers, reservation vouchers
    ├── places.js         # Leaflet interactive map, attraction scheduler
    ├── packages.js       # Curated multi-day holiday packages
    ├── expenditure.js    # Budget analytics, Chart.js charts, CSV export
    ├── itinerary.js      # Chronological timeline and printable pass
    ├── aiAssistant.js    # VoyageAI conversational travel assistant
    └── i18n.js           # 7-language localization & RTL engine
```

---

## 🛠️ Built With

- **HTML5 & CSS3** (Vanilla, CSS Grid, Flexbox, Custom Properties)
- **Modern ES6+ JavaScript** (Modules, Reactive Store, LocalStorage)
- **Leaflet.js & CartoDB** (Interactive Maps & Vector Tiles)
- **Chart.js** (Budget & Expenditure Doughnut Visualizations)
- **FontAwesome 6** (Modern Vector Icons)
- **Google Fonts** (Outfit & Plus Jakarta Sans)

---

## 📄 License

MIT License — Feel free to use and adapt this project for your personal and commercial travel applications!
