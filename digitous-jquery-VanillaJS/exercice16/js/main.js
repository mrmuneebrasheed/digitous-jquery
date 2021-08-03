// $('.btn').click(function(){
//     $('#text').html('Konexio!')
// })

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#text').textContent='Konexio!';
})