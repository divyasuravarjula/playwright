/* 

const ogTimeout = globalThis.setTimeout;

//function Declaration 
function userProfile(name)
{
console.log(name)
}
let name;
userProfile("divya");
// Arrow Function
let doubleNum = (num) =>
{
  let dnum=num*2;
  return dnum;
}

let num=6;
console.log(doubleNum(num));


//anonymus function

let timeOut = function()

{
    console.log("This message is delayed by 2 seconds")
    setTimeout(timeOut(),20000);
    call();
}
 */

//immediately invoke function

(function(text){
    console.log("This has ran first" + text)
})
("divyas");

// Callback Function 
/* let getUserData = data(timeout(),userProfile(),doubleNum()) */

nme1 = "div"
console.log(nme1)