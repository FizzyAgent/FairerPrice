function getAllItems(){
    var http = new XMLHttpRequest();
    var server = "http://3.1.163.75/all";
    http.open("GET", server);
    http.send();

    http.onreadystatechange = function() {
        if (this.readyState === 4){
            if (this.status === 200){
                items = JSON.parse(this.responseText);
                fillTable(items);
            }
        }
    }
}

function fillTable(items){

    var table = document.getElementById("table");
    var content = ""
    let size = Object.keys(items).length;

    for(var i = 1; i <= size; i++){
        content += buildCell(items[i], i);
    }
    
    table.innerHTML = content;
}

function buildCell(item, itemid){

    var disc = (100 * (item["base_price"] - item["min_price"]) / item["base_price"]).toFixed(0);

    var cell = `<div class="col-md-6 col-lg-3" onclick="location.href='product.html?id=` + itemid + `';">
                    <div class="product">
                        <a href="#" class="img-prod img-fluid" style="background-image: url('` + item["image"] + `');">
                            <span class="status">` + disc + `%</span>
                            <div class="overlay"></div>
                        </a>
                        <div class="text py-3 pb-4 px-3 text-center">
                            <h3><a href="#">` + item["name"] +`</a></h3>
                            <div class="d-flex">
                                <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">` + item["base_price"].toFixed(2) + `</span><span class="price-sale">` + item["min_price"].toFixed(2) + `</span></p>
                                </div>
                            </div>
                            <div class="bottom-area d-flex px-3">
                                <div class="m-auto d-flex">
                                    <a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                        <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                        <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="#" class="heart d-flex justify-content-center align-items-center ">
                                        <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    
    return cell;
}