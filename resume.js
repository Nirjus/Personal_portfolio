// var scrollInterval = setInterval(function(){
//     window.scrollBy(0,50);
// },50);
// clearInterval(scrollInterval);


// var curposi = 0;
// var targetposi = 2550;
// var a = setInterval(()=>{
//      if(curposi == targetposi){
//      clearInterval(a);
//      return;
//      }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// window.pageYOffset;   //home:0;
// window.pageYOffset;  // about:515.2000122070312;
// window.pageYOffset;   // skill:893.5999755859375
// window.pageYOffset;  //Experience:1315.199951171875
// window.pageYOffset;   //Education:2480
// window.pageYOffset;    //portfolio:3618.39990234375
// window.pageYOffset;    //contact:4488
// var hom = document.getElementById("hom");
// var abu = document.getElementById("abu");
// var skl = document.getElementById("skl");
// var exp = document.getElementById("exp");
// var edu = document.getElementById("edu");
// var procard = document.getElementById("procard");
// var cont = document.getElementById("cont");
// skl.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 851.2;
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },30);
// })
// abu.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 515.2;
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// })
// exp.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 1188.8
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// })
// edu.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 2280;
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// })
// procard.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 3618.4;
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;                                         // this is longest procedure for smoth scroling
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// })
// cont.addEventListener("click",()=>{
//     var curposi = 0;
// var targetposi = 4488;
// var a = setInterval(()=>{
//   if(curposi >= targetposi){
//         clearInterval(a);
//         return;
//         }
//       curposi+= 50;
//       window.scrollBy(0,50);
// },50);
// })


/*****************************************************************/
var navMenuanchorTag = document.querySelectorAll(".nav-manu a");
for(var i= 0; i<navMenuanchorTag.length; i++){
    navMenuanchorTag[i].addEventListener("click", function(event){
       event.preventDefault();
       var targetSectionID = this.textContent.trim().toLowerCase();
       var targetSection = document.getElementById(targetSectionID);
       console.log(targetSection);
       var interval = setInterval(function(){
       var targetSectionCoordinates = targetSection.getBoundingClientRect();
       if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
       }
       window.scrollBy(0,50);
    },20);

    });
}
var progressBar = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");

window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(var bar of progressBar){
        bar.style.width = 0 + '%';
    }
}
 initialiseBars();
function fillBars(){
for(let bar of progressBar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(()=>{
        if(currentWidth > targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    },6);
}
}

function checkScroll(){
    // you have to check still countainer is visible

    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
       animationDone = true;
        console.log('skills section Visible');
        fillBars();
    }else if(coordinates.top > window.innerHeight){
       animationDone = false;
       initialiseBars();
    }
}

