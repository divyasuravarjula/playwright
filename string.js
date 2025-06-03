let myName = "Divya";
let revname="";
let len = myName.length;
let chararr = myName.split("");
for (let index = len-1; index >= 0 ; index--) {
    
    revname = revname + chararr[index];
}

if(revname === myName)
{
    console.log(`${myName} String is palindrome`);
    
}

else
{
    console.log(`${myName} String is not a palindrome`);
}