var allproducts = document.querySelectorAll(".list1 li")
var cart = document.querySelector ("#cartOfProdct")

var itemNo = document.querySelector("#itemNo")
var itemName = document.querySelector("#itemName")
var itemPrice = document.querySelector("#itemPrice")

var showPrice = document. querySelector ("#totalPrice")

var totalCostCol = document.querySelector ("#totalCost")

var totalCostRow= document.querySelector (".Tprice")

var buttonDive= document.querySelector (".buttons")

var clearAll=document.querySelector ("#clearAll")


var totalPrice = 0
var itemNum =1;


allproducts.forEach( function(item){
  item.onclick = function(){
    totalPrice += +(item.getAttribute("price"))
    const span = item.querySelector('span');
    const p = item.querySelector('p');
        itemNo.style.color ="black"
        itemName.style.color ="black"
        itemPrice.style.color ="black"
   
    itemNo.innerHTML +="<br>"+ itemNum +"."
    itemName.innerHTML+= "<br>"+ span.textContent 
    itemPrice.innerHTML +="<br>"+ p.textContent 
    itemNum+=1;
    totalCostCol.innerHTML=totalPrice + "$"
    if( cart.innerHTML !=""){ 
      buttonDive.style.display="block";
      cart.style.display="block";
    }
  }
}
)

showPrice.onclick = function (){
  totalCostRow.style.display="block";
  totalCostCol.innerHTML=totalPrice + "$"
}
clearAll.onclick =function(){
  itemNum =1;
  totalPrice=0;
  itemNo.innerHTML  ="Item No."
      itemNo.style.color ="#99d6ff";
      itemNo.style.fontSize= "30px";
      itemNo.style.fontWeight = "bolder";
  itemName.innerHTML = "Item name:"
     itemName.style.color ="#99d6ff";
     itemName.style.fontSize= "30px";
     itemName.style.fontWeight = "bolder";
  itemPrice.innerHTML ="Item price:"
     itemPrice.style.color ="#99d6ff";
     itemPrice.style.fontSize= "30px";
     itemPrice.style.fontWeight = "bolder";
  totalCostCol.innerHTML=totalPrice + "$"
}

