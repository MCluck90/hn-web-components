import { fetchTopStories } from '../../../api/top-stories'
import { getQueryParam } from '../../../url/query-params'
import { StoryType, isStoryType } from '../../../domain/Story'
import { fetchAskHnStories } from '../../../api/ask-hn-stories'
import { fetchBestStories } from '../../../api/best-stories'
import { fetchJobStories } from '../../../api/job-stories'
import { fetchNewStories } from '../../../api/new-stories'
import { fetchShowHnStories } from '../../../api/show-hn-stories'
import './StoryList.css'
import '../StoryListItem'
import { StoryListItem } from '../StoryListItem'

const typeToFetch: Record<StoryType, () => Promise<number[]>> = {
  [StoryType.AskHn]: fetchAskHnStories,
  [StoryType.Best]: fetchBestStories,
  [StoryType.Job]: fetchJobStories,
  [StoryType.New]: fetchNewStories,
  [StoryType.ShowHn]: fetchShowHnStories,
  [StoryType.Top]: fetchTopStories,
}

export class StoryList extends HTMLElement {
  async connectedCallback() {
    const page = Number(getQueryParam('page') ?? '0')

    const typeQueryParam = getQueryParam('type')
    const storyType = isStoryType(typeQueryParam)
      ? typeQueryParam
      : StoryType.Top
    const storyIds = await typeToFetch[storyType]().then((storyIds) =>
      storyIds.slice(page * 30, (page + 1) * 30),
    )

    const list = document.createElement('ol')
    list.setAttribute('start', (page * 30).toString())
    for (const storyId of storyIds) {
      const listItem = document.createElement('li')
      const story = new StoryListItem(storyId)
      story.setAttribute('story-id', storyId.toString())

      listItem.appendChild(story)
      list.appendChild(listItem)
    }
    this.appendChild(list)
  }
}

customElements.define('hn-story-list', StoryList)
