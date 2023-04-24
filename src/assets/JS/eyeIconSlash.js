
const togglePassword = document.querySelectorAll('#togglePassword');
const password = document.querySelectorAll('#id_password');
togglePassword.forEach(item => {item.addEventListener('click', ()=> {

    // toggle the type attribute
    const type = password[0].getAttribute('type') === 'password' ? 'text' : 'password';

    // set the type attribute
    password.forEach(item =>{item.setAttribute('type', type)});

    // toggle the eye slash icon
    togglePassword.forEach(item => {item.classList.toggle('fa-eye-slash')});
        console.log("its working");

});
});

// ---------------------------------------------------------------------------------

const loginBox1 = document.querySelector('#login_box1');
const loginBox2 = document.querySelector('#login_box2');

function ShowNextInfos(){

  loginBox1.style.display = 'none';
  loginBox1.style.zIndex = "0";
  loginBox2.style.display = 'block';
  loginBox2.style.zIndex = "5";

}

function showPrevInfos(){

  loginBox1.style.display = 'block';
  loginBox1.style.zIndex = "5";
  loginBox2.style.display = 'none';
  loginBox2.style.zIndex = "0";
}
