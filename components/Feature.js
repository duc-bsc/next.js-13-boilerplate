import { storyblokEditable } from "@storyblok/react/rsc"
import { renderRichText } from "@storyblok/react"
import Image from "next/image"

const Feature = ({ blok }) => (
  <div className="flex flex-col gap-3 px-3 column feature" {...storyblokEditable(blok)}>
    {blok.name}
    <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}></div>

    {blok.photoImage && (
      <figure className="relative w-100 h-[200px]">
        <Image src={blok.photoImage.filename} fill />
      </figure>
    )}
  </div>
)

export default Feature
