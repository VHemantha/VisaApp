/* =========================================================================
   SITE CONFIG — edit brand details here, then run:  node build/build.mjs
   Everything marked PLACEHOLDER must be replaced before going live.
   ========================================================================= */

export const site = {
  // --- Brand -------------------------------------------------------------
  name: 'Lumora Education',                     // PLACEHOLDER [BRAND NAME]
  legalName: 'Lumora Education & Migration (Pvt) Ltd', // PLACEHOLDER
  shortName: 'Lumora',                          // PLACEHOLDER (used in logo)
  tagline: 'Your future abroad, thoughtfully planned.', // PLACEHOLDER [TAGLINE]
  description:
    'Sri Lanka-based education and migration consultancy helping students study in Finland, Sweden, Germany, Malaysia and Ireland — free counselling, applications, scholarships and visas.',
  foundedYear: 2014,                            // PLACEHOLDER

  // Production URL, no trailing slash. Used for canonical, OG, sitemap.
  url: 'https://www.example.com',               // PLACEHOLDER

  // --- Contact -----------------------------------------------------------
  phone: '+94 70 000 0000',                     // PLACEHOLDER [NUMBER] (display)
  phoneHref: '+94700000000',                    // PLACEHOLDER (tel: link, no spaces)
  whatsapp: '94700000000',                      // PLACEHOLDER (wa.me format, no +)
  whatsappMessage: 'Hi! I would like a free study abroad consultation.',
  email: 'hello@example.com',                   // PLACEHOLDER [EMAIL]
  hours: [
    { days: 'Monday – Friday', time: '9.00 am – 6.00 pm' },
    { days: 'Saturday', time: '9.00 am – 2.00 pm' },
    { days: 'Sunday & Poya days', time: 'Closed (WhatsApp open)' },
  ],

  // First office = head office (used in LocalBusiness schema)
  offices: [
    {
      name: 'Colombo — Head Office',
      street: 'Level 4, 123 Galle Road',        // PLACEHOLDER [ADDRESS]
      city: 'Colombo 03',
      region: 'Western Province',
      postcode: '00300',
      country: 'LK',
      phone: '+94 70 000 0000',
      mapQuery: 'Galle Road, Colombo 03, Sri Lanka',
      geo: { lat: 6.9022, lng: 79.8530 },
    },
    {
      name: 'Kandy Branch',
      street: '45 Peradeniya Road',             // PLACEHOLDER
      city: 'Kandy',
      region: 'Central Province',
      postcode: '20000',
      country: 'LK',
      phone: '+94 70 000 0001',
      mapQuery: 'Peradeniya Road, Kandy, Sri Lanka',
    },
    {
      name: 'Kurunegala Branch',
      street: '12 Colombo Road',                // PLACEHOLDER
      city: 'Kurunegala',
      region: 'North Western Province',
      postcode: '60000',
      country: 'LK',
      phone: '+94 70 000 0002',
      mapQuery: 'Colombo Road, Kurunegala, Sri Lanka',
    },
  ],

  social: {
    facebook: 'https://www.facebook.com/',      // PLACEHOLDER
    instagram: 'https://www.instagram.com/',    // PLACEHOLDER
    linkedin: 'https://www.linkedin.com/',      // PLACEHOLDER
    youtube: 'https://www.youtube.com/',        // PLACEHOLDER
    tiktok: 'https://www.tiktok.com/',          // PLACEHOLDER
  },

  // --- Trust strip (PLACEHOLDER — use only figures you can substantiate) --
  stats: [
    { value: 12, suffix: '+', label: 'Years of experience' },
    { value: 4500, suffix: '+', label: 'Students placed' },
    { value: 150, suffix: '+', label: 'Partner universities' },
    { value: 97, suffix: '%', label: 'Visa success rate' },
  ],

  // --- Forms -------------------------------------------------------------
  // provider: 'formspree' -> set formspreeId (https://formspree.io)
  //           'netlify'   -> uses Netlify Forms (no id needed)
  // While formspreeId is the placeholder, forms run in demo mode.
  forms: {
    provider: 'formspree',
    formspreeId: 'YOUR_FORM_ID',                // PLACEHOLDER
  },

  // Destinations shown in form dropdowns
  formDestinations: ['Finland', 'Sweden', 'Germany', 'Malaysia', 'Ireland', 'Not sure yet'],
  studyLevels: ['Foundation / Diploma', "Bachelor's degree", "Master's degree", 'PhD / Research', 'English language course'],
  intakes: ['January / February 2027', 'April 2027', 'May 2027', 'August / September 2027', 'October 2027', 'Later / not sure'],
};
