/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.

   Quick start:
     1. Fill in ME below — every raw fact about you (name, role, email,
        usernames, resume path) lives there ONCE. Everything else in this
        file (PERSON, SITE, SOCIAL_LINKS, CONTACT, FOOTER, project GitHub
        links) is derived from it, so you never have to repeat yourself.
     2. Update EDUCATION, EXPERIENCE, and PROJECTS with your own entries
        (add/remove array items freely — sections render however many
        entries you give them).
     3. Skim HERO and adjust the bio/CTAs if you want.
     4. Drop your resume PDF at public/resume.pdf (or wherever ME.resumePath
        points) so the resume links work (see README.md for details).

   Note: you don't need to type in your site's URL anywhere. It's
   derived automatically below — see SITE_URL.
   ───────────────────────────────────────────────────────────────────── */

// ── Your info (edit this once) ─────────────────────────────────────────
// The single source of truth for anything identifying you. Every other
// section below derives from these fields instead of repeating them.
export const ME = {
  firstName:  'Sarah',
  lastName:   'Tseng',
  role:       'Computer Science Student', // e.g. "Software Engineer", "Data Scientist"
  email:      'sarahtseng7@ucla.edu',
  github:     'sarahtseng7',      // GitHub username only, no URL
  linkedin:   'sarah-tseng-a3b099257',      // LinkedIn username only, no URL
  resumePath: '/resume.pdf',       // path under public/ — see README.md
};

// Derived URLs, built once from ME so nothing else hardcodes them.
const GITHUB_URL   = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF   = `mailto:${ME.email}`;

// The site's own URL, figured out automatically instead of hardcoded:
//   - On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set for you at build
//     time, so a Vercel deploy needs zero config here.
//   - Locally (pnpm dev / pnpm build), it falls back to localhost.
//   - Deploying elsewhere (or using a custom domain)? Set NEXT_PUBLIC_SITE_URL
//     in your environment (e.g. a .env.local file) to override.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ──────────────────────────────────────────────────────
// Shown in the hero section and used to build the page title below.
export const PERSON = {
  firstName: ME.firstName,
  lastName:  ME.lastName,
  fullName:  `${ME.firstName} ${ME.lastName}`,
  role:      ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
// Powers the browser tab title, meta description, canonical URL, and
// social previews. `url` is derived automatically (see SITE_URL above).
export const SITE = {
  url:         SITE_URL,
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a UCLA computer science student exploring robotics, software development, and STEM education.`,
};

// ── Navigation links ──────────────────────────────────────────────────
// Shown in the header. Each `href` should match a section's `id` on the
// page (e.g. '#projects' scrolls to <section id="projects">). Add or
// remove entries to match the sections you actually want to show.
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
// The big intro at the top of the page. `ctas` are the call-to-action
// buttons — set `primary: true` for the filled/highlighted button.
export const HERO = {
  greeting: "Hi, I'm",
  bio:      "Driven first-year Computer Science student at UCLA with Java experience through advanced coursework and a high school robotics leadership role. Seeking hands-on experience working with projects to develop coding and leadership skills.",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Get in touch',       href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
// One entry per school. `minor` and `gpa` are optional — omit them if
// not applicable. `courses` shows as a list of relevant coursework.
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  completed?: boolean;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of California, Los Angeles',
    degree: 'B.S. Computer Science',
    graduation: '2029',
    courses: [],
  },
  {
    school: 'Evergreen Valley High School',
    degree: 'High School',
    gpa: '4.0',
    graduation: 'June 2026',
    courses: [],
    completed: true,
  },
];

// ── Experience ────────────────────────────────────────────────────────
// One entry per role, ordered to match the resume. `bullets`
// are rendered as a list of achievements — keep them action-oriented and
// quantify impact where you can. `tech` shows as tag chips.
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'FTC Athena Robotics 9657',
    role: 'Programming Lead',
    location: 'San Jose, CA',
    start: 'Aug 2023', end: 'Aug 2026',
    bullets: [
      'Led software development for FIRST Tech Challenge, delivering autonomous and teleoperated robot systems.',
      'Mentored six new members through hands-on workshops in GitHub, Java, Android Studio, and OpenCV.',
      'Led STEM outreach for 180+ students at elementary schools and local libraries.',
      'Engineered a TensorFlow-based object detection system, earning the 2023–24 Control Award.',
    ],
    tech: ['Java', 'Android Studio', 'OpenCV', 'TensorFlow', 'GitHub'],
  },
  {
    company: 'Evergreen Valley High School',
    role: "Teacher’s Assistant — Computer Science",
    location: 'San Jose, CA',
    start: 'Aug 2025', end: 'Jun 2026',
    bullets: [
      'Prepared coding materials and activities with instructors for weekly lessons serving 30+ students.',
      'Spent 3+ hours per week grading assignments and giving feedback on programming fundamentals.',
      'Helped classmates debug programs and strengthen their understanding of programming concepts.',
    ],
    tech: [],
  },
  {
    company: 'Connexpedition',
    role: 'Teaching Volunteer',
    location: 'New Taipei City, Taiwan',
    start: 'Sep 2025', end: 'Present',
    bullets: [
      'Taught 11 Taiwanese middle school students in person for two weeks and online weekly for three months.',
      'Organized English lessons that integrated American culture to strengthen language skills and cultural understanding.',
      'Collaborated with staff and volunteers to improve the learning experience for participants.',
    ],
    tech: [],
  },
  {
    company: 'Badminton Club at Evergreen Valley High School',
    role: 'Club President',
    location: 'San Jose, CA',
    start: 'Aug 2024', end: 'Jun 2026',
    bullets: [
      'Managed a club of 350+ members, coordinating fundraisers, senior night, and monthly meetings.',
      'Competed in varsity mixed doubles on a team with 10 consecutive league championships.',
    ],
    tech: [],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
// One entry per project. `github` and `live` are both optional — omit
// whichever doesn't apply. Set `featured: true` to highlight a project
// (check the ProjectsSection component to see how featured entries are
// styled differently, if at all, in this template).
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
  demo?: { src: string; poster: string; alt: string };
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'WordleCheat',
    demo: { src: '/images/word-guess-helper.gif', poster: '/images/word-guess-helper-poster.png', alt: 'Word Guess Helper desktop version walkthrough' },
    description: 'A browser-based word-game helper with five-letter Wordle and twelve-letter modes. Enter guesses and mark gray, yellow, and green clues to narrow possible answers. The JavaScript filtering engine handles repeated letters and combines constraints across guesses, while a responsive interface displays candidate counts and alphabetized results. Runs entirely in the browser with no backend or build step.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: `${GITHUB_URL}/WordleCheat`,
    featured: true,
  },
  {
    name: 'Pet Adoption Simulator',
    demo: { src: '/images/pet-adoption-simulator.gif', poster: '/images/pet-adoption-simulator-poster.png', alt: 'Pet Adoption Simulator application walkthrough' },
    description: 'A Java Swing shelter-management game where players match pets with adopters based on lifestyle, energy levels, and care needs. Features compatibility and return-risk scoring, searchable profiles, urgency sorting, a resource shop, and CSV-backed saves, match history, and leaderboards.',
    tech: ['Java', 'Swing', 'Object-Oriented Programming', 'CSV'],
    github: `${GITHUB_URL}/Pet-Adoption-Simulator`,
    featured: true,
  },
];

// ── Social links ──────────────────────────────────────────────────────
// Shown in the header/hero area. Add or remove entries as needed.
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: GITHUB_URL   },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email',    href: EMAIL_HREF   },
];

// ── Contact ───────────────────────────────────────────────────────────
// The Resume link points to ME.resumePath, which is served from whatever
// file you place at public/resume.pdf — see README.md > "Adding Your
// Resume". If you don't want to show a resume link, delete that entry.
export const CONTACT = {
  email: ME.email,
  blurb: "I'm seeking summer internships and am available from mid-June through mid-September. Let's connect about opportunities in software development.",
  links: [
    { label: 'Email',    href: EMAIL_HREF,     display: ME.email                         },
    { label: 'GitHub',   href: GITHUB_URL,     display: `github.com/${ME.github}`        },
    { label: 'LinkedIn', href: LINKEDIN_URL,   display: `linkedin.com/in/${ME.linkedin}` },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
// `columns` renders as link groups. The Resume link here reuses
// ME.resumePath, so it stays in sync with CONTACT automatically.
export const FOOTER = {
  tagline: "UCLA computer science student. Building software, exploring robotics, and sharing what I learn.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: GITHUB_URL     },
        { label: 'LinkedIn', href: LINKEDIN_URL   },
        { label: 'Email',    href: EMAIL_HREF     },
      ],
    },
  ],
};
