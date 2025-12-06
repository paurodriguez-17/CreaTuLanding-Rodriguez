const products = [
    {
        id: '1',
        name: 'Alimento Premium Perro',
        price: 5500,
        category: 'alimentos',
        img: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 25,
        description: 'Alimento balanceado completo para perros adultos, rico en proteínas y vitaminas para un pelaje brillante.'
    },
    {
        id: '2',
        name: 'Correa Extensible',
        price: 3200,
        category: 'accesorios',
        img: 'https://images.pexels.com/photos/1364756/pexels-photo-1364756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 10,
        description: 'Correa de 5 metros, resistente y con freno de seguridad. Ideal para paseos controlados.'
    },
    {
        id: '3',
        name: 'Shampoo Hipoalergénico',
        price: 1800,
        category: 'higiene',
        img: 'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 15,
        description: 'Fórmula suave para pieles sensibles. Deja un aroma fresco y duradero sin irritar.'
    },
    {
        id: '4',
        name: 'Rascador para Gatos',
        price: 8900,
        category: 'juguetes',
        img: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 5,
        description: 'Rascador de varios niveles con sisal natural y plataformas suaves para el descanso de tu felino.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}