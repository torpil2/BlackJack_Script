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
const oturulmamisoyuncu1div ='<button class="oturbttn" id="oturbttn1" onclick="otur(this.parentElement)">Otur1</button>';
const oturulmusdiv = '<img id="checkmark" src="Images/checkmark.png">';
const kalkbutton = '<button class="oturbttn" id="oturbttn1" onclick="kalk(this.parentElement)">Kalk</button>';
const kasacards = document.getElementById("kasa-cards");
const oyuncu1 = document.getElementById("oyuncu1");
const kartcekbutton  = '<button class="kartcek" id="kartcekbtn1" onclick="kartcekfunc(this.parentElement.parentElement)">Kart Çek</button>';
const kartdurbutton = '<button class="kartcekme" id="kartcekmebtn1" onclick="kartcekme(this.parentElement.parentElement)">Dur</button>';
let isSit1=0 ;
//deneme
//let oyuncu1 = document.getElementById("oyuncu1").parentElement;
//let oyuncu2 = document.getElementById("oyuncu2").parentElement;



let isSit2=0 ;
let isSit3=0 ;
let isSit4=0 ;
let anyonesit =1;

var count=100;

let sayac1 = 0;
var counter
var oturanoyuncular = [];
var cancel;

function otur(parentdivname)
{     
    
    parentdivname.innerHTML ="";
    parentdivname.innerHTML +=  oturulmusdiv;
    parentdivname.innerHTML += kalkbutton;
    isSit1 = 1;   
  
    oturanoyuncular.push(parentdivname);
    console.log(oturanoyuncular);
    //count=3;  
    anyonesit=0;
  startCount();

        //sayac1=1;
      // timercount();
    }

    var seconds=0;

    let counterr = 5;
    let timeout;
    let timer_on = 0;

    function timedCount() {
     
        if(counterr==0)
        {
        console.log(counterr);
    let point = document.createElement("div")  
    let oyuncuidsis;
    let buttondiv = document.createElement("div");
    buttondiv.id="buttondiv";
    
    //point.textContent = "Kartların Puan Toplamı= " ;
    point.className ="kartpuandiv";
    document.getElementById("countdowndiv").style.visibility ="hidden";
  

    buttondiv.innerHTML += kartcekbutton;
    buttondiv.innerHTML += kartdurbutton;
   var oyuncudivid =0;
   var oyuncunundivi;
   
    oturanoyuncular.forEach(function(elem)  {
  
   
    document.getElementById(oturanoyuncular[oyuncudivid].id).innerHTML="";
   
    point.setAttribute("id","puan"+oturanoyuncular[oyuncudivid].id.slice(6));   
  point.textContent = 0;
document.getElementById(oturanoyuncular[oyuncudivid].id).appendChild(buttondiv.cloneNode(true));
    document.getElementById(oturanoyuncular[oyuncudivid].id).appendChild(point.cloneNode(true));
   
 
   
      oyuncudivid+=1;
       
        
    });

   
  //  oyuncu1.appendChild(point);       
        }
        
        if(counterr>=0)
        {
       document.getElementById("timer").innerHTML=counterr + " Saniye Sonra Oyun Başlıyor..."; 
       console.log(counterr);
     
        counterr--;        
        timeout = setTimeout(timedCount, 1000);
         }
       
      }

      
function startCount() {
    if (!timer_on) {
      timer_on = 1;
      timedCount();
    }
  }
  
  function stopCount() {
      if(oturanoyuncular.length==0)
      {
        document.getElementById("countdowndiv").style.visibility ="visible";
        document.getElementById("timer").innerHTML=" Oyuncular Bekleniyor..."; 
      }
  
    clearTimeout(timeout);
    timer_on = 0;
  }
                    
 
    
function kalk(parentdivname)
{   
    parentdivname.innerHTML = "";
    parentdivname.innerHTML += oturulmamisoyuncu1div;  
    console.log(parentdivname);
    var kalkanoyuncu = oturanoyuncular.indexOf(parentdivname);
    oturanoyuncular.splice(kalkanoyuncu,1);    
    console.log(oturanoyuncular);
  
     
    if(oturanoyuncular.length<1)
    {
        counterr=5;
        stopCount();
    }
   
   
} 

    var kuparandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var macarandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var karorandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var sinekrandarray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);
    var kasarandarray= shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13]);

        
    function* shuffle(array) {

        var i = array.length;
    
        while (i--) {
            yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
        }
    
    }        



    let cekilenkartsayisi=0 ;
function kartcekfunc(parentdivname)
{   
    
    if(cekilenkartsayisi<52)
    {
//console.log("Parne div name= "+document.getElementById(parentdivname));
let desteadi = Math.floor(Math.random()*tumdeste.length);
// let desteadi=0;
//console.log("Deste adi = " +desteadi);

   
   
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
  
             console.log("kart puanı random sayı func kupa=" +randomsayikupa);                         
                            
      
     

      document.getElementById(parentdivname.id).appendChild(kupaimgels[indexdeneme2]);
            
      let denemedivpuan= parseInt(document.getElementById("puan"+parentdivname.id.substring(6)).textContent );
     console.log("denemedivpuan= "+ denemedivpuan);
     if(randomsayikupa<=10)
     {
        let toplamkartdegeri = denemedivpuan+randomsayikupa;
        document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
     }
     else if ( randomsayikupa>10)
     {
         let toplamkartdegeri = denemedivpuan+10;
         document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
     }
                                                
     
             
     let cikarilacakindexsayisi = randomsayikupa-1;
     cekilenkartsayisi+=1;
  
       kupa.splice(cikarilacakindexsayisi,1,"bosluk");  
   
       
      // console.log("cikarildiktan sonra kupa destesi= " +kupa);   
    
    }
     else
     {
         console.log("kupa destesi bitti!");
         kartcekfunc(parentdivname);
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
     
                console.log("puan random sayı func kupa=" +randomsayimaca);                         
                               
         
        // document.getElementById("oyuncu1").appendChild(macaimgels[indexdeneme2]);
      
         document.getElementById(parentdivname.id).appendChild(macaimgels[indexdeneme2]);

         let denemedivpuan= parseInt(document.getElementById("puan"+parentdivname.id.substring(6)).textContent );
         console.log("denemedivpuan= "+ denemedivpuan);
        
        if(randomsayimaca<=10)
        {
            let toplamkartdegeri = denemedivpuan+randomsayimaca;
            document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
        }
        else if ( randomsayimaca>10)
        {
            let toplamkartdegeri = denemedivpuan+10;
            document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
        }                               
          
                        
        let cikarilacakindexsayisi = randomsayimaca-1;
        cekilenkartsayisi+=1;
     
          maca.splice(cikarilacakindexsayisi,1,"bosluk");  
       
          
          console.log("cikarildiktan sonra maca destesi= " +maca);   
       
       }
        else
        {
            console.log("maca destesi bitti!");
            kartcekfunc(parentdivname);
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
  
             console.log("puan random sayı func kupa=" +randomsayikaro);                         
                            
           
    //  document.getElementById("oyuncu1").appendChild(karoimgels[indexdeneme2]);
    document.getElementById(parentdivname.id).appendChild(karoimgels[indexdeneme2]);

    let denemedivpuan= parseInt(document.getElementById("puan"+parentdivname.id.substring(6)).textContent );
    console.log("denemedivpuan= "+ denemedivpuan);
   
   if(randomsayikaro<=10)
   {
    let toplamkartdegeri = denemedivpuan+randomsayikaro;
    document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
   }
   else if(randomsayikaro>10)
   {
       let toplamkartdegeri = denemedivpuan+10;
       document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
   }              
      
            
     let cikarilacakindexsayisi = randomsayikaro-1;
     cekilenkartsayisi+=1;
  
       karo.splice(cikarilacakindexsayisi,1,"bosluk");  
    
       
       console.log("cikarildiktan sonra kupa destesi= " +karo);   
    
    }
     else
     {
         console.log("karo destesi bitti!");
         kartcekfunc(parentdivname);
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
  
             console.log("puan random sayı func kupa=" +randomsayisinek);                         
                            
            
     // document.getElementById("oyuncu1").appendChild(sinekimgels[indexdeneme2]);
     document.getElementById(parentdivname.id).appendChild(sinekimgels[indexdeneme2]);

     let denemedivpuan= parseInt(document.getElementById("puan"+parentdivname.id.substring(6)).textContent );
     console.log("denemedivpuan= "+ denemedivpuan);
   if(randomsayisinek<=10)
   {
    let toplamkartdegeri = denemedivpuan+randomsayisinek;
    document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
   }
   else if(randomsayisinek>10)
   {
       let toplamkartdegeri = denemedivpuan+10;
       document.getElementById("puan"+parentdivname.id.substring(6)).textContent=toplamkartdegeri;  
   }
                        
            
     let cikarilacakindexsayisi = randomsayisinek-1;
     cekilenkartsayisi+=1;
  
       sinek.splice(cikarilacakindexsayisi,1,"bosluk");  
    
       
       console.log("cikarildiktan sonra kupa destesi= " +sinek);   
    
    }
     else
     {
         console.log("sinek destesi bitti!");
         kartcekfunc(parentdivname);
     }
     break;

    default:
        break;
}

    }
}


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