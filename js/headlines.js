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
    var showNo = newsArray[6];
    

    //Set the headline news (biggest)
    document.getElementById("title").innerText = newsJson['articles'][showNo]['title'];
    document.getElementById("description").innerText = newsJson['articles'][showNo]['description'];
    
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var publishedDate = new Date(newsJson['articles'][showNo]['publishedAt']);
    var showPublishedDate = monthNames[currentDate.getMonth()] +' '+ publishedDate.getDate()+', '+publishedDate.getFullYear();
    document.getElementById("publishedAt").innerText =showPublishedDate;

    var headNewsImageUrl =  newsJson['articles'][showNo]['urlToImage'] ;
    // document.getElementById("headNews").src = headNewsImageUrl;
    console.log('headNewsImageUrl='+headNewsImageUrl);

    console.log('headNewsImageUrl='+ "\"url('"+headNewsImageUrl+"')\"");
    document.getElementById("headNews").style.backgroundImage = "url('" + headNewsImageUrl +"')";

    //Set the leadLine right side 4 news
    var last4newsLength = newsArray.length;

    for (i=0; i< 4 ;i++){
        // console.log(i);
        var imageId= 'headNewsRightSide'+ (i+1);
        // console.log('imageId= '+imageId);
        var headNewsImageRightSideUrl = newsJson['articles'][newsArray[i]]['urlToImage'];
        // console.log('headNewsImageRightSideUrl= '+headNewsImageRightSideUrl);
        document.getElementById(imageId).src = headNewsImageRightSideUrl;
        document.getElementById(imageId).style.backgroundImage = "url('" + headNewsImageRightSideUrl +"')";

    }
    

  
  

}
