class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>Copyright © 2023 Bikin Ngiler | Resto Kebanggan Indonesia</p>
    </footer>       
        `;
  }
}
customElements.define('footer-bar', FooterBar);
