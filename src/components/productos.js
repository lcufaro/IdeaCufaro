export const baseProductos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve([
        {
            id: 1,
            title: 'Balls',
            description: 'Mr. Babbache ball',
            price: 30,
            pictureUrl: 'https://www.firetoys.eu/media/catalog/product/cache/5d6d96cb5e22bab60cddeb679efa32bd/m/mrb-beach-1kg-menu_1.jpg',
            stock: 7

        },
        {
            id: 2,
            title: 'Clubs',
            description: 'Mr. Babbache club',
            price: 20,
            pictureUrl: 'https://www.juegosmalabares.com/images/productos/pelota-henrys-stretch-semillas-125g-3-567.jpeg',
            stock: 9
        }
    ]), 2000)
});
