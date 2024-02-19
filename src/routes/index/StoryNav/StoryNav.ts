import { getQueryParam } from '../../../url/query-params'
import { getNextPage, getPrevPage } from '../../../url/relative-urls'
import './StoryNav.css'

export class StoryNav extends HTMLElement {
  connectedCallback() {
    const page = Number(getQueryParam('page') ?? '0')
    const backLink = page > 0 ? `<a href="${getPrevPage()}">&lt; Back</a>` : ''
    this.innerHTML = `
      ${backLink}
      <a href="${getNextPage()}">Next &gt;</a>
    `
  }
}

customElements.define('hn-story-nav', StoryNav)
