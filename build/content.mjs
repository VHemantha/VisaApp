/* =========================================================================
   SITE CONTENT — all copy lives here. Edit freely, then rebuild.
   Images: Unsplash photo IDs (royalty-free). Swap for your own photos by
   replacing `img` with a local path such as 'assets/images/team/ama.webp'.
   Figures on destination pages are indicative (2026) — review each intake.
   ========================================================================= */

/* ---------- Images (Unsplash IDs + accurate alt text) ---------- */
export const images = {
  heroGrads: { id: '1541339907198-e08756dedf3f', alt: 'Graduates in gowns throwing their caps into the air in front of a city skyline' },
  studentsGroup: { id: '1517486808906-6ca8b3f04846', alt: 'Five smiling university students sitting together outdoors' },
  studentsLaptop: { id: '1522202176988-66273c2fd55f', alt: 'Three students laughing while working on laptops at a café table' },
  studentsCafe: { id: '1543269865-cbf427effbad', alt: 'Students discussing coursework on a tablet around a table' },
  counselling: { id: '1531545514256-b1400bc00f31', alt: 'A group of young people gathered around a laptop, planning together' },
  friends: { id: '1529156069898-49953e39b3ac', alt: 'Friends with their arms around each other looking out over a valley' },
  lectureHall: { id: '1606761568499-6d2451b23c66', alt: 'An empty modern university lecture hall with tiered seating' },
  campus: { id: '1562774053-701939374585', alt: 'A historic red-brick university building behind a wide green lawn' },
  library: { id: '1498243691581-b145c3f54a5a', alt: 'Long aisle of bookshelves in a university library' },
  libraryStudent: { id: '1427504494785-3a9ca7044f45', alt: 'A student walking between tall library shelves' },
  writing: { id: '1434030216411-0b793f4b4173', alt: 'Close-up of a hand writing notes on paper beside a coffee cup' },
  laptopDesk: { id: '1501504905252-473c47e087f8', alt: 'Open laptop, notebook and mug on a bright desk' },
  notebook: { id: '1488190211105-8b0e65b80b4e', alt: 'Person writing in a notebook next to a laptop and coffee' },
  teamWork: { id: '1521737604893-d14cc237f11d', alt: 'A team working together at a long table with laptops' },
  workshop: { id: '1552664730-d307ca884978', alt: 'A workshop session with sticky notes on a whiteboard' },
  networking: { id: '1515169067868-5387ec356754', alt: 'People chatting at an evening networking event' },
  seminar: { id: '1524178232363-1fb2b075b655', alt: 'Attendees listening to a presentation in a seminar room' },
  conference: { id: '1540575467063-178a50c2df87', alt: 'A large audience seated at a conference' },
  plane: { id: '1436491865332-7a61a109cc05', alt: 'View of an aeroplane wing above sunlit clouds' },
  desks: { id: '1519389950473-47ba0277781c', alt: 'Overhead view of a team working on laptops at a shared desk' },
  paperwork: { id: '1454165804606-c3d57bc86b40', alt: 'Two people reviewing documents beside a laptop' },
  london: { id: '1513635269975-59663e0ac1ad', alt: 'Aerial view of London and the River Thames with Tower Bridge' },
  sydney: { id: '1506973035872-a4ec16b8e8d9', alt: 'Sydney Harbour with the Opera House and city skyline' },
  toronto: { id: '1517935706615-2717063c2225', alt: 'Aerial view of a Canadian city skyline at golden hour' },
  auckland: { id: '1507699622108-4be3abd695ad', alt: 'Auckland skyline and Sky Tower reflected in calm water at dusk' },
  newYork: { id: '1496442226666-8d4d0e62e6e9', alt: 'Busy New York street lined with illuminated billboards' },
  paris: { id: '1502602898657-3e91760cbb34', alt: 'The Eiffel Tower and River Seine in Paris at dusk' },
  germany: { id: '1467269204594-9661b134dd2b', alt: 'Colourful half-timbered houses on a street in a German town' },
  amsterdam: { id: '1534351590666-13e3e96b5017', alt: 'Tree-lined canal with boats in Amsterdam' },
  mountains: { id: '1506905925346-21bda4d32df4', alt: 'Snow-capped mountain peaks above a sea of clouds' },
};

/* ---------- Destinations ---------- */
// `the` = true adds "the" in sentences ("Study in the United Kingdom").
export const destinations = [
  {
    slug: 'uk', name: 'United Kingdom', the: true, short: 'UK', flag: 'gb', img: 'london',
    benefit: 'World-ranked universities and one-year master’s degrees.',
    intro: 'Home to some of the world’s oldest and highest-ranked universities, the UK offers shorter degrees, a multicultural student life and a post-study work route — all a direct flight from Colombo.',
    why: [
      ['Shorter, focused degrees', 'Most bachelor’s degrees take 3 years and taught master’s just 12 months, saving tuition and living costs.'],
      ['Global recognition', 'UK qualifications are respected by employers worldwide and quality-assured by national bodies.'],
      ['Graduate Route', 'Stay and work after graduation on the Graduate visa without needing a job offer.'],
      ['Familiar system', 'English-medium teaching and a legal and academic culture that Sri Lankan students know well.'],
    ],
    courses: ['Business & Management', 'Computer Science & AI', 'Data Science', 'Nursing & Healthcare', 'Engineering', 'Law', 'Finance & Accounting', 'Public Health'],
    costs: [['Undergraduate tuition', '£12,000 – £26,000 / year'], ['Postgraduate tuition', '£13,000 – £30,000 / year'], ['Living costs (outside London)', 'approx. £1,140 / month'], ['Living costs (London)', 'approx. £1,480 / month']],
    intakes: [['September', 'Main intake — widest course choice'], ['January', 'Strong second intake'], ['May', 'Limited courses']],
    visa: 'Apply for the Student visa with a Confirmation of Acceptance for Studies (CAS) from a licensed university, proof of funds, an approved English test where required (e.g. IELTS for UKVI) and the Immigration Health Surcharge. Most applicants get a decision within about three weeks of their biometrics appointment.',
    work: [['During studies', 'Up to 20 hours / week in term time (degree level), full-time in holidays'], ['After graduation', 'Graduate Route — currently 2 years (3 for PhD); the government has announced a reduction to 18 months for applications from 2027'], ['Dependants', 'Generally limited to postgraduate research (PhD/MRes) students']],
    faqs: [
      ['Do I need IELTS to study in the UK?', 'Many universities accept IELTS for UKVI, PTE Academic or other approved tests. Some waive the test for students with strong O/L or A/L English results — we check each university’s policy for you.'],
      ['Can I bring my family on a UK Student visa?', 'Since January 2024, only students on postgraduate research programmes (such as a PhD) can usually bring dependants. We will advise the best route for your situation.'],
    ],
  },
  {
    slug: 'australia', name: 'Australia', short: 'Australia', flag: 'au', img: 'sydney',
    benefit: 'Outstanding lifestyle with generous post-study work rights.',
    intro: 'Australia combines globally ranked universities with a relaxed outdoor lifestyle, strong graduate employment and clear pathways from study to skilled work.',
    why: [
      ['Top-ranked universities', 'Several Australian universities sit in the global top 100, especially for health, engineering and IT.'],
      ['Work while you study', 'Generous part-time work rights help with living costs and build local experience.'],
      ['Post-study work', 'The Temporary Graduate visa (subclass 485) lets eligible graduates stay and work for 2–3 years or more.'],
      ['Large Sri Lankan community', 'Established communities in Melbourne, Sydney and Perth make settling in easier.'],
    ],
    courses: ['Nursing', 'Information Technology', 'Engineering', 'Accounting', 'Early Childhood Education', 'Hospitality Management', 'Social Work', 'Data Analytics'],
    costs: [['Undergraduate tuition', 'AUD 25,000 – 50,000 / year'], ['Postgraduate tuition', 'AUD 28,000 – 55,000 / year'], ['Living costs (visa requirement)', 'approx. AUD 29,700 / year'], ['Overseas Student Health Cover', 'approx. AUD 600 – 800 / year']],
    intakes: [['February', 'Main intake'], ['July', 'Second major intake'], ['November', 'Selected institutions']],
    visa: 'Apply for the Student visa (subclass 500) with a Confirmation of Enrolment (CoE), evidence of funds, OSHC health cover and an English test score. Applicants must show they are a Genuine Student. Visa charges and processing times change regularly — we check the latest before you lodge.',
    work: [['During studies', 'Up to 48 hours per fortnight in term time, unlimited in breaks'], ['After graduation', 'Temporary Graduate visa (485) — typically 2–3 years depending on qualification'], ['Dependants', 'Partners and children can usually accompany you']],
    faqs: [
      ['What IELTS score do I need for Australia?', 'Most universities ask for IELTS 6.0–6.5 overall (or equivalent PTE), with higher scores for nursing and teaching. The visa itself has its own minimum.'],
      ['Can my spouse work in Australia?', 'Dependants of most student visa holders can work, with conditions that depend on your course level. We explain the current rules during your consultation.'],
    ],
  },
  {
    slug: 'canada', name: 'Canada', short: 'Canada', flag: 'ca', img: 'toronto',
    benefit: 'High-quality, affordable education and a welcoming society.',
    intro: 'Canada is known for safe, welcoming cities, high-quality public colleges and universities, and post-graduation work options that can lead to permanent residence.',
    why: [
      ['Affordable quality', 'Tuition is often lower than in the UK or USA, especially at public colleges.'],
      ['Co-op programmes', 'Many courses include paid work terms, so you graduate with Canadian experience.'],
      ['Post-Graduation Work Permit', 'Eligible graduates can work for up to 3 years after study.'],
      ['Pathways to PR', 'Canadian education and work experience count towards Express Entry and provincial programmes.'],
    ],
    courses: ['Business Administration', 'Computer Programming', 'Supply Chain Management', 'Healthcare Administration', 'Engineering', 'Early Childhood Education', 'Hospitality', 'Project Management'],
    costs: [['College diploma tuition', 'CAD 15,000 – 22,000 / year'], ['University tuition', 'CAD 22,000 – 45,000 / year'], ['Proof of funds (living)', 'approx. CAD 22,900 / year'], ['Health insurance', 'varies by province']],
    intakes: [['September', 'Main intake — best course availability'], ['January', 'Popular second intake'], ['May', 'Limited programmes']],
    visa: 'Apply for a study permit with a Letter of Acceptance from a Designated Learning Institution and, for most applicants, a Provincial Attestation Letter (PAL). You will also need proof of funds, biometrics and a clear study plan. Canada caps study permit numbers each year, so applying early matters.',
    work: [['During studies', 'Up to 24 hours / week off campus in term, full-time in scheduled breaks'], ['After graduation', 'Post-Graduation Work Permit — up to 3 years, subject to field-of-study rules'], ['Dependants', 'Open work permits for spouses are limited to certain programmes (e.g. master’s and doctoral)']],
    faqs: [
      ['What is a Provincial Attestation Letter (PAL)?', 'Most new study permit applicants need a PAL from the province where they will study. Your college or university usually requests it for you after you accept your offer.'],
      ['Is Canada still a good option after the study permit caps?', 'Yes — but competition is higher. A well-prepared application to a reputable institution, submitted early, gives you the best chance.'],
    ],
  },
  {
    slug: 'new-zealand', name: 'New Zealand', short: 'New Zealand', flag: 'nz', img: 'auckland',
    benefit: 'Safe, friendly and globally respected qualifications.',
    intro: 'New Zealand offers a world-class education in one of the safest, most beautiful countries on earth, with smaller classes and supportive universities.',
    why: [
      ['All eight universities ranked', 'Every New Zealand university features in global rankings.'],
      ['Safe and welcoming', 'Consistently ranked among the world’s most peaceful countries.'],
      ['Post-study work visa', 'Eligible graduates can work for up to 3 years after study.'],
      ['Practical learning', 'Strong focus on hands-on, research-led teaching.'],
    ],
    courses: ['Information Technology', 'Engineering', 'Agriculture & Environmental Science', 'Nursing', 'Business', 'Construction Management', 'Tourism', 'Teaching'],
    costs: [['Undergraduate tuition', 'NZD 25,000 – 40,000 / year'], ['Postgraduate tuition', 'NZD 28,000 – 45,000 / year'], ['Living costs (visa requirement)', 'approx. NZD 20,000 / year'], ['Insurance', 'Compulsory — approx. NZD 600 – 800 / year']],
    intakes: [['February', 'Main intake'], ['July', 'Second intake'], ['Rolling', 'Some polytechnic programmes']],
    visa: 'Apply for a Fee Paying Student Visa with an Offer of Place, proof of tuition payment, evidence of living funds and insurance. Applications are submitted online.',
    work: [['During studies', 'Up to 25 hours / week for most degree-level students'], ['After graduation', 'Post Study Work Visa — up to 3 years depending on qualification'], ['Dependants', 'Partners of some postgraduate students may be eligible for work visas']],
    faqs: [
      ['How long does a New Zealand student visa take?', 'Processing times vary through the year. We recommend applying at least 8–10 weeks before your course starts.'],
      ['Can I study a diploma in New Zealand?', 'Yes. Many polytechnics offer Level 5–7 diplomas, but post-study work eligibility depends on the level and length of your programme.'],
    ],
  },
  {
    slug: 'usa', name: 'United States', the: true, short: 'USA', flag: 'us', img: 'newYork',
    benefit: 'Unmatched choice, research and scholarship opportunities.',
    intro: 'The USA has the largest and most diverse higher education system in the world, with flexible degrees, cutting-edge research and generous merit scholarships.',
    why: [
      ['Unrivalled choice', 'Thousands of accredited universities and colleges across every field.'],
      ['Flexible curriculum', 'Explore subjects before choosing your major.'],
      ['Scholarships & assistantships', 'Merit scholarships and graduate assistantships can significantly reduce costs.'],
      ['OPT work experience', 'Optional Practical Training, with a STEM extension of up to 24 more months.'],
    ],
    courses: ['Computer Science', 'Data Science & Analytics', 'Business (MBA)', 'Engineering', 'Biotechnology', 'Economics', 'Information Systems', 'Public Health'],
    costs: [['Public university tuition', 'USD 20,000 – 40,000 / year'], ['Private university tuition', 'USD 35,000 – 60,000 / year'], ['Living costs', 'USD 12,000 – 20,000 / year'], ['SEVIS fee', 'USD 350 (one-off)']],
    intakes: [['Fall (Aug/Sep)', 'Main intake — most scholarships'], ['Spring (January)', 'Second intake'], ['Summer (May)', 'Limited programmes']],
    visa: 'Apply for the F-1 visa using the Form I-20 issued by your university, pay the SEVIS fee and attend an interview at the US Embassy in Colombo. Strong preparation for the interview is essential — we run mock interviews for every student.',
    work: [['During studies', 'Up to 20 hours / week on campus in term'], ['After graduation', 'OPT — 12 months, plus up to 24 months STEM extension'], ['Dependants', 'F-2 dependants may accompany you but cannot work']],
    faqs: [
      ['Do I need the SAT or GRE?', 'Many universities are now test-optional, but a good score can strengthen scholarship applications. We advise case by case.'],
      ['How do I prepare for the F-1 interview?', 'We help you explain your study plans, finances and ties to Sri Lanka clearly, and run realistic mock interviews before your appointment.'],
    ],
  },
  {
    slug: 'europe', name: 'Europe', short: 'Europe', flag: 'eu', img: 'paris',
    benefit: 'Low or no tuition, English-taught courses and Schengen travel.',
    intro: 'From tuition-free public universities in Germany to Ireland’s tech hub and Finland’s innovative education system, Europe offers great value and the freedom to travel across the Schengen area.',
    why: [
      ['Low or no tuition', 'Public universities in Germany charge little or no tuition; many others are highly affordable.'],
      ['English-taught programmes', 'Thousands of master’s programmes are taught fully in English.'],
      ['Travel the continent', 'A residence permit in a Schengen country lets you travel freely in the area.'],
      ['Stay-back options', 'Germany, Ireland, France, Finland and others offer post-study job-seeker permits.'],
    ],
    courses: ['Mechanical Engineering (Germany)', 'Computer Science (Ireland)', 'Business & Luxury Management (France)', 'Education (Finland)', 'Data Science (Netherlands)', 'Logistics', 'Renewable Energy', 'Hospitality (Switzerland)'],
    costs: [['Germany (public)', 'Semester fee approx. €150 – €400; blocked account approx. €11,900 / year'], ['Ireland', '€10,000 – €25,000 / year tuition'], ['France (public)', 'approx. €2,900 – €3,900 / year (non-EU)'], ['Finland / Netherlands', '€8,000 – €20,000 / year; scholarships available']],
    intakes: [['September / October', 'Main intake across Europe'], ['February / March', 'Summer semester (Germany, some others)'], ['January', 'Ireland and selected programmes']],
    visa: 'Each country runs its own national study visa or residence permit. Typical requirements include an admission letter, proof of funds (such as a German blocked account), health insurance and accommodation details.',
    work: [['Germany', '140 full days or 280 half days per year during studies; 18-month job-seeker permit after'], ['Ireland', '20 hours / week in term, 40 in holidays; Stamp 1G stay-back up to 2 years'], ['France & Finland', 'Part-time work allowed; post-study job-search permits available']],
    faqs: [
      ['Is study in Germany really free?', 'Most public universities charge no tuition (some states, like Baden-Württemberg, charge non-EU students), but you pay a semester contribution and must show living funds in a blocked account.'],
      ['Do I need to speak the local language?', 'Not for English-taught programmes, but learning the basics greatly improves part-time job and career prospects.'],
    ],
  },
];

/* ---------- Services ---------- */
export const services = [
  { icon: 'compass', title: 'Career counselling', short: 'One-to-one guidance to match your goals, grades and budget to the right path.', points: ['Profile and eligibility assessment', 'Career-focused course mapping', 'Honest budget planning', 'Parent consultations welcome'] },
  { icon: 'building', title: 'University selection', short: 'A shortlist of the right universities and courses — not just the ones that pay us most.', points: ['Ranked shortlist with reasons', 'Entry requirements check', 'Cost and scholarship comparison', 'Campus and city insights'] },
  { icon: 'file', title: 'Application support', short: 'Polished applications, personal statements and documents that stand out.', points: ['SOP / personal statement coaching', 'Document checklist and review', 'Reference letter guidance', 'Offer tracking'] },
  { icon: 'shield', title: 'Visa assistance', short: 'Accurate, well-prepared visa files and interview coaching for every destination.', points: ['Financial document guidance', 'GTE / Genuine Student statements', 'Mock visa interviews', 'Lodgement and follow-up'] },
  { icon: 'award', title: 'Scholarships', short: 'We find and apply for scholarships and bursaries you are eligible for.', points: ['Merit and need-based awards', 'University-specific discounts', 'Government scholarships', 'Application essays'] },
  { icon: 'book', title: 'IELTS / PTE guidance', short: 'Know exactly which test and score you need — and how to reach it.', points: ['Test selection advice', 'Practice materials', 'Partner coaching classes', 'Exam booking help'] },
  { icon: 'plane', title: 'Pre-departure briefing', short: 'Arrive prepared: travel, banking, part-time work and settling-in tips.', points: ['Packing and travel checklist', 'Banking, SIM and transport', 'Part-time work rules', 'Meet other students going'] },
  { icon: 'home', title: 'Accommodation', short: 'Safe, affordable housing arranged before you land.', points: ['University halls', 'Private student residences', 'Homestay options', 'Airport pick-up guidance'] },
];

/* ---------- How it works ---------- */
export const steps = [
  ['Free consultation', 'Meet a counsellor in person, by phone or on Zoom to discuss your goals.'],
  ['Personal study plan', 'Receive a shortlist of countries, courses and universities with full costs.'],
  ['Applications & offers', 'We prepare and submit your applications and track every offer.'],
  ['Visa & finances', 'We build a strong visa file and prepare you for any interview.'],
  ['Fly & thrive', 'Pre-departure briefing, accommodation and support after you arrive.'],
];

/* ---------- Testimonials (SAMPLE — replace with real, consented reviews) ---------- */
export const testimonials = [
  { name: 'Nethmi P.', course: 'MSc Data Science', uni: 'University in Manchester, UK', dest: 'uk', quote: 'My counsellor explained every option honestly — including the cheaper ones. I got my CAS and visa in under a month and felt supported the whole way.' },
  { name: 'Kavindu R.', course: 'Bachelor of Nursing', uni: 'University in Melbourne, Australia', dest: 'australia', quote: 'The Genuine Student statement felt impossible until we worked on it together. Visa granted in 19 days. I recommend them to all my friends.' },
  { name: 'Ayesha M.', course: 'Postgraduate Diploma, Supply Chain', uni: 'College in Toronto, Canada', dest: 'canada', quote: 'They handled my PAL, study permit and accommodation. The pre-departure session answered questions I didn’t even know I had.' },
  { name: 'Dilshan F.', course: 'MS Computer Science', uni: 'University in Texas, USA', dest: 'usa', quote: 'Three mock interviews made all the difference. I walked into the embassy confident and came out with my F-1 approved.' },
  { name: 'Tharushi W.', course: 'MSc Mechanical Engineering', uni: 'Public university, Germany', dest: 'europe', quote: 'I had no idea studying in Germany could be this affordable. They guided me through the blocked account and APS step by step.' },
  { name: 'Sahan J.', course: 'Master of IT', uni: 'University in Auckland, New Zealand', dest: 'new-zealand', quote: 'Fast replies on WhatsApp, clear fees and no pressure. My family felt confident from day one.' },
];

/* ---------- Events ---------- */
export const events = [
  { date: '2026-11-07', time: '10.00 am – 4.00 pm', type: 'Education fair', title: 'Study Abroad Expo 2026 — Colombo', place: 'Colombo (venue TBC)', desc: 'Meet university representatives from the UK, Australia, Canada and Europe. On-the-spot offer assessments and scholarship advice.', img: 'conference' },
  { date: '2026-11-19', time: '7.00 pm – 8.00 pm', type: 'Webinar', title: 'UK January 2027 intake: last-call webinar', place: 'Online (Zoom)', desc: 'Courses with places left, CAS timelines, finances and the Graduate Route explained.', img: 'seminar' },
  { date: '2026-12-05', time: '9.30 am – 1.00 pm', type: 'Workshop', title: 'Visa interview masterclass', place: 'Kandy Branch', desc: 'Practical session on financial documents, Genuine Student statements and interview technique.', img: 'workshop' },
  { date: '2027-01-16', time: '10.00 am – 3.00 pm', type: 'Open day', title: 'Australia & New Zealand July intake open day', place: 'Kurunegala Branch', desc: 'Free profile assessments, IELTS/PTE guidance and application fee waivers on the day.', img: 'networking' },
];

/* ---------- Intakes & scholarships ---------- */
export const intakeTable = [
  ['United Kingdom', 'September, January', 'Jun – Jul / Oct – Nov'],
  ['Australia', 'February, July', 'Sep – Oct / Mar – Apr'],
  ['Canada', 'September, January', 'Dec – Mar / Jun – Aug'],
  ['New Zealand', 'February, July', 'Sep – Oct / Mar – Apr'],
  ['USA', 'Fall (Aug), Spring (Jan)', 'Nov – Feb / Aug – Sep'],
  ['Europe', 'September / October', 'Nov – Mar (varies)'],
];

export const scholarships = [
  { title: 'Chevening Scholarships', dest: 'UK', value: 'Full tuition + living', level: 'Master’s', desc: 'UK government-funded awards for future leaders with work experience.' },
  { title: 'Australia Awards', dest: 'Australia', value: 'Full tuition + living', level: 'Master’s', desc: 'Australian government scholarships for eligible Sri Lankan professionals.' },
  { title: 'Fulbright Foreign Student Program', dest: 'USA', value: 'Full funding', level: 'Master’s / PhD', desc: 'Prestigious US government programme administered through the US-Sri Lanka Fulbright Commission.' },
  { title: 'DAAD Scholarships', dest: 'Germany', value: 'Monthly stipend', level: 'Master’s / PhD', desc: 'German Academic Exchange Service awards, particularly for development-related courses.' },
  { title: 'Commonwealth Scholarships', dest: 'UK', value: 'Full funding', level: 'Master’s / PhD', desc: 'For candidates from Commonwealth countries who cannot otherwise afford to study in the UK.' },
  { title: 'University merit awards', dest: 'All destinations', value: '10% – 50% tuition', level: 'All levels', desc: 'Automatic and competitive awards from our partner universities — the most common route for our students.' },
];

/* ---------- FAQs (home) ---------- */
export const faqs = [
  ['Is the first consultation really free?', 'Yes. Your first consultation — in person, by phone or on Zoom — is completely free with no obligation.'],
  ['How much does it cost to study abroad?', 'It depends on the country, course and city. As a guide, annual tuition ranges from almost nothing at German public universities to USD 40,000+ at private US universities. We give you a full, honest cost breakdown before you apply.'],
  ['What qualifications do I need?', 'Most undergraduate programmes accept A/L results; foundation and diploma pathways are available if you do not meet direct entry. Master’s programmes require a recognised bachelor’s degree or equivalent.'],
  ['Do I need IELTS or PTE?', 'Usually, yes — but some universities accept strong O/L English results or offer waivers. We tell you exactly which test and score you need.'],
  ['When should I start my application?', 'Ideally 8–12 months before your intake. This gives time for tests, applications, scholarships and the visa process.'],
  ['Can I work while studying?', 'Yes, most destinations allow part-time work during term and full-time during breaks. Limits differ by country — see each destination page.'],
  ['Can my spouse or children come with me?', 'In many cases, yes, though rules vary by country and course level. We assess your family’s eligibility during the consultation.'],
  ['Do you help after I arrive?', 'Yes. We help with accommodation, airport pick-up guidance and stay in touch through your first semester.'],
];

/* ---------- Team (PLACEHOLDER) ---------- */
export const team = [
  { name: 'Full Name', role: 'Founder & Managing Director', bio: '15+ years in international education. Former university admissions officer.' },
  { name: 'Full Name', role: 'Head of Counselling', bio: 'Specialist in UK and Europe admissions and scholarships.' },
  { name: 'Full Name', role: 'Senior Visa Consultant', bio: 'Expert in Australian and New Zealand student visas.' },
  { name: 'Full Name', role: 'Canada & USA Counsellor', bio: 'Guides students through study permits and F-1 interviews.' },
];

// PLACEHOLDER — list ONLY accreditations you actually hold.
export const accreditations = [
  'British Council trained agent (Agent Quality Framework)',
  'PIER Qualified Education Agent Counsellor (QEAC)',
  'ICEF accredited agency',
  'Registered with the Registrar of Companies, Sri Lanka',
];

/* ---------- Migration ---------- */
export const migration = [
  { icon: 'briefcase', title: 'Skilled migration', desc: 'Points-tested permanent residence for skilled professionals.', items: ['Australia — Skilled Independent (189), Skilled Nominated (190), Regional (491)', 'Canada — Express Entry & Provincial Nominee Programs', 'New Zealand — Skilled Migrant Category', 'Skills assessments and EOI preparation'] },
  { icon: 'globe', title: 'Visitor visas', desc: 'Visit family, attend graduations or travel for tourism.', items: ['UK Standard Visitor visa', 'Australia Visitor (600)', 'Canada Temporary Resident Visa', 'Schengen and USA B1/B2 visitor visas'] },
  { icon: 'users', title: 'Dependent & family visas', desc: 'Keep your family together while you study or work abroad.', items: ['Student dependant visas', 'Partner and spouse visas', 'Parent visitor and super visas', 'Children’s schooling visas'] },
];

/* ---------- Blog posts ---------- */
export const posts = [
  {
    slug: 'uk-vs-australia-for-sri-lankan-students', category: 'Destinations', date: '2026-09-22', read: 6, img: 'london',
    title: 'UK vs Australia: which is right for Sri Lankan students in 2027?',
    excerpt: 'Course length, costs, work rights and post-study options compared side by side.',
    body: [
      ['p', 'The UK and Australia remain the two most popular study destinations for Sri Lankan students. Both offer world-class universities and English-medium teaching, but they differ in ways that matter for your budget and your long-term plans.'],
      ['h2', 'Course length and total cost'],
      ['p', 'UK taught master’s degrees usually last 12 months, while Australian master’s programmes are typically 1.5–2 years. That makes the UK cheaper overall for many postgraduate students, even though annual tuition can look similar.'],
      ['h2', 'Work during and after study'],
      ['p', 'Australia allows up to 48 hours of work per fortnight during term, compared with 20 hours a week in the UK. After graduation, Australia’s Temporary Graduate visa can run for 2–3 years or more, while the UK Graduate Route is currently 2 years.'],
      ['h2', 'Bringing your family'],
      ['p', 'If you plan to bring a spouse or children, Australia is generally more flexible. The UK now restricts dependants to postgraduate research students.'],
      ['h2', 'Our advice'],
      ['p', 'There is no single “best” country. Choose based on your course, budget, family situation and career goals — and talk to a counsellor who will compare both honestly.'],
    ],
  },
  {
    slug: 'how-to-write-a-genuine-student-statement', category: 'Visas', date: '2026-08-30', read: 5, img: 'writing',
    title: 'How to write a strong Genuine Student statement',
    excerpt: 'What case officers look for, common mistakes and a simple structure that works.',
    body: [
      ['p', 'Australia’s Genuine Student requirement asks you to explain why you have chosen your course, your institution and Australia — and how the qualification fits your future.'],
      ['h2', 'Be specific'],
      ['p', 'Name modules, career roles and employers. General statements like “Australia has good education” add little.'],
      ['h2', 'Show your circumstances clearly'],
      ['p', 'Explain your study and work history honestly, including any gaps. Consistency with your documents matters more than impressive wording.'],
      ['h2', 'Avoid templates'],
      ['p', 'Case officers read thousands of statements and recognise copied text quickly. Your own voice, supported by evidence, is far more convincing.'],
    ],
  },
  {
    slug: 'scholarships-you-can-apply-for-now', category: 'Scholarships', date: '2026-08-12', read: 4, img: 'library',
    title: '6 scholarships Sri Lankan students can apply for right now',
    excerpt: 'From fully funded government awards to university merit discounts.',
    body: [
      ['p', 'Scholarships can reduce the cost of studying abroad dramatically. Here are six options our counsellors recommend looking at early.'],
      ['h2', 'Government scholarships'],
      ['p', 'Chevening, Commonwealth, Australia Awards, Fulbright and DAAD all offer funded places for Sri Lankan applicants. Deadlines are often 9–12 months before the course starts.'],
      ['h2', 'University merit awards'],
      ['p', 'Many universities offer automatic discounts of 10–50% for strong academic results. These are the most common awards our students receive.'],
      ['h2', 'Start early'],
      ['p', 'The strongest scholarship applications are planned months ahead. Book a consultation and we will build a scholarship calendar for you.'],
    ],
  },
  {
    slug: 'canada-study-permit-checklist', category: 'Visas', date: '2026-07-28', read: 5, img: 'toronto',
    title: 'Canada study permit checklist for the 2027 intakes',
    excerpt: 'PAL, proof of funds, biometrics and a study plan — everything in one list.',
    body: [
      ['p', 'Canada’s study permit process has changed a lot in recent years. Here is what you need for the September 2027 and January 2027 intakes.'],
      ['h2', 'Core documents'],
      ['p', 'A Letter of Acceptance from a Designated Learning Institution, a Provincial Attestation Letter (for most applicants), a valid passport and proof of funds for tuition and living costs.'],
      ['h2', 'Your study plan'],
      ['p', 'Explain clearly why this programme, why Canada and how it connects to your previous studies and career goals.'],
    ],
  },
  {
    slug: 'studying-in-germany-on-a-budget', category: 'Destinations', date: '2026-07-10', read: 6, img: 'germany',
    title: 'Studying in Germany on a budget: a practical guide',
    excerpt: 'Tuition-free universities, blocked accounts and part-time work explained.',
    body: [
      ['p', 'Germany is one of the most affordable places to earn a world-class degree. Here is how to plan your finances.'],
      ['h2', 'Tuition and semester fees'],
      ['p', 'Most public universities charge no tuition, but every student pays a semester contribution that often includes a public transport ticket.'],
      ['h2', 'The blocked account'],
      ['p', 'You must show living funds, usually through a blocked account from which you withdraw a fixed amount each month.'],
    ],
  },
  {
    slug: 'pre-departure-checklist', category: 'Student life', date: '2026-06-18', read: 4, img: 'plane',
    title: 'The ultimate pre-departure checklist',
    excerpt: 'Documents, money, packing and your first week — all in one place.',
    body: [
      ['p', 'Your visa is approved — congratulations! Here is what to sort out before you fly.'],
      ['h2', 'Documents to carry'],
      ['p', 'Passport and visa, offer letter, accommodation confirmation, insurance details, and copies of your certificates in your hand luggage.'],
      ['h2', 'Money and banking'],
      ['p', 'Carry some local currency, inform your bank you are travelling and research student bank accounts at your destination.'],
    ],
  },
];
