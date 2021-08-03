// $('.btn').click(function(){
//     $('#square').animate({position:'absolute', right:'0', bottom:'0'}, 2000)
// })

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("#square").style.right = 0;
  document.querySelector("#square").style.bottom = 0;
});
