interface Experience {
  position: string
  company: string
  companyUrl: string
  period: string
  responsibilities: string[]
  logo: string
}

interface Education {
  degree: string
  university: string
  universityUrl: string
  period: string
  description?: string
  logo: string
}

interface Skill {
  text: string
  bgColor?: string
  textColor?: string
}

interface Project {
  title: string
  description: string
  url: string
  tags: string[]
}

interface Bio {
  avatar: string
  name: string
  intro: string
  phone: string
  location: string
  locationUrl: string
  email: string
  github: string
  linkedin: string
  twitter: string
}

interface Interest {
  icon: string
  text: string
  description: string
}

interface SiteMetadata {
  bio: Bio
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  interests: Interest[]
}
