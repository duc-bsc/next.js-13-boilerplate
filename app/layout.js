import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"

import "./globals.css"

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
}

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN || "nz9TDluG7Stg2bprbm6Hsgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
