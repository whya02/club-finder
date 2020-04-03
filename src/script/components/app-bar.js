class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
	this._shadowRoot.innerHTML = `
		<style>
		* {
			margin: 0;
			box-sizing: border-box;
		}
		:host {
			width: 100%;
			background-color: cornflowerblue;
			color: white;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			display: block;
			padding: 16px!important;
		}
		</style>
		<h2>Club Finder</h2>
	`;
  }
}

customElements.define("app-bar", AppBar);