// $('.btn').click(function(){
//     $('.form-control').addClass('is-invalid')
// })

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".form-control").classList.add("is-invalid");
});
