function getItem(){

    var url = window.location.toString();
    var urlSplit = url.split(/id=|&/);
    var itemid = urlSplit[1];

    if (itemid >= 0){
        var http = new XMLHttpRequest();
        var server = "http://3.1.163.75/item?id=" + itemid;
        http.open("GET", server);
        http.send();
    
        http.onreadystatechange = function() {
            if (this.readyState === 4){
                if (this.status === 200){
                    item = JSON.parse(this.responseText);
                    fillInfo(item);
                }
            }
        }
    }
}

function fillInfo(item){
    var infoPanel = document.getElementById("product-info");
    infoPanel.innerHTML = createPanel(item);

    var imgLink = document.getElementById("imglink");
    var imgBox = document.getElementById("imgbox");

    imgLink.setAttribute("href", "images/product-1.jpg");
    imgBox.setAttribute("src", "images/product-1.jpg");
}

function priceChange(){
    var priceBox = document.getElementById("pricebox");
    var priceLabel = document.getElementById("price");
    var selectedValue = priceBox.options[priceBox.selectedIndex].value;
    priceLabel.innerHTML = "<span>$" + selectedValue + "</span>"
}

function createPanel(item){

    var discounts = item["discount"];
    let size = Object.keys(discounts).length;
    var options = "<option value='" + item["base_price"] + "'>Base price: $" + item["base_price"] + "</option>";

    for (var i = 0; i < size; i++){
        var expiry = discounts[i]["expiry"];
        var expiryTrim = expiry.split(" ");
        var date = expiryTrim[0] + " " + expiryTrim[1] + " " + expiryTrim[2] + " " + expiryTrim[3];
        options += "<option value='" + discounts[i]["price"] + "'>$" + discounts[i]["price"] + " - expires " + date + "</option>"
    }

    var content = `<h3>` + item["name"] + `</h3>
                <div class="rating d-flex">
                    <p class="text-left mr-4">
                        <a href="#" class="mr-2">5.0</a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                    </p>
                    <p class="text-left mr-4">
                        <a href="#" class="mr-2" style="color: #000;">100 <span style="color: #bbb;">Rating</span></a>
                    </p>
                    <p class="text-left">
                        <a href="#" class="mr-2" style="color: #000;">500 <span style="color: #bbb;">Sold</span></a>
                    </p>
                </div>
                <p id="price" class="price"><span>$` + item["base_price"] + `</span></p>
                <p>` + item["info"] + `</p>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="form-group d-flex">
                            <div class="select-wrap">
                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                <select id="pricebox" class="form-control" onchange="priceChange()">` + 
                                    options + `
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="w-100"></div>
					<div class="input-group col-md-6 d-flex mb-3">
                        <span class="input-group-btn mr-2">
                            <button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
                                <i class="ion-ios-remove"></i>
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
                        <span class="input-group-btn ml-2">
                            <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                <i class="ion-ios-add"></i>
                            </button>
                        </span>
	          	    </div>
	          	    <div class="w-100"></div>
                    <div class="col-md-12">
                        <p style="color: #000;">600 kg available</p>
                    </div>
          	    </div>
          	    <p><a href="cart.html" class="btn btn-black py-3 px-5">Add to Cart</a></p>`
    
    return content;
}