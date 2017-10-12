const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init() {
  // Write your JavaScript code inside the init() function

}


const alphabet = [65, 66, 67]
const input = document.querySelector('input')
let index = 0;

function onKeyDownHandler(e){
  const key = parseInt(e.detail || e.which)

  if (key === alphabet[index]){
    index++;

    if (index === alphabet.length){
      alert("Hurray!")

      index = 0
    }
  }else{
    index = 0
  }
}

input.addEventListener('keydown', onKeyDownHandler())

const input = document.querySelector('input')

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
input.addEventListener('keydown', function(e) {
  if (e.detail === code[0]){
    alert("Yay!")
  }
})
