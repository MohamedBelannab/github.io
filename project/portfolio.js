const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
      { x: 100, y: -20 },
      { x: 300, y: 10 },
      { x: 500, y: 100 },
      { x: 750, y: -100 },
      { x: 350, y: -50 },
      { x: 600, y: 100 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: -250 }
  ]
}

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".bool", 1, {
      bezier: flightPath,
      ease: Power1.easeInOut
  })
);

const Controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 4000,
  triggerHook: 0
})
  .setTween(tween)
  
  .setPin('.animation')
  .addTo(Controller);
  
const text=['"mohamed belannab"','"Creative frontend"','"developer,designer"', '"and illustrator"']

let count = 0 
let index = 0
let currText = ''
let letter = ''
let countY = 0 
let indexY = 0
let currTextY = ''
let letterY = ''
let number = document.getElementById('number')
function type(){
  if (count===text.length){
    count=0
  }
  currText = text[count]
  letter = currText.slice(0,++index)
  document.getElementById('text').textContent=letter
  if(letter.length === currText.length){
    count++
    index=0
  }
  setTimeout(type,400)


}
type()
const textY=['“EVER POSITIVE NEVER NEGATIVE”']
function typeY(){
  if (countY===textY.length){
    countY=0
  }
  currTextY = textY[countY]
  letterY = currTextY.slice(0,++indexY)
  document.getElementById('box-2').textContent=letterY
  if(letterY.length === currTextY.length){
    countY++
    indexY=0
  }
  setTimeout(typeY,400)


}
typeY()







let progressEndValue = 85; let progressEndValue2 = 64; let progressEndValue3 =56 ; let progressEndValue4 = 50;
let speed = 50;
document.getElementById('btnFirst').onclick =  function(){
  let progressValue = 0
 let progress= setInterval(() => {
    progressValue++;
    document.querySelector(".value").textContent = `${progressValue}%`;
    document.querySelector(".circular").style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  this.style.display='none'
  
}
document.getElementById('btntwo').onclick =  function(){
  let progressValue2 = 0 ;
  let progress= setInterval(() => {
     progressValue2++;
     document.querySelector(".good").textContent = `${progressValue2}%`;
     document.querySelector(".circuk").style.background = `conic-gradient(
         #4d5bf9 ${progressValue2 * 3.6}deg,
         #cadcff ${progressValue2 * 3.6}deg
     )`;
     if (progressValue2 == progressEndValue2) {
       clearInterval(progress);
     }
   }, speed);
   this.style.display='none'
   
 }

 document.getElementById('box2').onclick=function(){
  let progressValue3 = 0
  let progress= setInterval(() => {
    progressValue3++;
    document.querySelector(".good-b").textContent = `${progressValue3}%`;
    document.querySelector(".circuk-b").style.background = `conic-gradient(
        #4d5bf9 ${progressValue3 * 3.6}deg,
        #cadcff ${progressValue3 * 3.6}deg
    )`;
    if (progressValue3 == progressEndValue3) {
      clearInterval(progress);
    }
  }, speed);
   this.style.display='none'
 }

 document.getElementById('btnBOx').onclick=function(){
  let progressValue4 = 0
  let progress= setInterval(() => {
    progressValue4++;
    document.querySelector(".good-c").textContent = `${progressValue4}%`;
    document.querySelector(".circuk-c").style.background = `conic-gradient(
        #4d5bf9 ${progressValue4 * 3.6}deg,
        #cadcff ${progressValue4 * 3.6}deg
    )`;
    if (progressValue4 == progressEndValue4) {
      clearInterval(progress);
    }
  }, speed);
   this.style.display='none'
 }



  

