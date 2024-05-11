import React from 'react'
import siteMetadata from '../../../data/siteMetadata'
import Section from '../section'
import TimelineRecord from '../timeline-record'

export default function Education() {
  const descriptionFn = (description: string | undefined) => (
    <p className="mt-1 text-xs text-gray-600 tracking-tight">{description}</p>
  )
  return (
    <Section title="Education">
      <div className="[&>:not(:first-child)]:mt-3">
        {siteMetadata.education.map((education) => {
          const descriptionContent = descriptionFn(education.description)
          return (
            <TimelineRecord
              key={education.period}
              period={education.period}
              url={education.universityUrl}
              at={education.university}
              title={education.degree}
              description={descriptionContent}
              logo={education.logo}
            />
          )
        })}
      </div>
    </Section>
  )
}
