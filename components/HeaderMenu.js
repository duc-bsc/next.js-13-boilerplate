import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
const HeaderMenu = ({ blok }) => (
  <div className="items-center justify-end hidden space-x-10 md:flex md:flex-1 lg:w-0" {...storyblokEditable(blok)}>
    {blok.links.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
)
export default HeaderMenu
