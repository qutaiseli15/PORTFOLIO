// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
console.log();
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //__________________________
  var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

  //______________________________________

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter2',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //__________________________________________

  function calcu(){
      window.open('http://calcu.chelo15.repl.co');
  }
  function bura(){
      window.open('http://bura.chelo15.repl.co');
  }
  function shaliko(){
      window.open('http://shaliko.chelo15.repl.co');
  }
  //______________________________________________________

  function factorial(num){
    if (num == 0){
    return 1;
    }
    num *= factorial(num-1);
    return num;
    }

function fibonacci(num){
if (num == 0){
return 0;
}
if (num == 1){
return 1;
}
return (fibonacci(num-2)+fibonacci(num-1));
}

function prime(num){
if (num == 1){
return 'THIS IS NOT PRIME NUMBER';
} else
if (num == 2){
return 'THIS IS PRIME NUMBER';
} else
for (let i=2; i < num; i++ ){
if (num % i == 0){
return 'THIS IS NOT PRIME NUMBER';
}
}
return 'THIS IS PRIME NUMBER';
}

  function fact(){
      var num = document.getElementById('inp1').value;
      document.getElementById('ans1').value  = num+'! = '+factorial(num); 
  }

  function fibo(){
      var num = document.getElementById('inp2').value;
      if (num == 1){
          document.getElementById('ans2').value ='1st member is '+ fibonacci(num);
      } else 
      if (num == 2){
          document.getElementById('ans2').value ='2nd member is '+ fibonacci(num);
      }else
      if (num == 3){
          document.getElementById('ans2').value ='3rd member is ' + fibonacci(num);
      } else {
          document.getElementById('ans2').value =num+'th member is '+fibonacci(num);
      }
  }

  function prim(){
      var num = document.getElementById('inp3').value;
      document.getElementById('ans3').value = prime(num); 
  }