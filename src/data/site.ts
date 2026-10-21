// All site copy lives here so it can be updated without touching layout.
// Biographical facts come from Dr. Albert's NSF vita (NSF_Vita2.pdf).
// Anything marked PLACEHOLDER is not from the vita and should be confirmed with him.
// Case studies and testimonials stay hidden until real ones are added.

import type { ImageMetadata } from 'astro';
import headshot from '../assets/eric-albert-headshot.png';

export interface Service {
  /** Short name, used in the footer and as the item heading. */
  title: string;
  line: string;
}

export interface Step {
  name: string;
  detail: string;
}

export interface CaseStudy {
  organization: string;
  problem: string;
  fix: string;
  result: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
}

export interface RecordEntry {
  text: string;
  when?: string;
}

export interface RecordGroup {
  label: string;
  entries: RecordEntry[];
}

export interface Faq {
  q: string;
  a: string;
}

/** Everything that differs between the nonprofit home page and the business page. */
export interface Page {
  path: string;
  /** Short audience name, used in nav links and to tag form requests. */
  audience: string;
  seoTitle: string;
  description: string;
  cta: string;
  hero: {
    kicker: string;
    headline: [string, string, string];
    lede: string;
    reassurance: string;
    trust: string[];
  };
  servicesTitle: string;
  services: Service[];
  stepsTitle: string;
  steps: Step[];
  stepsNote: string;
  aboutTitle: string;
  bio: string;
  faqs: Faq[];
  book: { title: string; titleEm: string; lede: string; placeholder: string };
}

export const site = {
  business: 'Albert Technical Consulting',
  principal: 'Eric K. Albert, PhD',
  firstName: 'Eric',
  url: 'https://alberttechnical.com',
  location: {
    county: 'Lycoming County',
    state: 'PA',
    stateLong: 'Pennsylvania',
    region: 'North Central Pennsylvania',
    /** Towns named for local search. All are in Lycoming County. */
    towns: ['Williamsport', 'South Williamsport', 'Montoursville', 'Muncy', 'Hughesville', 'Jersey Shore'],
  },
  contact: {
    email: 'eric@alberttechnical.com',
  },
  form: {
    /** Form backend URL, e.g. a Formspree endpoint 'https://formspree.io/f/abcd1234'.
     *  null makes the form open a pre-filled email instead. */
    endpoint: null as string | null, // PLACEHOLDER
  },
  analytics: {
    /** Plausible site domain, e.g. 'alberttechnical.com'. null disables the script. */
    plausibleDomain: null as string | null, // PLACEHOLDER
  },
};

/** Shared booking settings for both pages. */
export const call = {
  /** e.g. 'https://calendly.com/eric-albert/check-up'. null shows the request form instead. */
  calendlyUrl: null as string | null, // PLACEHOLDER
  /** Set these up as invitee questions in Calendly so they arrive with each booking. */
  questions: ['What do you need help with?', 'What would a successful outcome look like?'],
};

// PLACEHOLDER (both pages): confirm the free first call, written quotes, and rates with Eric.
// PLACEHOLDER (added from persona review): confirm the password/continuity answers (nonprofit),
// and 'no equipment sales or commissions', safety review, and scheduling-around-production (business).

export const nonprofitPage: Page = {
  path: '',
  audience: 'Nonprofits',
  seoTitle: 'Nonprofit IT Help in Williamsport, PA | Albert Technical',
  description:
    'Computer upgrades, Wi-Fi, backups, and practical AI for nonprofits in Williamsport and Lycoming County, PA. Free 20-minute check-up with Eric Albert, PhD.',
  cta: 'Get a free check-up',
  hero: {
    kicker: 'Nonprofit IT help · Lycoming County, PA',
    headline: ['Nonprofit tech', 'that just works,', 'on a nonprofit budget.'],
    lede: 'Computers, Wi-Fi, backups, and email, set up properly by someone local who explains things in plain English. I can also help you find the discounts and grants that pay for it.',
    reassurance: 'Free 20-minute check-up · Written quote before any work',
    trust: [
      'Based in Lycoming County, with on-site visits',
      'Professor Emeritus, Pennsylvania College of Technology, after nearly 30 years teaching technology',
      'Computer science degree and PhD from Penn State',
    ],
  },
  servicesTitle: 'What I can <em class=\'text-accent\'>fix for you.</em>',
  services: [
    { title: 'Computer upgrades', line: 'What to fix, upgrade, or replace, then setup and moving your files over.' },
    { title: 'Wi-Fi & networks', line: 'Reliable Wi-Fi for offices, churches, and community buildings.' },
    { title: 'Backups & security', line: 'Automatic backups, safer passwords, and protection from common scams.' },
    { title: 'Email & accounts', line: 'One organized setup for email and shared files, often free for nonprofits.' },
    {
      title: 'Practical AI help',
      line: 'Setting up tools like Microsoft Copilot or ChatGPT for letters, grant drafts, and reports, with simple rules for using them safely.',
    },
    {
      title: 'Tech discounts & grants',
      line: 'Donated and discounted software and hardware through TechSoup, a program that serves charities, plus help writing a small grant. Eric has won over $950,000 in federal grants.',
    },
    { title: 'Ongoing support', line: 'Optional monthly help from someone who already knows your setup.' },
  ],
  stepsTitle: 'Three steps, <em class=\'text-accent\'>starting with a free call.</em>',
  steps: [
    { name: 'Free check-up', detail: 'Send a short note or book a time. We talk for 20 minutes by phone or video.' },
    { name: 'Visit & quote', detail: 'I look at your setup and give you a written, fixed price.' },
    { name: 'Fix', detail: 'Work scheduled around your hours, with simple notes when it’s done.' },
  ],
  stepsNote: 'Optional monthly support afterward, if you want someone to call.',
  aboutTitle: 'I spent nearly thirty years teaching technology.',
  bio: 'Eric Albert studied computer science at Penn State, earned a PhD there, and spent nearly thirty years teaching electronics, computer science, and manufacturing at Pennsylvania College of Technology, where he also served as department head and dean. Now Professor Emeritus, he helps local nonprofits get their technology working, and uses the grant-writing experience behind more than $950,000 in National Science Foundation awards to help them pay for it.',
  faqs: [
    {
      q: 'What does it cost?',
      a: 'The 20-minute check-up is free. After that, projects get a written, fixed quote before any work starts, and nonprofits get a reduced rate. Monthly support is optional.',
    },
    {
      q: 'Can you help us pay for new equipment?',
      a: 'Often, yes. Many nonprofits qualify for donated or discounted software and hardware through TechSoup, Microsoft, and Google. I can check, handle the applications, and help write a small grant for the rest.',
    },
    {
      q: 'Do you only work with nonprofits?',
      a: 'Nonprofits and churches are my focus. I also help local businesses and manufacturers with automation and AI; see the page for businesses.',
    },
    {
      q: 'Will you need our passwords?',
      a: 'You stay in control. Where I can, I use my own login; otherwise you type passwords in yourself. I’ll also help you set up a password manager that your organization owns.',
    },
    {
      q: 'What if you’re not available someday?',
      a: 'Everything I set up gets written down in plain English and stays with you, so anyone you bring in later can pick up where I left off.',
    },
    {
      q: 'What if something breaks after hours?',
      a: 'I’m one local person, not a 24/7 call center. Support clients get priority during business hours, and I set things up so emergencies are rare.',
    },
    {
      q: 'Where do you work?',
      a: 'Throughout Lycoming County, including Williamsport, South Williamsport, Montoursville, Muncy, Hughesville, and Jersey Shore, plus the rest of North Central Pennsylvania. Many problems can also be handled remotely.',
    },
  ],
  book: {
    title: 'Tell me what’s not working.',
    titleEm: 'The first check-up is free.',
    lede: 'Twenty minutes by phone or video is usually enough to know what needs fixing and roughly what it will cost, whether or not you hire me.',
    placeholder: 'e.g. Our office computers are slow and the Wi-Fi keeps dropping.',
  },
};

export const businessPage: Page = {
  path: 'business/',
  audience: 'Businesses',
  seoTitle: 'Automation & AI for Manufacturers in Williamsport, PA',
  description:
    'Automation, robotics, and practical AI for manufacturers and small businesses in Williamsport and Lycoming County, PA. Free assessment with Eric Albert.',
  cta: 'Get a free assessment',
  hero: {
    kicker: 'Automation & AI for businesses and manufacturers · Lycoming County, PA',
    headline: ['Find the work', 'a robot or AI', 'should be doing.'],
    lede: 'Short on people for the repetitive jobs? I help local manufacturers and small businesses find where automation and AI will actually pay off, then set up the smaller projects and train your team.',
    reassurance: 'Free 20-minute assessment call · Written quote before any work',
    trust: [
      'Has built and installed automation systems',
      'Independent: no equipment sales or commissions',
      'Taught manufacturing, automation, and robotics at Penn College for nearly 30 years',
    ],
  },
  servicesTitle: 'Where I can <em class=\'text-accent\'>help your shop.</em>',
  services: [
    {
      title: 'Automation assessment',
      line: 'A walk-through of your operation to find the repetitive, error-prone, or unsafe jobs worth automating, with rough costs and payback.',
    },
    {
      title: 'Robotics & cobots',
      line: 'Choosing and setting up collaborative robots and simple automation for small runs, and working alongside an integrator on larger systems.',
    },
    {
      title: 'Sensors & shop-floor data',
      line: 'Simple sensors and dashboards so you can see machine uptime, counts, and problems without walking the floor.',
    },
    {
      title: 'Practical AI for the office',
      line: 'Microsoft Copilot or ChatGPT set up for quotes, documents, and email, with a clear policy so company data stays private.',
    },
    {
      title: 'Process & layout fixes',
      line: 'Cheaper fixes first. A better fixture, layout, or workflow often beats a robot, and I’ll tell you when it does.',
    },
    {
      title: 'Staff training',
      line: 'Hands-on training so your team can run, maintain, and get the most from new equipment and software.',
    },
  ],
  stepsTitle: 'Three steps, <em class=\'text-accent\'>starting with a free assessment.</em>',
  steps: [
    { name: 'Free assessment call', detail: 'Tell me about the job or process. We talk for 20 minutes by phone or video.' },
    { name: 'Site visit & plan', detail: 'I walk your floor or office and give you a written plan with priorities, costs, and a fixed quote.' },
    { name: 'Build & train', detail: 'Smaller projects are set up around your production schedule, and your team is trained. Larger systems go to a trusted integrator, with me on your side.' },
  ],
  stepsNote: 'Ongoing support is available once your systems are running.',
  aboutTitle: 'I’ve built it, and I taught it for thirty years.',
  bio: 'Eric Albert has built and installed automation systems and uses AI tools every day. He spent nearly thirty years at Pennsylvania College of Technology teaching manufacturing, automation, robotics, and electronics, including as head of Manufacturing Engineering Technology and dean of the School of Industrial & Engineering Technology, after studying computer science and earning a PhD at Penn State. He doesn’t sell equipment, so his advice is about what fits your shop.',
  faqs: [
    {
      q: 'We’re a small shop. Is automation realistic for us?',
      a: 'Often, yes. Collaborative robots and simple sensors cost far less than they used to. The assessment tells you honestly whether automation makes sense now, later, or not at all.',
    },
    {
      q: 'Do you install the equipment yourself?',
      a: 'For smaller projects, yes. For larger automation cells I plan the project and work alongside an integrator, so you get independent advice without paying for a big firm’s design work.',
    },
    {
      q: 'Are you tied to an equipment vendor?',
      a: 'No. I don’t sell equipment or take commissions, so my recommendation is whatever fits your shop, including not automating at all.',
    },
    {
      q: 'Will this disrupt production? Who handles safety?',
      a: 'Work is scheduled around your production. Every robot or automation project starts with a safety review, and I’ll tell you plainly when a job needs guarding or a certified integrator.',
    },
    {
      q: 'Is AI safe to use with our company data?',
      a: 'It can be, with the right setup. I use business versions of these tools that keep your data out of their training, and I train staff on what not to share.',
    },
    {
      q: 'What does it cost?',
      a: 'The first call is free. Every project gets a written, fixed quote before any work starts.',
    },
    {
      q: 'Where do you work?',
      a: 'With manufacturers and businesses throughout Lycoming County, including Williamsport, Montoursville, Muncy, Hughesville, and Jersey Shore, and across North Central Pennsylvania.',
    },
  ],
  book: {
    title: 'Tell me about the job you’d like to automate.',
    titleEm: 'The first call is free.',
    lede: 'Twenty minutes is usually enough to know whether automation or AI makes sense for you, and roughly what it would take.',
    placeholder: 'e.g. We hand-pack about 2,000 parts a day and want to know if a robot makes sense.',
  },
};

// PLACEHOLDER: add 2–3 real stories from nonprofits Eric has helped. The section stays hidden until then.
// Example shape: { organization: 'St. Mark’s Food Pantry', problem: '...', fix: '...', result: '...' }
export const caseStudies: CaseStudy[] = [];

// PLACEHOLDER: add genuine, named testimonials with permission. Hidden while empty.
export const testimonials: Testimonial[] = [];

export const about = {
  photo: headshot as ImageMetadata | null,
  record: [
    {
      label: 'Education',
      entries: [
        { text: 'PhD, Mineral Engineering, Pennsylvania State University', when: '1986' },
        { text: 'MS, Mineral Engineering, Pennsylvania State University', when: '1978' },
        { text: 'BS, Computer Science, Pennsylvania State University', when: '1973' },
      ],
    },
    {
      label: 'Appointments',
      entries: [
        { text: 'Professor Emeritus, Pennsylvania College of Technology', when: '2022' },
        { text: 'Associate Professor, Manufacturing Engineering Technology, Penn College', when: '2001–2020' },
        { text: 'Dean, School of Industrial & Engineering Technology, Penn College', when: '1996–2001' },
        {
          text: 'Assistant Professor & Department Head, Manufacturing Engineering Technology, Penn College',
          when: '1991–1996',
        },
        { text: 'Assistant Professor, Mineral Engineering, Penn State', when: '1986–1991' },
      ],
    },
    {
      label: 'NSF grants',
      entries: [
        {
          text: 'Principal Investigator, Planning Grant for Unconventional Shale Oil and Gas Technology Center of Excellence ($69,970)',
          when: '2014',
        },
        {
          text: 'Principal Investigator, Marcellus Shale Technology and Curriculum Development Model; Natural Gas Technician Education Partnership ($882,000)',
          when: '2010–2013',
        },
        {
          text: 'Project Manager, Pennsylvania Nanofabrication Manufacturing Technology Partnership, NSF Regional Center for Nanofabrication Manufacturing Education',
          when: '2001–2004',
        },
      ],
    },
    {
      label: 'Service',
      entries: [
        { text: 'Project proposal review board, Ben Franklin Technology Partners', when: '2013–' },
        { text: 'Lead instructor, Penn College SMARTGirls STEM summer camp', when: '2012–2018' },
        {
          text: 'Past Chair, Curriculum Committee; faculty representative, Facilities Committee and College Council, Penn College',
        },
        {
          text: 'Led ABET accreditation efforts for four engineering technology programs as dean',
          when: '1996–2001',
        },
      ],
    },
    {
      label: 'Presentations',
      entries: [
        {
          text: '“An Introduction to Gas Exploration and Production in the Marcellus Shale,” public service event, Scottish Rite Auditorium, Williamsport',
          when: '2008',
        },
      ],
    },
  ] satisfies RecordGroup[],
};
