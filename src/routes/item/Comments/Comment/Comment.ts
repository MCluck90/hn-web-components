import { fetchItem } from '../../../../api/item'
import { Item } from '../../../../domain/Item'
import { formatContent } from '../../util/content'
import { Toggler } from './Toggler'
import './Comment.css'

export class Comment extends HTMLElement {
  private comment: Promise<Item>
  private toggler: HTMLElement
  private author: HTMLElement
  private content: HTMLElement

  constructor(id?: number) {
    super()

    id = id ?? Number(this.getAttribute('comment-id'))
    this.comment = fetchItem(id)
    this.setAttribute('comment-id', id.toString())

    this.toggler = new Toggler()
    this.toggler.setAttribute('href', 'javascript:void(0)')
    this.toggler.setAttribute('data-is-open', '')
    this.toggler.innerHTML =
      '<img src="assets/icons/angle-small-down.svg" height="12">'
    this.toggler.addEventListener('click', this.toggle.bind(this))
    this.appendChild(this.toggler)

    this.author = document.createElement('span')
    this.author.setAttribute('rel', 'author')
    this.appendChild(this.author)

    this.content = document.createElement('div')
    this.appendChild(this.content)
  }

  async connectedCallback() {
    const comment = await this.comment

    this.author.innerText = comment.by ?? ''
    this.content.innerHTML = `
      ${formatContent(comment.text) ?? ''}
      ${comment.kids?.map((id) => `<hn-comment comment-id="${id}"></hn-comment>`).join('') ?? ''}
    `
  }

  toggle() {
    const isOpen = this.toggler.hasAttribute('data-is-open')
    if (isOpen) {
      this.toggler.removeAttribute('data-is-open')
      this.toggler.innerHTML =
        '<img src="assets/icons/angle-small-right.svg" height="12">'
      this.content.style.display = 'none'
    } else {
      this.toggler.setAttribute('data-is-open', '')
      this.toggler.innerHTML =
        '<img src="assets/icons/angle-small-down.svg" height="12">'
      this.content.style.display = 'block'
    }

    this.connectedCallback()
  }
}

customElements.define('hn-comment', Comment)
