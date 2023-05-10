class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menumob">
      <button class="iconmenu" id="menu" aria-label="Buka menu navigasi">
        ☰
      </button>
      <div class="logomob">Bikin Ngiler</div>
      <div class="logomob">&nbsp;</div>
    </div>

    <nav id="drawer" class="navmob">
      <ul class="navlistmob">
        <li class="navitemsmob"><a href="/">Home</a></li>
        <li class="navitemsmob"><a href="/#/favorite">Favorite</a></li>
        <li class="navitemsmob">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/iqri-mannisa-buchori-451b531bb/"
            >About Us</a
          >
        </li>
      </ul>
    </nav>

    <nav class="nav">
      <a class="logo" href="">Bikin Ngiler</a>
      <ul class="navlist">
        <li class="navitems"><a href="/">Home</a></li>
        <li class="navitems"><a href="/#/favorite">Favorite</a></li>
        <li class="navitems">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/iqri-mannisa-buchori-451b531bb/"
            >About Us</a
          >
        </li>
      </ul>
    </nav>

    <div class="hero">
      <div class="heroinner">
        <h1 class="herotitle">Bikin Ngiler</h1>
        <p class="herosubtitle">
          Temukan Restoran Kesukaan Anda di Bikin Ngiler Kesayangan
        </p>
      </div>
    </div>
        `;
  }
}
customElements.define('app-bar', AppBar);
