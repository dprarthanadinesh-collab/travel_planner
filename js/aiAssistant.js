/* ==========================================================================
   VOYAGECRAFT AI TRAVEL CONCIERGE (VoyageAI)
   Interactive Query Engine, Context-Aware Recommendations & In-Chat Actions
   ========================================================================== */

import { DESTINATIONS, FLIGHTS, HOTELS, PACKAGES } from './data.js';
import { store } from './store.js';

let chatHistory = [];
let isAiTyping = false;

export function initAiAssistant() {
  setupAiChatControls();
  renderWelcomeMessage();
}

function setupAiChatControls() {
  const toggleBtn = document.getElementById('ai-assistant-toggle-btn');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('ai-chat-minimize-btn');
  const clearBtn = document.getElementById('ai-chat-clear-btn');
  const chatForm = document.getElementById('ai-chat-form');
  const textInput = document.getElementById('ai-chat-input');

  if (toggleBtn && chatWindow) {
    toggleBtn.addEventListener('click', () => {
      const isActive = chatWindow.classList.contains('active');
      if (!isActive) {
        chatWindow.classList.add('active');
        if (textInput) textInput.focus();
      } else {
        chatWindow.classList.remove('active');
      }
    });
  }

  if (closeBtn && chatWindow) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const messagesContainer = document.getElementById('ai-chat-messages');
      if (messagesContainer) {
        messagesContainer.innerHTML = '';
        chatHistory = [];
        renderWelcomeMessage();
        window.showToast?.('AI conversation cleared', 'info');
      }
    });
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = textInput ? textInput.value.trim() : '';
      if (!query || isAiTyping) return;

      handleUserQuery(query);
      if (textInput) textInput.value = '';
    });
  }

  // Quick chips
  document.querySelectorAll('.ai-chip-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const promptText = e.currentTarget.dataset.prompt || e.currentTarget.textContent.trim();
      handleUserQuery(promptText);
    });
  });
}

function renderWelcomeMessage() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const welcomeHtml = `
    <div class="chat-bubble ai">
      <p>Hello! I am <strong>VoyageAI</strong>, your luxury travel planning concierge. ✈️🌍</p>
      <p style="margin-top: 6px;">
        I can recommend world destinations, find premier flights, book 5★ hotel stays, break down holiday packages, or give you personalized budget advice.
      </p>
      <p style="margin-top: 6px; font-size: 0.82rem; color: var(--text-muted);">
        Ask me anything or select a prompt below to get started:
      </p>
      <div class="chat-actions-container">
        <button class="chat-action-btn" onclick="window.sendAiPrompt('Suggest a 5-day luxury trip to Bali')">
          <i class="fa-solid fa-umbrella-beach"></i> 5-Day Bali Plan
        </button>
        <button class="chat-action-btn" onclick="window.sendAiPrompt('Find flights to Tokyo or Paris')">
          <i class="fa-solid fa-plane"></i> Search Flights
        </button>
        <button class="chat-action-btn" onclick="window.sendAiPrompt('How much budget do I have remaining?')">
          <i class="fa-solid fa-wallet"></i> Check My Budget
        </button>
        <button class="chat-action-btn" onclick="window.sendAiPrompt('Tell me about the Swiss Alps package')">
          <i class="fa-solid fa-mountain"></i> Swiss Alps Tour
        </button>
      </div>
    </div>
  `;

  container.innerHTML = welcomeHtml;
}

window.sendAiPrompt = function (promptText) {
  const chatWindow = document.getElementById('ai-chat-window');
  if (chatWindow && !chatWindow.classList.contains('active')) {
    chatWindow.classList.add('active');
  }
  handleUserQuery(promptText);
};

export function handleUserQuery(query) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  // 1. Append User Message
  appendMessage(query, 'user');
  chatHistory.push({ role: 'user', text: query });

  // 2. Show Typing Indicator
  showTypingIndicator();
  isAiTyping = true;

  // 3. Process AI Response with realistic micro-delay
  setTimeout(() => {
    hideTypingIndicator();
    isAiTyping = false;

    const responseObj = generateAiResponse(query);
    appendMessage(responseObj.text, 'ai', responseObj.actions);
    chatHistory.push({ role: 'ai', text: responseObj.text });
  }, 550);
}

function appendMessage(text, sender, actions = []) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;

  let contentHtml = formatMarkdown(text);

  if (actions && actions.length > 0) {
    contentHtml += `
      <div class="chat-actions-container">
        ${actions.map(act => `
          <button class="chat-action-btn" onclick="${act.handler}">
            <i class="fa-solid ${act.icon}"></i> ${act.label}
          </button>
        `).join('')}
      </div>
    `;
  }

  bubble.innerHTML = contentHtml;
  container.appendChild(bubble);

  // Auto-scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const indicator = document.createElement('div');
  indicator.id = 'ai-typing-dots';
  indicator.className = 'ai-typing-indicator';
  indicator.innerHTML = `
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('ai-typing-dots');
  if (indicator) indicator.remove();
}

/* ==========================================================================
   INTELLIGENT NATURAL LANGUAGE & CONTEXT PROCESSOR
   ========================================================================== */
function generateAiResponse(query) {
  const q = query.toLowerCase();
  const summary = store.getExpenditureBreakdown();
  const trip = store.getState().activeTrip;
  const currency = store.getCurrency();

  // 1. BUDGET & EXPENDITURE QUERIES
  if (q.includes('budget') || q.includes('spent') || q.includes('cost') || q.includes('remaining') || q.includes('money')) {
    const remainingFmt = store.formatPrice(summary.remaining);
    const spentFmt = store.formatPrice(summary.totalSpent);
    const targetFmt = store.formatPrice(summary.targetBudget);

    let statusRemark = '';
    if (summary.health === 'safe') {
      statusRemark = 'Your budget is in great shape with plenty of leeway for fine dining and excursions!';
    } else if (summary.health === 'warning') {
      statusRemark = 'You are getting close to 80% of your allocated budget—keep an eye on spontaneous shopping!';
    } else {
      statusRemark = 'Notice: you have surpassed your initial target budget. Consider updating your goal.';
    }

    return {
      text: `Here is your live **Trip Budget Summary**:\n\n` +
            `• **Target Budget**: ${targetFmt}\n` +
            `• **Total Spent**: ${spentFmt} (${summary.percentUsed}% utilized)\n` +
            `• **Remaining Balance**: ${remainingFmt}\n\n` +
            `${statusRemark}`,
      actions: [
        { label: 'Open Budget Tracker', icon: 'fa-chart-pie', handler: "window.switchView('expenditure-view')" },
        { label: 'Adjust Budget Goal', icon: 'fa-pen-to-square', handler: "document.getElementById('btn-edit-budget-target')?.click()" }
      ]
    };
  }

  // 2. FLIGHT QUERIES
  if (q.includes('flight') || q.includes('fly') || q.includes('airline') || q.includes('boarding pass') || q.includes('airport')) {
    // Specific destination mentioned?
    const matchedDest = DESTINATIONS.find(d => q.includes(d.name.toLowerCase()));
    
    if (matchedDest) {
      const relatedFlights = FLIGHTS.filter(f => 
        f.destination.city.toLowerCase().includes(matchedDest.name.toLowerCase()) ||
        f.destination.name.toLowerCase().includes(matchedDest.name.toLowerCase())
      );

      if (relatedFlights.length > 0) {
        const topFlight = relatedFlights[0];
        return {
          text: `I found premier flights to **${matchedDest.name}**!\n\n` +
                `• **${topFlight.airline}** (${topFlight.flightNumber})\n` +
                `• Route: ${topFlight.origin.code} ➔ ${topFlight.destination.code} (${topFlight.duration}, ${topFlight.stops})\n` +
                `• Economy from **${store.formatPrice(topFlight.cabinClasses.economy)}** | Business from **${store.formatPrice(topFlight.cabinClasses.business)}**\n\n` +
                `Would you like to choose your seats and generate your digital boarding pass?`,
          actions: [
            { label: `View Flights to ${matchedDest.name}`, icon: 'fa-plane', handler: `window.switchView('flights-view');` },
            { label: `Explore ${matchedDest.name} Landmarks`, icon: 'fa-location-dot', handler: `window.switchView('places-view');` }
          ]
        };
      }
    }

    return {
      text: `We partner with world-class airlines including **Emirates, Singapore Airlines, Qatar Airways, Air France, Lufthansa, and ANA**.\n\n` +
            `All routes feature interactive seat maps, meal choices, generous baggage allowances, and instant downloadable boarding passes with QR codes.`,
      actions: [
        { label: 'Browse All Flights', icon: 'fa-plane-departure', handler: "window.switchView('flights-view')" }
      ]
    };
  }

  // 3. HOTEL & RESORT QUERIES
  if (q.includes('hotel') || q.includes('stay') || q.includes('resort') || q.includes('villa') || q.includes('room')) {
    const matchedHotel = HOTELS.find(h => q.includes(h.name.toLowerCase()) || q.includes(h.city.toLowerCase()));
    if (matchedHotel) {
      return {
        text: `**${matchedHotel.name}** in ${matchedHotel.city} (${matchedHotel.stars}★ Luxury, rated ${matchedHotel.rating}/10):\n\n` +
              `• **Location**: ${matchedHotel.address}\n` +
              `• **Key Amenities**: ${matchedHotel.amenities.join(', ')}\n` +
              `• Starting at **${store.formatPrice(matchedHotel.pricePerNight)}** per night including taxes.\n\n` +
              `Reserve directly to receive an official reservation voucher.`,
        actions: [
          { label: `View Hotels in ${matchedHotel.city}`, icon: 'fa-hotel', handler: `window.switchView('hotels-view');` }
        ]
      };
    }

    return {
      text: `Our collection includes iconic 5-star properties such as **The Ritz-Carlton Paris**, **Aman Tokyo**, **Four Seasons Bali at Sayan**, and the cliffside **Grace Hotel Santorini**.\n\n` +
            `Every booking includes concierge check-in and complimentary spa/breakfast options.`,
      actions: [
        { label: 'Explore Luxury Stays', icon: 'fa-bed', handler: "window.switchView('hotels-view')" }
      ]
    };
  }

  // 4. PACKAGE QUERIES
  if (q.includes('package') || q.includes('tour') || q.includes('holiday') || q.includes('all-inclusive')) {
    const matchedPkg = PACKAGES.find(p => q.includes(p.title.toLowerCase()) || q.includes(p.destination.toLowerCase()));
    if (matchedPkg) {
      return {
        text: `**${matchedPkg.title}** (${matchedPkg.duration}):\n\n` +
              `• **Price**: ${store.formatPrice(matchedPkg.price)} / person (Save ~${store.formatPrice(matchedPkg.originalPrice - matchedPkg.price)})\n` +
              `• **Highlights**: ${matchedPkg.highlights.join(' • ')}\n` +
              `• **Inclusions**: ${matchedPkg.inclusions.join(', ')}\n\n` +
              `Booking this package will automatically add all ${matchedPkg.itinerary.length} daily schedules directly into your Master Itinerary!`,
        actions: [
          { label: 'View Package Itinerary', icon: 'fa-calendar-days', handler: `window.switchView('packages-view');` }
        ]
      };
    }

    return {
      text: `We offer 6 signature multi-day holiday packages:\n\n` +
            `1. **7-Day Swiss Alpine & Panoramic Express** (${store.formatPrice(2450)})\n` +
            `2. **5-Day Bali Spiritual & Beach Haven** (${store.formatPrice(1150)})\n` +
            `3. **8-Day Japan Cultural Golden Route** (${store.formatPrice(2850)})\n` +
            `4. **6-Day Santorini & Cycladic Odyssey** (${store.formatPrice(1890)})\n` +
            `5. **5-Day Dubai Ultra-Luxury & Desert** (${store.formatPrice(1980)})\n` +
            `6. **10-Day Grand European Highlights** (${store.formatPrice(3600)})\n\n` +
            `Each package provides end-to-end luxury flights, 5★ suites, and private guided excursions.`,
      actions: [
        { label: 'Browse Packages', icon: 'fa-suitcase-rolling', handler: "window.switchView('packages-view')" }
      ]
    };
  }

  // 5. DESTINATION / FAMOUS PLACES QUERIES
  for (const dest of DESTINATIONS) {
    if (q.includes(dest.name.toLowerCase()) || q.includes(dest.country.toLowerCase())) {
      const topAttractions = dest.attractions.map(a => `• **${a.name}** (${a.price === 0 ? 'Free' : store.formatPrice(a.price)}) - ${a.desc}`).join('\n');

      return {
        text: `**${dest.name}, ${dest.country}** — *"${dest.tagline}"*\n\n` +
              `• **Best Season**: ${dest.bestSeason}\n` +
              `• **Daily Budget Guide**: ~${store.formatPrice(dest.dailyBudgetEst)} / day\n\n` +
              `**Must-Visit Landmarks**:\n${topAttractions}\n\n` +
              `You can add any of these attractions to your Master Itinerary with a single click!`,
        actions: [
          { label: `View ${dest.name} on Map`, icon: 'fa-map-pin', handler: `window.switchView('places-view');` },
          { label: `Flights to ${dest.name}`, icon: 'fa-plane', handler: `window.switchView('flights-view');` }
        ]
      };
    }
  }

  // 6. ITINERARY / TIMELINE QUERIES
  if (q.includes('itinerary') || q.includes('plan') || q.includes('schedule') || q.includes('my trip')) {
    const flightCount = trip.bookedFlights?.length || 0;
    const hotelCount = trip.bookedHotels?.length || 0;
    const attractionCount = trip.scheduledAttractions?.length || 0;

    return {
      text: `Your current trip **"${trip.tripName}"** has:\n\n` +
            `• **${flightCount}** Flight Bookings\n` +
            `• **${hotelCount}** Hotel Reservations\n` +
            `• **${attractionCount}** Scheduled Attractions & Activities\n\n` +
            `All events are automatically sorted chronologically by day. You can also print a clean offline Travel Pass or add custom dinner and tour notes.`,
      actions: [
        { label: 'Go to Master Itinerary', icon: 'fa-map-location-dot', handler: "window.switchView('itinerary-view')" },
        { label: 'Print Travel Pass', icon: 'fa-print', handler: "window.print()" }
      ]
    };
  }

  // 7. DEFAULT HELPFUL SUGGESTION
  return {
    text: `I'd love to help you plan your next journey! Here are a few things you can ask me:\n\n` +
          `• *"What are the best attractions in Tokyo or Rome?"*\n` +
          `• *"Find direct flights to Paris under $800"*\n` +
          `• *"Recommend a luxury hotel with a cliffside pool"*\n` +
          `• *"How much budget do I have remaining?"*\n` +
          `• *"Show me the 7-day Swiss Alpine package"*`,
    actions: [
      { label: 'Explore Destinations', icon: 'fa-compass', handler: "window.switchView('places-view')" },
      { label: 'Search Flights', icon: 'fa-plane', handler: "window.switchView('flights-view')" }
    ]
  };
}

function formatMarkdown(str) {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n• (.*?)(?=\n|$)/g, '<br>• $1')
    .replace(/\n/g, '<br>');
}
