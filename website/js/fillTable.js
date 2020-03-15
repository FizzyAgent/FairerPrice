function getAllItems(){
    
    const http = new XMLHttpRequest();
    const ip='';
    http.open("GET", url);
    http.send(-1);

    http.onreadystatechange = (e) => {
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

    for(var i=0; i<=items.length/3; i++){
        table.innerHTML += buildCell(items[i]);
    }
}

function buildCell(item){

    var cell = `<div class="col-md-6 col-lg-3 ftco-animate">
                    <div class="product">
                        <a href="#" class="img-prod"><img class="img-fluid" src="` + item["image"] + `" alt="Colorlib Template">
                            <span class="status">30%</span>
                            <div class="overlay"></div>
                        </a>
                        <div class="text py-3 pb-4 px-3 text-center">
                            <h3><a href="#">` + item["name"] +`</a></h3>
                            <div class="d-flex">
                                <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">` + item["baseprice"] + `</span><span class="price-sale">` + item["minprice"] + `</span></p>
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