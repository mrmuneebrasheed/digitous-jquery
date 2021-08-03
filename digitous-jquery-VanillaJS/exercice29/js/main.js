// $('.btn').click(function(){
//     if($('.form-control').val().length>5) $('.form-control').addClass('is-valid')
//     if($('.form-control').val().length<=5) $('.form-control').addClass('is-invalid')
// })

document.querySelector(".btn").addEventListener("click", function () {
  const value = document.querySelector(".form-control").value.length;
  if (value > 5)
    document.querySelector(".form-control").classList.add("is-valid");
  else document.querySelector(".form-control").classList.add("is-invalid");
});
