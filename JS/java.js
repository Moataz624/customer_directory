

var seconds = 0, minutes = 0, hours = 0;
        
function Clock() {
    seconds = (seconds + 1) % 60;
    if (seconds === 0) minutes = (minutes + 1) % 60;
    if (seconds === 0 && minutes === 0) hours++;
    
    document.getElementById("clock").innerText =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

setInterval(Clock, 1000);


function changeImage(imageName) {
    document.getElementById("productImage").src = imageName;
}


var products = [];

function addProduct() {
    var product = document.getElementById('product-select').value;
    var price = parseFloat(document.getElementById('price-input').value);

    if (!product || isNaN(price) || price <= 0) {
        alert('Please select a valid product and enter a valid price.');
        return;
    }

    products.push({ product, price });

    var productList = document.getElementById('product-list');
    var item = document.createElement('div');
    item.textContent = `${product}: $${price.toFixed(2)}`;
    productList.appendChild(item);

    document.getElementById('product-select').value = "";
    document.getElementById('price-input').value = "";
    updateTotal();
}

function updateTotal() {
    var total = products.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('final-price').textContent = total.toFixed(2);
}


function filterTable() {
    var input = document.getElementById("search");
    var filter = input.value.toLowerCase();
    var table = document.getElementById("customer-table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var nameCell = rows[i].getElementsByTagName("td")[0];
        if (nameCell) {
            var name = nameCell.textContent || nameCell.innerText;
            rows[i].style.display = name.toLowerCase().includes(filter) ? "" : "none";
        }
    }
}

var dropdown = document.getElementById("dropdownMenu");
var content = dropdown.querySelector(".dropdown-content");


dropdown.onmouseenter = function() {
    content.classList.add("show");
};


document.onclick = function(event) {
    if (!dropdown.contains(event.target)) {
        content.classList.remove("show");
    }
};
