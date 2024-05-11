import siteMetadata from '../../../data/siteMetadata'
import Badge from '../badge'
import Section from '../section'

export default function Projects() {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {siteMetadata.projects.map((project) => {
          return (
            <div
              className="border rounded-md border-gray-200 p-2 flex flex-col gap-2 min-h-32 sm:min-h-40"
              key={project.title}
            >
              <a className="w-fit" href={project.url} target="_blank">
                <div className="text-sm font-medium hover:underline">
                  {project.title}
                </div>
              </a>
              <div className="text-xs tracking-tight text-gray-600">
                {project.description}
              </div>
              <div className="flex flex-row flex-wrap gap-1 mt-auto">
                {project.tags.map((tag) => {
                  return <Badge key={tag} text={tag} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
