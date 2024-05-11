import Image from 'next/image'
import siteMetadata from '../../../data/siteMetadata'
import React from 'react'
import Section from '../section'
import TimelineRecord from '../timeline-record'

export default function Experience() {
  const descriptionFn = (responsibilities: string[]): React.ReactNode => (
    <ul className="mt-1 ml-4 text-xs text-gray-600 tracking-tight list-disc">
      {responsibilities.map((responsibility) => {
        return <li key={responsibility}>{responsibility}</li>
      })}
    </ul>
  )

  return (
    <Section title="Experience">
      <div className="[&>:not(:first-child)]:mt-3">
        {siteMetadata.experience.map((experience) => {
          const descriptionContent = descriptionFn(experience.responsibilities)
          return (
            <TimelineRecord
              key={experience.period}
              period={experience.period}
              url={experience.companyUrl}
              at={experience.company}
              title={experience.position}
              description={descriptionContent}
              logo={experience.logo}
            />
          )
        })}
      </div>
    </Section>
  )
}
