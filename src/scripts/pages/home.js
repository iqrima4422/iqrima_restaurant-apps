import sourceData from '../data/source';
import CONFIG from '../data/config';

const Home = {
  async render() {
    return `
    <section class="desc">
    <h2>Bikin Ngiler</h2>
    <p>
      Bikin Ngiler bukan hanya sekadar Webssite Rekomendasi tempat makan
      biasa, tetapi juga merupakan sebuah pengalaman kuliner yang menggugah
      selera. Di sini, Anda akan menemukan berbagai macam restoran dengan
      konsep dan cita rasa yang berbeda-beda, dari masakan tradisional
      hingga hidangan internasional yang memikat. Tidak hanya itu, suasana
      yang nyaman dan ramah di Bikin Ngiler akan membuat Anda merasa betah
      dan ingin kembali lagi. Jangan lewatkan kesempatan untuk menikmati
      pengalaman kuliner terbaik di Bikin Ngiler!
    </p>
  </section>
  <section class="content">
    <div class="latest">
      <h1>Telusuri Restoran</h1>
      <div class="list" id="tes"></div>
    </div>
  </section>
        `;
  },

  async afterRender() {
    const resto = await sourceData.listResto();
    let dataList = '';
    resto.restaurants.forEach((data) => {
      dataList += `
            <div class="list_item">
                <!-- Load Gambar Lazy Loading -->
                <img class="list_item_thumb" loading="lazy" src="${CONFIG.BASE_IMAGE_URL_SMALL + data.pictureId}" alt="${data.name}" title="${data.name}">
                <div class="city">${data.city}</div>
                <div class="list_item_content">
                    <p class="list_item_rating">
                        Rating : 
                        <a href="#" class="list_item_rating_value">${data.rating}</a>
                    </p>
                    <h1 class="list_item_title"><a href="/#/detail/${data.id}">${data.name}</a></h1>
                    <div class="list_item_desc">${data.description.slice(0, 150)}...</div>
                </div>
            </div>
            `;
    });
    document.querySelector('#tes').innerHTML = dataList;
  },
};

export default Home;
