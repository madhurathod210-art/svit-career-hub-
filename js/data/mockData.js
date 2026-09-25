/**
 * Mock Data Repository for Antigravity Student & College Discovery Hub
 * Comprehensive seed data for Colleges across Government, Private, Autonomous,
 * and Deemed institutions covering Small Boutique to Mega Campuses, Scholarships,
 * and Student Life Metrics.
 */

export const COLLEGES_DATA = [
  // --- PREMIER GOVERNMENT TECHNICAL INSTITUTES (IITs / NITs / IIITs) ---
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay (IITB)",
    shortName: "IIT Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    stream: "Engineering",
    instituteType: "Government / Institute of National Importance",
    degreesOffered: ["B.Tech", "Dual Degree (B.Tech+M.Tech)", "M.Tech", "B.Des", "M.Sc", "Ph.D."],
    established: 1958,
    nirfRank: 3,
    naacGrade: "A++",
    rating: 4.9,
    reviewsCount: 1420,
    annualTuitionFee: 220000,
    hostelFee: 45000,
    medianPackage: 2150000,
    highestPackage: 36700000,
    topRecruiters: ["Google", "Microsoft", "Jane Street", "Apple", "Qualcomm", "BCG"],
    cutoffEstimate: "JEE Advanced AIR: 1 - 250 (CSE)",
    entranceExams: ["JEE Advanced", "GATE", "CEED", "UCEED", "JAM"],
    campusSizeAcres: 550,
    campusSize: "550 Acres (Lakeside Campus)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1450,
    studentFacultyRatio: "1:8",
    attendancePolicy: "75% Strict with Biometrics",
    hostelRating: 4.6,
    fests: "Mood Indigo (Asia's Largest Cultural Fest), Techfest (Asia's Largest Science & Tech Fest)",
    badge: "Premier Govt Tech Institute",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    tags: ["Government IIT", "NIRF Top 5", "100% Fee Waiver Eligible", "Mega Campus", "B.Tech"],
    scholarships: [
      { name: "IITB Merit-cum-Means (MCM)", benefit: "100% Full Tuition Waiver + ₹1,000/month pocket allowance", eligibility: "Family annual income < ₹5.0 Lakh" },
      { name: "Govt of India Full Fee Exemption", benefit: "100% Tuition Fee Refund for SC/ST/PwD students", eligibility: "All SC/ST/PwD enrolled students" },
      { name: "Partial Fee Remission", benefit: "2/3rd Tuition Fee Exemption (66.6% off)", eligibility: "Family income between ₹1.0L and ₹5.0L per annum" }
    ],
    roiBreakevenMonths: "1.4 Months to recover 4-year tuition fee",
    insiderTips: "Hostels 12, 13, and 14 offer the newest infrastructure with lakeside views of Powai Lake. Coding culture at CSE department is among the best in Asia.",
    facilities: ["Supercomputing Center", "Olympic Swimming Pool", "Incubation Hub (SINE)", "24/7 Central Library", "Hostels with Wi-Fi", "Student Activity Center"],
    description: "IIT Bombay is a world-renowned government technological institution pioneering in cutting-edge computer science, aerospace, electrical engineering, and interdisciplinary research.",
    counselingTimeline: "JoSAA Counseling (June - July), Spot Rounds (August)",
    eligibility: "10+2 with Physics, Chemistry & Math (75% aggregate or Top 20 percentile) + JEE Advanced qualification."
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi (IITD)",
    shortName: "IIT Delhi",
    city: "New Delhi",
    state: "Delhi",
    stream: "Engineering",
    instituteType: "Government / Institute of National Importance",
    degreesOffered: ["B.Tech", "Dual Degree", "M.Tech", "M.Sc", "Ph.D."],
    established: 1961,
    nirfRank: 2,
    naacGrade: "A++",
    rating: 4.9,
    reviewsCount: 1280,
    annualTuitionFee: 225000,
    hostelFee: 42000,
    medianPackage: 2050000,
    highestPackage: 24000000,
    topRecruiters: ["Microsoft", "Goldman Sachs", "Uber", "Tower Research", "McKinsey"],
    cutoffEstimate: "JEE Advanced AIR: 10 - 320 (CSE)",
    entranceExams: ["JEE Advanced", "GATE", "JAM", "CAT"],
    campusSizeAcres: 320,
    campusSize: "320 Acres",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1200,
    studentFacultyRatio: "1:9",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.5,
    fests: "Rendezvous (North India's Largest Fest), Tryst (Tech Fest)",
    badge: "Capital Tech Hub",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    tags: ["Government IIT", "NIRF Top 5", "Capital Location", "Fee Waiver Eligible", "B.Tech"],
    scholarships: [
      { name: "IIT Delhi MCM Scholarship", benefit: "Full Tuition Waiver + ₹1,000/mo", eligibility: "Parental income < ₹4.5 Lakh/yr" },
      { name: "Alumni Endowment Scholarship", benefit: "₹1,00,000/yr Merit Grant", eligibility: "Top 10% batch rank" }
    ],
    roiBreakevenMonths: "1.5 Months to recover degree investment",
    insiderTips: "Located right next to Hauz Khas. The startup incubator (FITT) has produced over 100+ funded deep-tech startups.",
    facilities: ["Nanoscale Research Lab", "Sports Complex", "Innovation Incubation Lab", "Central Research Facility", "Air-conditioned Lecture Halls"],
    description: "Located in the heart of India's capital, IIT Delhi excels in deep-tech research, artificial intelligence, robotics, and vibrant entrepreneurship programs.",
    counselingTimeline: "JoSAA Rounds (June - July), Direct Institute Counseling for PG",
    eligibility: "Class 12th PCM 75%+ or State Top 20 percentile, JEE Main rank for Adv eligibility, JEE Adv rank."
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras (IITM)",
    shortName: "IIT Madras",
    city: "Chennai",
    state: "Tamil Nadu",
    stream: "Engineering",
    instituteType: "Government / Institute of National Importance",
    degreesOffered: ["B.Tech", "BS Data Science", "Dual Degree", "M.Tech", "Ph.D."],
    established: 1959,
    nirfRank: 1,
    naacGrade: "A++",
    rating: 4.95,
    reviewsCount: 1530,
    annualTuitionFee: 215000,
    hostelFee: 40000,
    medianPackage: 2200000,
    highestPackage: 42000000,
    topRecruiters: ["Google", "Microsoft", "Texas Instruments", "Qualcomm", "BCG", "Airbus"],
    cutoffEstimate: "JEE Advanced AIR: 15 - 410 (CSE)",
    entranceExams: ["JEE Advanced", "GATE", "JAM", "IITM DS Qualifier"],
    campusSizeAcres: 617,
    campusSize: "617 Acres (Wildlife Sanctuary)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1350,
    studentFacultyRatio: "1:8",
    attendancePolicy: "85% Strict",
    hostelRating: 4.7,
    fests: "Saarang (Cultural Fest), Shaastra (ISO Certified Tech Fest)",
    badge: "#1 Overall NIRF Rank in India",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    tags: ["Government IIT", "NIRF #1", "Mega Campus", "B.Tech", "BS Data Science"],
    scholarships: [
      { name: "IITM Institute Merit-cum-Means", benefit: "100% Tuition Waiver + Free Mess", eligibility: "Income < ₹4.5 Lakh/yr" },
      { name: "Girish Reddy Scholarship", benefit: "₹50,000/yr Cash Award", eligibility: "Merit in first year" }
    ],
    roiBreakevenMonths: "1.3 Months",
    insiderTips: "Look out for spotted deer and blackbucks on campus roads. The CFI (Centre for Innovation) is open 24/7 for building prototypes.",
    facilities: ["IITM Discovery Campus", "CFI Student Innovation Center", "National Supercomputer Param Seva", "Open Air Theatre", "Deer Reserve"],
    description: "Ranked #1 Engineering institute in India by NIRF for 8 consecutive years, IIT Madras hosts India's first university-based research park and cutting-edge quantum research.",
    counselingTimeline: "JoSAA Counseling (June - July)",
    eligibility: "10+2 PCM with 75%+ aggregate and qualifying rank in JEE Advanced."
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli (NITT)",
    shortName: "NIT Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    stream: "Engineering",
    instituteType: "Government / NIT",
    degreesOffered: ["B.Tech", "B.Arch", "M.Tech", "MCA", "MBA", "Ph.D."],
    established: 1964,
    nirfRank: 9,
    naacGrade: "A++",
    rating: 4.75,
    reviewsCount: 890,
    annualTuitionFee: 150000,
    hostelFee: 40000,
    medianPackage: 1580000,
    highestPackage: 5200000,
    topRecruiters: ["Amazon", "Cisco", "Texas Instruments", "Qualcomm", "Morgan Stanley"],
    cutoffEstimate: "JEE Main AIR: 1200 - 4500 (CSE)",
    entranceExams: ["JEE Main", "GATE", "NIMCET"],
    campusSizeAcres: 800,
    campusSize: "800 Acres (Mega Campus)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1050,
    studentFacultyRatio: "1:11",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.3,
    fests: "Festember (South India's Top Cultural Fest), Pragyan (Tech Fest)",
    badge: "#1 Ranked NIT in India",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    tags: ["Government NIT", "Top NIT", "Mega Campus", "B.Tech", "MCA"],
    scholarships: [
      { name: "NITT Fee Remission Scheme", benefit: "100% Tuition Waiver for income < 1L; 66% waiver for income 1L-5L", eligibility: "Income criteria" },
      { name: "Central Sector Scholarship (NSP)", benefit: "₹20,000/yr", eligibility: "Top 20 percentile in 12th" }
    ],
    roiBreakevenMonths: "1.2 Months",
    insiderTips: "The 'Octagon' computer center has high speed internet open 24/7. Rent a bicycle because the 800-acre campus is vast.",
    facilities: ["Octagon Computer Center", "Siemens Center of Excellence", "Hostel City", "Olympic Standard Ground", "Library with 100k+ Books"],
    description: "Consistently ranked as the best NIT in India, NIT Trichy offers stellar core and computer engineering programs with strong industrial ties.",
    counselingTimeline: "JoSAA & CSAB Special Rounds (June - August)",
    eligibility: "10+2 with PCM 75%+ and top percentile/rank in JEE Main."
  },
  {
    id: "nit-surathkal",
    name: "National Institute of Technology Karnataka, Surathkal (NITK)",
    shortName: "NIT Surathkal",
    city: "Mangaluru",
    state: "Karnataka",
    stream: "Engineering",
    instituteType: "Government / NIT",
    degreesOffered: ["B.Tech", "M.Tech", "MCA", "MBA", "Ph.D."],
    established: 1960,
    nirfRank: 12,
    naacGrade: "A++",
    rating: 4.78,
    reviewsCount: 810,
    annualTuitionFee: 155000,
    hostelFee: 42000,
    medianPackage: 1620000,
    highestPackage: 5400000,
    topRecruiters: ["Google", "Uber", "Oracle", "Wells Fargo", "Samsung R&D"],
    cutoffEstimate: "JEE Main AIR: 1500 - 5200 (CSE/IT)",
    entranceExams: ["JEE Main", "GATE", "NIMCET"],
    campusSizeAcres: 295,
    campusSize: "295 Acres (Private Beach)",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 980,
    studentFacultyRatio: "1:10",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.6,
    fests: "Incident (Beach Cultural Fest), Engineer (Tech Fest)",
    badge: "Beachfront Govt Campus",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    tags: ["Government NIT", "Private Beach", "Mid-Size Campus", "B.Tech"],
    scholarships: [
      { name: "NITK Fee Concession", benefit: "100% Tuition Waiver for income < 1L; 66% waiver for income 1L-5L", eligibility: "Income criteria" }
    ],
    roiBreakevenMonths: "1.3 Months",
    insiderTips: "Surathkal has its own private beach and lighthouse where students unwind after coding contests.",
    facilities: ["Private Beach & Lighthouse", "Central Computing Facility", "High Voltage Testing Lab", "Swimming Pool", "Student Activity Center"],
    description: "NITK Surathkal is famous for having its own private Arabian Sea beach, stellar placement statistics, and strong alumni network across global tech giants.",
    counselingTimeline: "JoSAA / CSAB Counseling (June - August)",
    eligibility: "Class 12th PCM 75%+ and qualifying rank in JEE Main."
  },
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad (IIITH)",
    shortName: "IIIT Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    stream: "Engineering",
    instituteType: "Autonomous / Public-Private Partnership",
    degreesOffered: ["B.Tech", "Dual Degree (B.Tech+MS by Research)", "M.Tech", "Ph.D."],
    established: 1998,
    nirfRank: 55,
    naacGrade: "A++",
    rating: 4.92,
    reviewsCount: 930,
    annualTuitionFee: 360000,
    hostelFee: 55000,
    medianPackage: 3200000,
    highestPackage: 10200000,
    topRecruiters: ["Google", "Meta", "Apple", "CodeNation", "Rubrik", "Tower Research"],
    cutoffEstimate: "JEE Main AIR: 400 - 1800 (CSE) / UGEE Exam",
    entranceExams: ["JEE Main", "UGEE", "SPEC", "DASA"],
    campusSizeAcres: 66,
    campusSize: "66 Acres (Boutique Research Campus)",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 350,
    studentFacultyRatio: "1:7",
    attendancePolicy: "85% Strict",
    hostelRating: 4.4,
    fests: "Felicity (Cultural & Tech Fest)",
    badge: "#1 Coding & AI Research Hub in India",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tags: ["Autonomous / PPP", "Boutique Focus", "Top Placements", "B.Tech", "Dual Degree"],
    scholarships: [
      { name: "IIITH Alumni Fund Need-Based Aid", benefit: "Up to 100% Tuition Loan/Grant (Repayable upon employment)", eligibility: "Family income < ₹8.0 Lakh" },
      { name: "Pratibha Scholarship (Telangana)", benefit: "₹20,000/yr", eligibility: "State merit rankers" }
    ],
    roiBreakevenMonths: "1.4 Months (₹32 LPA median vs ₹14.4L total fee)",
    insiderTips: "Unmatched research culture. Undergraduates publish papers at CVPR, NeurIPS, and ACL in their 2nd/3rd years.",
    facilities: ["Kohli Center on Intelligent Systems", "Language Technologies Research Center", "CIE Startup Incubator", "Robotics Lab"],
    description: "IIIT Hyderabad is universally acknowledged as India's premier computer science institution for competitive programming, AI research, and high median salaries exceeding ₹32 LPA.",
    counselingTimeline: "IIITH Admission Portal (UGEE in May, JEE Main mode in June)",
    eligibility: "Class 12th PCM with top score in JEE Main or qualification in IIITH UGEE entrance examination."
  },
  {
    id: "iiit-delhi",
    name: "Indraprastha Institute of Information Technology Delhi (IIITD)",
    shortName: "IIIT Delhi",
    city: "New Delhi",
    state: "Delhi",
    stream: "Engineering",
    instituteType: "State Government University / Autonomous",
    degreesOffered: ["B.Tech (CSAI, CSAM, CSD, ECE)", "M.Tech", "Ph.D."],
    established: 2008,
    nirfRank: 75,
    naacGrade: "A",
    rating: 4.7,
    reviewsCount: 620,
    annualTuitionFee: 425000,
    hostelFee: 65000,
    medianPackage: 1850000,
    highestPackage: 5100000,
    topRecruiters: ["Google", "Microsoft", "Tower Research", "SanDisk", "Goldman Sachs"],
    cutoffEstimate: "JAC Delhi Rank: 2000 - 9000",
    entranceExams: ["JEE Main", "UCEED (for CSD branch)"],
    campusSizeAcres: 25,
    campusSize: "25 Acres (Boutique Tech Campus)",
    campusScale: "Boutique Campus (<50 Acres)",
    studentIntake: 450,
    studentFacultyRatio: "1:9",
    attendancePolicy: "75% Strict",
    hostelRating: 4.8,
    fests: "Odyssey (Cultural Fest), Esya (Tech Fest)",
    badge: "Boutique Deep-Tech State University",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    tags: ["State Government", "Boutique Campus", "Delhi Quota", "B.Tech"],
    scholarships: [
      { name: "Delhi Govt Merit-cum-Means Fee Waiver", benefit: "100% Fee Waiver (Income < ₹2.5L); 50% Waiver (Income ₹2.5L - ₹6.0L)", eligibility: "Delhi domicile students" }
    ],
    roiBreakevenMonths: "2.8 Months",
    insiderTips: "Ultra-modern hostel blocks with single-seater rooms for 3rd and 4th years, swimming pool, and 24-hour campus labs.",
    facilities: ["Infosys Centre for AI", "Design Innovation Hub", "24/7 Labs", "Indoor Squash Court"],
    description: "An elite state-funded research university in Delhi focusing on computer science, AI, computational biology, and human-computer interaction.",
    counselingTimeline: "JAC Delhi Counseling (June - July)",
    eligibility: "Class 12 with 70%+ in PCM and valid rank in JEE Main."
  },

  // --- PREMIER PRIVATE UNIVERSITIES & DEEMED INSTITUTIONS ---
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    stream: "Engineering",
    instituteType: "Private / Deemed to be University",
    degreesOffered: ["B.E. (Hons)", "M.Sc Dual Degree (B.E.+M.Sc)", "B.Pharm", "M.E.", "MBA", "Ph.D."],
    established: 1964,
    nirfRank: 20,
    naacGrade: "A",
    rating: 4.88,
    reviewsCount: 1180,
    annualTuitionFee: 540000,
    hostelFee: 65000,
    medianPackage: 1820000,
    highestPackage: 60700000,
    topRecruiters: ["Google", "Amazon", "NVIDIA", "De Shaw", "Oracle", "Flipkart"],
    cutoffEstimate: "BITSAT Score: 330/390 (CSE)",
    entranceExams: ["BITSAT", "BITS HD", "GRE/GATE"],
    campusSizeAcres: 328,
    campusSize: "328 Acres",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1100,
    studentFacultyRatio: "1:12",
    attendancePolicy: "0% Attendance Rule (Complete Flexibility)",
    hostelRating: 4.5,
    fests: "OASIS (Asia's 2nd Largest Cultural Fest), APOGEE (Technical Fest), BOSM (Sports Fest)",
    badge: "0% Attendance & Meritocratic Culture",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Deemed", "0% Attendance", "Dual Degree Option", "Mega Campus", "B.Tech"],
    scholarships: [
      { name: "BITS Merit-cum-Need (MCN) Scholarship", benefit: "80% to 100% Tuition Fee Waiver for 30%+ of the batch", eligibility: "Family income < ₹12.0 Lakh/yr & CGPA > 6.0" },
      { name: "Pure Merit Scholarship", benefit: "100% Tuition Fee Waiver for Top 1% students; 40% for Top 2%", eligibility: "Semester GPA based" }
    ],
    roiBreakevenMonths: "3.5 Months",
    insiderTips: "The 0% attendance policy lets you build startups, freelance, or code round the clock. Practice School guarantees corporate internship.",
    facilities: ["Practice School (PS-I & PS-II)", "Telepresence Classrooms", "Modern Robotics Lab", "Vast Clock Tower Quad", "Extensive Gymnasium"],
    description: "BITS Pilani is India's leading private engineering university celebrated for its merit-based admission without quotas, flexible dual degrees, and industry Practice School programs.",
    counselingTimeline: "BITS Admission Rounds (Iterative counseling June to August)",
    eligibility: "Aggregate 75% marks in PCM with minimum 60% in each subject in Class 12 and valid BITSAT score."
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology (VIT)",
    shortName: "VIT Vellore",
    city: "Vellore",
    state: "Tamil Nadu",
    stream: "Engineering",
    instituteType: "Private / Deemed to be University",
    degreesOffered: ["B.Tech", "Integrated M.Tech", "BCA", "MCA", "B.Des", "MBA", "Ph.D."],
    established: 1984,
    nirfRank: 11,
    naacGrade: "A++",
    rating: 4.62,
    reviewsCount: 2200,
    annualTuitionFee: 295000,
    hostelFee: 95000,
    medianPackage: 950000,
    highestPackage: 10200000,
    topRecruiters: ["Microsoft", "Amazon", "Intel", "Deloitte", "TCS Digital", "Wipro Turbo"],
    cutoffEstimate: "VITEEE Rank: 1 - 7500 (Category 1 CSE)",
    entranceExams: ["VITEEE", "VITMEE"],
    campusSizeAcres: 372,
    campusSize: "372 Acres (Mega Campus)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 5500,
    studentFacultyRatio: "1:15",
    attendancePolicy: "75% Mandatory (9GPA holders get attendance exemption)",
    hostelRating: 4.4,
    fests: "Riviera (International Cultural & Sports Fest), graVITas (Tech Fest)",
    badge: "#1 Private Engineering Institution (NIRF)",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Deemed", "NIRF #11", "Mega Campus", "Massive Placement Drives", "B.Tech", "BCA / MCA"],
    scholarships: [
      { name: "GV School Development Programme (GVSDP)", benefit: "100% Tuition Waiver + Free Hostel", eligibility: "State & Central Board Rank 1 to 50" },
      { name: "VITEEE Merit Scholarship", benefit: "75% to 50% Tuition Waiver", eligibility: "VITEEE Rank 1 to 500" }
    ],
    roiBreakevenMonths: "3.7 Months",
    insiderTips: "Maintain 9.0+ CGPA to get attendance waiver and first pick of faculty & timetable under Fully Flexible Credit System (FFCS).",
    facilities: ["Smart Classrooms", "Technology Business Incubator", "Central Library", "Indoor Sports Arena", "Multi-cuisine Food Courts"],
    description: "VIT Vellore is one of India's largest and top-ranked private universities, known for flexible credit systems (FFCS), global exchange partnerships, and massive placement drives.",
    counselingTimeline: "VITEEE Counseling Rounds by Rank Phases (May - June)",
    eligibility: "Minimum 60% aggregate in Physics, Chemistry, and Mathematics/Biology in Class 12th + VITEEE ranking."
  },
  {
    id: "manipal-mit",
    name: "Manipal Institute of Technology (MIT Manipal, MAHE)",
    shortName: "Manipal MIT",
    city: "Manipal",
    state: "Karnataka",
    stream: "Engineering",
    instituteType: "Private / Deemed to be University (Institute of Eminence)",
    degreesOffered: ["B.Tech", "B.Des", "M.Tech", "MCA", "Ph.D."],
    established: 1957,
    nirfRank: 61,
    naacGrade: "A++",
    rating: 4.7,
    reviewsCount: 1450,
    annualTuitionFee: 460000,
    hostelFee: 110000,
    medianPackage: 1250000,
    highestPackage: 5475000,
    topRecruiters: ["Microsoft", "SanDisk", "Amazon", "Schneider Electric", "Cisco", "Hero MotoCorp"],
    cutoffEstimate: "MET Rank: 1 - 1800 (CSE)",
    entranceExams: ["MET (Manipal Entrance Test)"],
    campusSizeAcres: 313,
    campusSize: "313 Acres (University Town)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 2200,
    studentFacultyRatio: "1:13",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.7,
    fests: "Revels (Cultural Fest), TechTatva (National Tech Fest)",
    badge: "Institute of Eminence (IoE)",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Deemed", "IoE Status", "Mega Campus", "Vibrant Campus Life", "B.Tech"],
    scholarships: [
      { name: "Kalam-Pai Freeship & Scholars Scholarship", benefit: "100% Tuition Waiver for MET Rank 1-100; 50% Waiver for Rank 101-500", eligibility: "MET Rank based" }
    ],
    roiBreakevenMonths: "4.4 Months",
    insiderTips: "Campus culture is unmatched with MARENA sports complex and formula student racing teams. Alumni includes Satya Nadella (Microsoft CEO).",
    facilities: ["MARENA Sports Complex", "Formula Student Garage", "MIT Central Library", "Innovation Centre", "Student Clubs Hub"],
    description: "MIT Manipal is an Institute of Eminence known for vibrant campus life, alumni like Satya Nadella (Microsoft CEO) and Rajeev Suri, and world-class student technical teams.",
    counselingTimeline: "MET Online Counseling (June - July)",
    eligibility: "Pass in 10+2 with Physics, Mathematics and English with minimum 50% marks + valid score in MET."
  },
  {
    id: "thapar-institute",
    name: "Thapar Institute of Engineering and Technology (TIET)",
    shortName: "Thapar University",
    city: "Patiala",
    state: "Punjab",
    stream: "Engineering",
    established: 1956,
    instituteType: "Private / Deemed to be University",
    degreesOffered: ["B.Tech", "M.Tech", "MCA", "BBA", "MBA", "Ph.D."],
    nirfRank: 22,
    naacGrade: "A+",
    rating: 4.65,
    reviewsCount: 870,
    annualTuitionFee: 490000,
    hostelFee: 75000,
    medianPackage: 1180000,
    highestPackage: 4500000,
    topRecruiters: ["DE Shaw", "Amazon", "Apple", "Zomato", "JPMorgan", "Amdocs"],
    cutoffEstimate: "JEE Main Percentile: 96+ / Class 12 PCM: 95%+",
    entranceExams: ["JEE Main", "Class 12th Merit"],
    campusSizeAcres: 250,
    campusSize: "250 Acres",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 2100,
    studentFacultyRatio: "1:14",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.6,
    fests: "Saturnalia (Cultural Fest), Aranya (Environment Fest)",
    badge: "Historic North India Tech University",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Deemed", "Mid-Size Campus", "High Placement", "B.Tech"],
    scholarships: [
      { name: "TIET Merit-cum-Means Scholarship", benefit: "Full Tuition Fee Waiver for 90%+ aggregate", eligibility: "Income < ₹8.0 Lakh" }
    ],
    roiBreakevenMonths: "5.0 Months",
    insiderTips: "Nava Nalanda central library is open until midnight during exam months. Great student technical societies like MLSC and Creative Computing.",
    facilities: ["Nava Nalanda Central Library", "Venture Lab Incubator", "Modern Hostels", "Sports Stadium", "High Performance Computing"],
    description: "TIET Patiala is one of North India's oldest and most prestigious private engineering universities with academic collaboration with Trinity College Dublin.",
    counselingTimeline: "TIET Direct Online Counseling Rounds (May - July)",
    eligibility: "10+2 with 70%+ in PCM (60% for SC/ST) with valid JEE Main score or direct Class 12 board merit."
  },
  {
    id: "lpu-punjab",
    name: "Lovely Professional University (LPU)",
    shortName: "LPU Punjab",
    city: "Phagwara",
    state: "Punjab",
    stream: "Engineering",
    instituteType: "Private University",
    degreesOffered: ["B.Tech", "BBA", "MBA", "B.Des", "B.Pharm", "B.Sc Agriculture", "MCA"],
    established: 2005,
    nirfRank: 38,
    naacGrade: "A++",
    rating: 4.45,
    reviewsCount: 2900,
    annualTuitionFee: 240000,
    hostelFee: 70000,
    medianPackage: 720000,
    highestPackage: 6400000,
    topRecruiters: ["Cognizant", "Capgemini", "Amazon", "Bosch", "TCS", "Informatica"],
    cutoffEstimate: "LPUNEST Exam: Category 1 (90%+ marks)",
    entranceExams: ["LPUNEST", "JEE Main", "CUET"],
    campusSizeAcres: 600,
    campusSize: "600 Acres (India's Largest Single Campus)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 8500,
    studentFacultyRatio: "1:18",
    attendancePolicy: "75% Biometric",
    hostelRating: 4.3,
    fests: "YouthVibe (Mega Cultural Fest), One India (Cultural Carnival)",
    badge: "India's Largest Single-Campus University",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Private University", "Mega Campus", "Massive Scholarships", "B.Tech", "MBA / Management"],
    scholarships: [
      { name: "LPUNEST Scholarship Scheme", benefit: "Up to 50% Tuition Fee Concession based on LPUNEST score brackets", eligibility: "Merit in LPUNEST / 12th Board > 90%" },
      { name: "Sports & Cultural Scholarship", benefit: "100% Full Scholarship + Free Accommodation for National Medalists", eligibility: "State/National sports players" }
    ],
    roiBreakevenMonths: "4.0 Months",
    insiderTips: "UniMall inside the campus has hypermarkets, bowling alleys, and banks so you rarely need to leave the 600-acre premises.",
    facilities: ["UniMall Shopping Complex", "Indoor Olympic Pool", "Automated Central Library", "UniHospital", "Robotics Labs"],
    description: "LPU is one of India's largest private universities, housing over 30,000+ students from 50+ countries with state-of-the-art sports and incubation infrastructure.",
    counselingTimeline: "LPUNEST Rolling Admission Phases (Jan - July)",
    eligibility: "60% aggregate in 10+2 with PCM/PCB and valid score in LPUNEST or JEE Main."
  },

  // --- PREMIER STATE GOVERNMENT & AUTONOMOUS INSTITUTIONS ---
  {
    id: "dtu-delhi",
    name: "Delhi Technological University (DTU, formerly DCE)",
    shortName: "DTU Delhi",
    city: "New Delhi",
    state: "Delhi",
    stream: "Engineering",
    instituteType: "State Government University",
    degreesOffered: ["B.Tech", "B.Des", "BBA", "M.Tech", "MBA", "Ph.D."],
    established: 1941,
    nirfRank: 29,
    naacGrade: "A",
    rating: 4.75,
    reviewsCount: 1650,
    annualTuitionFee: 210000,
    hostelFee: 50000,
    medianPackage: 1650000,
    highestPackage: 6400000,
    topRecruiters: ["Adobe", "Microsoft", "Amazon", "Sprinklr", "Uber", "PwC", "Tower Research"],
    cutoffEstimate: "JEE Main CRL: 3000 - 12000 (CSE/IT)",
    entranceExams: ["JEE Main", "GATE", "UCEED"],
    campusSizeAcres: 164,
    campusSize: "164 Acres",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 2400,
    studentFacultyRatio: "1:12",
    attendancePolicy: "75% Rule with Medical Relaxation",
    hostelRating: 4.2,
    fests: "Engifest (North India's Historic Fest), Invictus (Tech Fest)",
    badge: "Premier State Govt University",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
    tags: ["State Government", "Mid-Size Campus", "Delhi 85% Quota", "Top Coding Culture", "B.Tech"],
    scholarships: [
      { name: "Delhi Govt Merit-cum-Means Scheme", benefit: "100% Fee Reimbursement for family income < ₹2.5L; 50% for income < ₹6.0L", eligibility: "Delhi domicile" }
    ],
    roiBreakevenMonths: "1.5 Months",
    insiderTips: "Superb coding culture. DTU supermileage and UAS tech teams regularly compete at SAE international events.",
    facilities: ["Knowledge Park Incubator", "Central Workshop", "Open Air Theatre", "Sports Complex", "Tech Team Labs"],
    description: "Known for producing top engineers and founders, DTU provides expansive opportunities in software engineering, electronics, and automotive technology.",
    counselingTimeline: "JAC Delhi Counseling (June - July)",
    eligibility: "10+2 PCM 60%+ aggregate from Delhi or outside Delhi region with valid JEE Main rank."
  },
  {
    id: "rvce-bangalore",
    name: "R.V. College of Engineering (RVCE)",
    shortName: "RVCE Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    stream: "Engineering",
    instituteType: "Autonomous / State Aided Private",
    degreesOffered: ["B.E. (B.Tech)", "M.Tech", "MCA", "Ph.D."],
    established: 1963,
    nirfRank: 96,
    naacGrade: "A++",
    rating: 4.72,
    reviewsCount: 890,
    annualTuitionFee: 240000,
    hostelFee: 90000,
    medianPackage: 1450000,
    highestPackage: 6200000,
    topRecruiters: ["Amazon", "Cisco", "Texas Instruments", "Atlassian", "Goldman Sachs"],
    cutoffEstimate: "KCET Rank: 100 - 450 (CSE) / COMEDK Rank: 200 - 900",
    entranceExams: ["KCET", "COMEDK UGET", "Management Quota"],
    campusSizeAcres: 52,
    campusSize: "52 Acres (Silicon Valley Location)",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 1200,
    studentFacultyRatio: "1:11",
    attendancePolicy: "85% Strict",
    hostelRating: 4.1,
    fests: "8th Mile (Cultural Fest)",
    badge: "Top Karnataka Engineering College",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    tags: ["Autonomous / Govt-Aided", "Silicon Valley", "COMEDK Top Pick", "B.Tech / B.E."],
    scholarships: [
      { name: "Karnataka E-Pass & Vidyasiri", benefit: "Full Tuition Reimbursement for Karnataka Category Students", eligibility: "Karnataka domicile" }
    ],
    roiBreakevenMonths: "2.0 Months",
    insiderTips: "Immediate proximity to Mysore Road metro station and top tier tech parks in Bangalore.",
    facilities: ["Center of Excellence in IoT", "Automotive R&D Lab", "Central Library", "Sports Complex"],
    description: "RVCE is Bengaluru's topmost autonomous engineering college, enjoying deep recruitment relationships with Silicon Valley R&D centers and tech startups.",
    counselingTimeline: "KEA KCET Counseling & COMEDK Online Counseling (July - August)",
    eligibility: "Class 12 with 45%+ in PCM and qualifying rank in KCET (Karnataka domicile) or COMEDK UGET (All India)."
  },
  {
    id: "coep-pune",
    name: "COEP Technological University (formerly College of Engineering Pune)",
    shortName: "COEP Pune",
    city: "Pune",
    state: "Maharashtra",
    stream: "Engineering",
    instituteType: "State Government University / Autonomous",
    degreesOffered: ["B.Tech", "M.Tech", "MBA", "Ph.D."],
    established: 1854,
    nirfRank: 73,
    naacGrade: "A+",
    rating: 4.8,
    reviewsCount: 1120,
    annualTuitionFee: 135000,
    hostelFee: 35000,
    medianPackage: 1150000,
    highestPackage: 5050000,
    topRecruiters: ["Mastercard", "Bajaj Auto", "Tata Motors", "Microsoft", "Barclays", "Deutsche Bank"],
    cutoffEstimate: "MHT-CET Percentile: 99.7+ (CSE)",
    entranceExams: ["MHT CET", "JEE Main (All India Seats)"],
    campusSizeAcres: 37,
    campusSize: "37 Acres (Historic Heritage Campus)",
    campusScale: "Boutique Campus (<50 Acres)",
    studentIntake: 950,
    studentFacultyRatio: "1:10",
    attendancePolicy: "75% Strict",
    hostelRating: 4.2,
    fests: "MindSpark (Tech Fest), Impression (Cultural Fest)",
    badge: "3rd Oldest Engineering College in Asia",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    tags: ["State Government", "Boutique Campus", "High ROI", "B.Tech"],
    scholarships: [
      { name: "MahaDBT Rajarshi Shahu Maharaj Scheme", benefit: "50% to 100% Tuition Fee Waiver for EBC/OBC/SC/ST", eligibility: "Maharashtra domicile with income < ₹8L" }
    ],
    roiBreakevenMonths: "1.4 Months",
    insiderTips: "Historic Boat Club with rowing facilities on Mula River. Excellent core engineering and software placements in Pune's auto & IT corridor.",
    facilities: ["Boat Club on Mula River", "Satellite Ground Station", "Robotics Study Group", "Central FabLab"],
    description: "Established in 1854, COEP is Asia's third oldest engineering college, famous for its historic heritage, active student satellite initiatives, and stellar placement track record.",
    counselingTimeline: "Maharashtra State CET CAP Rounds (July - August)",
    eligibility: "10+2 PCM 45%+ marks with top percentile in Maharashtra MHT-CET or JEE Main."
  },

  // --- PREMIER MEDICAL INSTITUTIONS ---
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences (AIIMS)",
    shortName: "AIIMS New Delhi",
    city: "New Delhi",
    state: "Delhi",
    stream: "Medical",
    instituteType: "Government / Autonomous Medical Institute",
    degreesOffered: ["MBBS", "B.Sc (Hons) Nursing", "MD / MS", "M.Ch", "DM", "Ph.D."],
    established: 1956,
    nirfRank: 1,
    naacGrade: "NMC / WHO Accredited",
    rating: 4.98,
    reviewsCount: 1650,
    annualTuitionFee: 1628,
    hostelFee: 4228,
    medianPackage: 1800000,
    highestPackage: 4500000,
    topRecruiters: ["Apex Hospitals", "Max Healthcare", "Apollo", "Johns Hopkins Fellowships", "WHO"],
    cutoffEstimate: "NEET UG AIR: 1 - 55 (General Category)",
    entranceExams: ["NEET UG", "INI CET"],
    campusSizeAcres: 115,
    campusSize: "115 Acres",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 125,
    studentFacultyRatio: "1:2 (Unmatched Clinical Mentorship)",
    attendancePolicy: "75% Mandatory",
    hostelRating: 4.7,
    fests: "PULSE (South Asia's Largest Medical College Fest)",
    badge: "Premier Healthcare Academy in India",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
    tags: ["Government Medical", "NIRF #1 Medical", "Near-Zero Tuition", "Massive Clinical Exposure", "MBBS"],
    scholarships: [
      { name: "AIIMS Subsidized Medical Education", benefit: "Course fee is essentially near-zero (₹5,856 total for entire 5.5 years including hostel)", eligibility: "All admitted students" }
    ],
    roiBreakevenMonths: "0.1 Months (Total course cost ₹6,000 vs ₹18 LPA starting package)",
    insiderTips: "Exposure to over 10,000+ OPD patients daily. Unmatched clinical diagnosis skills acquired during internship.",
    facilities: ["State-of-art Trauma Center", "Simulation Surgery Labs", "Stem Cell Research Center", "2400-bed Hospital", "Digital Medical Library"],
    description: "The gold standard of medical education in India, AIIMS New Delhi produces world-class doctors, surgeons, and biomedical researchers with unmatched patient clinical cases.",
    counselingTimeline: "MCC All-India Quota Counseling (July - September)",
    eligibility: "10+2 with PCB and English with 60%+ marks (50% for SC/ST) and top All India Rank in NEET-UG."
  },
  {
    id: "cmc-vellore",
    name: "Christian Medical College (CMC Vellore)",
    shortName: "CMC Vellore",
    city: "Vellore",
    state: "Tamil Nadu",
    stream: "Medical",
    instituteType: "Private / Minority Autonomous Medical College",
    degreesOffered: ["MBBS", "B.Sc Nursing", "Allied Health Sciences", "MD / MS", "DM / M.Ch"],
    established: 1900,
    nirfRank: 3,
    naacGrade: "NMC Accredited",
    rating: 4.9,
    reviewsCount: 780,
    annualTuitionFee: 52000,
    hostelFee: 35000,
    medianPackage: 1500000,
    highestPackage: 3800000,
    topRecruiters: ["CMC Network Hospitals", "Apollo Hospitals", "Fortis", "Global Health NGOs"],
    cutoffEstimate: "NEET UG Score: 670+ / 720",
    entranceExams: ["NEET UG", "CMC Institutional Assessment"],
    campusSizeAcres: 200,
    campusSize: "200 Acres (Bagayam Campus)",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 100,
    studentFacultyRatio: "1:3",
    attendancePolicy: "80% Strict",
    hostelRating: 4.6,
    fests: "Pegasus (National Medical Fest)",
    badge: "Top Private Medical College",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Medical", "NIRF #3 Medical", "Low Fee Medical", "MBBS"],
    scholarships: [
      { name: "CMC Need-Based Full Sponsorship", benefit: "100% Tuition & Living Expenses covered for rural/underprivileged students", eligibility: "Need evaluation" }
    ],
    roiBreakevenMonths: "0.7 Months",
    insiderTips: "Known for compassionate clinical training and extensive community health programs in rural Tamil Nadu.",
    facilities: ["3000-bed Multi-speciality Hospital", "Advanced Genetics Research", "Community Health Center", "Anatomy Simulation Lab"],
    description: "CMC Vellore is internationally acclaimed for pioneering medical procedures in India (like first kidney transplant and open heart surgery) and community healthcare.",
    counselingTimeline: "Tamil Nadu State Medical Counseling + CMC Aptitude Review (July - August)",
    eligibility: "Class 12th PCB 60%+ aggregate with valid NEET-UG score."
  },

  // --- PREMIER MANAGEMENT INSTITUTES ---
  {
    id: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad (IIMA)",
    shortName: "IIM Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    stream: "Management",
    instituteType: "Government / Autonomous National Institute",
    degreesOffered: ["MBA (PGP)", "Executive MBA (PGPX)", "ePGP", "Ph.D. in Management"],
    established: 1961,
    nirfRank: 1,
    naacGrade: "EQUIS Accredited",
    rating: 4.96,
    reviewsCount: 860,
    annualTuitionFee: 1250000,
    hostelFee: 90000,
    medianPackage: 3300000,
    highestPackage: 115000000,
    topRecruiters: ["McKinsey & Co", "Boston Consulting Group", "Bain & Company", "Morgan Stanley", "Blackstone"],
    cutoffEstimate: "CAT Percentile: 99.6+ & Composite Profile",
    entranceExams: ["CAT", "GMAT"],
    campusSizeAcres: 102,
    campusSize: "102 Acres (Louis Kahn Architecture)",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 420,
    studentFacultyRatio: "1:5",
    attendancePolicy: "100% Case Study Attendance Mandatory",
    hostelRating: 4.9,
    fests: "Chaos (Management Cultural Fest), Confluence (Global Business Summit)",
    badge: "Global Top Tier B-School",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80",
    tags: ["Government IIM", "NIRF #1 Management", "100% Placement", "MBA / Management"],
    scholarships: [
      { name: "IIMA Special Need-Based Scholarship (SNBSS)", benefit: "Up to 100% Full Fee Waiver based on gross family income", eligibility: "Gross family income < ₹15.0 Lakh/yr" },
      { name: "OP Jindal Engineering & Management Scholarship", benefit: "₹1,50,000/yr Merit Grant", eligibility: "Top academic performers" }
    ],
    roiBreakevenMonths: "9.0 Months",
    insiderTips: "The 'WAC' (Written Analysis of Communication) assignments and midnight case discussion syndicates define the rigorous experience.",
    facilities: ["Louis Kahn Plaza", "Vikram Sarabhai Library", "Executive Dormitories", "Behavioral Lab", "Case Discussion Theatres"],
    description: "IIM Ahmedabad is Asia's pre-eminent business school, renowned for rigorous case-study teaching pedagogy and executive leadership incubation.",
    counselingTimeline: "CAT (Nov), Shortlist (Jan), WAT-PI Interviews (Feb-March), Offers (April)",
    eligibility: "Bachelor's degree with 50%+ marks, valid CAT/GMAT score, followed by Analytical Writing Test & Personal Interview."
  },
  {
    id: "xlri-jamshedpur",
    name: "XLRI – Xavier School of Management",
    shortName: "XLRI Jamshedpur",
    city: "Jamshedpur",
    state: "Jharkhand",
    stream: "Management",
    instituteType: "Private / Autonomous Business School",
    degreesOffered: ["PGDM (BM)", "PGDM (HRM)", "Executive PGDM", "Fellow Programme (Ph.D.)"],
    established: 1949,
    nirfRank: 9,
    naacGrade: "AACSB / AMBA Accredited",
    rating: 4.88,
    reviewsCount: 650,
    annualTuitionFee: 1400000,
    hostelFee: 85000,
    medianPackage: 2980000,
    highestPackage: 78200000,
    topRecruiters: ["Bain & Company", "P&G", "Accenture Strategy", "TAS", "Amazon", "HUL"],
    cutoffEstimate: "XAT Percentile: 96+ (BM) / 94+ (HRM)",
    entranceExams: ["XAT", "GMAT"],
    campusSizeAcres: 50,
    campusSize: "50 Acres",
    campusScale: "Mid-Size Campus (50-300 Acres)",
    studentIntake: 360,
    studentFacultyRatio: "1:6",
    attendancePolicy: "100% Mandatory",
    hostelRating: 4.7,
    fests: "Valhalla (Sports & Cultural Fest), Ensemble-Valhalla",
    badge: "#1 Private Business School in India",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Management", "India's Oldest B-School", "MBA / Management"],
    scholarships: [
      { name: "XLRI Need-Based Scholarship", benefit: "Partial to Full Tuition Waiver", eligibility: "Family income < ₹8.0 Lakh" }
    ],
    roiBreakevenMonths: "11.2 Months",
    insiderTips: "The undisputed top business school for Human Resource Management (HRM) with 100% placements within 2 days of campus drive.",
    facilities: ["Sir Jehangir Ghandy Library", "Behavioural Finance Lab", "Auditorium", "International Guest House"],
    description: "India's oldest business management school, XLRI is considered the undisputed gold standard for Human Resource Management (HRM) and Business Management in South Asia.",
    counselingTimeline: "XAT Exam (Jan), GD/PI Rounds (Feb-March), Final Results (April)",
    eligibility: "Recognized Bachelor's degree (any stream) and qualifying score in XAT or GMAT."
  },

  // --- PREMIER SCIENCES & RESEARCH INSTITUTES ---
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science (IISc)",
    shortName: "IISc Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    stream: "Sciences",
    instituteType: "Government / Deemed Research University",
    degreesOffered: ["B.Sc (Research)", "B.Tech (Math & Computing)", "M.Tech", "Integrated Ph.D.", "Ph.D."],
    established: 1909,
    nirfRank: 1,
    naacGrade: "A++",
    rating: 4.98,
    reviewsCount: 720,
    annualTuitionFee: 30000,
    hostelFee: 40000,
    medianPackage: 2800000,
    highestPackage: 85000000,
    topRecruiters: ["Google Research", "Microsoft Research", "ISRO", "Intel Labs", "DeepMind"],
    cutoffEstimate: "JEE Adv / KVPY / NEET: Top 0.05% rank",
    entranceExams: ["JEE Advanced", "JEE Main", "NEET-UG", "GATE", "JAM"],
    campusSizeAcres: 440,
    campusSize: "440 Acres",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 500,
    studentFacultyRatio: "1:4 (Peak Research Mentorship)",
    attendancePolicy: "Research Milestones Based",
    hostelRating: 4.8,
    fests: "Pravega (India's Largest Science Fest)",
    badge: "India's Research Pinnacle",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    tags: ["Government University", "NIRF #1 University", "Mega Campus", "B.Sc / Pure Science"],
    scholarships: [
      { name: "DST-INSPIRE Fellowship", benefit: "₹80,000/year (₹5,000/mo + ₹20,000 mentorship grant)", eligibility: "Top 1% in Class 12 or KVPY rankers" },
      { name: "IISc Institute Fellowship", benefit: "₹12,400 to ₹35,000/mo stipend", eligibility: "All enrolled PG & Research Scholars" }
    ],
    roiBreakevenMonths: "0.5 Months",
    insiderTips: "Lush green botanical canopy with over 110 species of trees. Param Pravega supercomputer is available for student simulation workloads.",
    facilities: ["Center for Nano Science & Engineering", "Param Pravega Supercomputer", "Cryogenic Labs", "Botanical Canopy", "J.R.D. Tata Library"],
    description: "IISc Bengaluru is the crown jewel of Indian research universities, leading global breakthroughs in materials science, quantum computing, aerospace, and molecular biology.",
    counselingTimeline: "IISc Admissions Portal (Applications Open March - May)",
    eligibility: "Class 12 with PCM, 60%+ marks and valid rank in JEE Advanced, JEE Main, or NEET-UG."
  },

  // --- PREMIER LIBERAL ARTS, LAW & DESIGN INSTITUTES ---
  {
    id: "ashoka-university",
    name: "Ashoka University",
    shortName: "Ashoka University",
    city: "Sonipat",
    state: "Haryana",
    stream: "Arts",
    instituteType: "Private / Liberal Arts & Sciences University",
    degreesOffered: ["B.A. (Hons)", "B.Sc (Hons)", "Young India Fellowship", "Ph.D."],
    established: 2014,
    nirfRank: 88,
    naacGrade: "UGC Recognized",
    rating: 4.65,
    reviewsCount: 430,
    annualTuitionFee: 850000,
    hostelFee: 180000,
    medianPackage: 1200000,
    highestPackage: 3700000,
    topRecruiters: ["Bain & Company", "Dalberg", "Hindustan Unilever", "Deloitte", "Tata Trusts"],
    cutoffEstimate: "Holistic Review + Ashoka Aptitude Assessment (AAT)",
    entranceExams: ["AAT", "SAT", "ACT"],
    campusSizeAcres: 25,
    campusSize: "25 Acres (Boutique Liberal Arts Campus)",
    campusScale: "Boutique Campus (<50 Acres)",
    studentIntake: 600,
    studentFacultyRatio: "1:9",
    attendancePolicy: "Seminar Discussion Based",
    hostelRating: 4.9,
    fests: "Banquet (Arts Fest), Ashoka Premier League",
    badge: "Ivy-style Liberal Arts",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Liberal Arts", "Boutique Campus", "Generous Need Aid", "B.A. / Liberal Arts", "B.Sc"],
    scholarships: [
      { name: "Ashoka Need-Based Financial Aid", benefit: "25% to 100% Complete Tuition & Hostel Waiver (Over 47% students on financial aid)", eligibility: "Demonstrated family financial need" }
    ],
    roiBreakevenMonths: "8.5 Months",
    insiderTips: "Dining commons food is considered the best across Indian universities. Interdisciplinary majors let you combine Computer Science with Philosophy or Economics.",
    facilities: ["Trivedi School of Biosciences", "Media Lab & Performing Arts Center", "Design Innovation Lab", "State-of-art Dining Commons"],
    description: "Ashoka University is India's leading liberal arts and interdisciplinary research institution offering Ivy League-style holistic education in humanities, economics, and data science.",
    counselingTimeline: "4 Rolling Admission Rounds (October - June)",
    eligibility: "Class 12 in any stream, holistic portfolio evaluation, on-the-spot essay & interview."
  },
  {
    id: "nlsiu-bangalore",
    name: "National Law School of India University (NLSIU)",
    shortName: "NLS Bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    stream: "Law",
    instituteType: "Government / National Law University",
    degreesOffered: ["B.A. LL.B. (Hons)", "LL.M.", "Master of Public Policy (MPP)", "Ph.D."],
    established: 1987,
    nirfRank: 1,
    naacGrade: "A++",
    rating: 4.94,
    reviewsCount: 520,
    annualTuitionFee: 320000,
    hostelFee: 65000,
    medianPackage: 1800000,
    highestPackage: 3200000,
    topRecruiters: ["Cyril Amarchand Mangaldas", "Shardul Amarchand", "Khaitan & Co", "AZB & Partners", "Linklaters (UK)"],
    cutoffEstimate: "CLAT All India Rank: 1 - 95",
    entranceExams: ["CLAT (Common Law Admission Test)"],
    campusSizeAcres: 23,
    campusSize: "23 Acres (Boutique Law Campus)",
    campusScale: "Boutique Campus (<50 Acres)",
    studentIntake: 240,
    studentFacultyRatio: "1:7",
    attendancePolicy: "75% Strict with Moot Court Credits",
    hostelRating: 4.6,
    fests: "Strawberry Fields (India's Oldest Student Rock Fest), LeGala",
    badge: "#1 Law University in India (NIRF #1 Law)",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    tags: ["Government Law", "Boutique Campus", "NIRF #1 Law", "B.A. LL.B. Law"],
    scholarships: [
      { name: "NLSIU Need-Based Financial Aid", benefit: "Up to 100% Tuition Waiver and Living Grant", eligibility: "Family income < ₹6.0 Lakh" }
    ],
    roiBreakevenMonths: "2.1 Months",
    insiderTips: "Strawberry Fields rock fest is legendary. Highest number of Rhodes Scholars and Supreme Court clerks from any Indian law school.",
    facilities: ["Shri Narayan Rao Melgiri Law Library", "Moot Court Theatres", "Legal Services Clinic", "Smart Seminar Halls"],
    description: "NLSIU Bangalore is the undisputed leader of legal education in South Asia, producing Supreme Court advocates, international corporate partners, and legal scholars.",
    counselingTimeline: "Consortium of NLUs Centralized Counseling (May - June)",
    eligibility: "10+2 with 45%+ marks (40% for SC/ST) and qualifying rank in CLAT UG."
  },
  {
    id: "nid-ahmedabad",
    name: "National Institute of Design (NID)",
    shortName: "NID Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    stream: "Design",
    instituteType: "Government / Institute of National Importance",
    degreesOffered: ["B.Des (Bachelor of Design)", "M.Des", "Ph.D. in Design"],
    established: 1961,
    nirfRank: 1,
    naacGrade: "UGC / INI Recognized",
    rating: 4.92,
    reviewsCount: 460,
    annualTuitionFee: 380000,
    hostelFee: 45000,
    medianPackage: 1400000,
    highestPackage: 3000000,
    topRecruiters: ["Microsoft Design", "Samsung UX", "Google", "Tata Motors Design", "Adobe", "IKEA"],
    cutoffEstimate: "NID DAT Prelims & Mains Rank: 1 - 125",
    entranceExams: ["NID DAT (Design Aptitude Test)"],
    campusSizeAcres: 14,
    campusSize: "14 Acres (Riverfront Boutique Campus)",
    campusScale: "Boutique Campus (<50 Acres)",
    studentIntake: 125,
    studentFacultyRatio: "1:6 (Studio Mentorship)",
    attendancePolicy: "Studio Evaluation Based",
    hostelRating: 4.5,
    fests: "Monsoon Studio Sessions, NID Design Showcase",
    badge: "#1 Design Institute in India",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    tags: ["Government Design", "Boutique Campus", "UI/UX & Industrial Design", "B.Des / Design"],
    scholarships: [
      { name: "NID Student Financial Aid", benefit: "Tuition Reimbursement for economically weaker students", eligibility: "Income < ₹4.5 Lakh" }
    ],
    roiBreakevenMonths: "3.2 Months",
    insiderTips: "24-hour open studio culture on the Sabarmati riverfront. No exams — grading is 100% continuous jury and project based.",
    facilities: ["Prototyping & Ergonomics Labs", "Textile & Ceramic Studios", "Knowledge Management Centre", "Sabarmati Amphitheatre"],
    description: "NID Ahmedabad is internationally celebrated for pioneering industrial, communication, and product design with an emphasis on sustainable innovation.",
    counselingTimeline: "NID DAT Prelims (Jan), DAT Mains & Studio Test (April-May)",
    eligibility: "Higher Secondary (10+2) in any stream (Science, Commerce, Arts) + qualifying NID DAT."
  },

  // --- PREMIER GLOBAL BENCHMARKS ---
  {
    id: "stanford-university",
    name: "Stanford University",
    shortName: "Stanford",
    city: "Stanford, California",
    state: "International (USA)",
    stream: "Engineering",
    instituteType: "Private Global Research University",
    degreesOffered: ["B.S. / B.A.", "M.S.", "MBA", "M.D.", "Ph.D."],
    established: 1885,
    nirfRank: 2,
    naacGrade: "WASC Accredited",
    rating: 4.99,
    reviewsCount: 3400,
    annualTuitionFee: 5200000,
    hostelFee: 1600000,
    medianPackage: 13500000,
    highestPackage: 250000000,
    topRecruiters: ["Google", "Meta", "OpenAI", "Apple", "Sequoia Capital", "NVIDIA"],
    cutoffEstimate: "SAT: 1520 - 1580 / ACT: 34 - 36 (3.6% Acceptance Rate)",
    entranceExams: ["SAT", "ACT", "TOEFL / IELTS", "GRE"],
    campusSizeAcres: 8180,
    campusSize: "8,180 Acres (Historic Mega Campus)",
    campusScale: "Mega Campus (>300 Acres)",
    studentIntake: 1700,
    studentFacultyRatio: "1:5",
    attendancePolicy: "Flexible Honor Code",
    hostelRating: 4.9,
    fests: "Stanford Tree Rolling, Big Game",
    badge: "Silicon Valley Innovation Heart",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    tags: ["Private International", "Mega Campus", "Global Top 3", "B.Tech", "MBA / Management"],
    scholarships: [
      { name: "Stanford Need-Blind Financial Aid", benefit: "100% Tuition, Room & Board Covered for families earning under $100k (₹83 Lakh)", eligibility: "Demonstrated need" }
    ],
    roiBreakevenMonths: "4.6 Months",
    insiderTips: "Stanford d.school teaches design thinking used by Apple and Google. More venture capital backed founders than any other school.",
    facilities: ["Gates Computer Science Building", "SLAC National Accelerator Lab", "Cantor Arts Center", "Stanford d.school"],
    description: "Located in Silicon Valley, Stanford is the breeding ground for breakthrough technological inventions, visionary founders, and Nobel laureates.",
    counselingTimeline: "Restrictive Early Action (Nov 1), Regular Decision (Jan 5)",
    eligibility: "Rigorous high school transcript, essays, teacher recommendations, standardized test scores, extracurricular leadership."
  }
];

export const SCHOLARSHIPS_DIRECTORY = [
  {
    id: "sch-1",
    name: "DST INSPIRE Scholarship for Higher Education (SHE)",
    provider: "Department of Science and Technology, Govt of India",
    amount: "₹80,000 per year (₹5,000/month + ₹20,000 research project mentorship grant)",
    coverage: "Full Undergraduate & Postgraduate Support in Pure Sciences",
    eligibility: "Students within top 1% in Class 12th Board examinations or top rankers in JEE Advanced / NEET pursuing B.Sc / BS / Integrated M.Sc.",
    deadline: "October 31st (Annual)",
    tags: ["Government of India", "Pure Science", "Merit Based", "B.Sc / BS"],
    applyLink: "https://online-inspire.gov.in"
  },
  {
    id: "sch-2",
    name: "Reliance Foundation Undergraduate Scholarship",
    provider: "Reliance Foundation",
    amount: "Up to ₹2,00,000 total grant over duration of degree",
    coverage: "Tuition, Books, Laptops, Living Expenses",
    eligibility: "First year undergraduate students in any stream with Class 12 score ≥ 60% and family income < ₹15.0 Lakh/year.",
    deadline: "October 15th",
    tags: ["Corporate Foundation", "All Degrees", "B.Tech / B.A. / B.Sc", "Need + Merit"],
    applyLink: "https://reliancefoundation.org"
  },
  {
    id: "sch-3",
    name: "Central Sector Scheme of Scholarships (NSP Portal)",
    provider: "Ministry of Education, Govt of India",
    amount: "₹12,000/yr for Graduation + ₹20,000/yr for Post-Graduation",
    coverage: "Annual Direct Bank Transfer (DBT)",
    eligibility: "Students above 80th percentile in relevant stream in Class 12 with family income < ₹4.5 Lakh/year.",
    deadline: "November 30th",
    tags: ["National Scholarship Portal (NSP)", "All Colleges", "Govt DBT"],
    applyLink: "https://scholarships.gov.in"
  },
  {
    id: "sch-4",
    name: "AICTE Pragati Scholarship for Girls",
    provider: "All India Council for Technical Education (AICTE)",
    amount: "₹50,000 per year for all 4 years of engineering",
    coverage: "Tuition fee, books, equipment, and soft skills development",
    eligibility: "Female students admitted to AICTE approved B.Tech / Diploma colleges with family annual income < ₹8.0 Lakh.",
    deadline: "December 31st",
    tags: ["Women in STEM", "AICTE", "Engineering / B.Tech"],
    applyLink: "https://facilities.aicte-india.org"
  },
  {
    id: "sch-5",
    name: "Adobe India Women-in-Technology Scholarship",
    provider: "Adobe Research",
    amount: "Full Tuition Fee + 1-on-1 Mentorship + Guaranteed Adobe Internship + ₹1,00,000 Tech Grant",
    coverage: "Tuition & Corporate Mentorship",
    eligibility: "Female undergraduate or master's students in Computer Science, Data Science, or Electrical Engineering.",
    deadline: "September 30th",
    tags: ["Prestige Scholarship", "Women in Tech", "Computer Science", "High Stipend"],
    applyLink: "https://research.adobe.com/scholarship"
  },
  {
    id: "sch-6",
    name: "Tata Trusts Means & Merit Grant for Higher Education",
    provider: "Sir Ratan Tata Trust & Allied Trusts",
    amount: "Up to 80% Tuition Fee Remission (₹50,000 to ₹3,00,000/yr)",
    coverage: "Tuition Fees in recognized Engineering and Medical colleges",
    eligibility: "Students with family income < ₹4.5 Lakh/yr and minimum 65% in previous qualifying exam.",
    deadline: "August 31st",
    tags: ["Tata Trusts", "Need-Based", "Medical & Engineering"],
    applyLink: "https://tatatrusts.org"
  }
];

export const ACADEMIC_ROADMAPS = {
  cse: {
    major: "Computer Science & Engineering (B.Tech)",
    totalCredits: 160,
    duration: "4 Years (8 Semesters)",
    semesters: [
      {
        sem: 1,
        title: "Semester I: Foundations & Computational Thinking",
        courses: [
          { code: "CS101", name: "Introduction to Programming with C/C++", credits: 4, type: "Core", lab: true, prereq: "None", desc: "Syntax, memory management, pointers, modular programming, and basic data structures." },
          { code: "MA101", name: "Linear Algebra & Calculus", credits: 4, type: "Math", lab: false, prereq: "None", desc: "Matrices, eigenvalues, vector spaces, multivariable derivatives, and integrals." },
          { code: "PH101", name: "Engineering Physics & Quantum Basics", credits: 3, type: "Science", lab: true, prereq: "None", desc: "Wave mechanics, quantum fundamentals, and semiconductor physics." },
          { code: "EE101", name: "Basic Electrical & Electronics Engg", credits: 3, type: "Core", lab: true, prereq: "None", desc: "Kirchhoff laws, AC circuits, diode operations, and operational amplifiers." },
          { code: "HS101", name: "Technical Communication & Ethics", credits: 2, type: "Humanities", lab: false, prereq: "None", desc: "Engineering documentation, academic integrity, and presentation skills." }
        ]
      },
      {
        sem: 2,
        title: "Semester II: Object Oriented Programming & Discrete Math",
        courses: [
          { code: "CS102", name: "Data Structures & Algorithms I", credits: 4, type: "Core", lab: true, prereq: "CS101", desc: "Arrays, linked lists, stacks, queues, hash tables, and asymptotic time complexity." },
          { code: "CS104", name: "Object Oriented Design (Java/C++)", credits: 4, type: "Core", lab: true, prereq: "CS101", desc: "Encapsulation, inheritance, polymorphism, design patterns, and SOLID principles." },
          { code: "MA102", name: "Discrete Mathematical Structures", credits: 4, type: "Math", lab: false, prereq: "MA101", desc: "Graph theory, combinatorics, Boolean logic, proof techniques, and relations." },
          { code: "CS106", name: "Digital Logic & Computer Organization", credits: 4, type: "Core", lab: true, prereq: "EE101", desc: "Logic gates, flip-flops, ALU design, register transfer, and instruction set architectures." }
        ]
      },
      {
        sem: 3,
        title: "Semester III: Systems & Algorithmic Analysis",
        courses: [
          { code: "CS201", name: "Advanced Algorithms & Optimization", credits: 4, type: "Core", lab: true, prereq: "CS102", desc: "Divide and conquer, greedy methods, dynamic programming, network flows, NP-completeness." },
          { code: "CS203", name: "Computer Organization & Architecture", credits: 4, type: "Core", lab: true, prereq: "CS106", desc: "Pipelining, memory hierarchy, cache coherence, superscalar processors, and RISC-V." },
          { code: "CS205", name: "Database Management Systems (DBMS)", credits: 4, type: "Core", lab: true, prereq: "CS102", desc: "Relational algebra, SQL, normalization, ACID properties, indexing (B+ trees), transactions." },
          { code: "MA201", name: "Probability & Stochastic Processes", credits: 3, type: "Math", lab: false, prereq: "MA101", desc: "Random variables, joint distributions, Markov chains, and statistical estimation." }
        ]
      },
      {
        sem: 4,
        title: "Semester IV: Core Systems & Networking",
        courses: [
          { code: "CS202", name: "Operating Systems Principles", credits: 4, type: "Core", lab: true, prereq: "CS203", desc: "Process scheduling, thread sync, mutexes, virtual memory paging, file systems, IPC." },
          { code: "CS204", name: "Computer Networks & Protocols", credits: 4, type: "Core", lab: true, prereq: "CS202", desc: "OSI & TCP/IP stack, routing protocols (BGP/OSPF), congestion control, DNS, HTTP/3." },
          { code: "CS206", name: "Theory of Computation & Automata", credits: 3, type: "Core", lab: false, prereq: "MA102", desc: "Finite automata, context-free grammars, Turing machines, halting problem, undecidability." },
          { code: "CS208", name: "Software Engineering & Agile DevOps", credits: 3, type: "Core", lab: true, prereq: "CS104", desc: "CI/CD pipelines, Docker containerization, unit testing, Git workflows, requirements engineering." }
        ]
      },
      {
        sem: 5,
        title: "Semester V: Intelligent Systems & Compilers",
        courses: [
          { code: "CS301", name: "Artificial Intelligence & Machine Learning", credits: 4, type: "Core", lab: true, prereq: "MA201", desc: "Supervised & unsupervised learning, neural networks, loss functions, regression, classification." },
          { code: "CS303", name: "Compiler Design & Code Generation", credits: 4, type: "Core", lab: true, prereq: "CS206", desc: "Lexical analysis, LL/LR parsing, abstract syntax trees, intermediate code, and LLVM." },
          { code: "CS305", name: "Web Technologies & Cloud Architectures", credits: 3, type: "Elective", lab: true, prereq: "CS205", desc: "RESTful APIs, GraphQL, microservices, cloud providers (AWS/GCP), serverless computing." },
          { code: "CS307", name: "Information & Network Security", credits: 3, type: "Elective", lab: true, prereq: "CS204", desc: "Public key cryptography (RSA, ECC), TLS handshake, authentication protocols, vulnerabilities." }
        ]
      },
      {
        sem: 6,
        title: "Semester VI: Distributed Systems & Specializations",
        courses: [
          { code: "CS302", name: "Distributed Systems & Cloud Computing", credits: 4, type: "Core", lab: true, prereq: "CS204", desc: "CAP theorem, Paxos/Raft consensus, distributed storage, MapReduce, Kafka streaming." },
          { code: "CS304", name: "Deep Learning & Generative AI", credits: 4, type: "Elective", lab: true, prereq: "CS301", desc: "CNNs, Transformers, Attention mechanisms, Diffusion models, and LLM fine-tuning." },
          { code: "CS306", name: "Mobile Application & Cross-Platform Engg", credits: 3, type: "Elective", lab: true, prereq: "CS104", desc: "React Native/Flutter, native platform APIs, state management, asynchronous storage." },
          { code: "CS308", name: "Mini Project & Industry Capstone I", credits: 3, type: "Project", lab: true, prereq: "CS208", desc: "Full-cycle software project development under mentor guidance." }
        ]
      },
      {
        sem: 7,
        title: "Semester VII: Advanced Electives & Major Capstone",
        courses: [
          { code: "CS401", name: "High Performance Computing & GPU Arch", credits: 3, type: "Elective", lab: true, prereq: "CS203", desc: "CUDA programming, OpenMP, MPI, parallel memory architectures, tensor cores." },
          { code: "CS403", name: "Natural Language Processing (NLP)", credits: 3, type: "Elective", lab: true, prereq: "CS301", desc: "Tokenization, embeddings (Word2Vec, BERT), sequence modeling, RAG pipelines." },
          { code: "CS491", name: "Major Project Phase I (Capstone)", credits: 6, type: "Project", lab: true, prereq: "CS308", desc: "Comprehensive engineering problem design, prototyping, and interim defense." },
          { code: "MG401", name: "Engineering Entrepreneurship & IP", credits: 3, type: "Humanities", lab: false, prereq: "None", desc: "Patents, startup valuation, venture financing, and product management." }
        ]
      },
      {
        sem: 8,
        title: "Semester VIII: Industry Internship & Capstone Defense",
        courses: [
          { code: "CS492", name: "Major Project Phase II / Industry Internship", credits: 10, type: "Project", lab: true, prereq: "CS491", desc: "Full semester corporate internship or final capstone deployment and dissertation defense." },
          { code: "CS404", name: "Quantum Computing Fundamentals", credits: 3, type: "Elective", lab: false, prereq: "MA101", desc: "Qubits, quantum gates, superposition, Shor's algorithm, Grover's search." }
        ]
      }
    ]
  },
  aids: {
    major: "Artificial Intelligence & Data Science (B.Tech)",
    totalCredits: 160,
    duration: "4 Years (8 Semesters)",
    semesters: [
      {
        sem: 1,
        title: "Semester I: Mathematical Foundations & Python for Data Science",
        courses: [
          { code: "AI101", name: "Computational Thinking with Python", credits: 4, type: "Core", lab: true, prereq: "None", desc: "Python idioms, NumPy arrays, Pandas DataFrames, and algorithmic thinking." },
          { code: "MA101", name: "Multivariate Calculus & Matrix Algebra", credits: 4, type: "Math", lab: false, prereq: "None", desc: "Gradients, Jacobians, Hessians, vector spaces, and singular value decomposition (SVD)." },
          { code: "AI103", name: "Foundations of Data Science & Ethics", credits: 3, type: "Core", lab: true, prereq: "None", desc: "Data collection pipelines, data cleaning, exploratory data analysis, algorithmic bias." },
          { code: "EE101", name: "Digital Electronics & Signals", credits: 3, type: "Core", lab: true, prereq: "None", desc: "Logic gates, discrete signal representation, and hardware accelerators basics." }
        ]
      },
      {
        sem: 2,
        title: "Semester II: Statistics & Core Data Structures",
        courses: [
          { code: "AI102", name: "Data Structures & Algorithmic Paradigms", credits: 4, type: "Core", lab: true, prereq: "AI101", desc: "Tree traversals, binary search trees, graph algorithms, and indexing techniques." },
          { code: "MA104", name: "Probability & Mathematical Statistics", credits: 4, type: "Math", lab: false, prereq: "MA101", desc: "Bayesian probability, maximum likelihood estimation (MLE), hypothesis testing." },
          { code: "AI104", name: "Database Systems & NoSQL Data Stores", credits: 4, type: "Core", lab: true, prereq: "AI101", desc: "SQL schemas, MongoDB, Neo4j graph databases, Vector databases (Pinecone/Milvus)." }
        ]
      },
      {
        sem: 3,
        title: "Semester III: Machine Learning & Feature Engineering",
        courses: [
          { code: "AI201", name: "Statistical Machine Learning", credits: 4, type: "Core", lab: true, prereq: "MA104", desc: "SVMs, Decision Trees, Ensemble methods (Random Forest, XGBoost), clustering." },
          { code: "AI203", name: "Data Wrangling & Visualization Pipelines", credits: 3, type: "Core", lab: true, prereq: "AI103", desc: "Matplotlib, Seaborn, Plotly interactive charts, ETL pipelines, dbt." },
          { code: "MA203", name: "Optimization Methods for AI", credits: 3, type: "Math", lab: false, prereq: "MA101", desc: "Convex optimization, SGD, Adam, Lagrange multipliers, backpropagation mechanics." }
        ]
      },
      {
        sem: 4,
        title: "Semester IV: Deep Learning & Neural Architectures",
        courses: [
          { code: "AI202", name: "Deep Neural Networks & Frameworks (PyTorch)", credits: 4, type: "Core", lab: true, prereq: "AI201", desc: "Autograd, backprop, MLP, regularization (Dropout, BatchNorm), GPU training." },
          { code: "AI204", name: "Computer Vision & Visual Perception", credits: 4, type: "Core", lab: true, prereq: "AI202", desc: "Convolutions, ResNet, YOLO object detection, segmentation (Mask R-CNN)." },
          { code: "AI206", name: "Big Data Processing & Distributed Systems", credits: 3, type: "Core", lab: true, prereq: "AI104", desc: "Apache Spark, PySpark, Hadoop, Databricks, distributed file systems (HDFS)." }
        ]
      }
    ]
  }
};

export const FLASHCARDS_DATA = [
  {
    id: "fc-1",
    deck: "Data Structures & Algorithms",
    topic: "Tree Traversals",
    question: "What is the time and auxiliary space complexity of finding the Lowest Common Ancestor (LCA) in a Binary Search Tree vs. a general Binary Tree?",
    answer: "In a BST: O(h) time and O(1) space iteratively (or O(h) recursive stack) where h is the tree height, by comparing root value with node values.\nIn a general Binary Tree: O(N) time and O(h) space via post-order traversal because we must inspect left and right subtrees recursively.",
    difficulty: "Medium",
    tags: ["Trees", "Binary Search", "Time Complexity"]
  },
  {
    id: "fc-2",
    deck: "Data Structures & Algorithms",
    topic: "Dynamic Programming",
    question: "Explain the state transition relation for the 0/1 Knapsack Problem with capacity W and N items.",
    answer: "dp[i][w] represents maximum value obtainable using a subset of items 1..i with capacity w.\n• If weight[i-1] > w: dp[i][w] = dp[i-1][w]\n• Otherwise: dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - weight[i-1]])\nCan be space-optimized to a 1D array dp[w] traversed backwards from W to 0.",
    difficulty: "Hard",
    tags: ["DP", "Optimization", "Knapsack"]
  },
  {
    id: "fc-3",
    deck: "Operating Systems",
    topic: "Concurrency & Deadlocks",
    question: "What are the 4 Coffman conditions required for a deadlock to occur in an operating system?",
    answer: "1. Mutual Exclusion: At least one resource must be held in a non-shareable mode.\n2. Hold and Wait: A process holds at least one resource and is waiting to acquire additional resources.\n3. No Preemption: Resources cannot be forcibly taken from a process holding them.\n4. Circular Wait: A closed chain of processes exists where each process holds resources needed by the next.",
    difficulty: "Easy",
    tags: ["OS", "Deadlock", "Process Sync"]
  },
  {
    id: "fc-4",
    deck: "Operating Systems",
    topic: "Virtual Memory",
    question: "What is the Inverted Page Table and how does it differ from a traditional hierarchical Page Table?",
    answer: "A traditional page table has one entry per page of the virtual address space (per process).\nAn Inverted Page Table has only ONE entry per physical frame in main memory across the entire system. Each entry records which process ID and virtual page occupy that frame, drastically saving memory overhead at the cost of requiring a hash table to search entries quickly.",
    difficulty: "Medium",
    tags: ["OS", "Paging", "Memory Management"]
  },
  {
    id: "fc-5",
    deck: "System Design",
    topic: "Distributed Consensus",
    question: "What is the CAP Theorem and why can a distributed database never guarantee Consistency, Availability, and Partition Tolerance simultaneously?",
    answer: "CAP Theorem states that in the event of a Network Partition (P), which is inevitable in distributed systems, a system must choose between:\n• Consistency (C): Every read receives the most recent write or an error.\n• Availability (A): Every non-failing node returns a non-error response, but it may not be the freshest.\nYou cannot avoid network latency/partitions across nodes, so CP or AP are the real-world choices.",
    difficulty: "Medium",
    tags: ["System Design", "CAP", "Distributed Systems"]
  },
  {
    id: "fc-6",
    deck: "System Design",
    topic: "Caching Strategies",
    question: "Compare Cache-Aside vs. Write-Through vs. Write-Back caching strategies.",
    answer: "• Cache-Aside: Application reads cache; on miss, fetches from DB and writes to cache. DB written directly.\n• Write-Through: Data written to cache and DB synchronously. High read consistency, higher write latency.\n• Write-Back (Write-Behind): Data written to cache immediately, and asynchronously flushed to DB in batches. Fast writes, risk of data loss on cache crash.",
    difficulty: "Hard",
    tags: ["Caching", "Performance", "Scalability"]
  },
  {
    id: "fc-7",
    deck: "Database Systems",
    topic: "ACID & Indexing",
    question: "Why do relational databases use B+ Trees instead of Binary Search Trees or Hash Tables for on-disk table indices?",
    answer: "1. High Fan-out: B+ trees have high branching factor (100+), keeping tree depth small (3-4 levels) which minimizes disk I/O operations.\n2. Range Queries: All leaf nodes are linked in a sequential doubly-linked list, allowing O(log N) lookup followed by fast sequential scans.\n3. Hash tables cannot do range scans (only point lookups); BSTs are too deep and cause excessive random disk seeks.",
    difficulty: "Medium",
    tags: ["DBMS", "B+ Trees", "Indexes"]
  }
];

export const PLACEMENT_RECRUITERS = [
  {
    id: "rec-1",
    company: "Google",
    logoText: "G",
    logoColor: "#4285F4",
    role: "Software Development Engineer (L3)",
    eligibleBranches: ["CSE", "IT", "ECE", "AI/DS"],
    minCGPA: 7.5,
    ctcTotal: "₹45.0 LPA",
    baseSalary: "₹18.5 LPA",
    internStipend: "₹1,25,000 / mo",
    location: "Bengaluru / Hyderabad",
    deadline: "2026-10-15",
    openStatus: "Accepting Applications",
    rounds: ["Online Assessment (DSA)", "Technical Interview 1 (Graphs/Trees)", "Technical Interview 2 (DP/Strings)", "Googliness & Leadership"],
    applyLink: "https://careers.google.com",
    hiringSeason: "Fall Campus Placements",
    description: "Build planet-scale applications impacting billions of users across Search, Cloud, Android, and Deep Learning infrastructure."
  },
  {
    id: "rec-2",
    company: "Microsoft",
    logoText: "MS",
    logoColor: "#00A4EF",
    role: "Software Engineer (Core Systems)",
    eligibleBranches: ["CSE", "IT", "ECE", "EE", "Mathematics"],
    minCGPA: 7.0,
    ctcTotal: "₹43.5 LPA",
    baseSalary: "₹16.0 LPA",
    internStipend: "₹1,00,000 / mo",
    location: "Hyderabad / Noida / Bengaluru",
    deadline: "2026-10-20",
    openStatus: "Shortlisting Underway",
    rounds: ["Codility OA (3 Questions)", "Tech Round 1 (DSA & Problem Solving)", "Tech Round 2 (System Design & OS)", "AA / Hiring Manager Round"],
    applyLink: "https://careers.microsoft.com",
    hiringSeason: "Fall Campus Placements",
    description: "Work on Azure Hyper-Scale Cloud, Office 365, GitHub ecosystem, and Edge computing platforms."
  },
  {
    id: "rec-3",
    company: "Goldman Sachs",
    logoText: "GS",
    logoColor: "#10b981",
    role: "Quantitative Analyst / Software Associate",
    eligibleBranches: ["CSE", "ECE", "Mathematics & Computing", "Mechanical"],
    minCGPA: 7.8,
    ctcTotal: "₹34.0 LPA",
    baseSalary: "₹24.0 LPA",
    internStipend: "₹1,10,000 / mo",
    location: "Bengaluru",
    deadline: "2026-11-01",
    openStatus: "Accepting Applications",
    rounds: ["HackerRank OA (Math, Quant, DSA)", "Technical Round 1 (C++, OS, Probability)", "Technical Round 2 (Low Latency/Systems)", "Values & Fitment Round"],
    applyLink: "https://goldmansachs.com/careers",
    hiringSeason: "Engineering Campus Drive",
    description: "Architect high-frequency algorithmic trading engines, risk management models, and ultra-low latency financial messaging systems."
  },
  {
    id: "rec-4",
    company: "Amazon",
    logoText: "AMZ",
    logoColor: "#f59e0b",
    role: "SDE-1 (AWS Cloud Services)",
    eligibleBranches: ["All Engineering Branches"],
    minCGPA: 6.5,
    ctcTotal: "₹44.0 LPA",
    baseSalary: "₹17.0 LPA",
    internStipend: "₹90,000 / mo",
    location: "Bengaluru / Chennai / Hyderabad",
    deadline: "2026-10-28",
    openStatus: "Accepting Applications",
    rounds: ["Online Assessment (Debugging + DSA + Work Styles)", "Virtual Onsite 1 (DSA + Leadership)", "Virtual Onsite 2 (OOP + Leadership)", "Bar Raiser Round"],
    applyLink: "https://amazon.jobs",
    hiringSeason: "Annual Tech Hiring",
    description: "Deliver scalable microservices and resilient cloud architectures under Amazon's 16 Leadership Principles."
  },
  {
    id: "rec-5",
    company: "Atlassian",
    logoText: "ATL",
    logoColor: "#6366f1",
    role: "Graduate Software Engineer",
    eligibleBranches: ["CSE", "IT", "ECE"],
    minCGPA: 7.5,
    ctcTotal: "₹52.0 LPA",
    baseSalary: "₹20.0 LPA",
    internStipend: "₹1,30,000 / mo",
    location: "Bengaluru (Work from Anywhere)",
    deadline: "2026-11-10",
    openStatus: "Upcoming Drive",
    rounds: ["HackerRank Coding Challenge", "Interactive Design / Coding Session", "System Craft & Code Review", "Values Interview"],
    applyLink: "https://atlassian.com/company/careers",
    hiringSeason: "Winter Drive",
    description: "Craft collaboration tools used by 80% of Fortune 500 companies including Jira, Confluence, Bitbucket, and Loom."
  }
];

export const INTERVIEW_QUESTIONS = [
  {
    id: "iq-1",
    category: "Data Structures & Algorithms",
    difficulty: "Medium",
    title: "LRU Cache Implementation",
    company: "Google, Amazon, Microsoft",
    frequency: "High Frequency",
    question: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with get(key) and put(key, value) in O(1) average time complexity.",
    solutionOverview: "Combine a Hash Map (for O(1) key lookup) with a Doubly Linked List (for O(1) node removal and addition to the head for most-recently-used tracking).",
    codeSnippet: `class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0); // dummy head
    this.tail = new Node(0, 0); // dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._insertHead(node);
    return node.val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this._insertHead(newNode);
    this.map.set(key, newNode);
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}`
  },
  {
    id: "iq-2",
    category: "System Design",
    difficulty: "Hard",
    title: "Design a Scalable URL Shortener (TinyURL)",
    company: "Uber, Meta, Microsoft",
    frequency: "Classic Problem",
    question: "Design a highly available, high-throughput URL shortening service like TinyURL (bit.ly). Handle 500M new URLs per month, 100:1 read-to-write ratio, and custom alias support.",
    solutionOverview: "• Estimation: 500M writes/month = ~200 writes/sec, 20,000 reads/sec.\n• Storage: 7-character Base62 string allows 62^7 = 3.5 Trillion unique URLs.\n• Key Generation Service (KGS): Pre-generate random unique 7-char keys in memory/DB to avoid concurrency collisions.\n• Architecture: Global CDN -> Load Balancer -> Web App Nodes -> Redis Cache Cluster (LRU eviction) -> NoSQL Key-Value DB (DynamoDB/Cassandra) partitioned by short_hash.",
    codeSnippet: `// Base62 Encoding Routine
const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function encodeBase62(num) {
  if (num === 0) return ALPHABET[0];
  let res = "";
  while (num > 0) {
    res = ALPHABET[num % 62] + res;
    num = Math.floor(num / 62);
  }
  return res;
}`
  },
  {
    id: "iq-3",
    category: "Operating Systems & Concurrency",
    difficulty: "Medium",
    title: "Producer-Consumer Problem with Bounded Buffer",
    company: "Goldman Sachs, Qualcomm, Apple",
    frequency: "Core Systems",
    question: "How do you synchronize concurrent Producer and Consumer threads sharing a bounded buffer without race conditions or busy waiting?",
    solutionOverview: "Use two counting semaphores ('empty' initialized to Buffer Size N, 'full' initialized to 0) and one binary mutex semaphore (initialized to 1). Producers wait on 'empty' and 'mutex', while Consumers wait on 'full' and 'mutex'.",
    codeSnippet: `// Pseudocode with Semaphores
Semaphore mutex = 1;
Semaphore empty = N; // initial empty slots
Semaphore full = 0;  // initial filled items

void producer() {
  while (true) {
    item = produce_item();
    wait(empty);
    wait(mutex);
    insert_into_buffer(item);
    signal(mutex);
    signal(full);
  }
}

void consumer() {
  while (true) {
    wait(full);
    wait(mutex);
    item = remove_from_buffer();
    signal(mutex);
    signal(empty);
    consume_item(item);
  }
}`
  },
  {
    id: "iq-4",
    category: "Behavioral & HR",
    difficulty: "Easy",
    title: "Tell Me About a Time You Disagreed With a Peer or Tech Lead",
    company: "Amazon, Google, Atlassian",
    frequency: "Must-Prepare",
    question: "Using the STAR method (Situation, Task, Action, Result), describe a technical disagreement on an engineering project and how you resolved it constructively.",
    solutionOverview: "• Situation: During our Capstone project, my team member wanted to use MongoDB while our use-case had heavily relational data schemas with strict transactional ACID needs.\n• Task: Reach consensus without hurting team dynamics or delaying project milestones.\n• Action: I benchmarked query performance on sample mock relational datasets, prepared a structured 1-page trade-off matrix showing join query complexities, and suggested a hybrid spike testing both approaches for 2 days.\n• Result: The team unanimously agreed PostgreSQL was best suited, saving 40% query time. We shipped the sprint 3 days ahead of schedule.",
    codeSnippet: `// Key STAR Takeaway:
// S - Situation (Context & Challenge)
// T - Task (Your exact responsibility)
// A - Action (Data-driven, respectful, active steps taken)
// R - Result (Quantifiable outcome & lessons learned)`
  }
];

export const COMMUNITY_THREADS = [
  {
    id: "thread-1",
    author: "Aarav Sharma",
    avatar: "AS",
    authorRole: "IIT Bombay CSE '25",
    title: "How should I structure my preparation for Google/Microsoft SDE-1 campus placement in the next 4 months?",
    tags: ["#Placement", "#DSA", "#PreparationStrategy"],
    createdAt: "2 days ago",
    upvotes: 42,
    downvotes: 1,
    views: 680,
    solved: true,
    content: "I have completed around 150 LeetCode problems (mostly Arrays, Strings, and basic DP). How much emphasis should I place on Low-Level Design (LLD), CS Fundamentals (OS, DBMS, Computer Networks), and mock interviews vs doing 200 more LeetCode problems?",
    replies: [
      {
        id: "rep-1-1",
        author: "Priya Nair",
        avatar: "PN",
        authorRole: "Placed at Microsoft SDE",
        createdAt: "1 day ago",
        upvotes: 28,
        content: "From my experience, once you have solved ~250 quality standard LeetCode problems (focusing on Blind 75 / Striver SDE Sheet), marginal return on more DSA drops unless you strengthen CS Fundamentals! Almost every technical interviewer spends 15-20 minutes grilling you on Virtual Memory, Deadlocks, SQL Indexing, and Object-Oriented Design (e.g. Design Parking Lot or Tic-Tac-Toe). Spend at least 30% of your daily study block on OS & DBMS."
      },
      {
        id: "rep-1-2",
        author: "Devansh Patel",
        avatar: "DP",
        authorRole: "Competitive Programmer",
        createdAt: "18 hours ago",
        upvotes: 12,
        content: "Also don't skip Graph algorithms (Dijkstra, Topological Sort, Disjoint Set Union) and Tree problems. Make sure to articulate your thoughts out loud during mock interviews with peers!"
      }
    ]
  },
  {
    id: "thread-2",
    author: "Sneha Reddy",
    avatar: "SR",
    authorRole: "Class 12th Aspirant (JEE 2026)",
    title: "BITS Pilani CSE vs IIT Roorkee / IIT Guwahati Electrical: Which is better for tech career paths?",
    tags: ["#Admissions", "#CollegeComparison", "#BITSvIIT"],
    createdAt: "3 days ago",
    upvotes: 35,
    downvotes: 2,
    views: 1140,
    solved: false,
    content: "I got a BITSAT score of 334 (likely CSE at Pilani campus) and an expected JEE Advanced rank of around 1600 (ECE/EE at Top 7 IITs). My ultimate goal is high-frequency trading or Big Tech SDE roles. Would the BITS CSE curriculum advantage outweigh the IIT brand tag?",
    replies: [
      {
        id: "rep-2-1",
        author: "Rohan Verma",
        avatar: "RV",
        authorRole: "BITS Pilani Alumni '23",
        createdAt: "2 days ago",
        upvotes: 31,
        content: "If your goal is software engineering, BITS Pilani CSE has zero attendance requirement which gives you immense freedom to contribute to open source, intern via Practice School (6 months guaranteed corporate internship), and prepare for placements. Both are tier-1 institutions, but studying CSE directly saves you the pain of studying Power Systems and Electrical Machines while coding in your spare time."
      }
    ]
  },
  {
    id: "thread-3",
    author: "Vikramaditya Joshi",
    avatar: "VJ",
    authorRole: "3rd Year B.Tech",
    title: "How to reliably boost CGPA from 7.2 to 8.5+ in the final 2 years? Is relative grading manageable?",
    tags: ["#Academics", "#CGPACalculator", "#GradingStrategy"],
    createdAt: "4 days ago",
    upvotes: 24,
    downvotes: 0,
    views: 520,
    solved: true,
    content: "I had a slow start in 1st year with 6.8 and 7.4 in 2nd year. Is it mathematically possible to cross 8.0 or 8.5 before campus placements begin? How do relative grading curves generally shift during 3rd year core subjects?",
    replies: [
      {
        id: "rep-3-1",
        author: "Ananya Mukherjee",
        avatar: "AM",
        authorRole: "Dean's List Student",
        createdAt: "3 days ago",
        upvotes: 19,
        content: "Use the GPA Planner tool in this hub to check exact credit math! If you take 22 credits per semester and secure 9.5+ Semester GPAs in Sem 5 and Sem 6, your cumulative CGPA will easily cross 8.1 - 8.3. In 3rd year, professors award higher grades to students who perform well in hands-on lab evaluations and term projects."
      }
    ]
  }
];

export const GRADING_SYSTEM_INFO = {
  scales: [
    { grade: "O (Outstanding)", points: 10, range: "90% - 100%", gpa4Scale: 4.0, descriptor: "Extraordinary mastery of course content with outstanding analytical application." },
    { grade: "A+ (Excellent)", points: 9, range: "80% - 89%", gpa4Scale: 3.7, descriptor: "Comprehensive understanding of principles and thorough practical execution." },
    { grade: "A (Very Good)", points: 8, range: "70% - 79%", gpa4Scale: 3.3, descriptor: "Strong grasp of subject concepts with solid problem solving." },
    { grade: "B+ (Good)", points: 7, range: "60% - 69%", gpa4Scale: 3.0, descriptor: "Above average comprehension, meets all major learning objectives." },
    { grade: "B (Above Average)", points: 6, range: "55% - 59%", gpa4Scale: 2.7, descriptor: "Adequate performance with minor deficiencies in edge-case applications." },
    { grade: "C (Average)", points: 5, range: "50% - 54%", gpa4Scale: 2.0, descriptor: "Basic minimum pass threshold; core concepts grasped." },
    { grade: "P (Pass)", points: 4, range: "40% - 49%", gpa4Scale: 1.0, descriptor: "Marginal performance satisfying minimal requirements." },
    { grade: "F (Fail)", points: 0, range: "< 40%", gpa4Scale: 0.0, descriptor: "Course requirements not met; requires re-examination or course repeat." }
  ],
  relativeVsAbsolute: {
    relative: "Relative Grading: Your grade is based on your z-score (distance from class mean in standard deviations). Ideal for large classes where exam difficulties vary.",
    absolute: "Absolute Grading: Your grade corresponds directly to fixed mark thresholds regardless of peers' scores."
  }
};
