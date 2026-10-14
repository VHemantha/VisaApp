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
  // Destinations
  helsinki: { id: '1538332576228-eb5b4c4de6f5', alt: 'Helsinki Cathedral and waterfront buildings under a dramatic sky' },
  aurora: { id: '1531366936337-7c912a4589a7', alt: 'Northern lights glowing over a snowy landscape at night' },
  stockholm: { id: '1509356843151-3e7d96241e11', alt: 'Stockholm’s old town skyline across the water at sunset' },
  berlin: { id: '1560969184-10fe8719e047', alt: 'The Brandenburg Gate in Berlin on a bright day' },
  germanTown: { id: '1467269204594-9661b134dd2b', alt: 'Colourful half-timbered houses on a street in a German town' },
  kualaLumpur: { id: '1596422846543-75c6fc197f07', alt: 'The Petronas Twin Towers and Kuala Lumpur skyline at dusk' },
  cobh: { id: '1590089415225-401ed6f9db8e', alt: 'Colourful terraced houses below St Colman’s Cathedral in Cobh, Ireland' },
  dublinStreet: { id: '1518005068251-37900150dfca', alt: 'A busy cobbled street lined with pubs in Dublin' },
};

/* ---------- Destinations ---------- */
// `the` = true adds "the" in sentences (e.g. "Study in the Netherlands").
export const destinations = [
  {
    slug: 'finland', tuitionFrom: '€6,000 / year', workShort: '~30 hrs / week', postStudy: 'Up to 2 years', name: 'Finland', short: 'Finland', flag: 'fi', img: 'helsinki',
    benefit: 'World-leading education, generous scholarships and a safe, happy society.',
    intro: 'Finland is famous for its innovative education system, and it is consistently ranked the happiest country in the world. English-taught degrees, tuition scholarships of up to 100% and family-friendly residence rules make it a top choice for Sri Lankan students.',
    why: [
      ['Generous scholarships', 'Most universities offer tuition waivers of 50–100% for strong applicants, often renewable each year.'],
      ['Practical, modern degrees', 'Universities of Applied Sciences focus on real-world skills, internships and close links with employers.'],
      ['Safe and happy', 'Finland regularly tops global rankings for happiness, safety, equality and quality of life.'],
      ['Stay and work after study', 'Graduates can apply for a residence permit to look for work or start a business after graduation.'],
    ],
    courses: ['Business & International Management', 'Information Technology & Software Engineering', 'Nursing & Healthcare', 'Hospitality & Tourism', 'Logistics & Supply Chain', 'Engineering', 'Data Science & AI', 'Social Services'],
    costs: [['Bachelor’s tuition', '€6,000 – €12,000 / year (before scholarship)'], ['Master’s tuition', '€8,000 – €18,000 / year (before scholarship)'], ['Living funds (residence permit)', 'approx. €800 / month'], ['Health insurance', 'Required — approx. €200 – €500 / year']],
    intakes: [['Autumn (Aug / Sep)', 'Main intake — joint application in January'], ['Spring (January)', 'Selected programmes — apply around September'], ['Rolling', 'Some private and open university pathways']],
    visa: 'Apply online for a residence permit for studies through Enter Finland, with your letter of admission, proof of tuition payment (or scholarship), evidence of living funds and health insurance. You will also need to verify your identity in person at a Finnish mission or authorised service point. We guide you through every document.',
    work: [['During studies', 'Up to 30 hours / week on average in term, full-time in holidays'], ['After graduation', 'Residence permit to look for work or start a business — up to 2 years'], ['Dependants', 'Family members may be eligible in some cases — rules have tightened recently, so we check your situation individually']],
    faqs: [
      ['Do I need IELTS to study in Finland?', 'Most programmes ask for IELTS, TOEFL or PTE. Some universities run their own entrance exams or accept English-medium education evidence — we check each programme’s requirements for you.'],
      ['How does the Finnish joint application work?', 'Most autumn programmes open together in early January through Studyinfo.fi, with a two-week application window. Many also require an entrance exam or online test, so preparation should start early.'],
    ],
  },
  {
    slug: 'sweden', tuitionFrom: 'SEK 80,000 / year', workShort: 'No fixed limit', postStudy: 'Up to 12 months', name: 'Sweden', short: 'Sweden', flag: 'se', img: 'stockholm',
    benefit: 'Innovative universities with no limit on part-time work hours.',
    intro: 'Sweden is home to world-class research universities and global companies, and it has a culture built on innovation, sustainability and equality. Thousands of English-taught master’s programmes make it a strong option for ambitious Sri Lankan graduates.',
    why: [
      ['Innovation hub', 'The birthplace of companies such as Spotify, IKEA and Volvo, with strong links between universities and industry.'],
      ['Student-centred teaching', 'Small groups, independent thinking and close contact with lecturers.'],
      ['No limit on work hours', 'Students on a residence permit can work part-time with no fixed weekly hour limit, as long as studies come first.'],
      ['Scholarships available', 'Swedish Institute scholarships and university tuition waivers can cover most or all costs.'],
    ],
    courses: ['Computer Science & AI', 'Sustainable Engineering', 'Business & Economics', 'Industrial Management', 'Data Science', 'Environmental Science', 'Public Health', 'Design'],
    costs: [['Bachelor’s tuition', 'SEK 80,000 – 140,000 / year'], ['Master’s tuition', 'SEK 90,000 – 200,000 / year'], ['Living funds (residence permit)', 'approx. SEK 10,300 / month'], ['Application fee', 'SEK 900 (University Admissions)']],
    intakes: [['Autumn (August)', 'Main intake — apply mid-October to mid-January'], ['Spring (January)', 'Fewer programmes — apply June to mid-August']],
    visa: 'After paying your first tuition instalment, apply online to the Swedish Migration Agency for a residence permit for studies. You need your admission letter, proof of funds for the full permit period and comprehensive health insurance (if your course is shorter than one year). Apply early — processing can take several weeks.',
    work: [['During studies', 'Part-time work allowed with no fixed hour limit — studies must remain your main activity'], ['After graduation', 'Residence permit to look for work or start a business — up to 12 months'], ['Dependants', 'Partners and children may be eligible, subject to income and housing requirements']],
    faqs: [
      ['When should I apply for Sweden?', 'For the autumn intake, applications open in mid-October and close in mid-January at universityadmissions.se. We recommend starting your documents by September.'],
      ['Can I get a scholarship in Sweden?', 'Yes. The Swedish Institute Scholarships for Global Professionals and many university tuition-fee waivers are open to eligible Sri Lankan applicants. Deadlines are often around February.'],
    ],
  },
  {
    slug: 'germany', tuitionFrom: 'Free (public)', workShort: '140 full days / year', postStudy: 'Up to 18 months', name: 'Germany', short: 'Germany', flag: 'de', img: 'berlin',
    benefit: 'Tuition-free public universities and Europe’s largest economy.',
    intro: 'Germany offers world-renowned engineering and research universities, tuition-free study at most public institutions and excellent career prospects in Europe’s largest economy. Hundreds of master’s programmes are taught fully in English.',
    why: [
      ['Low or no tuition', 'Most public universities charge no tuition — only a semester contribution, which often includes a transport ticket.'],
      ['Engineering excellence', 'Top-ranked universities for engineering, technology and the natural sciences.'],
      ['Strong job market', 'High demand for skilled graduates, especially in IT, engineering and healthcare.'],
      ['18-month job-seeker permit', 'Graduates can stay for up to 18 months to find a job related to their degree.'],
    ],
    courses: ['Mechanical & Automotive Engineering', 'Computer Science', 'Electrical Engineering', 'Data Science & AI', 'Renewable Energy', 'International Business', 'Logistics', 'Biotechnology'],
    costs: [['Public university tuition', 'Free at most — semester fee approx. €150 – €400'], ['Private university tuition', '€8,000 – €20,000 / year'], ['Blocked account (living funds)', 'approx. €11,900 / year'], ['Health insurance', 'approx. €130 / month (statutory student rate)']],
    intakes: [['Winter (October)', 'Main intake — apply by around 15 July (earlier for many programmes)'], ['Summer (April)', 'Fewer programmes — apply by around 15 January']],
    visa: 'Apply for a national (D) student visa through the German mission responsible for Sri Lanka, with your university admission, proof of funds (usually a blocked account), health insurance and evidence of language skills. Appointment waiting times can be long, so we plan your timeline early.',
    work: [['During studies', '140 full days or 280 half days per year'], ['After graduation', 'Job-seeker residence permit — up to 18 months'], ['Dependants', 'Spouses and children may join, subject to funds and housing']],
    faqs: [
      ['Is study in Germany really free?', 'Most public universities charge no tuition (Baden-Württemberg charges non-EU students), but you pay a semester contribution and must show living funds — usually in a blocked account.'],
      ['Do I need to speak German?', 'Not for English-taught programmes, but basic German greatly improves part-time job and career prospects. Most bachelor’s programmes are taught in German.'],
    ],
  },
  {
    slug: 'malaysia', tuitionFrom: 'MYR 15,000 / year', workShort: 'Semester breaks', postStudy: 'With a job offer', name: 'Malaysia', short: 'Malaysia', flag: 'my', img: 'kualaLumpur',
    benefit: 'Affordable international degrees, close to home.',
    intro: 'Just a short flight from Colombo, Malaysia offers affordable, internationally recognised degrees — including at branch campuses of well-known UK and Australian universities — in a multicultural, welcoming environment.',
    why: [
      ['Affordable quality', 'Tuition and living costs are a fraction of those in Europe, with internationally recognised qualifications.'],
      ['International branch campuses', 'Earn a UK or Australian university degree at a Malaysian campus.'],
      ['Close to home', 'A short flight from Sri Lanka, with a similar climate and familiar food.'],
      ['Transfer programmes', 'Start in Malaysia and transfer to a partner university overseas to finish your degree.'],
    ],
    courses: ['Business & Accounting', 'Computer Science & IT', 'Engineering', 'Hospitality & Culinary Arts', 'Medicine & Pharmacy', 'Psychology', 'Mass Communication', 'Foundation programmes'],
    costs: [['Foundation / Diploma', 'MYR 15,000 – 30,000 / year'], ['Bachelor’s tuition', 'MYR 20,000 – 60,000 / year'], ['Living costs', 'approx. MYR 1,500 – 2,500 / month'], ['Visa & EMGS fees', 'approx. MYR 2,500 – 3,000 (first year, incl. insurance)']],
    intakes: [['January / February', 'Major intake'], ['May', 'Mid-year intake'], ['September', 'Major intake']],
    visa: 'International students apply for a Student Pass through Education Malaysia Global Services (EMGS), usually with help from the university. You need your offer letter, academic documents, passport and a medical screening. After approval you receive a Visa Approval Letter (VAL) to enter Malaysia.',
    work: [['During studies', 'Part-time work up to 20 hours / week during semester breaks and holidays only'], ['After graduation', 'Employment requires a job offer and work pass'], ['Dependants', 'Postgraduate students may be able to bring dependants']],
    faqs: [
      ['Is a Malaysian degree recognised?', 'Degrees from accredited Malaysian universities and international branch campuses are widely recognised. Branch campus graduates receive the same degree as at the home campus.'],
      ['Can I transfer to another country later?', 'Yes. Many Malaysian institutions offer credit transfer programmes to partner universities abroad. We help you plan the full pathway from the start.'],
    ],
  },
  {
    slug: 'ireland', tuitionFrom: '€10,000 / year', workShort: '20 hrs / week', postStudy: '1–2 years', name: 'Ireland', short: 'Ireland', flag: 'ie', img: 'cobh',
    benefit: 'English-speaking tech hub with a two-year stay-back route.',
    intro: 'Ireland is Europe’s English-speaking technology hub, home to the European headquarters of many global tech and pharmaceutical companies. Its friendly culture, one-year master’s programmes and post-study stay-back options attract students from around the world.',
    why: [
      ['English-speaking EU country', 'Study and work in English while living in the European Union.'],
      ['Global tech and pharma hub', 'Many global technology and life-science companies have their European headquarters here.'],
      ['One-year master’s degrees', 'Most taught master’s degrees take just 12 months.'],
      ['Stay-back after study', 'Graduates can stay to look for work for up to 1 year (bachelor’s) or 2 years (master’s).'],
    ],
    courses: ['Computer Science & Software Engineering', 'Data Analytics', 'Cybersecurity', 'Business Analytics', 'Pharmaceutical Science', 'Finance & Fintech', 'Digital Marketing', 'Cloud Computing'],
    costs: [['Bachelor’s tuition', '€10,000 – €25,000 / year'], ['Master’s tuition', '€10,000 – €30,000 / year'], ['Proof of funds (living)', '€10,000 / year'], ['Immigration registration (IRP)', '€300 / year']],
    intakes: [['September', 'Main intake — widest choice'], ['January / February', 'Selected programmes']],
    visa: 'Sri Lankan students apply online for a long-stay (D) study visa through AVATS, with an offer letter, proof of tuition payment, evidence of funds and private medical insurance. After arriving, you register with immigration and receive an Irish Residence Permit (Stamp 2).',
    work: [['During studies', 'Up to 20 hours / week in term, 40 hours / week in holidays (Stamp 2)'], ['After graduation', 'Stamp 1G — up to 1 year (bachelor’s) or 2 years (master’s)'], ['Dependants', 'Generally not permitted on a student visa; pathways open later through employment permits']],
    faqs: [
      ['How much money do I need to show for Ireland?', 'You must show at least €10,000 for each year of study for living costs, plus proof that your first-year tuition has been paid.'],
      ['Can I bring my family to Ireland?', 'Dependants generally cannot join students. After graduating and finding work on a Critical Skills Employment Permit, family reunification may become possible.'],
    ],
  },
];

/* ---------- Services ---------- */
export const services = [
  { icon: 'compass', title: 'Career counselling', short: 'One-to-one guidance to match your goals, grades and budget to the right path.', points: ['Profile and eligibility assessment', 'Career-focused course mapping', 'Honest budget planning', 'Parent consultations welcome'] },
  { icon: 'building', title: 'University selection', short: 'A shortlist of the right universities and courses — not just the ones that pay us most.', points: ['Ranked shortlist with reasons', 'Entry requirements check', 'Cost and scholarship comparison', 'Campus and city insights'] },
  { icon: 'file', title: 'Application support', short: 'Polished applications, motivation letters and documents that stand out.', points: ['Motivation letter / SOP coaching', 'Document checklist and review', 'Entrance exam preparation (Finland)', 'Offer tracking'] },
  { icon: 'shield', title: 'Visa assistance', short: 'Accurate, well-prepared residence permit and visa files for every destination.', points: ['Financial document guidance', 'Blocked account setup (Germany)', 'Embassy appointment planning', 'Lodgement and follow-up'] },
  { icon: 'award', title: 'Scholarships', short: 'We find and apply for scholarships and tuition waivers you are eligible for.', points: ['University tuition waivers', 'Merit-based scholarships', 'Government scholarships', 'Application essays'] },
  { icon: 'book', title: 'IELTS / PTE guidance', short: 'Know exactly which test and score you need — and how to reach it.', points: ['Test selection advice', 'Practice materials', 'Partner coaching classes', 'Exam booking help'] },
  { icon: 'plane', title: 'Pre-departure briefing', short: 'Arrive prepared: travel, banking, winter clothing and settling-in tips.', points: ['Packing and travel checklist', 'Banking, SIM and transport', 'Part-time work rules', 'Meet other students going'] },
  { icon: 'home', title: 'Accommodation', short: 'Safe, affordable housing arranged before you land.', points: ['Student housing foundations', 'Private student residences', 'Shared apartments', 'Airport pick-up guidance'] },
];

/* ---------- How it works ---------- */
export const steps = [
  ['Free consultation', 'Meet a counsellor in person, by phone or on Zoom to discuss your goals.'],
  ['Personal study plan', 'Receive a shortlist of countries, courses and universities with full costs.'],
  ['Applications & offers', 'We prepare and submit your applications and track every offer.'],
  ['Visa & finances', 'We build a strong residence permit or visa file and plan your embassy appointment.'],
  ['Fly & thrive', 'Pre-departure briefing, accommodation and support after you arrive.'],
];

/* ---------- Testimonials (SAMPLE — replace with real, consented reviews) ---------- */
export const testimonials = [
  { name: 'Nethmi P.', course: 'Bachelor of Business Administration', uni: 'University of Applied Sciences, Finland', dest: 'finland', quote: 'I received a 50% scholarship and my residence permit within weeks. My counsellor prepared me for the entrance exam and explained every option honestly.' },
  { name: 'Kavindu R.', course: 'MSc Computer Science', uni: 'University in Stockholm, Sweden', dest: 'sweden', quote: 'Applying through University Admissions felt confusing until we did it together. Now I study and work part-time in Stockholm.' },
  { name: 'Tharushi W.', course: 'MSc Mechanical Engineering', uni: 'Public university, Germany', dest: 'germany', quote: 'I had no idea studying in Germany could be this affordable. They guided me through the blocked account and visa appointment step by step.' },
  { name: 'Dilshan F.', course: 'BSc Computer Science', uni: 'International branch campus, Kuala Lumpur', dest: 'malaysia', quote: 'Malaysia was perfect for my budget, and I can transfer abroad for my final year. The whole process was smooth and quick.' },
  { name: 'Ayesha M.', course: 'MSc Data Analytics', uni: 'University in Dublin, Ireland', dest: 'ireland', quote: 'They helped with my AVATS application, proof of funds and accommodation. The pre-departure session answered questions I didn’t even know I had.' },
  { name: 'Sahan J.', course: 'Bachelor of Nursing', uni: 'University of Applied Sciences, Finland', dest: 'finland', quote: 'Fast replies on WhatsApp, clear fees and no pressure. My family felt confident from day one.' },
];

/* ---------- Events ---------- */
export const events = [
  { date: '2026-11-07', time: '10.00 am – 4.00 pm', type: 'Education fair', title: 'European Study Expo 2026 — Nittambuwa', place: 'Nittambuwa (venue TBC)', desc: 'Meet representatives from universities in Finland, Sweden, Germany and Ireland. On-the-spot profile assessments and scholarship advice.', img: 'conference' },
  { date: '2026-11-19', time: '7.00 pm – 8.00 pm', type: 'Webinar', title: 'Finland joint application 2027: how to prepare', place: 'Online (Zoom)', desc: 'Programmes, entrance exams, scholarships and residence permits for the autumn 2027 intake — before applications open in January.', img: 'seminar' },
  { date: '2026-12-05', time: '9.30 am – 1.00 pm', type: 'Workshop', title: 'Germany & Sweden application workshop', place: 'Nittambuwa Office', desc: 'Hands-on help with University Admissions (Sweden), uni-assist (Germany), blocked accounts and motivation letters.', img: 'workshop' },
  { date: '2027-01-16', time: '10.00 am – 3.00 pm', type: 'Open day', title: 'Malaysia & Ireland intake open day', place: 'Nittambuwa Office', desc: 'Free profile assessments, IELTS/PTE guidance and application fee waivers on the day.', img: 'networking' },
];

/* ---------- Intakes & scholarships ---------- */
export const intakeTable = [
  ['Finland', 'Autumn (Aug / Sep), Spring (Jan)', 'Joint application in January / around September'],
  ['Sweden', 'Autumn (Aug), Spring (Jan)', 'Mid-Oct – mid-Jan / Jun – mid-Aug'],
  ['Germany', 'Winter (Oct), Summer (Apr)', 'By ~15 July / by ~15 January (varies)'],
  ['Malaysia', 'Jan / Feb, May, September', '2–4 months before each intake'],
  ['Ireland', 'September, January', 'Nov – May / Aug – Oct'],
];

export const scholarships = [
  { title: 'Finnish university scholarships', dest: 'Finland', value: '50% – 100% tuition', level: 'Bachelor’s / Master’s', desc: 'Most Finnish universities offer tuition waivers to high-achieving non-EU students, often renewable each year.' },
  { title: 'Swedish Institute Scholarships (SISGP)', dest: 'Sweden', value: 'Full tuition + living', level: 'Master’s', desc: 'Fully funded scholarships for future global leaders with work and leadership experience.' },
  { title: 'Swedish university tuition waivers', dest: 'Sweden', value: '25% – 100% tuition', level: 'Bachelor’s / Master’s', desc: 'Merit-based tuition-fee scholarships offered directly by Swedish universities.' },
  { title: 'DAAD Scholarships', dest: 'Germany', value: 'Monthly stipend', level: 'Master’s / PhD', desc: 'German Academic Exchange Service awards, particularly for development-related postgraduate courses.' },
  { title: 'Government of Ireland International Education Scholarship', dest: 'Ireland', value: '€10,000 stipend + full fee waiver', level: 'Master’s / PhD', desc: 'Prestigious scholarship for high-calibre international students at Irish higher education institutions.' },
  { title: 'Malaysia university merit awards', dest: 'Malaysia', value: '10% – 50% tuition', level: 'All levels', desc: 'Automatic and competitive awards from Malaysian universities and branch campuses based on your results.' },
];

/* ---------- FAQs (home) ---------- */
export const faqs = [
  ['Is the first consultation really free?', 'Yes. Your first consultation — in person, by phone or on Zoom — is completely free with no obligation.'],
  ['How much does it cost to study abroad?', 'It depends on the country, course and city. As a guide, annual tuition ranges from almost nothing at German public universities to around €10,000–€30,000 in Ireland, with Finland and Sweden in between (often reduced by scholarships). Malaysia is the most affordable overall. We give you a full, honest cost breakdown before you apply.'],
  ['What qualifications do I need?', 'Most bachelor’s programmes accept good A/L results; foundation and diploma pathways are available (especially in Malaysia) if you do not meet direct entry. Master’s programmes require a recognised bachelor’s degree or equivalent.'],
  ['Do I need IELTS or PTE?', 'Usually, yes — but some universities accept other evidence of English or run their own tests. We tell you exactly which test and score you need.'],
  ['When should I start my application?', 'Ideally 8–12 months before your intake. Finland’s joint application opens in January and Sweden’s closes in mid-January for the autumn intake, so early planning matters.'],
  ['Can I work while studying?', 'Yes. Sweden has no fixed weekly limit, Finland allows about 30 hours a week, Ireland 20 hours in term, and Germany 140 full days a year. Malaysia allows work only during semester breaks. See each destination page for details.'],
  ['Can my spouse or children come with me?', 'It depends on the country and course level. Germany and Sweden are generally more open; Ireland usually does not allow student dependants. We assess your family’s eligibility during the consultation.'],
  ['Do you help after I arrive?', 'Yes. We help with accommodation, airport pick-up guidance and stay in touch through your first semester.'],
];

/* ---------- Team (PLACEHOLDER) ---------- */
export const team = [
  { name: 'Full Name', role: 'Founder & Managing Director', bio: '15+ years in international education. Former university admissions officer.' },
  { name: 'Full Name', role: 'Head of Counselling', bio: 'Specialist in Finland and Sweden admissions and scholarships.' },
  { name: 'Full Name', role: 'Senior Visa Consultant', bio: 'Expert in German and Irish student visa applications.' },
  { name: 'Full Name', role: 'Malaysia Counsellor', bio: 'Guides students through EMGS applications and transfer pathways.' },
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
  { icon: 'briefcase', title: 'Work & skilled migration', desc: 'Employment-based residence for skilled professionals and graduates.', items: ['Germany — Opportunity Card (Chancenkarte) & EU Blue Card', 'Finland — residence permits for employed persons & specialists', 'Sweden — work permits', 'Ireland — Critical Skills & General Employment Permits'] },
  { icon: 'globe', title: 'Visitor visas', desc: 'Visit family, attend graduations or travel for tourism.', items: ['Schengen visit visas — Finland, Sweden & Germany', 'Ireland short-stay (C) visit visa', 'Malaysia eVisa / visit pass', 'Graduation and family visit invitations'] },
  { icon: 'users', title: 'Dependent & family visas', desc: 'Keep your family together while you study or work abroad.', items: ['Spouse and partner residence permits', 'Children’s residence permits and schooling', 'Family reunification after employment', 'Dependant passes (Malaysia, postgraduate)'] },
];

/* ---------- Blog posts ---------- */
export const posts = [
  {
    slug: 'finland-vs-sweden-for-sri-lankan-students', category: 'Destinations', date: '2026-09-22', read: 6, img: 'helsinki',
    title: 'Finland vs Sweden: which is right for Sri Lankan students in 2027?',
    excerpt: 'Tuition, scholarships, work rights and post-study options compared side by side.',
    body: [
      ['p', 'Finland and Sweden are two of the most popular Nordic destinations for Sri Lankan students. Both offer high-quality, English-taught degrees and a safe, modern lifestyle, but they differ in ways that matter for your budget and plans.'],
      ['h2', 'Tuition and scholarships'],
      ['p', 'Finnish universities commonly offer tuition waivers of 50–100%, which makes the real cost much lower than the published fee. Sweden’s tuition is similar or slightly higher, but scholarships are more competitive.'],
      ['h2', 'Applying'],
      ['p', 'Finland uses a joint application in January, often with entrance exams. Sweden uses a central portal with a mid-January deadline for the autumn intake. Both reward early preparation.'],
      ['h2', 'Work during and after study'],
      ['p', 'Sweden sets no fixed weekly work limit for students, while Finland allows about 30 hours a week on average. After graduation, Finland offers up to 2 years to look for work and Sweden up to 12 months.'],
      ['h2', 'Our advice'],
      ['p', 'There is no single “best” country. Choose based on your course, budget, family situation and career goals — and talk to a counsellor who will compare both honestly.'],
    ],
  },
  {
    slug: 'germany-blocked-account-explained', category: 'Visas', date: '2026-08-30', read: 5, img: 'berlin',
    title: 'The German blocked account, explained simply',
    excerpt: 'What it is, how much you need and how to open one before your visa appointment.',
    body: [
      ['p', 'Almost every Sri Lankan student going to Germany needs a blocked account (Sperrkonto). It proves you can cover your living costs for the first year.'],
      ['h2', 'How much do I need?'],
      ['p', 'The required amount is set by the German government and is currently about €11,900 per year. You can withdraw a fixed monthly amount once you arrive in Germany.'],
      ['h2', 'How do I open one?'],
      ['p', 'Several approved providers let you open a blocked account online. You transfer the funds from Sri Lanka and receive a confirmation to include in your visa application.'],
      ['h2', 'Common mistakes'],
      ['p', 'Leave enough time for the international transfer, and check that the amount matches the latest requirement before your embassy appointment.'],
    ],
  },
  {
    slug: 'finland-joint-application-guide', category: 'Applications', date: '2026-08-12', read: 5, img: 'aurora',
    title: 'How Finland’s joint application works — a step-by-step guide',
    excerpt: 'Key dates, entrance exams and documents for the autumn 2027 intake.',
    body: [
      ['p', 'Most English-taught bachelor’s programmes in Finland are open for applications at the same time, through one national portal.'],
      ['h2', 'Key dates'],
      ['p', 'The main joint application for autumn programmes opens in early January and stays open for about two weeks. Results are usually published in spring.'],
      ['h2', 'Entrance exams'],
      ['p', 'Many universities of applied sciences use an online entrance exam, sometimes followed by an interview. Practising with past exam formats makes a big difference.'],
      ['h2', 'Documents'],
      ['p', 'Prepare certified copies of your O/L and A/L results, your passport and proof of English early, as some must be uploaded before the deadline.'],
    ],
  },
  {
    slug: 'studying-in-malaysia-transfer-programmes', category: 'Destinations', date: '2026-07-28', read: 4, img: 'kualaLumpur',
    title: 'Studying in Malaysia: affordable degrees and transfer programmes',
    excerpt: 'How Sri Lankan students use Malaysia as a smart, budget-friendly pathway.',
    body: [
      ['p', 'Malaysia is one of the most affordable places to earn an internationally recognised degree — and it is just a short flight from Colombo.'],
      ['h2', 'Branch campuses'],
      ['p', 'Several UK and Australian universities run campuses in Malaysia, where you can earn the same degree as at the home campus for a fraction of the cost.'],
      ['h2', 'Transfer programmes'],
      ['p', 'Many Malaysian institutions offer credit transfer options, so you can complete part of your degree in Malaysia and finish at a partner university overseas.'],
    ],
  },
  {
    slug: 'ireland-stamp-1g-stay-back', category: 'Visas', date: '2026-07-10', read: 5, img: 'dublinStreet',
    title: 'Ireland’s Stamp 1G: staying on to work after graduation',
    excerpt: 'Who qualifies, how long you can stay and how it leads to employment permits.',
    body: [
      ['p', 'Ireland’s Third Level Graduate Programme (Stamp 1G) allows eligible international graduates to stay and look for work after their studies.'],
      ['h2', 'How long can I stay?'],
      ['p', 'Graduates with a level 8 (honours bachelor’s) degree can usually stay for up to 1 year, and level 9 (master’s) graduates for up to 2 years in total.'],
      ['h2', 'Moving to an employment permit'],
      ['p', 'Once you find a qualifying job, you can move to a Critical Skills or General Employment Permit — an important step towards long-term residence.'],
    ],
  },
  {
    slug: 'pre-departure-checklist', category: 'Student life', date: '2026-06-18', read: 4, img: 'plane',
    title: 'The ultimate pre-departure checklist',
    excerpt: 'Documents, money, winter packing and your first week — all in one place.',
    body: [
      ['p', 'Your visa or residence permit is approved — congratulations! Here is what to sort out before you fly.'],
      ['h2', 'Documents to carry'],
      ['p', 'Passport and residence permit or visa, admission letter, accommodation confirmation, insurance details, and copies of your certificates in your hand luggage.'],
      ['h2', 'Prepare for the weather'],
      ['p', 'Nordic and German winters are cold and dark. Pack a few warm layers, but buy your heavy winter coat and boots locally — they are better suited and often cheaper.'],
      ['h2', 'Money and banking'],
      ['p', 'Carry some local currency, inform your bank you are travelling and research student bank accounts at your destination.'],
    ],
  },
];
