//API for headlines section

var newsRequestURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f2c85b71bfba48399ea2af3043be37f0';
var newsRequest = new XMLHttpRequest();
newsRequest.open('GET', newsRequestURL);
newsRequest.responseType = 'json';
newsRequest.send();

var newsArray = [];


newsRequest.onload = function () {
    var newsJson = newsRequest.response;
    console.log('newsJson:'+newsJson);
    
    var newsLength = newsJson['totalResults'];
    // console.log("newsLength=" + newsLength);

    // get 5 news with image
    for (i=0; i<newsLength; i++){
        var newsImageUrl = newsJson['articles'][i]['urlToImage'];
        var sourceId = newsJson['articles'][i]['source']['id'];
        console.log('newsJson:'+newsJson);

        if (sourceId !== "fox-news" && newsImageUrl !== null) {
            newsArray.push(i);
        }
    }

    var showNo = newsArray[0];
    

    //Set the headline news (biggest)
    document.getElementById("headNews_title").innerText = newsJson['articles'][showNo]['title'];
    document.getElementById("headNews_description").innerText = newsJson['articles'][showNo]['description'];
    
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var publishedDate = new Date(newsJson['articles'][showNo]['publishedAt']);
    var showPublishedDate = monthNames[currentDate.getMonth()] +' '+ publishedDate.getDate()+', '+publishedDate.getFullYear();
    document.getElementById("headNews_publishedAt").innerText =showPublishedDate;

    var headNewsImageUrl =  newsJson['articles'][showNo]['urlToImage'] ;
    document.getElementById("headNews_BGImage").style.backgroundImage = "url('" + headNewsImageUrl +"')";

    var sourceUrl = newsJson['articles'][showNo]['url'] ;
    document.getElementById('headNews_url').href = sourceUrl;
    


    //Set the leadLine right side 4 news
    var last4newsLength = newsArray.length;

    var j = 0;
    for (i=1; i< 5 ;i++){
        var imageId= 'lineTwoSection_background_'+ (j+1);
        var imageURL = 'lineTwoSection_URL_'+ (j+1);
        
        var lineTwoImageUrl = newsJson['articles'][newsArray[i]]['urlToImage'];
        document.getElementById(imageId).src = lineTwoImageUrl;
        document.getElementById(imageId).style.backgroundImage = "url('" + lineTwoImageUrl +"')";

        var titleId= 'lineTwoSection_title_'+ (j+1);
        var lineTwoTitle = newsJson['articles'][newsArray[i]]['title'];
        document.getElementById(titleId).innerText = lineTwoTitle;

        var line2SourceUrl = newsJson['articles'][newsArray[i]]['url'] ;
        document.getElementById(imageURL).href = line2SourceUrl;

        j++;
    }

}
