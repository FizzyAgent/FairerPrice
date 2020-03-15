function getAllItems(){
    const http = new XMLHttpRequest();
    const url="http://3.1.163.75/all";
    http.open("GET", url);
    http.send();

    http.onreadystatechange = function() {
        if (this.readyState === 4){
            if (this.status === 200){
                items = JSON.parse(this.responseText);
                console.log(items);
                fillTable(items);
            }
        }
    }
}

function fillTable(items){

    var table = document.getElementById("table");
    var content = ""
    let size = Object.keys(items).length;

    for(var i=0; i < size; i++){
        content += buildCell(items[i], i);
    }
    console.log(content);
    table.innerHTML = content;
}

function buildCell(item, itemid){

    var disc = (100 * item["min_price"] / item["base_price"]).toFixed(0);

    var cell = `<div class="col-md-6 col-lg-3">
                    <div class="product">
                        <a href="#" class="img-prod"><img class="img-fluid" src="images/product-1.jpg" alt="Colorlib Template">
                            <span class="status">` + disc + `%</span>
                            <div class="overlay"></div>
                        </a>
                        <div class="text py-3 pb-4 px-3 text-center">
                            <h3><a href="#">` + item["name"] +`</a></h3>
                            <div class="d-flex">
                                <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">` + item["base_price"] + `</span><span class="price-sale">` + item["min_price"] + `</span></p>
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