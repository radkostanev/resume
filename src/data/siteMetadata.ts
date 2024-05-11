const siteMetadata: SiteMetadata = {
  bio: {
    avatar: '/avatar.png',
    name: 'Radko Stanev',
    intro:
      "A software engineer based in Sofia, Bulgaria. I'm a firm believer that clean code might very well be the most important aspect of software development. I'm passionate about web technologies, and I'm always eager to learn new things.",
    phone: '35989......',
    location: 'Sofia, Bulgaria',
    locationUrl: 'https://maps.app.goo.gl/xGuqyfDQNHoNngse9',
    email: 'radkostanev@gmail.com',
    github: 'radkostanev',
    linkedin: 'radko-stanev',
    twitter: 'radkostanev',
  },
  experience: [
    {
      position: 'Engineering Team Lead, Senior Software Engineer',
      company: 'Progress Software',
      companyUrl: 'https://www.telerik.com/',
      period: '2021 - Present',
      responsibilities: [
        'Lead a team of high-caliber engineers, developing the most successful component library for Blazor.',
        'Set goals and provide guidance to the team members to ensure timely project delivery.',
        'Work closely with the product management team to define the product roadmap and strategy.',
        'Conducting performance evaluations and career development discussions. Identifying training and skill development needs for the team members.',
      ],
      logo: '/progress-software.png',
    },
    {
      position: 'Technical Trainer',
      company: 'Telerik Academy',
      companyUrl: 'https://www.telerikacademy.com/',
      period: '2019 - 2021',
      responsibilities: [
        'Deliver training programs on various topics, including C#, .NET, JavaScript, and more.',
        'Mentor students and help them develop the skills needed to succeed in the IT industry.',
        'Participate in the selection process of the next generation of Telerik Academy students.',
        'Conduct mock interviews and help students prepare for job interviews.',
        'Participate in the development of the Telerik Academy program curriculum.',
      ],
      logo: '/telerik-academy.jpg',
    },
    {
      position: 'Operations Manager',
      company: 'BRR',
      companyUrl: 'https://www.bestrateremovals.co.uk/',
      period: '2015 - 2018',
      responsibilities: [
        'Manage the day-to-day operations of the company.',
        'Coordinate and oversee the activities of the team members.',
        'Develop and implement strategies to improve the efficiency of operations.',
        'Develop and maintain the company marketing strategy.',
      ],
      logo: '/brr.png',
    },
  ],
  education: [
    {
      degree: 'React Upskill',
      university: 'Telerik Academy',
      universityUrl: 'https://www.telerikacademy.com/',
      period: '2020',
      description: 'A 3-month intensive course on React and TypeScript.',
      logo: '/telerik-academy.jpg',
    },
    {
      degree: 'Bachelor of Economics',
      university: 'Veliko Tarnovo University',
      universityUrl: 'https://www.uni-vt.bg/',
      period: '2010 - 2014',
      description: 'Major: Marketing and Management',
      logo: '/vt-university.jpg',
    },
  ],
  skills: [
    { text: '.NET', bgColor: '#5C2D91', textColor: '#FFFFFF' },
    { text: 'Blazor', bgColor: '#512BD4', textColor: '#FFFFFF' },
    { text: 'JS', bgColor: '#F7DF1E', textColor: '#000000' },
    { text: 'TS', bgColor: '#3178C6', textColor: '#FFFFFF' },
    { text: 'Node.js', bgColor: '#339933', textColor: '#000000' },
    { text: 'React', bgColor: '#61DAFB', textColor: '#000000' },
    { text: 'Next.js', bgColor: '#000000', textColor: '#FFFFFF' },
    { text: 'HTML', bgColor: '#EB4034', textColor: '#000000' },
    { text: 'CSS', bgColor: '#1572B6', textColor: '#FFFFFF' },
    { text: 'Git', bgColor: '#F05032', textColor: '#000000' },
    { text: 'DevOps', bgColor: '#00A5F7', textColor: '#000000' },
  ],
  projects: [
    {
      title: 'Telerik UI for Blazor',
      description: 'The most comprehensive UI component library for Blazor.',
      url: 'https://www.telerik.com/blazor-ui',
      tags: ['Team Lead/Software Engineer', 'Blazor', 'C#', 'TypeScript'],
    },
    {
      title: 'Telerik Academy',
      description: 'The most successful IT boot camp in Bulgaria.',
      url: 'https://www.telerikacademy.com/',
      tags: ['Technical Trainer', 'Teaching', 'Education', 'Mentorship'],
    },
    {
      title: 'This résumé',
      description: 'A concise print friendly résumé web page.',
      url: '',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
  ],
  interests: [
    {
      icon: 'bookOpen',
      text: 'Learner Mindset',
      description:
        'I try to embrace every opportunity to learn something new, be it a new technology or a new skill.',
    },
    {
      icon: 'codeBracket',
      text: 'Web Development',
      description:
        'I love all web and put a great deal of effort to keep up with the latest trends.',
    },
    {
      icon: 'cube',
      text: 'Mechanical Keyboards',
      description:
        'Superior typing experience, vast customization options, satisfying feedback and sound - what is not to like?',
    },
    {
      icon: 'wrenchScrewdriver',
      text: 'DIY Projects',
      description:
        'From painting to woodworking - I get a great deal of joy from doing something with my own hands.',
    },
  ],
}

export default siteMetadata
