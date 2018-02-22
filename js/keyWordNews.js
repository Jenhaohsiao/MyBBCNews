var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f2c85b71bfba48399ea2af3043be37f0';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log("Key Word News: "+response.json());
    })