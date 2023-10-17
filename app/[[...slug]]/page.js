import { getStoryblokApi } from "@storyblok/react/rsc"
import StoryblokStory from "@storyblok/react/story"

export default async function Page({ params: { slug = "home" } }) {
  // console.log("props", props)

  try {
    const { data } = await fetchData(slug)

    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    )
  } catch (error) {
    const { data } = await fetchData(slug, { version: "draft" })
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    )
  }
}

export async function fetchData(slug, sbParams = { version: "published" }) {
  // let sbParams = { version }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams)
}
