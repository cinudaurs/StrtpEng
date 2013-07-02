

var isPrime = function(x){

if(x<2){return false;}

if(x===2||x===3){return true;}

if(x%2===0||x%3===0){return false;}

if(x<9){return true;}

for(n=5;n<=Math.sqrt(x);n=n+6){

if(x%n===0){return false;}

if(x%(n+2)===0){return false;}

}

return true;

};

var firstkprime = function(n)
{ 
	 var arr=[];
     var   count=0, currentNum=2; 
     while (count<n)
	{
	   if (isPrime(currentNum))
		{    
	        	arr.push(currentNum);
                        count++; 
                } 
         currentNum++;
         }
       return arr; 
};

var fmt = function(arr) {
    return arr.join(",");
};


var k = 100
// console.log("firstkprime(" + k + ")");
// console.log(fmt(firstkprime(k)));

var fs = require('fs');
var outfile = "first100primes.txt";
var out = fmt(firstkprime(k));
fs.writeFileSync(outfile, out); 
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);

