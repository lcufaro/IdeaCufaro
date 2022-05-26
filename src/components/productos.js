export const baseProductos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve([
        {
            id: 1,
            title: 'Balls',
            description: 'Mr. Babbache ball',
            price: 30,
            pictureUrl: 'https://www.juegosmalabares.com/images/productos/pelota-henrys-stretch-semillas-125g-3-567.jpeg',
            stock: 7

        },
        {
            id: 2,
            title: 'Clubs',
            description: 'Mr. Babbache club',
            price: 20,
            pictureUrl: 'https://www.juegosmalabares.com/images/productos/maza-henrys-pirouette-training-1-244.jpeg',
            stock: 9
        }
    ]), 2000)
});


export const getItem = (id) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        {
            id: 1,
            title: 'Balls',
            description: 'Mr. Babbache ball',
            price: 30,
            pictureUrl: 'https://www.juegosmalabares.com/images/productos/pelota-henrys-stretch-semillas-125g-3-567.jpeg',
            stock: 7
        }
    ), 2000)
});
