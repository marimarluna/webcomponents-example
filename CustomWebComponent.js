const createCustomDivTemplate = () => {
  const template = document.createElement("template");
  template.innerHTML = `
  <div>
  <slot></slot>
  <p>Shadow Paragraph</p>
  </div>
  `;
  return template;
};

class CustomDiv extends HTMLElement {
  static observedAttributes = ["backgroundColor", "size", "textColor"];

  constructor() {
    super();
  }

  connectedCallback() {
    console.log("is conected");
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = createCustomDivTemplate();
    const style = document.createElement("style");
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.changeProperties();
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.changeProperties();
  }

  changeProperties() {
    const shadow = this.shadowRoot;
    if (shadow) {
      shadow.querySelector("style").textContent = `
      div {
        border: 1px solid;
        width: ${this.getAttribute("size")};
        height: ${this.getAttribute("size")};
        background-color: ${this.getAttribute("backgroundColor")};
      }
      p {
        color: ${this.getAttribute("textColor")}
      }
    `;
    }
  }
}

customElements.define("my-custom-div", CustomDiv);
