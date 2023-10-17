import { getStoryblokApi } from "@storyblok/react/rsc"
import StoryblokStory from "@storyblok/react/story"

export default async function Page({ params: { slug = "home" } }) {
  // console.log("props", props)

  try {
    const { data } = await fetchData(slug)

    const { data: globalConfig } = await fetchData("config")

    return (
      <>
        <StoryblokStory story={globalConfig.story} />
        {data.story.slug !== "config" && <StoryblokStory story={data.story} />}
      </>
    )
  } catch (error) {
    return (
      <main>
        <p>404 - Page not found!</p>
      </main>
    )
  }
}

export async function fetchData(slug, sbParams) {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/${slug}`, { ...sbParams, version: process.env.API_VERSION || "draft" })
}
