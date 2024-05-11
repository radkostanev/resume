'use client'

import siteMetadata from '../../../data/siteMetadata'
import Section from '../section'
import BookOpen from '../icons/book-open'
import CodeBracket from '../icons/code-bracket'
import Cube from '../icons/cube'
import WrenchScrewdriver from '../icons/wrench-screwdriver'
import React from 'react'

const iconComponents: any = {
  bookOpen: BookOpen,
  codeBracket: CodeBracket,
  cube: Cube,
  wrenchScrewdriver: WrenchScrewdriver,
}

export default function Interests() {
  return (
    <Section title="Interests">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {siteMetadata.interests.map((interest) => {
          const IconComponent = iconComponents[interest.icon]
          return (
            <div key={interest.text}>
              <div className="flex">
                {IconComponent && <IconComponent className="size-5" />}
                <p className="ms-2 text-sm font-medium min-w-fit">
                  {interest.text}
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-600 tracking-tight">
                {interest.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
