var movieName = $('#movieName').text();
var articleYearStart = $('#articleYearStart').text();
var articleYearEnd = $('#articleYearEnd').text();
var searchURL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + 
          'q=' + movieName + '&'
          'from=' + articleYearStart + '&'
          'to=' + articleYearEnd + '&'
          //'category=movies&' + 
          //'language=en&' +
          //'limit=50&' +
          'apiKey=4d40ce544309489b9dd043dfac1e6abf';

    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function(response) {
            console.log(response);
            var newCard = $('<div>');
            newCard.addClass('card');

            var cardBody = $('<div>');
            cardBody.addClass('card-body');

            newCard.append(cardBody);
    
    });
