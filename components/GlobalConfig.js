import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import Link from "next/link"
const GlobalConfig = ({ blok }) => {
  return (
    <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">My Logo</Link>
          </div>

          {blok.headerMenu.map((nestedBlok) => (
            <StoryblokComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default GlobalConfig
