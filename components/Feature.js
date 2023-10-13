import { storyblokEditable } from "@storyblok/react/rsc"

const Feature = ({ blok }) => (
  <div className="px-3 column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
)

export default Feature
