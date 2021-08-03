// $('.btn').click(function(){
//     $('#square').animate({width:'500px'},2000)
// })

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('#square').animate([{: '500px', easing: 'ease-in' },
 ],
  2000);;
})  