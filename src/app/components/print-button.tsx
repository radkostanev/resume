'use client'

import { useState } from 'react'
import Printer from './icons/printer'
import Document from './icons/document'

export default function PrintButton() {
  const [clicked, setClicked] = useState(false)

  const FLOATING_BUTTON_ICON_CLASS =
    'stroke-gray-100 size-5 transition group-hover:scale-125'

  const icon = clicked ? (
    <Document className={FLOATING_BUTTON_ICON_CLASS} />
  ) : (
    <Printer className={FLOATING_BUTTON_ICON_CLASS} />
  )

  function onPrintClick() {
    setClicked(() => true)

    setTimeout(() => {
      window.print()
      setClicked(() => false)
    }, 0)
  }

  return (
    <button
      type="button"
      aria-label="Print CV"
      className="fixed group bg-black rounded-full p-4 shadow-lg bottom-4 right-4 hidden transition lg:block lg:right-14 md:bottom-14 hover:scale-105 hover:shadow-xl print:hidden"
      onClick={onPrintClick}
    >
      {icon}
    </button>
  )
}
