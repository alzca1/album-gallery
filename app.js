const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");
let factor = [];
// let spanner = [];

function generateHtml([h, v]) {
  return `
           
           <div class="item h${h} v${v}">
                <img src="images/${randomNumber(12)}.jpg">
                <div class="item_overlay">
                    <button class="open">View →</button>
                  
                </div>
           </div>
           `;
}

function randomNumber(limit) {
  if (factor.length >= 12) {
    factor = [];
  }
  loop1: for (let i = 0; i < 1000; i++) {
    let number = Math.floor(Math.random() * limit) + 1;
    if (factor.includes(number)) {
      continue loop1;
    } else {
      factor.push(number);
      return number;
    }
  }
}

function randomSpan(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

// function randomDoubleSpanner() {
//   if (spanner.length > 16) {
//     spanner = [];
//   }
//   loop1: for (let i = 0; i < 1000; i++) {
//     if (spanner.length !== 16) {
//       let pair = [];
//       let number1 = pair.push(Math.floor(Math.random() * 4) + 1);
//       let number2 = pair.push(Math.floor(Math.random() * 4) + 1);

//       if (spanner.includes(pair)) {
//         continue loop1;
//       } else {
//         spanner.push(pair);
//       }
//     }
//   }
//   console.log(spanner)
// }

// randomDoubleSpanner();

let generatedArray = Array.from({ length: 50 }, () => [
  randomSpan(4),
  randomSpan(4)
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1], 
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);

const generatedHtml = generatedArray.map(generateHtml).join("");
gallery.innerHTML = generatedHtml;

const buttons = document.querySelectorAll('.open');
const closeButtons = document.querySelectorAll('.close')

buttons.forEach(button => button.addEventListener('click', handleClick));
closeButtons.forEach(button => button.addEventListener('click', close))

function handleClick(event){
    let parent = event.target.parentElement.parentElement;
    let source = parent.querySelector('img').src;
    console.log(overlayImage)
    overlayImage.src = source;
    overlay.classList.add('open')
    console.log(overlayImage)
}


function close(){
  overlay.classList.remove('open')
}