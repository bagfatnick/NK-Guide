import { LitElement, html } from "../lit-core.min.js"

export class SectionCard extends LitElement {
  static properties = {
    section: {}
  }

  constructor() {
    super()
    this.section = {
      title: "Section Title",
      descriptions: ["First", "Second"]
    }
  }

  titleTemplate() {
    return html`          
      <div class="uk-card-header">
        <h3 class="uk-card-title" x-text="${this.section.title}"></h3>
      </div>
    `
  }

  render() {
    return html`
      <div class="uk-card uk-card-default uk-margin">
          ${this.titleTemplate()}
          <div class="uk-card-body" >
              <div :id="section"></div>
          </div>
      </div>
    `
  }
}
customElements.define("section-card", SectionCard)