var coloName=document.getElementById("inupt-colorchange");
console.log(coloName);
function colorChange() {
    var color=coloName.value;
    console.log(color);
    coloName.style.backgroundColor=color;
}
//colorcahnge 
var textColoName=document.getElementById("inupt-textcolorchange");
console.log(coloName);
function textcolorChange() {
    var color=textColoName.value;
    console.log(color);
    textColoName.style.color=color;
    textColoName.style.fontSize="30px";
    textColoName.style.border="none";
    
}
//para color change
var para=document.getElementsByClassName("para");
console.log(para);
var buttonvalue=document.getElementById("buttuoncall");
console.log(buttonvalue);
function buttonChangeFun(){
var a=["red","yeloow","green","pink","blue"];
var number=(Math.floor(Math.random()*a.length));
console.log(number);

para[0].style.backgroundColor=a[number];
}
//body clolor-change

var buttonvalue1=document.getElementById("buttuoncall1");
console.log(buttonvalue1);
function buttonChangeFun2(){
var arr=["#5F9EA0","#FAEBD7","#F0F8FF","#00FFFF","#8B008B"];
var numberBody=(Math.floor(Math.random()*arr.length));
console.log(numberBody);

document.body.style.backgroundColor=arr[numberBody];
}