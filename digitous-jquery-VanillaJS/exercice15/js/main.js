// $('.btn').click(function(){
//     $("#text").addClass('float-right')
// })

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#text').classList.add('float-right');
})