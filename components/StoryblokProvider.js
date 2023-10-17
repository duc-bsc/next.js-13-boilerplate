/** 1. Tag it as client component */
"use client"
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"

/** 2. Import your components */
import Page from "./Page"
import Teaser from "./Teaser"
import Grid from "./Grid"
import Feature from "./Feature"
import Section from "./Section"
import HeaderMenu from "./HeaderMenu"
import GlobalConfig from "./GlobalConfig"
import MenuLink from "./MenuLink"

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.ACCESS_TOKEN || "nz9TDluG7Stg2bprbm6Hsgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    section: Section,
    feature: Feature,
    headerMenu: HeaderMenu,
    menuLink: MenuLink,
    config: GlobalConfig,
  },
})

export default function StoryblokProvider({ children }) {
  // console.log(children)

  return children
}
