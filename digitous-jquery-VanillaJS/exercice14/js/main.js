// $(".btn").click(function(){
//     $('#text').attr('class', 'float-right')
// })

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#text').classList.add('float-right');
})