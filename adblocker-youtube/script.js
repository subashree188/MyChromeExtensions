setInterval(() => {

    for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
        console.log("Youtube Ad Detected!");
        button.click(); // "Skip Ad" buttons
        console.log("Youtube Ad Skipped!");
    }

}, 300);
  

/*setInterval(function(){

    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");

    if(skipButton != undefined && skipButton.length > 0){
        console.log("Youtube Ad Detected!");
        skipButton[0].click();
    }

}, 3000)*/