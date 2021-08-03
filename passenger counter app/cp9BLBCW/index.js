//document.getElementById("count-el").innerText = 5

//console.log(countEl)

 let lapCounter = 0
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 
function increment(){
      lapCounter++
    countEl.textContent = lapCounter
 }
 
 
 function save(){
     let i = lapCounter + " - "
     saveEl.textContent += i
      countEl.textContent = 0
      lapCounter = 0 
 }




