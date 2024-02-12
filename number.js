//1. Çoklu giriş asal sayı bul

function numbers(...number) {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total = total + number[i];
    }
    var sayac=0;
    
    sayi=total;

    for(i=2; i<sayi; i++)
    {
	    if(sayi%i==0)
	    {
	    sayac++;
    	}
    }
	if(sayac==0)
	    {
	        text="Prime";
	    }
	    else
	    {
	        text="Not prime. 1 ve expect itself. It has "+sayac+" divisors";
	    }
console.log("sayı: " + total);
console.log(text);
    
}
console.log("__________")
numbers(2,5,8,21,13)
console.log("__________")

//1.asal (deneme)
let inputValue= 7;
let isprime=inputValue==1? false:true;  

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

console.log(`${inputValue} is ${isprime? 'Prime':'not prime'} number`);
console.log("__________")

//3. Arkadaş Sayılar
let number1 = 220;
let number2 = 284;

let total1 = 0;
let total2 = 0;

let isFriend = (s1,s2) => {
    for (let i = 0; i < s1; i++) {
        if (number1 % i === 0) {
            total1 += i;
        }
    }
    for (let i = 0; i < s2; i++) {
        if (number2 % i === 0) {
            total2 += i
        }
        
    }
    return (total1 === s2 && total2 === s1)? "Arkadaş sayılar":"Arkadaş değiller"
}
console.log(isFriend(number1, number2))
console.log("__________")

//4. Mükemmel sayı
var i,j,perfectNumber;
var toplam=0;
perfectNumber=28;
for(i=1; i<perfectNumber; i++)
 {
      if (perfectNumber%i==0)
      {
            toplam=toplam+i;      
      }
 }
 if (perfectNumber==toplam)
 {
      console.log(perfectNumber + " Sayısı Mükemmel Sayıdır");       
 }
 else
 {
      console.log(perfectNumber + " Sayısı Mükemmel Sayı Değildir");       
 }
 console.log("__________")

 //5. 1000'e kadarki tüm asal sayıları listele


 var c,k,isPrime; //değişkenler

 for(c =1 ; c<1000 ; c++ )
 {
     isPrime = true; //Asal sayı için boolean değişkeni 
     for( k=2; k<c ; k++)
     {
         if(c % k  == 0) //c sayısı k sayısına tam bölünüyorsa asal değildir
         {
            isPrime = false;  // Asallık false yapıp aşağıda true olanları yazdırıyoruz
         }
     }
     if(isPrime == true) 
     {  
       console.log(c); 
     }
   
 }