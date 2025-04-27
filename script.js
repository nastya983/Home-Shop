const products = [
    { id: 1, name: "Чайник Xiaomi", price: 3000, image: "чайник7.jpg" },
    { id: 2, name: "Чайник Philips", price: 3200, image: "чайник8.jpg" },
    { id: 3, name: "Чайник Bosch", price: 7000, image: "чайник бош.jpg" },
    { id: 4, name: "Чайник Bosch", price: 12000, image: "чайник бош2.jpg" },
    { id: 5, name: "Тостер Philips", price: 3800, image: "тостер5.jpg" },
    { id: 6, name: "Тостер Tefal", price: 3500, image: "тостер2.jpg" },
    { id: 7, name: "Тостер Smeg", price: 9000, image: "тостер10.jpg" },
    { id: 8, name: "Тостер Gorenje", price: 3800, image: "тостер8.jpg" },
     { id: 9, name: "Микроволновая печь LG", price: 10990, image: "микроволновка.jpg" },
     { id: 10, name: "Встраиваемая микроволновая печь Bosch", price: 49900, image: "встраиваемая.jpg" },
     { id: 11, name: "Микроволновая печь Haier", price: 17000, image: "хаир.jpg" },
     { id: 12, name: "Микроволновая печь Samsung<", price: 16000, image: "печь.jpg" },
{ id: 13, name: "Погружной блендер Bosch", price: 9590, image: "блендер.jpg" },
{ id: 14, name: "Стационарный блендер Bosch", price: 12500, image: "блендер2.jpg" },
{ id: 15, name: "Стационарный блендер Philips", price: 10990, image: "блендер3.jpg" },
{ id: 16, name: "Погружной блендер Polaris", price: 3500, image: "блендер4.jpg" },
];
//Cart retrieval and update
       function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
       //Local storage save
 function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
         //remove cart
 function removeFromCart(itemId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== parseInt(itemId));
    saveCart(cart);
    updateCartDisplay();
    updateCartCount();
    updateTotalPrice();
}
        // Function to display cart items in the cart
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cart-items');
            if (!cartItemsContainer) return;

            let cartItems = getCart() || [];
            cartItemsContainer.innerHTML = ''; // Clear existing content

            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
                document.getElementById('total-price').textContent = 'Итого: 0 руб.';
                return;
            }

            let total = 0;
            cartItems.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');

                cartItemDiv.innerHTML = `
                    <div class="item-info">
                        ${item.name} - ${item.price} руб.
                    </div>
                     <button onclick="removeFromCart(${item.id})">Удалить</button>  </div>
        `;
                cartItemsContainer.appendChild(cartItemDiv);
                total += item.price;
            });

            document.getElementById('total-price').textContent = `Итого: ${total} руб.`;
        }
//update total price
 function updateTotalPrice() {
    const cartItems = getCart();
    const totalPriceElement = document.getElementById('total-price');
    if (!totalPriceElement) return;

    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
    });
    totalPriceElement.textContent = `Итого: ${total} руб.`;
}
        function showCheckoutForm() {
            document.getElementById('checkout-form').style.display = 'block';
        }
        // clear cart action
        function clearCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
    updateCartCount();
    updateTotalPrice();
}

// Function to update cart count (if you have a cart icon or something)
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) return;

    let cartItems = getCart() || [];
    cartCountElement.textContent = cartItems.length;  // Assuming you want to display the number of items
}
          // Scroll to Top
          const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';  // Or use an arrow character
scrollToTopButton.id = 'scroll-to-top';
scrollToTopButton.style.display = 'none';  // Initially hidden
document.body.appendChild(scrollToTopButton ); //add as page content

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Action

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Puts the page to top
    });
};

window.onload = function() {
   //add default calls here
   // scrollToTopButton set up or function needs defualt

     updateCartCount();
        updateCartDisplay();
          updateTotalPrice();

           var elem = document.querySelector('meta[name="pageName"]');  // this function determines if it exists will exit if not
    var pageName = elem ? elem.content : null
    if (pageName == 'cart')  {
            //DO cart Specific
           console.log("running add to cart!")
    }

};