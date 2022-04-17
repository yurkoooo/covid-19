    var button = document.querySelector('.feedback__mainBtn');
    var form = document.querySelector('.feedback__mainForm');        
        button.onclick = function validateEmail () {
        event.preventDefault();
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var email = document.querySelector('.feedback__mainInput').value;
        if (email.match(pattern)) {
            form.classList.add ('success');
            form.classList.remove ('error');
        } else {
            form.classList.remove ('success');
            form.classList.add ('error');
        }
    } 
    // setTimeout