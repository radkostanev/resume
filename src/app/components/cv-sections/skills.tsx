import siteMetadata from '../../../data/siteMetadata'
import Badge from '../badge'
import Section from '../section'

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="flex gap-2 flex-wrap">
        {siteMetadata.skills.map((skill) => {
          return (
            <Badge
              key={skill.text}
              textColor={skill.textColor}
              bgColor={skill.bgColor}
              text={skill.text}
            />
          )
        })}
      </div>
    </Section>
  )
}
