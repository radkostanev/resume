'use client'

import { useEffect, useState } from 'react'

export default function PrintNote() {
  let [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 5000),
      []
  })

  const isMac =
    typeof window !== 'undefined'
      ? navigator.userAgent.toUpperCase().indexOf('MAC') >= 0
      : false

  const getKey = isMac ? '⌘' : 'Ctrl'

  return (
    <div className="fixed hidden left-0 right-0 top-2 mx-auto w-fit lg:block">
      <div
        className={`px-4 py-2 transition-all duration-300 ease-out border rounded-full bg-white print:hidden ${
          visible ? 'shadow-lg' : 'translate-y-[-120%]'
        }`}
      >
        <span>
          <p className="text-center text-xs flex items-center">
            This résumé is print friendly. Press&nbsp;
            <kbd className="border border-gray-200 px-[7px] py-0.5 rounded-md shadow-inner font-sans">
              {getKey}P
            </kbd>
            &nbsp;to print or save as PDF.
          </p>
        </span>
      </div>
    </div>
  )
}
