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

export const site = {
  business: 'Albert Technical Consulting',
  /** Used in page titles for local search. */
  seoTagline: 'Nonprofit Technology Help & IT Support in Lycoming County, PA',
  principal: 'Eric K. Albert, PhD',
  firstName: 'Eric',
  url: 'https://alberttechnical.com', // PLACEHOLDER: confirm domain
  location: {
    county: 'Lycoming County',
    state: 'PA',
    stateLong: 'Pennsylvania',
    region: 'North Central Pennsylvania',
  },
  contact: {
    email: 'erickphd@aol.com',
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
  description:
    'Technology help for Lycoming County nonprofits: computer upgrades, Wi-Fi and networks, backups and security, and help finding the discounts and grants that pay for it. Book a free 20-minute check-up with Eric Albert.',
};

/** The free first call: the one action the page asks for. */
export const call = {
  name: 'free 20-minute check-up',
  cta: 'Book a free check-up',
  /** e.g. 'https://calendly.com/eric-albert/check-up'. null shows the email fallback instead. */
  calendlyUrl: null as string | null, // PLACEHOLDER
  /** Set these up as invitee questions in Calendly so they arrive with each booking. */
  questions: ['What do you need help with?', 'What would a successful outcome look like?'],
};

export const hero = {
  kicker: 'Technology help for nonprofits · Lycoming County, PA',
  headline: ['Nonprofit tech', 'that just works,', 'on a nonprofit budget.'],
  lede: 'Computers, Wi-Fi, backups, and email, set up properly by someone local who explains things in plain English. I can also help you find the discounts and grants that pay for it.',
  /** PLACEHOLDER: confirm with Eric. */
  reassurance: 'Free 20-minute check-up · Written quote before any work',
  trust: [
    'Based in Lycoming County, with on-site visits',
    'Taught electronics and computer science at Penn College for nearly 30 years',
    'BS in Computer Science, Penn State',
  ],
};

export const services: Service[] = [
  { title: 'Computer upgrades', line: 'What to fix, upgrade, or replace, then setup and moving your files over.' },
  { title: 'Wi-Fi & networks', line: 'Reliable Wi-Fi for offices, churches, and community buildings.' },
  { title: 'Backups & security', line: 'Automatic backups, safer passwords, and protection from common scams.' },
  { title: 'Email & accounts', line: 'One organized setup for email and shared files, often free for nonprofits.' },
  {
    title: 'Tech discounts & grants',
    line: 'TechSoup and other nonprofit discounts, plus help writing a small grant. Eric has won over $950,000 in federal grants.',
  },
  { title: 'Ongoing support', line: 'Optional monthly help from someone who already knows your setup.' },
];

// PLACEHOLDER: confirm the free check-up and written quotes.
export const steps: Step[] = [
  { name: 'Free check-up', detail: 'Send a short note or book a time. We talk for 20 minutes by phone or video.' },
  { name: 'Visit & quote', detail: 'I look at your setup and give you a written, fixed price.' },
  { name: 'Fix', detail: 'Work scheduled around your hours, with simple notes when it’s done.' },
];

// PLACEHOLDER: add 2–3 real stories from nonprofits Eric has helped. The section stays hidden until then.
// Example shape: { organization: 'St. Mark’s Food Pantry', problem: '...', fix: '...', result: '...' }
export const caseStudies: CaseStudy[] = [];

// PLACEHOLDER: add genuine, named testimonials with permission. Hidden while empty.
export const testimonials: Testimonial[] = [];

export const about = {
  photo: headshot as ImageMetadata | null,
  bio: 'Eric Albert studied computer science at Penn State, earned a PhD there, and spent nearly thirty years teaching electronics, computer science, and manufacturing at Pennsylvania College of Technology, where he also served as department head and dean. Now Professor Emeritus, he helps local nonprofits get their technology working, and uses the grant-writing experience behind more than $950,000 in National Science Foundation awards to help them pay for it.',
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

// PLACEHOLDER: confirm each answer, especially rates and after-hours availability.
export const faqs: Faq[] = [
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
    a: 'Nonprofits and churches are my focus, but I also help small offices and businesses with the same needs.',
  },
  {
    q: 'What if something breaks after hours?',
    a: 'I’m one local person, not a 24/7 call center. Support clients get priority during business hours, and I set things up so emergencies are rare.',
  },
  {
    q: 'Do you work outside Lycoming County?',
    a: 'Yes, across North Central Pennsylvania, and remotely for many problems.',
  },
];
