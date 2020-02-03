
function depositDone(){
    var depositAmount = document.querySelector('#depositAmountField').value;
    depositAmount = parseInt(depositAmount);
    var id = localStorage.getItem('onUser');
    var pin = localStorage.getItem('onPin');
    var users = JSON.parse(localStorage.getItem('users'));
    console.log(id);
    for(var i=0; i<users.length; i++){
        if(id == users[i].card && pin == users[i].pin){
            // console.log(users[i].amount);
            users[i].amount += depositAmount;
            
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.replace('options.html');    
}

function deposit() {
var a = document.createElement('div');
a.setAttribute('id', 'depositAmount')
var b = document.querySelector('.options').appendChild(a);
var c = document.createElement('input');
c.setAttribute('id', 'depositAmountField');
c.setAttribute('placeholder', 'Enter deposit Amount');
c.setAttribute('type', 'number');
var d = document.querySelector('#depositAmount').appendChild(c);
var e = document.createElement('a');
e.setAttribute('href', '#');
e.setAttribute('id', 'depositAmountButton');
e.setAttribute('onclick', 'depositDone()');
var g = document.querySelector('#depositAmount').appendChild(e);
document.querySelector('#depositAmountButton').innerHTML = 'Deposit';

}

// function balanceInquiry(){

// }

function checkBalance(){
    var idCheck = localStorage.getItem('onUser');
    var balance;
    var users = JSON.parse(localStorage.getItem('users'));
    for(var i=0; i<users.length; i++){
        if(idCheck == users[i].card){
            balance = users[i].amount;
        }
    }
var a = document.createElement('div');
a.setAttribute('id', 'depositAmount')
var b = document.querySelector('.options').appendChild(a);
var c = document.createElement('p');
c.setAttribute('id', 'withdrawResult');
var d = document.querySelector('#depositAmount').appendChild(c);
document.querySelector('#withdrawResult').innerHTML = 'Your account balace is ' + balance;
var e = document.createElement('a');
e.setAttribute('href', '#');
e.setAttribute('id', 'depositAmountButton');
e.setAttribute('onclick', 'closeBalance()');
var g = document.querySelector('#depositAmount').appendChild(e);
document.querySelector('#depositAmountButton').innerHTML = 'Done';
}

function closeBalance(){
    location.replace('options.html'); 
}


// console.log(a);

var disID = document.querySelector('h1').innerHTML += localStorage.getItem('onUser');

function logout(){
    localStorage.removeItem('onUser');
    localStorage.removeItem('onPin');
    location.replace('index.html');
}