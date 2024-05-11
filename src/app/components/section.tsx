export default function Section({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section id={title.toLowerCase()}>
      <h2 className="text-xl font-bold">{title}</h2>
      <hr className="h-px mb-4 mt-1 bg-gray-200 border-0" />
      {children}
    </section>
  )
}
