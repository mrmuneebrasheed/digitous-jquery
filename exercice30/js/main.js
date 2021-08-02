$('.form-control').keyup(function(e){
    if(e.key==='Enter'){
    if($(this).val().length>5) $(this).addClass('is-valid')
    else $(this).addClass('is-invalid')}
})