if(!localStorage.getItem("users")){
    localStorage.setItem("users",JSON.stringify([]))
}

if(localStorage.getItem('onUser')){
    location.href = 'options.html'; 
}
function loginSignup() {
    
    var id = document.querySelector('.card').value;
    var pin = document.querySelector('.pass').value;
    var users = JSON.parse(localStorage.getItem("users"));

    if(users.length){
        var found = false;
        for(var i=0; i<users.length; i++){
            if(id === users[i].card && pin === users[i].pin){
                found = true;
                break;
            }
        }
        if(found){
            localStorage.setItem('onUser', id);
            localStorage.setItem('onPin', pin);
            location.replace('options.html');
            location.reload(false);

        }
        else {
            // alert("Invalid card or pin")
            for (var j = 0; j < users.length; j++) {
                if (id != users[j].card) {
                    var user = {
                        card: id,
                        pin,
                        amount: 0
                    }
                    users.push(user);
                    localStorage.setItem("users", JSON.stringify(users));
                    localStorage.setItem('onUser', id);
                    localStorage.setItem('onPin', pin);
                    location.replace('options.html')
                    location.reload(false);

                }
            }
        }
    }else{
        var user = {
            card : id,
            pin,
            amount : 0
        }
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem('onUser', id);
        localStorage.setItem('onPin', pin);
        location.replace('options.html')
        location.reload(false);
    }

}


