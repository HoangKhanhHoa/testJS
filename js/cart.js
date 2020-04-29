$(document).ready ( function(){
  listCart = [];
  // console.log(listCart);
  if(localStorage.getItem('arr') == null){
    listCart = [];
  } else {
    listCart = JSON.parse(localStorage.getItem('arr'));
    listCart.forEach(pro =>{
      $(".tr-cart").append(
        '<td>'+
          '<div class="td-img"><img src="'+ pro.image +'"/></div>'+
        '</td>'+
        '<td>'+
          '<div class="td-name2">'+ pro.name +'</div>'+
        '</td>'+
        '<td>'+
          '<div class="td-price2">'+ pro.price +'</div>'+
        '</td>'+
        '<td>'+
          '<div class="td-amount2">'+ pro.amount +'</div>'+
        '</td>'+
        '<td>'+
          '<div class="td-total2">'+ pro.totalprice +'</div>'+
        '</td>'+
        '<td><i class="far fa-trash-alt td-delete2" onclick="deletePro('+ pro.id +')"></i></td>'
      );
    });
  }
});

function showPayment(){
  location.href = 'paymethod.html';
}

function continueBuy(){
  location.href='index.html';
}

function deletePro(id){
    for(var index = 0; index < listCart.length; index++){
      localStorage.removeItem(arr);
      if(id === listCart[index].id){
        listCart.splice(index, 1);
      }
    }
    console.log(listCart);
    // window.location.reload();
}
