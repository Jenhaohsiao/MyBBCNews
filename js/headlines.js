//API for headlines section

var newsRequestURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f2c85b71bfba48399ea2af3043be37f0';
var newsRequest = new XMLHttpRequest();
newsRequest.open('GET', newsRequestURL);
newsRequest.responseType = 'json';
newsRequest.send();

var newsArray = [];



newsRequest.onload = function () {
    var newsJson = newsRequest.response;
    console.log(newsJson);
    
    var newsLength = newsJson['totalResults'];
    console.log("newsLength=" + newsLength);

    // get 5 news with image
    for (i=0; i<newsLength; i++){
        var newsImageUrl = newsJson['articles'][i]['urlToImage'];

        if (newsImageUrl !== null) {
            newsArray.push(i);
        }
    }


    console.log("newsArray="+newsArray);
    console.log("newsArray.length="+newsArray.length);
    var showNo = newsArray[0];
    

    //Set the headline news (biggest)
    document.getElementById("headNews_title").innerText = newsJson['articles'][showNo]['title'];
    document.getElementById("headNews_description").innerText = newsJson['articles'][showNo]['description'];
    
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var publishedDate = new Date(newsJson['articles'][showNo]['publishedAt']);
    var showPublishedDate = monthNames[currentDate.getMonth()] +' '+ publishedDate.getDate()+', '+publishedDate.getFullYear();
    document.getElementById("headNews_publishedAt").innerText =showPublishedDate;

    var headNewsImageUrl =  newsJson['articles'][showNo]['urlToImage'] ;
    // document.getElementById("headNews").src = headNewsImageUrl;
    console.log('headNewsImageUrl='+headNewsImageUrl);

    console.log('headNewsImageUrl='+ "\"url('"+headNewsImageUrl+"')\"");
    document.getElementById("headNews_BGImage").style.backgroundImage = "url('" + headNewsImageUrl +"')";

    //Set the leadLine right side 4 news
    var last4newsLength = newsArray.length;

    var j = 0;
    for (i=1; i< 5 ;i++){
        var imageId= 'lineTwoSection_background_'+ (j+1);
        
        var lineTwoImageUrl = newsJson['articles'][newsArray[i]]['urlToImage'];
        if (newsJson['articles'][newsArray[i]]['source']['id'] == "fox-news") {
            lineTwoImageUrl = "https://" + lineTwoImageUrl;
        }
        document.getElementById(imageId).src = lineTwoImageUrl;
        document.getElementById(imageId).style.backgroundImage = "url('" + lineTwoImageUrl +"')";

        var titleId= 'lineTwoSection_title_'+ (j+1);
        var lineTwoTitle = newsJson['articles'][newsArray[i]]['title'];
        document.getElementById(titleId).innerText = lineTwoTitle;
        j++;
    }
    

  
  

}
