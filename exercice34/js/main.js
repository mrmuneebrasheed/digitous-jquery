$('.btn').click(function(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + $('.form-control').val(),
        success: function(data , status, response){
            $('#country').html(data[0].name)
            $('#capital').html(data[0].capital)
        }
    })
})