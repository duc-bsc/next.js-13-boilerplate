import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import Link from "next/link"
import { useState } from "react"
const GlobalConfig = ({ blok }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <nav className="p-4 bg-blue-500" {...storyblokEditable(blok)}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              My Website
            </Link>
            {/* menu */}
            <div className="hidden space-x-4 md:flex">
              {blok.headerMenu.map((nestedBlok) => (
                <StoryblokComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
            {/* button */}
            <button className="text-white md:hidden" onClick={toggleExpansion}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div className="bg-blue-500 md:hidden" style={{ display: !isExpanded && "none" }}>
        <div className="container mx-auto">
          <div className="flex flex-col p-4 space-y-4">
            {blok.headerMenu.map((nestedBlok) => (
              <StoryblokComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default GlobalConfig
