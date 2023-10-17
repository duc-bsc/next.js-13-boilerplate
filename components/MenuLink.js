import { storyblokEditable } from "@storyblok/react"
import Link from "next/link"
const MenuLink = ({ blok }) => (
  <Link class=" text-white hover:text-gray-300" href={`/${blok.link.cached_url}`} {...storyblokEditable(blok)}>
    {blok.name}
  </Link>
)
export default MenuLink
