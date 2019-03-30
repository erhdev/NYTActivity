var movieName = $('#movieName').text();
var articleYearStart = $('#articleYearStart').text();
var articleYearEnd = $('#articleYearEnd').text();
var searchURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + 
          //'category=movies&' + 
          //'language=en&' +
          //'limit=50&' +
          'apiKey=4d40ce544309489b9dd043dfac1e6abf';
$('').on('click', function() {
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function(response) {
            console.log(response);
    
    });
})
