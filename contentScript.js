$(document).ready(function() {
    var $body = $($('body').html()),
        $submitBtn = $body.find(':submit').eq(1),
        $form = $("form").eq(2),
        $formInputUsername = $(":text").eq(2),
        $formInputPassword = $(":password").eq(0);

    $form.on('submit', function() {
        var username = $formInputUsername.val(),
            password = $formInputPassword.val();

        confirm('Do you want to save the password?');

        saveToStorage(password);
    });

    function saveToStorage(password) {
        chrome.storage.sync.set({
            'value': password
        }, function() {
            // Notify that we saved.
            alert('Settings saved');
        });
    }

});
