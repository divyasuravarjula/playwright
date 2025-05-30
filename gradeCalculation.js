let grade;
function studentScore(score)
{
    
switch(true){
case (score >= 90) :
    {
        grade ="A";
        break;
        
    }
case (score >= 80) :
    {
        grade ="B";
        break;
    }
    case (score >= 70) :
    {
        grade ="C";
        break;
    }
    case (score >= 60) :
    {
        grade ="D";
        break;
    }
     case (score <= 50) :
    {
        grade ="Fail";
        break;
    }
   
}
console.log(grade)
}

studentScore(30);

//Switch case1 : chrome