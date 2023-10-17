import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Grid = ({ blok }) => {
  return (
    <div className="container py-8 mx-auto" {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Grid
