let age = prompt("What is your age?");
if (typeof age != "integer"){
    window.alert("please type a number");
} 
else if (age> 18) {
    window.alert("You can enter the website");
  }


else {
    window.alert("you are too young to enter");
  }


  let nb = prompt("What is your age?");

if (typeof parseInt(nb) === 'number'){
    if (age> 18) {
        window.alert("You can enter the website");
      }
    
    else {
        window.alert("you are too young to enter");
      }
}
else {
    window.alert("please type a number");
}

//another
const sayHello= function(content) {
    console.log ('Hello'+content)
}
const name ='Hanim';


sayHello (name);


//google hoisting



console.log(document);

console.log(window);

document.write ('Hello');

const obj = {
    name: "Hanim",
    sayHelloo: function() {
        console.log ('hello');
        return true;
    }
}

console.log (obj.name);
console.log (obj.sayHelloo ());
console.log (typeof obj.sayHelloo);
console.log (typeof obj.sayHelloo ()); //executed type of the result of function

