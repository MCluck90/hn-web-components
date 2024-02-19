import './NavBar.css'

export class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="?type=top">Top</a>
      <a href="?type=ask-hn">Ask HN</a>
      <a href="?type=show-hn">Show HN</a>
      <a href="?type=best">Best</a>
      <a href="?type=new">New</a>
    `
  }
}

customElements.define('hn-nav-bar', NavBar)
