/* =========================================================================
   SITE CONFIG — edit brand details here, then run:  node build/build.mjs
   Everything marked PLACEHOLDER must be replaced before going live.
   ========================================================================= */

export const site = {
  // --- Brand -------------------------------------------------------------
  name: 'Prestige Migrations',
  legalName: 'Prestige Migrations (Pvt) Ltd',  // PLACEHOLDER — confirm registered company name
  shortName: 'Prestige',                        // logo image: assets/images/logo.png
  tagline: 'Your future abroad, thoughtfully planned.', // PLACEHOLDER [TAGLINE]
  description:
    'Sri Lanka-based education and migration consultancy helping students study in Finland, Sweden, Germany, Malaysia and Ireland — free counselling, applications, scholarships and visas.',
  foundedYear: 2024,                            // matches 2+ years of experience

  // Production URL, no trailing slash. Used for canonical, OG, sitemap.
  url: 'https://www.example.com',               // PLACEHOLDER

  // --- Contact -----------------------------------------------------------
  phone: '+94 74 144 1113',                     // call + WhatsApp (display)
  phoneHref: '+94741441113',                    // tel: link, no spaces
  whatsapp: '94741441113',                      // wa.me format, no + (0741441113)
  whatsappMessage: 'Hi! I would like a free study abroad consultation.',
  email: 'hello@example.com',                   // PLACEHOLDER [EMAIL]
  hours: [
    { days: 'Monday – Friday', time: '9.00 am – 6.00 pm' },
    { days: 'Saturday', time: '9.00 am – 2.00 pm' },
    { days: 'Sunday & Poya days', time: 'Closed (WhatsApp open)' },
  ],

  // Office location(s). The first office is used in LocalBusiness schema.
  offices: [
    {
      name: 'Nittambuwa Office',
      street: 'Kandy Road',                     // PLACEHOLDER [ADDRESS] — add building / number
      city: 'Nittambuwa',
      region: 'Western Province',
      postcode: '11880',
      country: 'LK',
      phone: '+94 74 144 1113',
      mapQuery: 'Nittambuwa, Sri Lanka',        // PLACEHOLDER — use your exact address for the map
      geo: { lat: 7.1440, lng: 80.0960 },       // approx. Nittambuwa town centre — update to exact location
    },
  ],

  social: {
    facebook: 'https://www.facebook.com/share/1Q6XBhM2Zj/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/prestigemigration',
    tiktok: 'https://www.tiktok.com/@prestigemigration',
  },

  // --- Trust strip (PLACEHOLDER — use only figures you can substantiate) --
  stats: [
    { value: 2, suffix: '+', label: 'Years of experience' },
    { value: 144, suffix: '+', label: 'Students placed' },
    { value: 50, suffix: '+', label: 'Partner universities' },
    { value: 97, suffix: '%', label: 'Visa success rate' },
  ],

  // --- Loading screen ----------------------------------------------------
  // 'session' = show on the first page a visitor opens (recommended)
  // 'always'  = show on every page load    'off' = never show
  loader: 'session',
  loaderText: 'Preparing your journey',
};
