let value=document.getElementById("count");
let btns=document.querySelectorAll(".btn");
var count=0;
btns.forEach(function(btn) {

    btn.addEventListener("click",function(event){
  var classes=event.currentTarget.classList;
  if(classes.contains('increase')){
      count++;
  }
  else if(classes.contains('decrease')){
      count--;
  }
  else{
      count=0;
  }
  if(count>0){
      value.style.color="blue";
  }
  else if(count<0){
      value.style.color="red";
  }
  else{
      value.style.color="black";
  }
  value.innerHTML=count;
    });
})