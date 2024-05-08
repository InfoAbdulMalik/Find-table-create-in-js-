
// let findVowel = ()=>{
//     var  giveValue= prompt('enter your value');
//     var alphabits =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     for (i=0; i<alphabits.length; i++){

//         if(giveValue == 'a'){

//             console.log('its vowel a')
//         }
//         else if( giveValue=='e'){

//             console.log('its vowel e')
//         }
//         else if( giveValue=='i'){
            
//             console.log('its vowel i')
//         }
//         else if( giveValue=='o'){
            
//             console.log('its vowel o')
//         }
//         else if(giveValue== 'u'){
//             console.log(' its vowel u')
//         }
//         else{
//              console.log('its consonent')
//         }
//     }
// }



// var i= 0;
// while(i<=20){
//   console.log('box');
//   i++;
// }

// let n= prompt('Enter the value')
// let num= parseInt(n);
// let i=0;
// do{
//    console.log(i)
//    i++;
// } while(i<=num);


// function changeValue(){
//     var heading=document.getElementById('heading');
//     var disp= heading.style.display;
//      if(disp !== 'none'){
//          heading.style.display='none';
//      }
//      else{
//          heading.style.display='block'
//      }

//   // heading.style.display = (disp !== 'none') ? 'none' : 'block';

// }

function findYourTable(){
  var num= document.getElementById('number').value;
  for(i=1; i<=10; i++){
    document.getElementById('number').value="";
    console.log(num*i)
  }
}

