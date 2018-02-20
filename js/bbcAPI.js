
var newsRequestURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f2c85b71bfba48399ea2af3043be37f0';
var newsRequest = new XMLHttpRequest();
newsRequest.open('GET', newsRequestURL);
newsRequest.responseType = 'json';
newsRequest.send();





newsRequest.onload = function () {
    var newsJson = newsRequest.response;
    console.log(newsJson);
  
    // document.getElementById("totalResults").innerText = newsJson['totalResults'];
    // document.getElementById("author").innerText = newsJson['articles'][0]['author'];
    document.getElementById("title").innerText = newsJson['articles'][0]['title'];
    document.getElementById("description").innerText = newsJson['articles'][0]['description'];
    
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var publishedDate = new Date(newsJson['articles'][0]['publishedAt']);
    var showPublishedDate = monthNames[currentDate.getMonth()] +' '+ publishedDate.getDate()+', '+publishedDate.getFullYear();
    document.getElementById("publishedAt").innerText =showPublishedDate;

  

    var newsImage = newsJson['articles'][0]['urlToImage'];
    document.getElementById("headNews").src = newsImage;
  

}
