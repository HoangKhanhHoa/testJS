$(document).ready(async function(){
  await $.ajax({
	  	url: "http://localhost:3000/product",
	    success: function(data){
        listNew = data;
          for( var i = 0; i < listNew.length; i++){
            listNew[i].totalprice = listNew[i].price * listNew[i].amount;
          }
        listNew.forEach(product => {
            $(".carousel-product__products").append(
              '<div class="carousel-product__item product">'+
                '<img class="product__img" src="'+ product.image +'" alt="Son Môi"/>'+
                '<div class="product__detail">'+
                  '<a class="product__name" href="#">'+ product.name +'</a>'+
                  '<a class="product__type" href="#">'+ product.type +'</a>'+
                  '<p class="product__price"><span>'+ product.price +'</span></p>'+
                '</div>'+
                '<div class="product__interact"><a class="product__buy" href="#" onclick="clickButton('+ product.id +')">Mua hàng</a>'+
                  '<button class="product__love" type="button"><i class="fas fa-heart"></i></button>'+
                  '<button class="product__change" type="button"><i class="fas fa-sync-alt"></i></button>'+
                '</div>'+
              '</div>'
            );
        });
    }});
});

var arr = [];
var index ;
function clickButton(id){
  // console.log(listNew);
  // console.log(id);
  var item = {};
  for( var i = 0; i < listNew.length; i ++){
    if(id === listNew[i].id){
      item = listNew[i];
      break;
    }
  }
  if( arr.length === 0){
    item.amount = 1;
    item.totalprice = item.price;
    arr.push(item);
    // console.log("length = 0");
  } else {
    if(checkId(id) === true){
      // console.log(arr[index].amount);
      // console.log("Id đã tồn tại");
      arr[index].amount += 1;
      arr[index].totalprice = arr[index].amount * arr[index].price;
    } else {
      item.amount = 1;
      item.totalprice = item.price;
      arr.push(item);
      // console.log("id chưa tồn tại");
    }
  }
  // console.log(arr);
  saveLocalStorage();
}

function checkId(id){
  for(var i= 0; i < arr.length; i++){
    if(id === arr[i].id){
      index = i;
      return true;
    }
  }
  return false;
}

function saveLocalStorage(){
  localStorage.setItem('arr', JSON.stringify(arr));
}

function showCart(){
  location.href='cart.html';
}
