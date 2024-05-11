export interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {
  textColor?: string
  bgColor?: string
  text?: string
}

export default function Badge({
  textColor,
  bgColor,
  text,
  ...props
}: BadgeProps) {
  return (
    <span
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      key={text}
      className="bg-gray-50 text-gray-800 border text-xs font-mono tracking-tighter px-1.5 py-1 rounded-md text-nowrap print:!text-gray-800 print:!bg-inherit"
    >
      {text}
    </span>
  )
}
