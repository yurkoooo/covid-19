var button = document.querySelector('.form__button');
    button.onclick = function validateEmail () {
        event.preventDefault();
        var form = document.querySelector('.title__mainForm');
        var email = document.querySelector('.title__mainInput').value;
        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(pattern)) {
            form.classList.add ('success');
            form.classList.remove ('error');
        } else {
            form.classList.remove ('success');
            form.classList.add ('error');
        }
    } 
    // setTimeout