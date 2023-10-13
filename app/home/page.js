import { getStoryblokApi } from "@storyblok/react/rsc"
import StoryblokStory from "@storyblok/react/story"

export default async function Home() {
  const { data } = await fetchData()

  console.log(data.story)

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
  let sbParams = { version: "draft" }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/home`, sbParams)
}
