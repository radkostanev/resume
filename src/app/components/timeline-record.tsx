import React, { ReactNode } from 'react'
import Image from 'next/image'

export interface TimelineRecordProps {
  period: string
  logo: string
  url: string
  at: string
  title: string
  description: ReactNode
}

export default function TimelineRecord({
  period,
  logo,
  url,
  at,
  title,
  description,
}: TimelineRecordProps) {
  return (
    <React.Fragment key={period}>
      <div className="flex flex-row gap-2">
        <span className="relative flex shrink-0 overflow-hidden pt-1">
          <a
            tabIndex={-1}
            className="text-sm text-gray-900 h-fit hover:opacity-70 transition"
            href={url}
            target="_blank"
          >
            <Image
              alt={at}
              src={logo}
              width={32}
              height={32}
              className="size-8"
            />
          </a>
        </span>
        <div className="w-full">
          <h4 className="text-base font-bold">{title}</h4>
          <div className="flex flex-row flex-nowrap justify-between items-center">
            <a
              className="text-sm text-gray-900 hover:underline"
              href={url}
              target="_blank"
            >
              {at}
            </a>
            <p className="max-w-md text-pretty text-xs text-gray-600 tracking-tight">
              {period}
            </p>
          </div>
          {description && description}
        </div>
      </div>
    </React.Fragment>
  )
}
