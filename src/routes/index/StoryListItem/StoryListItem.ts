import { fetchItem } from '../../../api/item'
import './StoryListItem.css'

export class StoryListItem extends HTMLElement {
  private _storyId: number

  constructor(storyId?: number) {
    super()

    this._storyId = storyId ?? Number(this.getAttribute('story-id'))
    this.setAttribute('story-id', this._storyId.toString())
  }

  async connectedCallback() {
    this.innerText = 'Loading...'

    const item = await fetchItem(this._storyId)

    this.innerHTML = `
      <a href="${item.url}">${item.title}</a>
      <br />
      <a href="./item?id=${item.id}">
        <img src="assets/icons/comment.svg" height="12" />
      </a>
    `
  }
}

customElements.define('hn-story-list-item', StoryListItem)
