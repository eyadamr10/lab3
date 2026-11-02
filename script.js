let q = 0;
function updatescreen() {
    document.getElementById("display").innerText = "Quantity: " + q;
}

function showQuantity() {
    alert("Your cart currently has: " + q + " items.");
}

function addToCart() {
    q = q + 1;
    updatescreen(); 
}

function addTwo() {
    q = q + 2;
    updatescreen();
}

function addThree() {
    q = q + 3;
    updatescreen();
}

function resetCart() {
    q = 0; 
    updatescreen();
}