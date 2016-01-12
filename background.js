window.onLoad = function() {
    var pswd = chrome.storage.sync.get('value',function(data){
    	console.log(data);
    });
    document.getElementById('savedPswd').innerHTML = pswd;
}


// have access to all the chrome api's and run in completely isolated environment
