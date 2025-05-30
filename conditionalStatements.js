function launchBrowser(browser)
{
if(browser="chrome")
{
console.log("The browser is chrome");
}
else if(browser="firefox")
{
console.log("The browser is firefox");
}
else if (browser="edge")
{
console.log("The browser is edge");
}
}
function runTests()
{
switch(type){
    case "regression" :
    {
        console.log("the test type is regression");
        break;
    }
    case "sanity" :
        {
            console.log("the test type is sanity");
            break;
        }
    case "smoke" :
        
    {
        console.log("the test type is smoke");
        break;
    }
}
}
let browser;
launchBrowser("chrome");
let type = "smoke";
runTests();

