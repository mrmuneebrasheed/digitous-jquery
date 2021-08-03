// $('.btn').click(function(){
//     $('input').removeAttr('disabled')
// })

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('input').removeAttribute('disabled');
})