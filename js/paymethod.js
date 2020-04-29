$(document).ready (function(){
  listProduct = [];
  if(localStorage.getItem('arr') == null){
    listProduct = [];
  } else{listProduct = JSON.parse(localStorage.getItem('arr'));
  listProduct.forEach(product =>{
    $(".pay__info-product").append(
      '<div class="row">'+
        '<div class="col-md-6">'+
          '<img src="'+ product.image +'" class="pay__info-img">'+
        '</div>'+
        '<div class="col-md-6 pay__info-2">'+
          '<span class="pay__info-name">'+ product.name +'</span>'+
          '<span class="pay__info-amount">'+ product.amount +'</span>'+
          '<span class="pay__info-total">'+ product.totalprice +'</span>'+
        '</div>'+
      '</div>'
    );
  });}

  var pay = 0;
  for(var i=0; i < listProduct.length; i++){
    pay += listProduct[i].totalprice;
  }
  $(".pay__totalprice").append(
    '<span>Tổng Tiền Thanh Toán:'+ pay +'đ</span>'
  );
  // $(".modal-footer").append(
  //   '<button type="button" class="btn btn-primary" onclick="pay()">Save</button>'
  // )
  // function deleteProduct(id){
  //   for(var index = 0; index < listProduct.length; index++){
  //     if(id === listProduct[index].id){
  //       listProduct.splice(index, 1);
  //     }
  //   }
  //   console.log(id);
  // }

});

function continueClick(){
  location.href = "index.html";
}

// function pay(){
//   listProduct.remove();
// }

function deleteProduct(){
  alert("Đã thanh toán xong");
  localStorage.clear();
  window.location.reload();
}

// function payDone(){
//   deleteProduct();
//   alert("Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi");
// }
