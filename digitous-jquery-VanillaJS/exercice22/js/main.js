// $('.btn').click(function(){
//     $('#text').animate({fontSize:'50px'},2000)
// })

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("#text").style.fontSize = "50px";
});
