class GoodsItem {
    constructor(title, price, image) {
        this.title = title
        this.price = price
        this.image = image
    }

    render() {
        return `<article class="catalog-items__card card goods-item">
            <div class="card__image-wrapper">
              <img class="card__image" src=${this.image} alt="?" />
              <button class="card__add">Add to Cart</button>
            </div>
            <div class="card__content">
              <h3 class="card__title">${this.title}</h3>
              <p class="card__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
              <p class="card__price text text--pink">$${this.price}</p>
            </div>
          </article>`
    }
}

class GoodsList {
    constructor() {
        this.goods = []
    }

    fetchGoodsMain() {
        this.goods = [
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image1.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image2.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image3.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image4.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image5.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image6.webp" },
        ]
    }

    fetchGoodsCatalog() {
        this.goods = [
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image1.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog2.jpg" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image3.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/image4.webp" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog5.jpg" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog6.jpg" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog7.jpg" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog8.jpg" },
            { title: 'ELLERY X M\'O CAPSULE', price: '52.00', image: "./Sprites/catalog9.jpg" },
        ]
    }

    renderMain() {
        const element = document.querySelector('.goods-list-main')
        if (element) {
            let listHtml = ''
            this.goods.forEach(good => {
                const item = new GoodsItem(good.title, good.price, good.image)
                listHtml += item.render()})
            element.innerHTML = listHtml
        }
        else { console.error('Error: .list element not found in the DOM.') }
    }

    renderCatalog() {
        const element = document.querySelector('.goods-list-catalog')
        if (element) {
            let listHtml = ''
            this.goods.forEach(good => {
                const item = new GoodsItem(good.title, good.price, good.image)
                listHtml += item.render()
            })
            element.innerHTML = listHtml
        }
        else { console.error('Error: .list element not found in the DOM.') }
    }
}

const list = new GoodsList()
list.fetchGoodsMain()
list.renderMain()
list.fetchGoodsCatalog()
list.renderCatalog()