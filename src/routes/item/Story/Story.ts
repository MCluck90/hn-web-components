import { fetchItem } from '../../../api/item'
import { getQueryParam } from '../../../url/query-params'
import './Story.css'

export class Story extends HTMLElement {
  async connectedCallback() {
    const story = await fetchItem(Number(getQueryParam('id')))
    document.title = `${story.title ?? ''} - HNWC`

    const link = (content: string) =>
      story.url ? `<a href="${story.url}""_blank">${content}</a>` : content
    const openInNewTab = story.url
      ? `<a href="${story.url}" target="_blank">Open in a new tab</a>`
      : ''
    this.innerHTML = `
      <article>
        ${link(`<h1>${story.title}</h1>`)}
        ${story.text ?? ''}
        <span rel="author">${story.by ?? ''}</span>
        &bullet;
        ${openInNewTab}
      </article>
    `
  }
}

customElements.define('hn-story', Story)
