/*$(Document).ready(function(){
    $("img").hide();
    $("button").click(function(){
    $("img").show();
    })  
});
*/
var name="Diana";
var age=27;

//console.log(name + " "+age);
//alert(name + " "+age);
//prompt("what is your name?");

function firstFunction(){
   var newAge=37;
   console.log(name + " " + age + " " + newAge); 
};
firstFunction()

/*function sayHi(){
    var name="greeting";
    var greeting="hello!!";
    alert(greeting);
    prompt("Greet your Friends");
    console.log(greeting);
}
sayHi()
document.write("greeting");
*/
function myFunction(){
    var x = document.getElementById("myDiv");
    if(x.style.display === "none"){
        x.style.display = "block"; 
    }
    else{
        x.style.display = "none";
    }
}
