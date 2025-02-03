type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Core-Commerce Platform',
    description:
      'Developed a centralized platform to consolidate data, creating a single source of truth. Responsibilities included designing and optimizing the schema for efficient catalog and price management, monitoring APIs in production, and improving performance by implementing schedulers. Additionally, automated data integrity checks were achieved using service bus listeners.',
    link: '/',
    id: 'project1',
  },
  {
    name: 'ExaCommerce',
    description: 'Built an e-commerce platform with features like user authentication, catalog management, and order processing. This involved developing and integrating APIs to handle complex business logic, managing media storage, and optimizing data seeding processes. Also contributed to the development of a cross-platform mobile application for enhanced accessibility.',
    link: '/',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Exathought Technology Consulting Pvt Ltd.',
    title: 'Senior Software Engineer',
    start: '2022',
    end: 'Present',
    link: '/',
    id: 'work1',
  },
  {
    company: 'Mobil80 Solutions and Services Pvt. Ltd.',
    title: 'Software Engineer',
    start: '2021',
    end: '2022',
    link: '/',
    id: 'work2',
  },
  {
    company: 'Shankara Online Solutions LLP',
    title: 'Management Traniee',
    start: '2020',
    end: '2020',
    link: '/',
    id: 'work3',
  },
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/thekishorevenkatesh',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kishore-v-software-engineer',
  }
]

export const EMAIL = 'mail.kishorevenkatesh@gmail.com'
