(function () {
  'use strict';

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('menu-open', isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
        document.body.classList.remove('menu-open');
      });
    });
  }

  const experiences = {
    buggies: {
      label: 'Tours & Excursions · Land',
      title: 'Buggies & ATV Adventure',
      lead: 'Ride through Macao’s muddy trails by ATV or buggy, taste organic Dominican coffee, cacao, and mamajuana, swim inside a natural underground Taíno freshwater cave, and finish with time to relax and take photos at beautiful Macao Beach.',
      copy: [
        'Get ready for approximately 3 hours of adventure, culture, and unforgettable scenery in the Dominican countryside.',
        'Your experience begins with round-trip transportation from your hotel to the ranch, where you’ll get ready for the adventure and head out on your selected ATV or buggy.',
        'Start the adventure by riding through muddy off-road trails and tropical countryside before making your first stop at a traditional Dominican ranch.',
        'At the ranch, you’ll have the opportunity to taste some of the island’s most famous local products, including organic Dominican coffee, cacao, and mamajuana, while getting a glimpse of local culture and traditions.',
        'Then it’s back on the ATV or buggy for more off-road riding through the Macao countryside until you reach one of the highlights of the tour: a natural underground Taíno freshwater cave, or cenote.',
        'Take a break from the ride and cool off with a refreshing swim in the cave’s clear natural waters, a unique experience you won’t find at a typical resort.',
        'After your cave stop, jump back on your ATV or buggy and continue toward Macao Beach, one of Punta Cana’s most beautiful and famous beaches. Here you’ll have time to relax by the ocean, take photos, enjoy the scenery, or purchase a drink or something to eat before heading back. Food and drinks at the beach are not included.',
        'With hotel transportation, Dominican culture, off-road adventure, a cave swim, and beach time all in one excursion, this is the perfect way to experience a more adventurous and authentic side of Punta Cana.'
      ],
      includedTitle: 'What’s Included',
      list: ['Round-trip transportation', 'ATV or buggy vehicle and safety helmet', 'Organic mamajuana, coffee, cacao, chocolate, and natural tea tasting', 'Professional tour guide and safety briefing', 'Taíno freshwater cave swimming', 'Time to relax and take photos at Macao Beach', 'Professional pictures available for purchase'],
      note: 'Food and drinks at Macao Beach are not included. Final timing, vehicle selection, and availability are confirmed with your quote.',
      service: 'buggies-atv',
      bookingTimes: ['8:30 AM', '11:30 AM', '2:30 PM'],
      gallery: [
        ['public/images/atv.jpeg', 'ATV riders on an off-road route in Punta Cana', 'ATV action on the Macao route.'],
        ['public/images/atv1.jpeg', 'Off-road buggy moving through a muddy trail', 'Buggy action through the trail.'],
        ['public/images/atv2.jpeg', 'Riders navigating a Punta Cana off-road route', 'Time on the off-road route.'],
        ['public/images/atv3.jpeg', 'Dominican coffee and cacao at an excursion stop', 'Dominican coffee and cacao stop.'],
        ['public/images/atv4.jpeg', 'Buggies traveling through a muddy off-road section', 'Muddy terrain is part of the experience.'],
        ['public/images/atv5.webp', 'Aerial view of the Punta Cana coast', 'The Punta Cana coast near the Macao experience.'],
        ['public/images/atv6.jpeg', 'Freshwater cave stop on the excursion', 'Freshwater cave stop.'],
        ['public/images/atv7.jpeg', 'Off-road excursion near Macao Beach', 'A route that finishes near the beach.'],
        ['public/images/ATV8.jpg', 'Guests on an off-road adventure in Punta Cana', 'An active day outside the resort.'],
        ['public/images/ATV9.jpg', 'ATV adventure in Punta Cana', 'ATV adventure in Punta Cana.'],
        ['public/images/ATV10.jpg', 'Freshwater cave stop on an off-road adventure', 'A break at the freshwater cave.'],
        ['public/images/ATV11.jpg', 'Guests at the beach after an off-road adventure', 'Time to take in the coast after the route.']
      ]
    },
    partyboat: {
      label: 'Tours & Excursions · On the water',
      title: 'Hip-Hop Party Boat (Adults Only)',
      lead: 'Catamaran party off the Punta Cana coast. Featuring a live DJ spinning Hip-Hop, R&B, Dancehall, and Afrobeats, and a natural pool stop where multiple catamarans tie together into a massive floating hangout.',
      copy: [
        'Head out onto the water on an adults-only catamaran cruise. A live DJ keeps the soundtrack locked on Hip-Hop, R&B, Dancehall, and Afrobeats from the moment you board. Grab some complimentary rum punch, fresh fruit, and snacks on deck, then drop anchor at a shallow natural pool. Once there, multiple boats link up together, letting you hop across, mix with other crews, and keep the energy moving across the whole fleet.'
      ],
      includedTitle: 'What’s Included',
      list: ['Round Trip Transportation', 'Snacks & Fresh Fruits', 'Alcoholic Beverages', 'Bottled Water', 'Soda/Pop', 'Snorkeling Gear', 'Live Hip-Hop, R&B, Dancehall, and Afrobeats DJ Set', 'Animation Dance Team'],
      note: 'Adults only. Availability, route, and onboard arrangements are confirmed with your quote.',
      service: 'hip-hop-party-boat',
      bookingTimes: ['2:30 PM'],
      gallery: [
        ['public/images/partyboat1.jpg', 'Guests gathered on a party boat in Punta Cana', 'Music and a social day on the water.'],
        ['public/images/partyboat2.jpg', 'Party boat guests enjoying their time onboard', 'Bring your group together onboard.'],
        ['public/images/partyboat3.jpg', 'Guests enjoying music and clear water from a party boat', 'Music, time in the water, and a natural-pool link-up.'],
        ['public/images/partyboat4.jpg', 'Guests dancing onboard a party boat', 'Live music sets the pace for the day.']
      ]
    },
    'private-yacht': {
      label: 'Tours & Excursions · Private charter',
      title: 'Private Boats & Yacht Experiences',
      lead: 'Private boat. DJ onboard. Drinks, clear water, and sunset views.',
      copy: [
        'Head out along the Punta Cana coast with your own group and a DJ onboard. Enjoy snacks, fresh fruit, and drinks between stops in crystal-clear water, with time to swim, relax, and enjoy the music.',
        'Plan a celebration on the water, a relaxed cruise with friends, or a sunset experience. Share your date, group size, and preferences to explore suitable boats and yacht options.'
      ],
      list: ['A private boat experience for your group', 'DJ onboard', 'Snacks and fresh fruit', 'Drinks onboard', 'Stops in crystal-clear water for swimming and relaxing', 'Sunset experiences available'],
      note: 'Vessel, capacity, route, duration, onboard arrangements, beverage selection, and sunset timing are confirmed with your quote. Routes and water stops are subject to conditions.',
      service: 'private-yacht',
      gallery: [
        ['public/images/PrivateYath.avif', 'Private yacht on clear water in Punta Cana', 'Private boat and yacht experience.']
      ]
    },
    jetski: {
      label: 'Tours & Excursions · On the water',
      title: 'Jet Ski Experience',
      lead: 'Get out on the water in Boca Chica and add some speed to your day.',
      copy: [
        'Choose a Jet Ski experience when you want an active day on the water in Boca Chica.',
        'Share your date, group size, and preferences so THF can help you explore a suitable arrangement.'
      ],
      list: ['An active Boca Chica water experience', 'Requested around your preferred date and group'],
      note: 'Selected duration, water area, availability, and operating requirements are confirmed with your quote. Water activities are subject to conditions.',
      service: 'jet-ski',
      gallery: [
        ['public/images/jetski.jpg', 'Two riders on a Jet Ski in clear water', 'Get out on the water and add some speed.'],
        ['public/images/jetski1.avif', 'Jet Ski experience in Boca Chica', 'Jet Ski experience in Boca Chica.']
      ]
    },
    saona: {
      label: 'Tours & Excursions · Island day',
      title: 'Isla Saona Escape',
      lead: 'A full-day Saona Island escape featuring speedboat rides, a natural pool stop with sea stars, island downtime, an open bar, lunch, and a music-filled catamaran return.',
      copy: [
        'Leave the logistics behind and head straight to the coast. We take care of hotel pickups across Bávaro, Punta Cana, Fruiza, Macao, and Ubero Alto, getting you straight to the water. Kick off the trip on a speedboat out to a shallow natural pool to see sea stars with a drink in hand. From there, land on Saona Island for open beach time, an included lunch, and an open bar. Wrap up the day cruising back on a catamaran with cold drinks and music keeping the vibe alive all the way back.'
      ],
      includedTitle: 'What’s Included',
      list: ['Round-trip transportation', 'Snacks', 'Buffet lunch', 'Alcoholic beverages'],
      note: 'Selected route, pickup timing, and day-of arrangements are confirmed with your quote. Water stops are subject to conditions.',
      service: 'isla-saona',
      gallery: [
        ['public/images/Isla Saona.jpg', 'Palm-lined beach and clear water on Isla Saona', 'Palm-lined beaches and clear water on Isla Saona.'],
        ['public/images/Isla Saona2.jpg', 'Wide turquoise shoreline on Isla Saona', 'A wide beach and turquoise water.'],
        ['public/images/Isla Saona3.jpg', 'Dominican-style lunch served on Isla Saona', 'Dominican-style lunch.'],
        ['public/images/Isla Saona4.jpg', 'Palm-framed beach on Isla Saona', 'Palm-lined beach time.'],
        ['public/images/Isla Saona5.jpg', 'Visitors walking along the beach on Isla Saona', 'Time to enjoy the shore.'],
        ['public/images/Isla Saona6.jpg', 'Beach loungers on Isla Saona', 'A quieter beach view.'],
        ['public/images/Isla Saona7.jpg', 'Palm grove on Isla Saona', 'Island scenery between stops.'],
        ['public/images/Isla Saona8.jpg', 'Boat on clear turquoise water near Isla Saona', 'Clear water around the island.']
      ]
    },
    'thf-boat-party': {
      title: 'THF Boat Party with DJ Griggs',
      lead: 'Houston energy meets the Punta Cana coast. Join THF on November 14 for an adults-only boat party across two private yachts, with special guest DJ Griggs, drinks, and a day on the water.',
      copy: [
        'On November 14, THF takes the party offshore. Special guest DJ Griggs is coming from Houston to Punta Cana to bring the soundtrack to an exclusive celebration across two private yachts.',
        'Bring your crew, step aboard, and settle into a day of ocean views, music, and good company. Expect Hip-Hop, R&B, Dancehall, and Afrobeats, with an animation dance team keeping the energy moving and cold drinks ready between tracks.',
        'Your day includes the essentials of our regular party boat experience: round-trip transportation, snacks and fresh fruit, alcoholic beverages, bottled water, and soda. Two private yachts give this THF event its own setting—a shared celebration out on the Punta Cana coast.'
      ],
      includedTitle: 'What’s Included',
      list: ['Round-trip transportation', 'Snacks and fresh fruits', 'Alcoholic beverages', 'Bottled water', 'Soda/Pop', 'Live Hip-Hop, R&B, Dancehall, and Afrobeats DJ set with special guest DJ Griggs', 'Animation dance team'],
      note: 'Adults only. November 14, 2026. Departure time, pickup arrangements, and availability are confirmed with your inquiry.',
      service: 'thf-boat-party',
      bookingDate: '2026-11-14',
      gallery: [
        ['public/images/PrivateYath.avif', 'Private yacht on clear water', 'Private yacht experience imagery.'],
        ['public/images/partyboat3.jpg', 'Party boat guests enjoying music and clear water', 'A taste of the THF party boat atmosphere.']
      ]
    },
    nightlife: {
      label: 'Nightlife & Private Events',
      title: 'Premium Nightlife in Punta Cana',
      lead: 'Explore top-club options, VIP sections, and private-event planning for your group.',
      copy: ['Start with the atmosphere, preferred date, group size, and music you want. THF can help you explore appropriate venue options during your stay.'],
      list: ['Empire Lounge Nightclub', 'Infinity Bar Punta Cana Nightclub', 'Movie Disco Club (Open until Dawn)', 'Drinkpoint Outdoor NightClub', 'Infinity Stripclub', 'VIP and private-event options'],
      note: 'Reservations, access, VIP arrangements, and event options are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/Nightlife.png', 'Nightlife scene in Punta Cana', 'Punta Cana after dark.'],
        ['public/images/nightlife_Empire_Club.jpg', 'Empire Lounge Nightclub nightlife scene', 'Empire Lounge Nightclub.'],
        ['public/images/nightlife_Empire_Club2.jpg', 'Empire Lounge Nightclub interior', 'Empire Lounge Nightclub after dark.'],
        ['public/images/nightlife_Empire_Club3.jpg', 'Empire Lounge Nightclub venue scene', 'Empire Lounge Nightclub venue scene.'],
        ['public/images/Nightlife_Infinity_Club.webp', 'Infinity Bar Punta Cana Nightclub nightlife scene', 'Infinity Bar Punta Cana Nightclub.'],
        ['public/images/nightlife_Infinity_Club_menu.jpg', 'Infinity Bar Punta Cana Nightclub menu', 'Infinity Bar Punta Cana Nightclub menu.'],
        ['public/images/nightlife_MOVIE_Club.jpg', 'Movie Disco Club nightlife scene', 'Movie Disco Club (Open until Dawn).'],
        ['public/images/nightlife_MOVIE_Club2.jpg', 'Movie Disco Club interior', 'Movie Disco Club after dark.'],
        ['public/images/Nightlife_drinkpoint.webp', 'Drinkpoint Outdoor NightClub nightlife scene', 'Drinkpoint Outdoor NightClub.'],
        ['public/images/nightlife_Drinkpoint_Club2.jpg', 'Drinkpoint Outdoor NightClub venue scene', 'Drinkpoint Outdoor NightClub after dark.'],
        ['public/images/Nightlife_Infinity_Stripclub.webp', 'Infinity Stripclub interior', 'Infinity Stripclub.'],
        ['public/images/Nightlife_Infinity_Stripclub2.webp', 'Infinity Stripclub nightlife scene', 'Infinity Stripclub after dark.'],
        ['public/images/Nightlife_Infinity_Stripclub3.webp', 'Infinity Stripclub stage scene', 'Infinity Stripclub venue scene.']
      ]
    },
    'venue-empire': {
      label: 'Nightlife · Venue option',
      title: 'Empire Lounge Nightclub',
      lead: 'Trendy newest club in Punta Cana where DJs from Miami, New York and Dominican Republic spin the best beats of Hip Hop, Reggae, Soca and more.',
      copy: ['VIP seating with bottle service. Located only a few steps from DrinkPoint.'],
      list: ['Hip Hop, Reggae, Soca, and more', 'VIP seating with bottle service', 'Club reservation request'],
      note: 'Reservations, access, VIP arrangements, and venue options are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/nightlife_Empire_Club.jpg', 'Empire Lounge Nightclub nightlife scene', 'Empire Lounge Nightclub.'],
        ['public/images/nightlife_Empire_Club2.jpg', 'Empire Lounge Nightclub interior', 'Empire Lounge Nightclub after dark.'],
        ['public/images/nightlife_Empire_Club3.jpg', 'Empire Lounge Nightclub venue scene', 'Empire Lounge Nightclub venue scene.']
      ]
    },
    'venue-infinity': {
      label: 'Nightlife · Venue option',
      title: 'Infinity Bar Punta Cana Nightclub',
      lead: 'Explore Infinity Bar Punta Cana Nightclub as a nightlife option for your stay.',
      copy: ['Share your preferred date, group size, and music preferences to explore reservation or VIP-section options at Infinity Bar Punta Cana Nightclub.'],
      list: ['Club reservation request', 'VIP-section inquiry', 'Group-night planning'],
      note: 'Reservations, access, VIP arrangements, and venue options are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/Nightlife_Infinity_Club.webp', 'Infinity Bar Punta Cana Nightclub nightlife scene', 'Infinity Bar Punta Cana Nightclub.'],
        ['public/images/nightlife_Infinity_Club_menu.jpg', 'Infinity Bar Punta Cana Nightclub menu', 'Infinity Bar Punta Cana Nightclub menu.']
      ]
    },
    'venue-movie': {
      label: 'Nightlife · Venue option',
      title: 'Movie Disco Club (Open until Dawn)',
      lead: 'Explore Movie Disco Club as a nightlife option for your stay.',
      copy: ['Share your preferred date, group size, and music preferences to explore reservation or VIP-section options at Movie Disco Club.'],
      list: ['Club reservation request', 'VIP-section inquiry', 'Group-night planning'],
      note: 'Reservations, access, VIP arrangements, and venue options are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/nightlife_MOVIE_Club.jpg', 'Movie Disco Club nightlife scene', 'Movie Disco Club (Open until Dawn).'],
        ['public/images/nightlife_MOVIE_Club2.jpg', 'Movie Disco Club interior', 'Movie Disco Club after dark.']
      ]
    },
    'venue-drinkpoint': {
      label: 'Nightlife · Venue option',
      title: 'Drinkpoint Outdoor NightClub',
      lead: 'Explore Drinkpoint Outdoor NightClub as a nightlife option for your stay.',
      copy: ['Share your preferred date, group size, and music preferences to explore available arrangements for your group.'],
      list: ['Club reservation request', 'VIP-section inquiry', 'Group-night planning'],
      note: 'Reservations, access, VIP arrangements, and venue options are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/Nightlife_drinkpoint.webp', 'Drinkpoint Outdoor NightClub nightlife scene', 'Drinkpoint Outdoor NightClub.'],
        ['public/images/nightlife_Drinkpoint_Club2.jpg', 'Drinkpoint Outdoor NightClub venue scene', 'Drinkpoint Outdoor NightClub after dark.']
      ]
    },
    'venue-infinity-stripclub': {
      label: 'Nightlife · Adult venue option',
      title: 'Infinity Stripclub',
      lead: 'Explore Infinity Stripclub as a separate adult-nightlife option for your stay.',
      copy: ['Share your preferred date and group size to explore available arrangements. This is a separate venue option from Infinity Bar Punta Cana Nightclub.'],
      list: ['Separate adult-nightlife venue option', 'Reservation inquiry', 'Group-night planning'],
      note: 'Access and venue arrangements are subject to availability and venue terms.',
      service: 'club-reservations',
      gallery: [
        ['public/images/Nightlife_Infinity_Stripclub.webp', 'Infinity Stripclub interior', 'Infinity Stripclub.'],
        ['public/images/Nightlife_Infinity_Stripclub2.webp', 'Infinity Stripclub nightlife scene', 'Infinity Stripclub after dark.'],
        ['public/images/Nightlife_Infinity_Stripclub3.webp', 'Infinity Stripclub stage scene', 'Infinity Stripclub venue scene.']
      ]
    },
    security: {
      label: 'Private Security · Shared service',
      title: 'Private Security',
      lead: 'Request discreet security support for your evening, event, or private transport plan.',
      copy: [
        'Private Security is available to inquire about under Nightlife and alongside Transport. It is arranged separately and is not included with a transfer.',
        'Start with general plans only. Sensitive routes or protection details are not required for an initial inquiry.'
      ],
      list: ['Evening or event support', 'Available to request alongside private transport', 'Discreet, separately confirmed arrangements'],
      note: 'Security arrangements are confirmed separately and are not included in transportation.',
      service: 'private-security',
      gallery: [
        ['public/images/security_protection.png', 'Private security professional near a vehicle', 'Discreet security support, separately arranged.']
      ]
    },
    transport: {
      label: 'Transport · Punta Cana',
      title: 'Transport',
      lead: 'Airport pickups, hotel transfers, private rides for nights out, and custom journeys around Punta Cana.',
      copy: ['Share your pickup, destination, date, and group size to request an arrangement that fits your plans. Private security can be explored separately when it is relevant to your evening or event.'],
      list: ['Airport pickups', 'Hotel transfers', 'Private rides for nights out', 'Custom journeys'],
      note: 'Vehicle, route, timing, and selected arrangements are confirmed with your quote. An inquiry is not a confirmed reservation.',
      service: 'airport-pickup',
      gallery: [
        ['public/images/transport2.png', 'Private vehicle arriving at a Punta Cana resort setting', 'Airport-arrival arrangement.']
      ]
    }
  };

  const galleriesByExperience = {};
  const directBookingKeys = ['buggies', 'partyboat', 'saona', 'thf-boat-party'];
  // Connect a provider-backed shared cart here, not separate product checkout links.
  // The server must validate all product IDs, availability and prices before payment.
  ['airport-pickup', 'hotel-transfer', 'night-out-ride', 'custom-journey'].forEach(function (key, index) {
    experiences[key] = Object.assign({}, experiences.transport, { title: ['Airport Pickup', 'Hotel Transfer', 'Night-out Transport', 'Custom Journey'][index], service: key });
  });
  experiences['private-events'] = {
    label: 'Nightlife · Custom arrangements',
    title: 'Private Celebration / Custom Event',
    lead: 'Plan a birthday, group gathering, or special occasion around your preferred setting and atmosphere.',
    copy: ['Tell THF what you are celebrating, your preferred date and group size, and the venue or atmosphere you have in mind. We will explore available options and confirm the arrangements and pricing with you.'],
    list: ['Custom celebration planning', 'Venue and atmosphere requests', 'VIP or private-space options subject to availability'],
    note: 'This is a custom-event inquiry. The November 14 THF Boat Party is a separate online activity.',
    service: 'private-events',
    gallery: [['public/images/Nightlife.png', 'Punta Cana nightlife scene', 'Plan a celebration with THF.']]
  };
  const tripStorageKey = 'thf-trip-builder-v1';

  function readTrip() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(tripStorageKey) || '[]');
      return Array.isArray(saved) ? saved.filter(function (item) { return item && experiences[item.key]; }) : [];
    } catch (error) {
      return [];
    }
  }

  function saveTrip(items) {
    try { window.localStorage.setItem(tripStorageKey, JSON.stringify(items)); } catch (error) { /* Local storage may be unavailable. */ }
  }

  function renderTripTray() {
    const trip = readTrip();
    let tray = document.getElementById('thf-trip-tray');
    if (!trip.length || document.querySelector('[data-trip-summary]')) {
      if (tray) tray.remove();
      return;
    }
    if (!tray) {
      tray = document.createElement('aside');
      tray.id = 'thf-trip-tray';
      tray.className = 'trip-tray';
      tray.setAttribute('aria-label', 'Your selected experiences');
      document.body.appendChild(tray);
    }
    tray.innerHTML = '<a class="trip-tray__link" href="trip.html"><span>View My Trip <span aria-hidden="true">→</span></span><strong>' + trip.length + '</strong></a>';
  }

  function updateTripButtons() {
    const trip = readTrip();
    document.querySelectorAll('[data-trip-destination]').forEach(function (link) {
      link.textContent = trip.length ? 'View My Trip · ' + trip.length + (trip.length === 1 ? ' experience' : ' experiences') : 'Build My Trip';
    });
    document.querySelectorAll('.nav-trip').forEach(function (link) {
      link.textContent = trip.length ? 'My Trip (' + trip.length + ')' : 'My Trip';
    });
    document.querySelectorAll('[data-trip-experience]').forEach(function (button) {
      const added = trip.some(function (item) { return item.key === button.dataset.tripExperience; });
      button.classList.toggle('is-added', added);
      button.textContent = added ? (button.dataset.addExperience === 'private-events' ? 'Celebration added ✓' : 'Added to My Trip ✓') : (button.dataset.addExperience === 'private-events' ? 'Add celebration to My Trip' : 'Add to My Trip');
      button.setAttribute('aria-pressed', String(added));
    });
    document.querySelectorAll('[data-trip-remove]').forEach(function (button) {
      button.hidden = !trip.some(function (item) { return item.key === button.dataset.tripRemove; });
    });
  }

  function removeFromTrip(key) {
    saveTrip(readTrip().filter(function (item) { return item.key !== key; }));
    renderTripTray();
    updateTripButtons();
    renderTripPage();
  }

  function addToTrip(key, options) {
    const trip = readTrip();
    const existing = trip.find(function (item) { return item.key === key; });
    if (existing) {
      Object.keys(options || {}).forEach(function (name) { if (options[name]) existing[name] = options[name]; });
    } else {
      trip.push(Object.assign({ key: key }, options || {}));
    }
    saveTrip(trip);
    renderTripTray();
    updateTripButtons();
  }

  function createTripButton(key, optionsGetter) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button trip-add-button';
    button.dataset.tripExperience = key;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', function () {
      addToTrip(key, optionsGetter ? optionsGetter() : {});
    });
    return button;
  }

  function addTripAction(trigger, key) {
    const addButton = createTripButton(key);
    const parent = trigger.parentElement;
    if (parent.classList.contains('experience-card__actions') || parent.classList.contains('inline-experience-actions')) {
      parent.appendChild(addButton);
    } else if (parent.tagName === 'P') {
      const actions = document.createElement('div');
      actions.className = 'inline-experience-actions';
      actions.style.marginTop = parent.style.marginTop || '';
      parent.replaceWith(actions);
      actions.append(trigger, addButton);
    } else {
      const actions = document.createElement('div');
      actions.className = 'inline-experience-actions';
      trigger.insertAdjacentElement('beforebegin', actions);
      actions.append(trigger, addButton);
    }
    return addButton;
  }

  function detailsHost(gallery) {
    const card = gallery.closest('.service-card, .experience-card, .nightlife-venue');
    if (card) return card.querySelector('.service-card__body, .experience-card__body, .nightlife-venue > div') || card;
    const grid = gallery.closest('.detail-grid');
    if (grid) return grid.querySelector('.detail-copy') || grid;
    const feature = gallery.closest('.private-feature');
    if (feature) return feature.querySelector('.private-feature__content') || feature;
    return gallery.parentElement;
  }

  function findExperienceKey(experience) {
    return Object.keys(experiences).find(function (key) { return experiences[key] === experience; });
  }

  function buildInlineDetails(experience, host) {
    let details = host.querySelector('.inline-experience-details[data-experience="' + experience.service + '"]');
    if (details) return details;
    details = document.createElement('div');
    details.className = 'inline-experience-details';
    details.dataset.experience = experience.service;
    details.hidden = true;
    const heading = document.createElement('h4');
    heading.textContent = 'Experience details';
    details.appendChild(heading);
    experience.copy.forEach(function (paragraph) {
      const p = document.createElement('p');
      p.textContent = paragraph;
      details.appendChild(p);
    });
    if (experience.includedTitle) {
      const includedHeading = document.createElement('h5');
      includedHeading.className = 'inline-experience-details__included-heading';
      includedHeading.textContent = experience.includedTitle;
      details.appendChild(includedHeading);
    }
    const list = document.createElement('ul');
    experience.list.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    details.appendChild(list);
    const note = document.createElement('p');
    note.className = 'inline-experience-details__note';
    note.textContent = experience.note;
    details.appendChild(note);
    const quickPlan = document.createElement('div');
    quickPlan.className = 'inline-quick-plan';
    const quickPlanHeading = document.createElement('h5');
    quickPlanHeading.textContent = 'Add this experience to your trip';
    quickPlan.appendChild(quickPlanHeading);
    const quickPlanFields = document.createElement('div');
    quickPlanFields.className = 'inline-quick-plan__fields';
    const guestLabel = document.createElement('label');
    guestLabel.textContent = 'How many people?';
    const guests = document.createElement('select');
    guests.setAttribute('aria-label', 'How many people are in your group?');
    guests.innerHTML = '<option value="">Select group size</option><option value="1">1 person</option><option value="2">2 people</option><option value="3">3 people</option><option value="4">4 people</option><option value="5">5 people</option><option value="6">6 people</option><option value="7">7 people</option><option value="8">8 people</option><option value="9">9 people</option><option value="10">10 people</option><option value="11+">11+ people</option>';
    guestLabel.appendChild(guests);
    quickPlanFields.appendChild(guestLabel);
    let timing = null;
    if (experience.bookingTimes) {
      const timeLabel = document.createElement('label');
      timeLabel.textContent = 'Available time';
      timing = document.createElement('select');
      timing.setAttribute('aria-label', 'Select an available time');
      timing.innerHTML = '<option value="">Select a time</option>' + experience.bookingTimes.map(function (time) { return '<option value="' + time + '">' + time + '</option>'; }).join('');
      timeLabel.appendChild(timing);
      quickPlanFields.appendChild(timeLabel);
    }
    quickPlan.appendChild(quickPlanFields);
    const quickPlanButton = createTripButton(findExperienceKey(experience), function () {
      return {
        date: experience.bookingDate || '',
        guests: guests.value || '',
        timing: timing ? timing.value : ''
      };
    });
    quickPlanButton.classList.add('button--dark', 'inline-quick-plan__button');
    quickPlan.appendChild(quickPlanButton);
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'trip-summary-card__remove';
    removeButton.dataset.tripRemove = findExperienceKey(experience);
    removeButton.textContent = 'Remove from My Trip';
    removeButton.addEventListener('click', function () { removeFromTrip(removeButton.dataset.tripRemove); });
    quickPlan.appendChild(removeButton);
    details.appendChild(quickPlan);
    host.appendChild(details);
    return details;
  }

  function toggleInlineDetails(details, trigger, gallery) {
    const willOpen = details.hidden;
    details.hidden = !willOpen;
    trigger.setAttribute('aria-expanded', String(willOpen));
    trigger.innerHTML = willOpen ? 'Hide details <span aria-hidden="true">↑</span>' : 'View details <span aria-hidden="true">↓</span>';
    const card = gallery.closest('.service-card, .experience-card, .nightlife-venue');
    if (card) card.classList.toggle('experience-expanded', willOpen);
    if (willOpen) details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function makeGallery(trigger, key) {
    const experience = experiences[key];
    if (!experience) return;
    const gallery = document.createElement('section');
    gallery.className = 'experience-gallery';
    if (trigger.classList.contains('experience-preview--tall')) gallery.classList.add('experience-gallery--tall');
    if (trigger.classList.contains('private-feature__visual')) gallery.classList.add('experience-gallery--feature');
    if (trigger.classList.contains('transport-split__image')) gallery.classList.add('experience-gallery--transport');
    gallery.dataset.experience = key;
    gallery.tabIndex = 0;
    gallery.setAttribute('aria-label', experience.title + ' photo gallery');
    gallery.innerHTML = '<button class="experience-gallery__previous" type="button" aria-label="Show previous photo">‹</button><button class="experience-gallery__image" type="button" aria-label="View photo fullscreen"><img alt=""></button><button class="experience-gallery__next" type="button" aria-label="Show next photo">›</button><button class="experience-gallery__close" type="button" aria-label="Exit fullscreen">×</button><p class="experience-gallery__caption"></p><p class="experience-gallery__counter"></p>';
    trigger.replaceWith(gallery);
    const image = gallery.querySelector('img');
    const caption = gallery.querySelector('.experience-gallery__caption');
    const counter = gallery.querySelector('.experience-gallery__counter');
    const previous = gallery.querySelector('.experience-gallery__previous');
    const next = gallery.querySelector('.experience-gallery__next');
    const imageButton = gallery.querySelector('.experience-gallery__image');
    const close = gallery.querySelector('.experience-gallery__close');
    let imageIndex = 0;
    let touchStartX = null;
    let didSwipe = false;

    function render() {
      const item = experience.gallery[imageIndex];
      image.src = item[0];
      image.alt = item[1];
      caption.textContent = item[2];
      counter.textContent = (imageIndex + 1) + ' / ' + experience.gallery.length;
      const showControls = experience.gallery.length > 1;
      previous.hidden = !showControls;
      next.hidden = !showControls;
    }
    function move(direction) {
      imageIndex = (imageIndex + direction + experience.gallery.length) % experience.gallery.length;
      render();
    }
    previous.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    gallery.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    });
    gallery.addEventListener('touchstart', function (event) {
      if (event.target.closest('.experience-gallery__previous, .experience-gallery__next, .experience-gallery__close')) return;
      touchStartX = event.changedTouches[0].clientX;
      didSwipe = false;
    }, { passive: true });
    gallery.addEventListener('touchend', function (event) {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) < 40) return;
      didSwipe = true;
      move(distance < 0 ? 1 : -1);
    }, { passive: true });
    imageButton.addEventListener('click', function () {
      if (didSwipe) { didSwipe = false; return; }
      if (gallery.requestFullscreen) gallery.requestFullscreen();
    });
    close.addEventListener('click', function () {
      if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    });
    render();
    galleriesByExperience[key] = galleriesByExperience[key] || [];
    galleriesByExperience[key].push(gallery);
  }

  document.querySelectorAll('button.experience-preview[data-open-experience]').forEach(function (trigger) {
    makeGallery(trigger, trigger.dataset.openExperience);
  });

  document.querySelectorAll('[data-open-experience]').forEach(function (trigger) {
    const key = trigger.dataset.openExperience;
    const experience = experiences[key];
    if (!experience || trigger.classList.contains('experience-preview')) return;
    const scope = trigger.closest('.service-card, .experience-card, .nightlife-venue, .detail-grid, .private-feature') || document;
    const gallery = scope.querySelector('.experience-gallery[data-experience="' + key + '"]') || (galleriesByExperience[key] || [])[0];
    if (!gallery) return;
    const host = detailsHost(gallery);
    const details = buildInlineDetails(experience, host);
    if (trigger.classList.contains('card-link--button')) trigger.className = 'button button--dark';
    trigger.classList.add('inline-details-trigger');
    trigger.innerHTML = 'View details <span aria-hidden="true">↓</span>';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      toggleInlineDetails(details, trigger, gallery);
    });
    const existingPlan = Array.from(host.querySelectorAll('a[href*="#inquiry"]')).find(function (link) { return !link.closest('.inline-experience-details'); });
    if (existingPlan) existingPlan.remove();
    addTripAction(trigger, key);
  });

  document.querySelectorAll('.experience-gallery').forEach(function (gallery) {
    const key = gallery.dataset.experience;
    const experience = experiences[key];
    const host = detailsHost(gallery);
    if (!experience || host.querySelector('[data-open-experience="' + key + '"]')) return;
    const details = buildInlineDetails(experience, host);
    const actions = document.createElement('div');
    actions.className = 'inline-experience-actions';
    const detailsButton = document.createElement('button');
    detailsButton.className = 'button button--dark inline-details-trigger';
    detailsButton.type = 'button';
    detailsButton.innerHTML = 'View details <span aria-hidden="true">↓</span>';
    detailsButton.setAttribute('aria-expanded', 'false');
    detailsButton.addEventListener('click', function () {
      toggleInlineDetails(details, detailsButton, gallery);
    });
    actions.append(detailsButton, createTripButton(key));
    host.appendChild(actions);
  });

  document.querySelectorAll('[data-add-experience]').forEach(function (button) {
    const key = button.dataset.addExperience;
    if (!experiences[key]) return;
    button.dataset.tripExperience = key;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', function () { addToTrip(key); });
  });

  renderTripTray();
  updateTripButtons();

  function updateInquirySummary() {
    const list = document.querySelector('[data-trip-inquiry-summary]');
    if (!list) return;
    list.replaceChildren();
    readTrip().filter(function (item) { return directBookingKeys.indexOf(item.key) === -1; }).forEach(function (item) {
      const row = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = experiences[item.key].title;
      const info = document.createElement('span');
      const date = item.date ? new Date(item.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Date not selected';
      info.textContent = date + ' · ' + (item.guests ? item.guests + ' people' : 'Group size not selected') + (item.timing ? ' · Preferred time: ' + item.timing : '');
      row.append(title, info);
      const preferences = [
        item.pickup && 'Pickup: ' + item.pickup,
        item.destination && 'Destination: ' + item.destination,
        item.occasion && 'Occasion: ' + item.occasion,
        item.sunset && 'Cruise preference: ' + item.sunset,
        item.vip && 'VIP / table: ' + item.vip,
        item.atmosphere && 'Venue / atmosphere: ' + item.atmosphere
      ].filter(Boolean);
      if (preferences.length) {
        const preferenceText = document.createElement('span');
        preferenceText.textContent = preferences.join(' · ');
        row.appendChild(preferenceText);
      }
      if (item.notes) {
        const notes = document.createElement('span');
        notes.className = 'trip-inquiry-summary__notes';
        notes.textContent = 'Notes: ' + item.notes;
        row.appendChild(notes);
      }
      list.appendChild(row);
    });
  }

  function renderTripPage() {
    const summary = document.querySelector('[data-trip-summary]');
    if (!summary) return;
    const empty = document.querySelector('[data-trip-empty]');
    const requestForm = document.querySelector('[data-trip-request-form]');
    const trip = readTrip();
    const onlineItems = trip.filter(function (item) { return directBookingKeys.indexOf(item.key) !== -1; });
    const inquiryItems = trip.filter(function (item) { return directBookingKeys.indexOf(item.key) === -1; });
    const mixedNote = document.querySelector('[data-trip-mixed-note]');
    if (mixedNote) mixedNote.hidden = !onlineItems.length || !inquiryItems.length;
    summary.replaceChildren();
    updateInquirySummary();
    if (!trip.length) {
      if (empty) empty.hidden = false;
      if (requestForm) requestForm.hidden = true;
      const requestSection = document.querySelector('[data-trip-request-section]');
      if (requestSection) requestSection.hidden = true;
      return;
    }
    if (empty) empty.hidden = true;
    if (requestForm) requestForm.hidden = false;
    const groups = {};
    function makeGroup(key, title, description, count) {
      if (!count) return;
      const group = document.createElement('section');
      group.className = 'trip-group trip-group--' + key;
      group.setAttribute('aria-labelledby', 'trip-group-' + key);
      const heading = document.createElement('h2');
      heading.id = 'trip-group-' + key;
      heading.textContent = title + ' · ' + count;
      const text = document.createElement('p');
      text.className = 'trip-group__intro';
      text.textContent = description;
      const cards = document.createElement('div');
      cards.className = 'trip-group__cards';
      group.append(heading, text, cards);
      summary.appendChild(group);
      groups[key] = { section: group, cards: cards };
    }
    makeGroup('online', 'Book online', 'Choose a date, time and group size for each activity. Complete all online activities together in one checkout when online booking is connected.', onlineItems.length);
    makeGroup('inquiry', 'Request arrangements', 'Preferred dates and club times are requests, not confirmed reservations. THF will confirm availability and pricing. No payment now.', inquiryItems.length);
    onlineItems.concat(inquiryItems).forEach(function (entry) {
      const experience = experiences[entry.key];
      const directBooking = directBookingKeys.indexOf(entry.key) !== -1;
      const formId = directBooking ? 'trip-checkout-form' : 'trip-request-form';
      const card = document.createElement('article');
      card.className = 'trip-summary-card';
      const bookingLabel = document.createElement('p');
      bookingLabel.className = 'trip-summary-card__date';
      bookingLabel.textContent = directBooking ? 'Online activity · Checkout not connected yet' : 'Inquiry only · No payment now';
      const overview = document.createElement('div');
      overview.className = 'trip-card-overview';
      if (experience.gallery && experience.gallery.length) {
        const image = document.createElement('img');
        image.className = 'trip-card-photo';
        image.src = experience.gallery[0][0];
        image.alt = experience.gallery[0][1];
        image.loading = 'lazy';
        overview.appendChild(image);
      }
      const cardCopy = document.createElement('div');
      cardCopy.appendChild(bookingLabel);
      const heading = document.createElement('h3');
      heading.className = 'trip-card-title';
      heading.textContent = experience.title;
      cardCopy.appendChild(heading);
      const lead = document.createElement('p');
      lead.className = 'trip-summary-card__lead';
      const compactSummaries = {
        buggies: 'Macao off-road trails, Dominican tastings, a Taíno cave swim and beach time. Approximately 3 hours; hotel transportation included.',
        partyboat: 'Adults-only catamaran party with a live DJ, drinks, snacks and a natural-pool link-up. Round-trip transportation included.',
        'thf-boat-party': 'November 14: two private yachts with special guest DJ Griggs from Houston, drinks, snacks and THF party energy.',
        saona: 'A full-day Saona Island escape with speedboat rides, a natural pool stop, beach time, lunch, an open bar and a catamaran return.'
      };
      lead.textContent = compactSummaries[entry.key] || experience.lead;
      cardCopy.appendChild(lead);
      overview.appendChild(cardCopy);
      card.appendChild(overview);
      const details = document.createElement('details');
      details.className = 'trip-card-details';
      const detailsToggle = document.createElement('summary');
      detailsToggle.textContent = 'Read full details';
      details.appendChild(detailsToggle);
      experience.copy.forEach(function (paragraph) {
        const copy = document.createElement('p');
        copy.textContent = paragraph;
        details.appendChild(copy);
      });
      if (experience.includedTitle) {
        const includedHeading = document.createElement('h4');
        includedHeading.textContent = experience.includedTitle;
        details.appendChild(includedHeading);
      }
      const included = document.createElement('ul');
      experience.list.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        included.appendChild(listItem);
      });
      details.appendChild(included);
      if (experience.note) {
        const note = document.createElement('p');
        note.textContent = experience.note;
        details.appendChild(note);
      }
      card.appendChild(details);
      const planningFields = document.createElement('div');
      planningFields.className = 'trip-experience-fields';
      function saveField(name, value) {
        const updated = readTrip();
        const selected = updated.find(function (item) { return item.key === entry.key; });
        if (selected) selected[name] = value;
        saveTrip(updated);
        updateInquirySummary();
      }
      function addField(name, title, type, value, required) {
        const label = document.createElement('label');
        label.textContent = title;
        const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
        if (type !== 'textarea') input.type = type;
        input.name = entry.key + '-' + name;
        input.setAttribute('form', formId);
        input.required = !!required;
        input.value = value || '';
        input.addEventListener('input', function () { saveField(name, input.value); });
        label.appendChild(input);
        planningFields.appendChild(label);
        return input;
      }
      const experienceDate = addField('date', experience.bookingDate ? 'Event date' : directBooking ? 'Experience date' : 'Preferred experience date', 'date', experience.bookingDate || entry.date, true);
      if (experience.bookingDate) experienceDate.readOnly = true;
      const guests = addField('guests', 'People for this experience', 'number', entry.guests ? String(entry.guests).replace('+', '') : '', true);
      guests.min = '1';
      guests.step = '1';
      guests.placeholder = 'Enter group size';
      if (experience.bookingDate) {
        const date = document.createElement('p');
        date.className = 'trip-summary-card__date';
        date.textContent = 'Event date: November 14, 2026';
        card.appendChild(date);
      }
      if (experience.bookingTimes) {
        const timeLabel = document.createElement('label');
        timeLabel.className = 'trip-summary-card__time';
        timeLabel.textContent = 'Experience time';
        const time = document.createElement('select');
        time.innerHTML = '<option value="">Select a time</option>' + experience.bookingTimes.map(function (option) { return '<option value="' + option + '">' + option + '</option>'; }).join('');
        time.value = entry.timing || '';
        time.name = entry.key + '-timing';
        time.setAttribute('form', formId);
        time.required = true;
        time.addEventListener('change', function () {
          const updated = readTrip();
          const selected = updated.find(function (item) { return item.key === entry.key; });
          if (selected) selected.timing = time.value;
          saveTrip(updated);
          updateInquirySummary();
        });
        timeLabel.appendChild(time);
        planningFields.appendChild(timeLabel);
      } else if (experience.service === 'club-reservations' || entry.key.indexOf('venue-') === 0) {
        addField('timing', 'Preferred club time', 'time', entry.timing, true);
      }
      if (['transport', 'airport-pickup', 'hotel-transfer', 'night-out-ride', 'custom-journey'].indexOf(entry.key) !== -1) {
        addField('pickup', 'Pickup location', 'text', entry.pickup, true).placeholder = 'Airport, hotel, or starting point';
        addField('destination', 'Destination', 'text', entry.destination, true).placeholder = 'Where you need to go';
      }
      if (entry.key === 'private-yacht' || entry.key === 'private-events' || entry.key.indexOf('venue-') === 0) {
        addField('occasion', 'Occasion (optional)', 'text', entry.occasion, false).placeholder = 'Birthday, group trip, celebration…';
      }
      if (entry.key === 'private-yacht') {
        const label = document.createElement('label');
        label.textContent = 'Cruise preference (optional)';
        const select = document.createElement('select');
        select.name = entry.key + '-sunset';
        select.setAttribute('form', formId);
        ['No preference', 'Daytime cruise', 'Sunset cruise'].forEach(function (text, index) {
          const option = document.createElement('option');
          option.value = index ? text : '';
          option.textContent = text;
          select.appendChild(option);
        });
        select.value = entry.sunset || '';
        select.addEventListener('change', function () { saveField('sunset', select.value); });
        label.appendChild(select);
        planningFields.appendChild(label);
      }
      if (entry.key.indexOf('venue-') === 0 || entry.key === 'private-events') {
        addField('vip', 'VIP / table preferences (optional)', 'text', entry.vip, false).placeholder = 'Table, bottle service, or dedicated space';
      }
      if (entry.key === 'private-events') {
        addField('atmosphere', 'Preferred venue / atmosphere (optional)', 'text', entry.atmosphere, false).placeholder = 'Venue ideas, music, or the setting you want';
      }
      const notes = addField('notes', 'Notes for this experience (optional)', 'textarea', entry.notes, false);
      notes.placeholder = 'Share requests, celebrations, pickup details, or preferences for this experience.';
      notes.parentElement.classList.add('trip-experience-fields__wide');
      card.appendChild(planningFields);
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'trip-summary-card__remove';
      remove.textContent = 'Remove from my trip';
      remove.addEventListener('click', function () {
        removeFromTrip(entry.key);
      });
      card.appendChild(remove);
      groups[directBooking ? 'online' : 'inquiry'].cards.appendChild(card);
    });
    function countLabel(count) { return count + (count === 1 ? ' experience' : ' experiences'); }
    if (onlineItems.length) {
      const checkoutForm = document.createElement('form');
      checkoutForm.id = 'trip-checkout-form';
      checkoutForm.className = 'trip-checkout-panel';
      const checkoutHeading = document.createElement('h3');
      checkoutHeading.textContent = 'One checkout for your online activities';
      const price = document.createElement('p');
      price.textContent = 'Prices and total: unavailable until the booking provider is connected. No payment is collected here.';
      const payload = document.createElement('input');
      payload.type = 'hidden';
      payload.name = 'experiences';
      const button = document.createElement('button');
      button.type = 'submit';
      button.className = 'button button--dark';
      button.textContent = 'Review checkout — ' + countLabel(onlineItems.length);
      const review = document.createElement('div');
      review.className = 'trip-booking-review';
      review.hidden = true;
      review.tabIndex = -1;
      review.setAttribute('role', 'status');
      checkoutForm.append(checkoutHeading, price, payload, button, review);
      checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!checkoutForm.reportValidity()) return;
        const selection = readTrip().filter(function (item) { return directBookingKeys.indexOf(item.key) !== -1; }).map(function (item) {
          return Object.assign({}, item, { title: experiences[item.key].title, date: experiences[item.key].bookingDate || item.date });
        });
        payload.value = JSON.stringify(selection);
        review.replaceChildren();
        const list = document.createElement('ul');
        selection.forEach(function (item) {
          const row = document.createElement('li');
          row.textContent = item.title + ' · ' + item.date + (item.timing ? ' · ' + item.timing : '') + ' · ' + item.guests + ' people';
          list.appendChild(row);
        });
        const message = document.createElement('p');
        message.textContent = 'Your online activities are ready for a shared checkout, but online booking is not connected yet. No payment or reservation has been made. Inquiry-only experiences are not included.';
        review.append(list, message);
        review.hidden = false;
        review.focus();
      });
      groups.online.cards.addEventListener('input', function () { review.hidden = true; });
      groups.online.cards.addEventListener('change', function () { review.hidden = true; });
      groups.online.section.appendChild(checkoutForm);
    }
    const inquiryCount = document.querySelector('[data-trip-inquiry-count]');
    if (inquiryCount) inquiryCount.textContent = 'Includes only your ' + countLabel(inquiryItems.length) + ' requiring an inquiry.';
    const inquirySubmit = document.querySelector('[data-trip-inquiry-submit]');
    if (inquirySubmit) inquirySubmit.textContent = 'Send inquiry — ' + countLabel(inquiryItems.length);
    const requestSection = document.querySelector('[data-trip-request-section]');
    if (requestSection) requestSection.hidden = !inquiryItems.length;
    if (requestForm) requestForm.hidden = !inquiryItems.length;
    const requestStatus = document.querySelector('[data-trip-request-status]');
    if (requestStatus) requestStatus.hidden = true;
  }

  renderTripPage();

  const quickAddForm = document.querySelector('[data-trip-quick-add]');
  if (quickAddForm) {
    const select = quickAddForm.querySelector('select');
    const groups = {
      'Tours & Excursions': ['buggies', 'partyboat', 'saona', 'jetski', 'private-yacht'],
      'Nightlife': ['venue-empire', 'venue-infinity', 'venue-movie', 'venue-drinkpoint', 'venue-infinity-stripclub', 'private-events'],
      'Transport': ['airport-pickup', 'hotel-transfer', 'night-out-ride', 'custom-journey'],
      'Security': ['security'],
      'Exclusive THF Events': ['thf-boat-party']
    };
    Object.keys(groups).forEach(function (category) {
      const group = document.createElement('optgroup');
      group.label = category;
      groups[category].forEach(function (key) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = experiences[key].title;
        group.appendChild(option);
      });
      select.appendChild(group);
    });
    quickAddForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!quickAddForm.reportValidity()) return;
      const key = select.value;
      addToTrip(key, experiences[key].bookingDate ? { date: experiences[key].bookingDate } : {});
      renderTripPage();
      const status = quickAddForm.querySelector('[role="status"]');
      status.textContent = experiences[key].title + ' is in your trip.';
    });
  }

  const tripRequestForm = document.querySelector('[data-trip-request-form]');
  const tripRequestStatus = document.querySelector('[data-trip-request-status]');
  if (tripRequestForm && tripRequestStatus) {
    tripRequestForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!tripRequestForm.checkValidity()) {
        tripRequestForm.reportValidity();
        return;
      }
      const payload = document.querySelector('[data-trip-request-payload]');
      if (payload) payload.value = JSON.stringify(readTrip().filter(function (entry) { return directBookingKeys.indexOf(entry.key) === -1; }).map(function (entry) {
        return Object.assign({}, entry, { title: experiences[entry.key].title, date: experiences[entry.key].bookingDate || entry.date || '' });
      }));
      tripRequestStatus.hidden = false;
      tripRequestStatus.dataset.state = 'warning';
      tripRequestStatus.textContent = 'This local demo is not connected to THF’s booking backend. No trip request was sent and no reservation is confirmed.';
      tripRequestStatus.focus();
    });
  }

  document.querySelectorAll('[data-gallery-scroll]').forEach(function (button) {
    button.addEventListener('click', function () {
      const gallery = document.getElementById(button.dataset.galleryScroll);
      if (!gallery) return;
      const direction = button.dataset.galleryDirection === 'previous' ? -1 : 1;
      const distance = Math.max(gallery.clientWidth * .78, 280) * direction;
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gallery.scrollBy({ left: distance, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  document.querySelectorAll('[data-event-countdown]').forEach(function (countdown) {
    const start = new Date(countdown.dataset.eventStart).getTime();
    const days = countdown.querySelector('[data-countdown-days]');
    const hours = countdown.querySelector('[data-countdown-hours]');
    const minutes = countdown.querySelector('[data-countdown-minutes]');
    const seconds = countdown.querySelector('[data-countdown-seconds]');
    const status = countdown.querySelector('[data-countdown-status]');
    const pad = function (value) { return String(value).padStart(2, '0'); };
    let timer;
    function updateCountdown() {
      const remaining = start - Date.now();
      if (remaining <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        if (status) status.textContent = 'The THF Boat Party is underway.';
        if (timer) window.clearInterval(timer);
        return;
      }
      const totalSeconds = Math.floor(remaining / 1000);
      const totalDays = Math.floor(totalSeconds / 86400);
      days.textContent = pad(totalDays);
      hours.textContent = pad(Math.floor(totalSeconds % 86400 / 3600));
      minutes.textContent = pad(Math.floor(totalSeconds % 3600 / 60));
      seconds.textContent = pad(totalSeconds % 60);
    }
    updateCountdown();
    if (start > Date.now()) timer = window.setInterval(updateCountdown, 1000);
  });

  // Keep existing shared service links useful after consolidating the planning flow.
  if (document.querySelector('.trip-planning-invitation')) {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('service');
    if (serviceName) {
      const key = experiences[serviceName] ? serviceName : Object.keys(experiences).find(function (key) {
        return experiences[key].service === serviceName && serviceName !== 'club-reservations';
      });
      if (key) {
        const options = {};
        const date = params.get('date');
        const guests = params.get('guests');
        if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) options.date = date;
        if (guests && /^\d+\+?$/.test(guests)) options.guests = guests.replace('+', '');
        if (params.get('time')) options.timing = params.get('time');
        addToTrip(key, options);
      }
      window.location.replace('trip.html' + (key ? '' : '#trip-add-more-heading'));
    }
  }
}());
