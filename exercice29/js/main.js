$('.btn').click(function(){
    if($('.form-control').val().length>5) $('.form-control').addClass('is-valid')
    if($('.form-control').val().length<=5) $('.form-control').addClass('is-invalid')
})
