var times = prompt("please enter number of times");

function game(times)
{
var num = Math.floor(Math.random()*100)+1; //this line generates random numbers//    
var m=num%2;//finds out if a number is even or not//   
if (m==0)        
alert(" number is even");   
else
alert (" number is odd");   
for (var count=1;count<=times;count++)//this is to loop//
{            
let num = prompt ("please enter any number'");                 
if(num>num)
{
alert("number is higher");
}                 
if (num<num){
alert ("number is lower");
}                 
if (num==num)
{
alert("YOU WIN");
 break;
}
if (count==times)//incase you reach 10 times and still have not output the number out//
{
alert("you lose");
}                
}            
}

game(times);
