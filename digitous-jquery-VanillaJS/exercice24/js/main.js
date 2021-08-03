// $('.btn').click(function(){
//     $('#bg').animate({marginLeft:'100px'}, 1000)
// })

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("#bg").style.marginLeft = "100px";
});
