import Image from 'next/image'
import siteMetadata from '../../../data/siteMetadata'
import MapPin from '../icons/map-pin'
import Envelope from '../icons/envelope'
import GitHub from '../icons/github'
import Phone from '../icons/phone'
import LinkedIn from '../icons/linkedin'
import Twitter from '../icons/twitter'

const SOCIAL_ICON_CLASS =
  'inline-flex items-center justify-center transition whitespace-nowrap rounded-md text-sm font-medium border border-gray-200 size-8 text-gray-600 hover:bg-gray-100'

export default function Bio() {
  return (
    <section id="bio">
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-4xl font-bold">{siteMetadata.bio.name}</h1>
          <p className="max-w-md text-pretty text-xs text-gray-600">
            {siteMetadata.bio.intro}
          </p>
          <p className="max-w-md items-center gap-x-1 text-xs text-gray-600 flex">
            <a
              className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:text-gray-800 transition hover:underline"
              href={`${siteMetadata.bio.locationUrl}`}
              target="_blank"
              aria-label="Location on Google Maps"
            >
              <MapPin className="size-4" />
              {siteMetadata.bio.location}
            </a>
          </p>
          <div className="flex gap-x-1 pt-1 text-sm print:hidden">
            <a
              href={`mailto:${siteMetadata.bio.email}`}
              className={SOCIAL_ICON_CLASS}
              aria-label="Email"
            >
              <Envelope className="size-5" />
            </a>
            <a
              href={`tel:+${siteMetadata.bio.phone}`}
              className={SOCIAL_ICON_CLASS}
              aria-label="Phone"
            >
              <Phone className="size-5" />
            </a>
            <a
              href={`https://github.com/${siteMetadata.bio.github}`}
              target="_blank"
              className={SOCIAL_ICON_CLASS}
              aria-label="GitHub"
            >
              <GitHub className="size-5" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${siteMetadata.bio.linkedin}`}
              target="_blank"
              className={SOCIAL_ICON_CLASS}
              aria-label="LinkedIn"
            >
              <LinkedIn className="size-5" />
            </a>
            <a
              href={`https://twitter.com/${siteMetadata.bio.twitter}`}
              target="_blank"
              className={SOCIAL_ICON_CLASS}
              aria-label="Twitter"
            >
              <Twitter className="size-5" />
            </a>
          </div>
          <div className="hidden flex-col gap-x-1 text-xs text-gray-600 print:flex">
            <div className="flex flex-row flex-nowrap">
              <Envelope className="size-4" />
              <p className="ms-2">{siteMetadata.bio.email}</p>
            </div>
          </div>
          <div className="hidden flex-col gap-x-1 text-xs text-gray-600 print:flex">
            <div className="flex flex-row flex-nowrap">
              <Phone className="size-4" />
              <p className="ms-2">{siteMetadata.bio.phone}</p>
            </div>
          </div>
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-xl size-36 self-start">
          <Image
            priority={true}
            alt={siteMetadata.bio.name}
            src={siteMetadata.bio.avatar}
            width={192}
            height={192}
            className="size-36 rounded-full transition hover:scale-105"
          />
        </span>
      </div>
    </section>
  )
}
