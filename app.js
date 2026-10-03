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
      list: ['Round-trip hotel transportation to the ranch', 'Organic coffee, cacao, and mamajuana tasting', 'Taíno freshwater cave swim', 'Time to relax and take photos at Macao Beach'],
      note: 'Food and drinks at Macao Beach are not included. Final timing, vehicle selection, and availability are confirmed with your quote.',
      service: 'buggies-atv',
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
      title: 'Hip-Hop Party Boat',
      lead: 'A live DJ, open bar, swimming, snorkeling, and a lively sandbar stop—with Hip-Hop, R&B, Dancehall, and Afrobeats onboard.',
      copy: [
        'Spend the day moving between music, open-water time, snorkeling, and the sandbar.',
        'This is built for groups who want an energetic boat experience and a soundtrack that stays with the day from boarding through the swim stop.'
      ],
      list: ['Live DJ onboard', 'Open bar', 'Swimming and snorkeling', 'Lively sandbar stop'],
      note: 'Adults only. Availability, route, and onboard arrangements are confirmed with your quote.',
      service: 'hip-hop-party-boat',
      gallery: [
        ['public/images/partyboat1.jpg', 'Guests gathered on a party boat in Punta Cana', 'Music and a social day on the water.'],
        ['public/images/partyboat2.jpg', 'Party boat guests enjoying their time onboard', 'Bring your group together onboard.'],
        ['public/images/partyboat3.jpg', 'Guests enjoying music and clear water from a party boat', 'Music, time in the water, and a lively sandbar stop.'],
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
      lead: 'Get out on the water and add some speed to your Punta Cana plans.',
      copy: [
        'Choose a Jet Ski experience when you want a more active water plan alongside beach days, excursions, or a night out.',
        'Share your date, group size, and preferences so THF can help you explore a suitable arrangement.'
      ],
      list: ['An active water experience', 'Suitable alongside other Punta Cana plans', 'Requested around your preferred date and group'],
      note: 'Selected duration, water area, availability, and operating requirements are confirmed with your quote. Water activities are subject to conditions.',
      service: 'jet-ski',
      gallery: [
        ['public/images/jetski.jpg', 'Two riders on a Jet Ski in clear water', 'Get out on the water and add some speed.'],
        ['public/images/jetski1.avif', 'Jet Ski experience in Punta Cana', 'Jet Ski experience in Punta Cana.']
      ]
    },
    saona: {
      label: 'Tours & Excursions · Island day',
      title: 'Isla Saona Escape',
      lead: 'Palm-lined beaches, a natural-pool stop, Dominican-style lunch, and time to enjoy Saona.',
      copy: [
        'Make room for a full day around Isla Saona, with time to take in the beach, the water, and the pace of the island.',
        'It is a strong fit for groups who want their day to feel more relaxed after an active excursion or night out.'
      ],
      list: ['Palm-lined beaches', 'Natural-pool stop', 'Dominican-style lunch', 'Time to enjoy the island'],
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
        ['public/images/security_protection.png', 'Private security professional near a vehicle', 'Discreet security support, separately arranged.'],
        ['public/images/security_protection2.png', 'Private security support in Punta Cana', 'Security support for your plan.']
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
        ['public/images/transport2.png', 'Private vehicle arriving at a Punta Cana resort setting', 'Airport-arrival arrangement.'],
        ['public/images/transport.png', 'Private vehicle for Punta Cana transport', 'Private transport in Punta Cana.']
      ]
    }
  };

  const experienceTriggers = document.querySelectorAll('[data-open-experience]');
  if (experienceTriggers.length) {
    const dialog = document.createElement('dialog');
    dialog.className = 'experience-modal';
    dialog.setAttribute('data-experience-modal', '');
    dialog.setAttribute('aria-label', 'Experience details');
    dialog.innerHTML = '<button class="experience-modal__close" type="button" aria-label="Close experience details">×</button><div class="experience-modal__grid"><div class="experience-modal__media"><button class="experience-modal__previous" type="button" aria-label="Show previous image">←</button><img data-modal-image alt=""><button class="experience-modal__next" type="button" aria-label="Show next image">→</button><p class="experience-modal__caption" data-modal-caption></p><p class="experience-modal__counter" data-modal-counter></p></div><div class="experience-modal__content"><p class="eyebrow" data-modal-label></p><h2 data-modal-title></h2><p class="experience-modal__lead" data-modal-lead></p><div class="experience-modal__copy" data-modal-copy></div><ul class="experience-modal__list" data-modal-list></ul><p class="experience-modal__note" data-modal-note></p><a class="button" data-modal-cta>Plan this experience <span aria-hidden="true">→</span></a></div></div>';
    document.body.appendChild(dialog);

    const modalImage = dialog.querySelector('[data-modal-image]');
    const modalCaption = dialog.querySelector('[data-modal-caption]');
    const modalCounter = dialog.querySelector('[data-modal-counter]');
    const modalLabel = dialog.querySelector('[data-modal-label]');
    const modalTitle = dialog.querySelector('[data-modal-title]');
    const modalLead = dialog.querySelector('[data-modal-lead]');
    const modalCopy = dialog.querySelector('[data-modal-copy]');
    const modalList = dialog.querySelector('[data-modal-list]');
    const modalNote = dialog.querySelector('[data-modal-note]');
    const modalCta = dialog.querySelector('[data-modal-cta]');
    const previous = dialog.querySelector('.experience-modal__previous');
    const next = dialog.querySelector('.experience-modal__next');
    const close = dialog.querySelector('.experience-modal__close');
    let activeExperience = null;
    let activeImageIndex = 0;

    function renderActiveImage() {
      const image = activeExperience.gallery[activeImageIndex];
      modalImage.src = image[0];
      modalImage.alt = image[1];
      modalCaption.textContent = image[2];
      modalCounter.textContent = 'Photo ' + (activeImageIndex + 1) + ' of ' + activeExperience.gallery.length;
      const hasMultiple = activeExperience.gallery.length > 1;
      previous.hidden = !hasMultiple;
      next.hidden = !hasMultiple;
    }

    function moveImage(direction) {
      activeImageIndex = (activeImageIndex + direction + activeExperience.gallery.length) % activeExperience.gallery.length;
      renderActiveImage();
    }

    function openExperience(key) {
      const experience = experiences[key];
      if (!experience) return;
      activeExperience = experience;
      activeImageIndex = 0;
      modalLabel.textContent = experience.label;
      modalTitle.textContent = experience.title;
      modalLead.textContent = experience.lead;
      modalCopy.replaceChildren();
      experience.copy.forEach(function (paragraph) {
        const p = document.createElement('p');
        p.textContent = paragraph;
        modalCopy.appendChild(p);
      });
      modalList.replaceChildren();
      experience.list.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        modalList.appendChild(li);
      });
      modalNote.textContent = experience.note;
      modalCta.href = 'index.html?service=' + encodeURIComponent(experience.service) + '#inquiry';
      modalCta.firstChild.textContent = experience.service === 'private-security' ? 'Enquire About Private Security ' : 'Plan this experience ';
      renderActiveImage();
      dialog.showModal();
      close.focus();
    }

    experienceTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () { openExperience(trigger.dataset.openExperience); });
    });
    previous.addEventListener('click', function () { moveImage(-1); });
    next.addEventListener('click', function () { moveImage(1); });
    close.addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', function (event) {
      if (!activeExperience || activeExperience.gallery.length < 2) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); moveImage(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); moveImage(1); }
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
    const requestedService = new URLSearchParams(window.location.search).get('service');
    if (requestedService && service.querySelector('option[value="' + requestedService + '"]')) {
      service.value = requestedService;
    }
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
