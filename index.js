document.getElementById('logo').setAttribute('draggable', false);




var kupa = [];
var maca = [];
var karo = [];
var sinek = [];
var tumdeste = [];

var kupaimgsrc = [];
var macaimgsrc = [];
var karoimgsrc = [];
var sinekimgsrc = [];

var kupaimgels = [];
var macaimgels = [];
var karoimgels = [];
var sinekimgels = [];



for(let cardi=1 ; cardi < 14 ; cardi++)
{
    kupaimgsrc.push("Images/Card_Images/kupacards/kupa"+cardi+".png")
    macaimgsrc.push("Images/Card_Images/macacards/maca"+cardi+".png")
    karoimgsrc.push("Images/Card_Images/karocards/karo"+cardi+".png")
    sinekimgsrc.push("Images/Card_Images/sinekcards/sinek"+cardi+".png")

}


for(let imgels=0;imgels<13; imgels++)
{
    var imgarray = document.createElement("img");
    var idsayisi = imgels+1
    imgarray.id = "kuparesimid"+idsayisi;
    imgarray.src = kupaimgsrc[imgels];
    kupaimgels[imgels] = imgarray; 

    var imgarray = document.createElement("img");
    imgarray.src = macaimgsrc[imgels];
    macaimgels[imgels] = imgarray; 

    var imgarray = document.createElement("img");
    imgarray.src = karoimgsrc[imgels];
    karoimgels[imgels] = imgarray; 

    var imgarray = document.createElement("img");
    imgarray.src = sinekimgsrc[imgels];
    sinekimgels[imgels] = imgarray; 
 
    

}



// console.log(kupaimgsrc);
// console.log(macaimgsrc);
// console.log(karoimgsrc);
// console.log(sinekimgsrc);


//Countdown Timer


for(let i=1 ; i<14   ; i++)
{
 

        kupa.push(i);
        maca.push(i);
        karo.push(i);
        sinek.push(i);        
        // if(i==10)
        // {
        //    for(let ontekrar=0 ; ontekrar<3 ; ontekrar++)
        //    {
        //     kupa.push(i);
        //     maca.push(i);
        //     karo.push(i);
        //     sinek.push(i);  
        //    }                                                       


        // } 
  
}

console.log("Kupa destesi " + kupa)

for(let tumdestei = 0; tumdestei<4 ; tumdestei++)
{
    
}

tumdeste.push(kupa,maca,karo,sinek);

//console.log("Tüm deste " +  tumdeste);

var deneme = tumdeste[0][0]



let random1 = Math.random()
let random2 = Math.random()

let kart1 =  Math.floor((Math.random()* kupa.length)+1);
let kart2 =  Math.floor(Math.random()* kupa.length);








let oyuncusayisi = 1

let randomsayilar = [];

for (let i=0 ; i < oyuncusayisi ; i++)
{
   randomsayilar[i] = Math.floor((Math.random()*13)+1);

}
    



for (let x=0 ; x < randomsayilar.length ; x++)
{
   // console.log("random sayilar dizisi "+ x +". sayi = " + randomsayilar[x]);
}


//deste sayisi secme---
function destesayisi()
{
 let destesayisi= 2 ;//elemtid.value
 let cokludeste = [];




 switch (destesayisi) {
   case 1:
       tumdeste = tumdeste;
        break;
   case 2:
   for(let ds_index=0 ; ds_index< destesayisi ; ds_index++ )
   {
       cokludeste.push(tumdeste);
   }
//    console.log("2 deste hali= " +cokludeste);
   
        
        break;

  case 3:
  for(let ds_index=0 ; ds_index< destesayisi ; ds_index++ )
  {
      cokludeste.push(tumdeste);
      cokludeste.push(tumdeste);
  }
//   console.log("3 deste hali= "+cokludeste);
        break;

   case 4:
   for(let ds_index=0 ; ds_index< destesayisi ; ds_index++ )
   {
       cokludeste.push(tumdeste,tumdeste,tumdeste);
   }
//    console.log("4 deste hali=  "+cokludeste);
        break;

   case 5:
   for(let ds_index=0 ; ds_index< destesayisi ; ds_index++ )
   {
       cokludeste.push(tumdeste,tumdeste,tumdeste,tumdeste);
   }
//    console.log("5 deste hali= "+cokludeste);
        break;

    default:
        break;
}


// console.log(cokludeste[0][0][0]);
// console.log(cokludeste[1][2][3]);
}

destesayisi();

// Oyuncu 1 variables
const oturulmamisoyuncu1div ='<button class="oturbttn" id="oturbttn1" onclick="otur()">Otur1</button>';
const oturulmusdiv = '<img id="checkmark" src="Images/checkmark.png">';
const kalkbutton = '<button class="oturbttn" id="oturbttn1" onclick="kalk()">Kalk</button>';
const oyuncu1 = document.getElementById("oyuncu1");
const kartcekbutton  = '<button class="kartcek" id="kartcekbtn1" onclick="kartcekfunc()">Kart Çek</button>';
const kartdurbutton = '<button class="kartcekme" id="kartcekmebtn1" onclick="kartcekme()">Dur</button>';
let isSit1=0 ;
//deneme
//let oyuncu1 = document.getElementById("oyuncu1").parentElement;
//let oyuncu2 = document.getElementById("oyuncu2").parentElement;



let isSit2=0 ;
let isSit3=0 ;
let isSit4=0 ;

var count=3;
let sayac1 = 0;
var counter

function otur()
{     
    //oyuncu1
    oyuncu1.innerHTML = "";
    oyuncu1.innerHTML +=  oturulmusdiv;
    oyuncu1.innerHTML += kalkbutton;
    // oyuncu2.innerHTML = "";
    // oyuncu2.innerHTML +=  oturulmusdiv;
    // oyuncu2.innerHTML += kalkbutton;
    console.log(oyuncu1);
    isSit1 = 1;   
    document.getElementById("timer").innerHTML=count + " Saniye Sonra Oyun Başlıyor..."; 
    count=3;  
    sayac1=1;    
    if(Boolean(sayac1)==true &&count>=0)
    {
     counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    }     
    else
    {
        clearInterval(counter);
    }
   }



    
function kalk()
{
    oyuncu1.innerHTML = "";
    oyuncu1.innerHTML += oturulmamisoyuncu1div;       
    count = 3;
    if(count=3)
    {
        document.getElementById("countdowndiv").style.visibility ="visible";
        document.getElementById("timer").innerHTML=" Oyuncular Bekleniyor..."; 
    }
    sayac1 = 0;  
    if(Boolean(sayac1)==false)
    {
        
        clearInterval(counter);
    } 
}
  

var countdownzero       
//const resim1 =  sinekimgels[0];
//  console.log(sinekimgels[0]);
//const resim2 = '  <img src="Images/Card Images/card back black.png"> ';         


function timer()
{
     if(sayac1==true && count>=0)
    {
     
   
  count=count-1;
  countdownzero = count;
  console.log(countdownzero);
  if (count <= 0)
  {
      countdownzero=0;
      
if(countdownzero==0)
{
    const point = document.createElement("h4")  
    const buttondiv = document.createElement("div");
    buttondiv.id="buttondiv";
    
    point.textContent = 5;
    document.getElementById("countdowndiv").style.visibility ="hidden";
    oyuncu1.innerHTML="";
    
    oyuncu1.appendChild(buttondiv);

    buttondiv.innerHTML += kartcekbutton;
    buttondiv.innerHTML += kartdurbutton;
   
    oyuncu1.appendChild(point);
  
     
  


}
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " Saniye Sonra Oyun Başlıyor..."; 
 }
  else if(sayac1==false)
  {
   document.getElementById("timer").innerHTML=" Oyuncular Bekleniyor..."; 
    count = 3;
   
 
 } 
} 



    var kuparandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var macarandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var karorandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var sinekrandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
        
    function* shuffle(array) {

        var i = array.length;
    
        while (i--) {
            yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
        }
    
    }

   
   

    //console.log(kupaimgsrc[0]);

   
function kartcekfunc()
{   

let desteadi = Math.floor(Math.random()*tumdeste.length);
// let desteadi=0;
console.log("Deste adi = " +desteadi);

   
   
    let randomsayikupa;
    let randomsayimaca;
    let randomsayikaro;
    let randomsayisinek;
   
switch (desteadi) {
     case 0: 
   
 
//kupa
  
                          
     randomsayikupa = kuparandarray.next().value;      
     if(typeof randomsayikupa!=="undefined")
     {       
       var indexdeneme2 =  kupaimgsrc.findIndex( function(item){
               return item.indexOf(randomsayikupa)!==-1;
            })
  
             console.log("random sayı func kupa=" +randomsayikupa);                         
                            
      
      document.getElementById("oyuncu1").appendChild(kupaimgels[indexdeneme2]);
            
     let cikarilacakindexsayisi = randomsayikupa-1;
  
       kupa.splice(cikarilacakindexsayisi,1,"bosluk");  
    
       
       console.log("cikarildiktan sonra kupa destesi= " +kupa);   
    
    }
     else
     {
         console.log("kupa destesi bitti!");
     }
     

    
        break;

        case 1:
//maca
        randomsayimaca = macarandarray.next().value;      
        if(typeof randomsayimaca!=="undefined")
        {       
          var indexdeneme2 =  macaimgsrc.findIndex( function(item){
                  return item.indexOf(randomsayimaca)!==-1;
               })
     
                console.log("random sayı func kupa=" +randomsayimaca);                         
                               
         
         document.getElementById("oyuncu1").appendChild(macaimgels[indexdeneme2]);
               
        let cikarilacakindexsayisi = randomsayimaca-1;
     
          maca.splice(cikarilacakindexsayisi,1,"bosluk");  
       
          
          console.log("cikarildiktan sonra maca destesi= " +maca);   
       
       }
        else
        {
            console.log("maca destesi bitti!");
        }

        break;

        case 2:
//karo
        randomsayikaro = karorandarray.next().value;      
     if(typeof randomsayikaro!=="undefined")
     {       
       var indexdeneme2 =  karoimgsrc.findIndex( function(item){
               return item.indexOf(randomsayikaro)!==-1;
            })
  
             console.log("random sayı func kupa=" +randomsayikupa);                         
                            
      
      document.getElementById("oyuncu1").appendChild(karoimgels[indexdeneme2]);
            
     let cikarilacakindexsayisi = randomsayikaro-1;
  
       karo.splice(cikarilacakindexsayisi,1,"bosluk");  
    
       
       console.log("cikarildiktan sonra kupa destesi= " +karo);   
    
    }
     else
     {
         console.log("karo destesi bitti!");
     }
        
        break;

        case 3:
//sinek     
       randomsayisinek = sinekrandarray.next().value;      
     if(typeof randomsayisinek!=="undefined")
     {       
       var indexdeneme2 =  sinekimgsrc.findIndex( function(item){
               return item.indexOf(randomsayisinek)!==-1;
            })
  
             console.log("random sayı func kupa=" +randomsayisinek);                         
                            
      
      document.getElementById("oyuncu1").appendChild(sinekimgels[indexdeneme2]);
            
     let cikarilacakindexsayisi = randomsayisinek-1;
  
       sinek.splice(cikarilacakindexsayisi,1,"bosluk");  
    
       
       console.log("cikarildiktan sonra kupa destesi= " +sinek);   
    
    }
     else
     {
         console.log("sinek destesi bitti!");
     }
        break;

    default:
        break;
}

}


// if(cekilenkart2-1 !== cekilenkart-1 )
// {
//     kupa.splice(cekilenkart2-1,1);
//     console.log("Cekilen kart = " +cekilenkart2);
//     document.getElementById("masa").appendChild(kupaimgels[cekilenkart2-1]);
//     kupaimgels.splice[cekilenkart2-1,1];
//     console.log("cekilen kart index "+ cekilenkart2);
//     console.log("yeni kupa destesi = " + kupa)
//     console.log(kupaimgels)
    
// }
// else
// {
//     let cekilenkart3 =  Math.floor((Math.random()* kupa.length)+1);
//     kupa.splice(cekilenkart3,1);
//     console.log("ayn-yeni Cekilen kart = " +cekilenkart3);
//     document.getElementById("masa").appendChild(kupaimgels[cekilenkart3-1]);
//     kupaimgels.splice[cekilenkart3-1,1];
//     console.log("cekilen kart index "+ cekilenkart3);
//     console.log("aynı yeni kupa destesi = " + kupa)
//     console.log(kupaimgels)
// }

//console.log("tüm deste lenght = "+ tumdeste[0]);



let kartcekmesirasi = 0 ;
function kartcek()
{

  kartcekfunc();  
    kartcekmesirasi +=1 ;
console.log(kartcekmesirasi);   
}

function kartcekme()
{

}





// function makeAlert(){ 
//     alert("Popup window!");
// };

// setInterval(makeAlert, 3000);


//console.log("random sayilar arrayi "+ randomsayilar);

 //console.log("kart1= "+kart1);

// console.log("kupa kartlar= " +kupa);
// console.log("maca kartlar= "+ maca);
// console.log("karo kartlar= " + karo);
// console.log("sinek kartlar= " +sinek)

//1. kartı dağıtma 












//2. kartı dağıtma



//kart isteme