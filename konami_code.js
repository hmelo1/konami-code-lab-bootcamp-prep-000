const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')

body.addEventListener('keydown', function(e){
  function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.key)

    if (key === code[index]){
      code++
      alert("Test111")

      if (index === code.length){
        alert("Test222")

        index = 0;
      }
    }else {
      index = 0;
    }
  }
	console.log(e.which)
})

function init() {
  // Write your JavaScript code inside the init() function

}

function onKeyDownHandler(e){
  const key = parseInt(e.detail || e.key)

  if (key === code[index]){
    code++
    alert("Test111")

    if (index === code.length){
      alert("Test222")

      index = 0;
    }
  }else {
    index = 0;
  }
}

