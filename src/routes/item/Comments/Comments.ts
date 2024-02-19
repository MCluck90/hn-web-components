import { fetchItem } from '../../../api/item'
import { getQueryParam } from '../../../url/query-params'
import { Comment } from './Comment'

export class Comments extends HTMLElement {
  async connectedCallback() {
    const story = await fetchItem(Number(getQueryParam('id')))

    for (const id of story.kids ?? []) {
      this.appendChild(new Comment(id))
    }
  }
}

customElements.define('hn-comments', Comments)
