import { storyblokEditable } from "@storyblok/react/rsc"
import { renderRichText } from "@storyblok/react"
import Image from "next/image"

const Feature = ({ blok }) => (
  <div className="flex flex-col gap-3 px-3 column feature" {...storyblokEditable(blok)}>
    {blok.name}
    <div style={{ whiteSpace: "balance" }} dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}></div>

    {blok.photoImage?.filename && (
      <figure className="relative h-0 w-100 pb-[60%]">
        <Image src={blok.photoImage.filename} fill style={{ objectFit: "cover" }} />
      </figure>
    )}
  </div>
)

export default Feature
