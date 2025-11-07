document.getElementById("btn").addEventListener("click", onclick)
function onclick () {

    let n1 = document.getElementById("first").valueAsNumber
    let n2 = document.getElementById("second").valueAsNumber
    let n3 = document.getElementById("third").valueAsNumber
    let max 
    if (n1 >= n2 && n1 >= n3) {
    
        max = n1

    } else if (n2 >= n1 && n2 >= n3 ) { 

        max = n2

    } else {

        max = n3

  }
  document.getElementById("calculate").innerHTML = max
}