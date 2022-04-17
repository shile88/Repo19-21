var elements = document.getElementsByClassName("key");

var textarea = document.getElementById('text');
var shifted = false;
var capsLocked = false;
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        var value = event.target.innerText;
        
        if((value == 'back' || value == 'space') && event.target.className != 'key nine l') {
            textarea.value = textarea.value.substring(0, textarea.value.length -1);
        }else if(value == 'space' && event.target.className == 'key nine l'){
            textarea.value = textarea.value + ' ';
        }else if(value == 'shift'){
            shifted = !shifted;
            
            if(shifted) {
                this.classList.add('active');
            }else{
                this.classList.remove('active');
            }
            
        }else if(value == 'caps lock'){
            capsLocked = !capsLocked;
            
            if(capsLocked) {
                this.classList.add('active');
            }else{
                this.classList.remove('active');
            }
        }else if(value == 'enter') {
            alert(textarea.value);
        }else{

            textarea.value = textarea.value + (shifted || capsLocked ? value.toUpperCase() : value);
        }
      

    }, false);
}