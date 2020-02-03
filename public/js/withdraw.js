function logout(){
    localStorage.removeItem('onUser');
    localStorage.removeItem('onPin');
    location.replace('index.html');
}


function fastCash(cash){
    console.log(cash);
}


function takeValue() {
    var loginId = localStorage.getItem('onUser');
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.length; i++) {
        if (loginId == users[i].card) {
            if (document.querySelector('#withdrawAmountField').value <= users[i].amount) {
                users[i].amount = users[i].amount - document.querySelector('#withdrawAmountField').value;
                
            }else { alert('You have not sufficient balance') }
        } 
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.replace('withdraw.html');
}



function otherAmount(){
    var b= document.createElement('input');
    b.setAttribute('id', 'withdrawAmountField')
    document.querySelector('.amounts').appendChild(b);
    
}


var disID = document.querySelector('h1').innerHTML += localStorage.getItem('onUser');