// alert("hi Nilesh")
var h1 = document.querySelector('h1');
var button = document.querySelector('button');
var counter = 60;

//setInterval(function(){
  //  console.log(counter--);
//}, 1000)

button.addEventListener('click', function(){
    setInterval(function(){
     if(counter){
        h1.textContent = counter--;
     }
    }, 1000)
})
