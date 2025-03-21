const header = {
  homepage: 'https://vixhnuchandran.github.io/portfolio',
  title: '127.0.0.1',
}

const about = {
  name: 'Vishnu Chandran',
  role: 'Full Stack Engineer',
  description:
  'I am a Full Stack Engineer with a strong passion for cybersecurity. With a solid background in web development, I am now focused on expanding my knowledge and skills in cybersecurity to build secure and resilient systems. I am eager to contribute to the field and continue learning about security best practices.',  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/vixhnuchandran',
    github: 'https://github.com/vixhnuchandran',
  },
}

const projects = [
  {
    name: 'Lean Queue',
    description:
      'A lightweight Node.js application designed for efficient management of task queues. Built on the Express framework and powered by PostgreSQL.',
    stack: ['Javascript','NodeJS', 'ExpressJS', 'Postgresql'],
    sourceCode: 'https://github.com/vixhnuchandran/Lean-Queue',
    livePreview: '#',
  },
  {
    name: 'Versix',
    description:
      'Lightweight API for storing, retrieving, and managing data along with automated versioning.',
      stack: ['Typescript','NodeJS', 'ExpressJS', 'Sqlite'],
      sourceCode: 'https://github.com/vixhnuchandran/Versix',
    livePreview: '#',
  },
]

const devSkills = [
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'NodeJS',
  'Express',
  'Postgresql',
  'Sqlite',
  'MongoDB',
  'Vercel',
  'AWS',
  'GCP',
  'Git',
  'CI/CD',
  'Jest',
]

const secSkills = [
  'OSINT',
  'Data Privacy & Compliance',
  'Wi-Fi Security',
  'OWASP',
  'Web Application Security',
  'API Security',
  'VAPT',
  'Python',
  'Cryptography'
];


const contact = {
  email: 'i.vishnujs@gmail.com',
}

export { header, about, projects, devSkills,secSkills, contact }
