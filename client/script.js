(function() {
    var submit = document.getElementById('sender'),
        fileInput = document.getElementById('my_file'),
        resultDisplay = document.getElementById('result');

    submit.addEventListener('click', function() {

        uploadFile(fileInput.files[0]);

    });

    function uploadFile(file) {
        var http = new XMLHttpRequest(),
            formData = new FormData(),
            url = '/get-file-size';
        formData.append('data', file);
        http.open('POST', url, true);
        http.send(formData);
        http.onload = function() {

            resultDisplay.innerHTML = this.responseText;
        };
    }
}());
