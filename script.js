let total = 0;

function addToCart(food,price){

let cart = document.getElementById("cart");

let li = document.createElement("li");

li.innerHTML = `
${food} - ₹${price}
<button onclick="removeItem(this,${price})">
Remove
</button>
`;

cart.appendChild(li);

total += price;

document.getElementById("total").innerText = total;
}

function removeItem(btn,price){

btn.parentElement.remove();

total -= price;

document.getElementById("total").innerText = total;
}

function checkout(){

if(total===0){
alert("Cart is Empty!");
}
else{
alert("Order Placed Successfully 🎉");
}
}
