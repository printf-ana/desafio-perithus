function submitForm(){
    var input, i;
    input = document.querySelectorAll(".inputContato");
    
    if (!(document.getElementById('formContato').className.match(/(?:^|\s)was-validated(?!\S)/)) ){
        document.getElementById('formContato').className += ' was-validated';
    }

    for (i = 0; i < input.length; i++) {
        if (!(input[i].className.match(/(?:^|\s)inputAction(?!\S)/)) ){
            input[i].className += ' inputAction';
        }
    }
};

function validityClass(e){

    if (!(e.className.match(/(?:^|\s)inputAction(?!\S)/)) ){
        e.className += ' inputAction';
    }
    if (e.className.match(/(?:^|\s)inputContato(?!\S)/)){
        e.className = e.className.replace( /(?:^|\s)inputContato(?!\S)/g , '' )
    }
}