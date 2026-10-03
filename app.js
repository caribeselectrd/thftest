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
        'Your day includes the essentials of our regular party boat experience: round-trip transportation, snacks and fresh fruit, alcoholic beverages, bottled water, soda, and snorkeling gear. Two private yachts give this THF event its own setting—a shared celebration out on the Punta Cana coast.'
      ],
      includedTitle: 'What’s Included',
      list: ['Round-trip transportation', 'Snacks and fresh fruits', 'Alcoholic beverages', 'Bottled water', 'Soda/Pop', 'Snorkeling gear', 'Live Hip-Hop, R&B, Dancehall, and Afrobeats DJ set with special guest DJ Griggs', 'Animation dance team'],
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
        'Private Security is available to inquire about under Nightlife and alongside Private Transport. It is arranged separately and is not included with a transfer.',
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
      label: 'Private Transport · Punta Cana',
      title: 'Private Transport',
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

  function detailsHost(gallery) {
    const card = gallery.closest('.service-card, .experience-card, .nightlife-venue');
    if (card) return card.querySelector('.service-card__body, .experience-card__body, .nightlife-venue > div') || card;
    const grid = gallery.closest('.detail-grid');
    if (grid) return grid.querySelector('.detail-copy') || grid;
    const feature = gallery.closest('.private-feature');
    if (feature) return feature.querySelector('.private-feature__content') || feature;
    return gallery.parentElement;
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
    quickPlanHeading.textContent = 'Ready to plan this experience?';
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
    const quickPlanButton = document.createElement('a');
    quickPlanButton.className = 'button button--dark inline-quick-plan__button';
    quickPlanButton.textContent = 'Plan now';
    function updateQuickPlanLink() {
      const params = new URLSearchParams();
      params.set('service', experience.service);
      if (experience.bookingDate) params.set('date', experience.bookingDate);
      if (guests.value) params.set('guests', guests.value);
      if (timing && timing.value) params.set('time', timing.value);
      quickPlanButton.href = 'index.html?' + params.toString() + '#inquiry';
    }
    guests.addEventListener('change', updateQuickPlanLink);
    if (timing) timing.addEventListener('change', updateQuickPlanLink);
    updateQuickPlanLink();
    quickPlan.appendChild(quickPlanButton);
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
    imageButton.addEventListener('click', function () {
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
    actions.append(detailsButton);
    host.appendChild(actions);
  });

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

  const service = document.querySelector('[data-service-select]');
  const boatFields = document.querySelectorAll('[data-private-boat-field]');
  const routeFields = document.querySelectorAll('[data-route-field]');
  const transportServices = ['airport-pickup', 'hotel-transfer', 'night-out-ride', 'custom-journey'];
  const isPrivateBoat = function () { return service && service.value === 'private-yacht'; };
  const isSecurity = function () { return service && service.value === 'private-security'; };
  const isTransport = function () { return service && transportServices.indexOf(service.value) !== -1; };

  function toggleContextFields() {
    boatFields.forEach(function (field) {
      const enabled = isPrivateBoat();
      field.hidden = !enabled;
      const control = field.querySelector('input, select, textarea');
      if (control) {
        control.disabled = !enabled;
        control.required = enabled && control.dataset.requiredForBoat === 'true';
      }
    });
    routeFields.forEach(function (field) {
      const enabled = isTransport() && !isSecurity();
      field.hidden = !enabled;
      const control = field.querySelector('input, select, textarea');
      if (control) {
        control.disabled = !enabled;
        control.required = enabled && control.dataset.requiredForRoute === 'true';
      }
    });
  }

  if (service) {
    const requestParams = new URLSearchParams(window.location.search);
    const requestedService = requestParams.get('service');
    if (requestedService && service.querySelector('option[value="' + requestedService + '"]')) {
      service.value = requestedService;
    }
    const requestedGuests = requestParams.get('guests');
    const requestedDate = requestParams.get('date');
    const dateField = document.getElementById('date');
    if (requestedDate && dateField && /^\d{4}-\d{2}-\d{2}$/.test(requestedDate)) dateField.value = requestedDate;
    const groupSize = document.getElementById('group-size');
    if (requestedGuests && groupSize) groupSize.value = requestedGuests.replace('+', '');
    const requestedTime = requestParams.get('time');
    const inquiryDetails = document.getElementById('details');
    if (requestedTime && inquiryDetails && !inquiryDetails.value) inquiryDetails.value = 'Preferred time: ' + requestedTime;
    toggleContextFields();
    service.addEventListener('change', toggleContextFields);
  }

  const form = document.querySelector('[data-inquiry-form]');
  const status = document.querySelector('[data-form-status]');
  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.hidden = false;
      status.dataset.state = 'warning';
      status.textContent = 'This local demo is not connected to THF\'s booking backend. No inquiry was sent and no reservation is confirmed.';
      status.focus();
    });
  }
}());
