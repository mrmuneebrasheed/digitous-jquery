// $('.form-control').keyup(function(e){
//     if(e.key==='Enter'){
//     if($(this).val().length>5) $(this).addClass('is-valid')
//     else $(this).addClass('is-invalid')}
// })

document.querySelector(".form-control").addEventListener("keyup", function (e) {
  console.log(e);
  const value = document.querySelector(".form-control").value.length;
  if (e.key === "Enter") {
    if (value > 5)
      document.querySelector(".form-control").classList.add("is-valid");
    else document.querySelector(".form-control").classList.add("is-invalid");
  }
});
