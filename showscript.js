$(document).ready(function() {
  chrome.extension.sendRequest(
    {method: "getLocalStorage", key: "name"},
    function(response) {
      alert(response.data);
    }
  );
});