var bmi = prompt("Enter BMI");
console.log("Start");
try{
    console.log("Inside try");
    if(bmi =="") 
    {
        throw err;
        bmi="Type any Value";
    }
console.log("try finished");
}
catch(err)
{
   console.log("Catch Executed" + err);
}
console.log("End of Line");
console.log(bmi);