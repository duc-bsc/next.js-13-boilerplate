import { getStoryblokApi } from "@storyblok/react/rsc"
import StoryblokStory from "@storyblok/react/story"

export default async function Page({ params: { slug = "home" } }) {
  // console.log("props", props)

  const { data } = await fetchData(slug)

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData(slug, sbParams) {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/${slug}`, { ...sbParams, version: process.env.API_VERSION || "draft" })
}
