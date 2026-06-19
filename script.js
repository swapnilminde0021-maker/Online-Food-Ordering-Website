let total = 0;

function addToCart(food, price){
    const cart = document.getElementById("cart");

    let li = document.createElement("li");
    li.textContent = food + " - ₹" + price;

    cart.appendChild(li);

    total += price;

    document.getElementById("total").innerText = total;
}
