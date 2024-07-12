document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Carrot', image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹10.00', detailsPage: 'carrot.html' },
        { id: 2, name: 'Broccoli', image: 'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹20.00', detailsPage: 'broccoli.html' },
        { id: 3, name: 'Tomato', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹30.00', detailsPage: 'tomato.html' },
        { id: 4, name: 'Spinach', image: 'https://images.pexels.com/photos/6824475/pexels-photo-6824475.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹15.00', detailsPage: 'spinach.html' },
        { id: 5, name: 'Pepper', image: 'https://images.pexels.com/photos/87626/paprika-vegetables-green-food-87626.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹25.00', detailsPage: 'pepper.html' },
        { id: 6, name: 'Cucumber', image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹12.00', detailsPage: 'cucumber.html' },
        { id: 7, name: 'Lettuce', image: 'https://images.pexels.com/photos/3016319/pexels-photo-3016319.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹13.00', detailsPage: 'lettuce.html' },
        { id: 8, name: 'Onion', image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹11.00', detailsPage: 'onion.html' },
        { id: 9, name: 'Garlic', image: 'https://images.pexels.com/photos/1460862/pexels-photo-1460862.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹15.00', detailsPage: 'garlic.html' },
        { id: 10, name: 'Potato', image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹10.00', detailsPage: 'potato.html' },
        { id: 11, name: 'Sweet Potato', image: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹15.00', detailsPage: 'sweet-potato.html' },
        { id: 12, name: 'Corn', image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹20.00', detailsPage: 'corn.html' },
        { id: 13, name: 'Green Beans', image:'https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹18.00', detailsPage: 'green-beans.html' },
        { id: 14, name: 'Peas', image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹22.00', detailsPage: 'peas.html' },
        { id: 15, name: 'Eggplant', image: 'https://images.pexels.com/photos/5529605/pexels-photo-5529605.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹25.00', detailsPage: 'eggplant.html' },
        { id: 16, name: 'Zucchini', image: 'https://images.pexels.com/photos/3375263/pexels-photo-3375263.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹17.00', detailsPage: 'zucchini.html' },
        { id: 17, name: 'Pumpkin', image: 'https://images.pexels.com/photos/5574268/pexels-photo-5574268.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹30.00', detailsPage: 'pumpkin.html' },
        { id: 18, name: 'Bell Pepper', image: 'https://images.pexels.com/photos/1434254/pexels-photo-1434254.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹25.00', detailsPage: 'bell-pepper.html' },
        { id: 19, name: 'Cabbage', image: 'https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹14.00', detailsPage: 'cabbage.html' },
        { id: 20, name: 'Cauliflower', image: 'https://images.pexels.com/photos/22125751/pexels-photo-22125751/free-photo-of-vegetable-of-cauliflower.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹22.00', detailsPage: 'cauliflower.html' },
        { id: 21, name: 'Asparagus', image: 'https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹28.00', detailsPage: 'asparagus.html' },
        { id: 22, name: 'Beetroot', image: 'https://images.pexels.com/photos/5758604/pexels-photo-5758604.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹20.00', detailsPage: 'beetroot.html' },
        { id: 23, name: 'Artichoke', image: 'https://images.pexels.com/photos/9589644/pexels-photo-9589644.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹30.00', detailsPage: 'artichoke.html' },
        { id: 24, name: 'Celery', image: 'https://images.pexels.com/photos/5843560/pexels-photo-5843560.jpeg?auto=compress&cs=tinysrgb&w=600', price: '₹18.00', detailsPage: 'celery.html' },
    ];

    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3><a href="${product.detailsPage}">${product.name}</a></h3>
            <p>${product.price}</p>
            <a href="${product.detailsPage}">View Details</a>
        `;
        productGrid.appendChild(productItem);
    });
});
