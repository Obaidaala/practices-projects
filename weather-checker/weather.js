//write a function that takes in 2 arguments

//the arguments are the temperature and weather

//if the weather is rainy and the temperature is greater than 15 say bring umbrella

//if the weather is rainy and the temperature is less than 15 say bring umbrella and jacket

//if the weather is sunny and the temperature is greater than 15 wear a t shirt


//if the weather is sunny or rainy and the temperature is greater than 19 wear a t shirt

var weath = 'rainy';
var temp = 16;

function  day (weath, temp){
   if (weath === "rainy" && temp > 15 ){
       console.log ('bring umbrella');
    }
else if (weath === "rainy" && temp < 15){
    console.log(' bring umbrella and jacket');
}    
      
else if (weath === "sunny" && temp > 15){
    console.log ('wear a t shirt');
} 
    else if (weath === "sunny" || "rainy" && temp > 19){
        console.log ('wear a t shirt');
    }
} 
day(weath , 16);
