function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('home').style.display='none'
}

function showRegister() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('home').style.display='none'
}
function backto(){
    document.getElementById('home').style.display='block'
    document.getElementById('login-form').style.display='none'
    document.getElementById('register-form').style.display='none'

}