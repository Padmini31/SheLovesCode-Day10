
console.log('A' - 1);//NaN 
console.log('A' + 1);//A1
 console.log(2 + '2' + '2');//222
 console.log('hello' + 'world' + 89);//helloworld89 
 console.log('hello' - 'world' + 89);//Nan 
 console.log('hello' + 78);//hello78
 console.log('78' - 90 + '2');//-10 
console.log(2 - '2' + 90);//90 
console.log(89 - '90' / 2);//44 
console.log(2+ '2' + null);//4 
console.log((true == false) > 2);//false 
console.log(89 + 'hello' + 90 / 9);//89hello10 

//extract first five letters from a string (' gfuh ieiuei ')
var s=' gfuh ieiuei ';
console.log(s.slice(0,6));


//get the length of a string and make it uppercase ('hduej dij')
var s='hduej dij';
console.log(s.length);
console.log(s.toUpperCase()) ;

//take a string, make it lowercase and trim it ('   biji jdo   ')
var s='   biji jdo   ';
console.log(s.toLowerCase() );
console.log(s.trim() );

//replace specified word in a string ('', '')
var s="welcome to our home";
console.log(s.replace("home","house"));

//random statements in implicit coercion e.g. (89 Â + 'hello' + 90 / 9)
var n= 56-'6';
console.log(n);

//create an object for car.
var obj={speed:"125km/s",
  color:"grey", 
  price:"400000"
};
console.log(obj);
