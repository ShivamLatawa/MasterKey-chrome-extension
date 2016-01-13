setTimeout(function() {
    var pswd = "";

    chrome.storage.sync.get('value', function(data) {
        console.log(data);
        pswd = data.value;
        document.getElementById('savedPswd').innerHTML = pswd;
    });

})