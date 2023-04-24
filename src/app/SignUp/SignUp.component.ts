import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['../Login/Login.component.css']
})
export class SignUpComponent implements OnInit {
    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        script.text = `
        {
                const togglePassword = document.querySelectorAll('#togglePassword');
    const password = document.querySelectorAll('#id_password');
togglePassword.forEach(item => {item.addEventListener('click', ()=> {

  // toggle the type attribute
  const type = password[0].getAttribute('type') === 'password' ? 'text' : 'password';

  // set the type attribute
  password.forEach(item =>{item.setAttribute('type', type)});

  // toggle the eye slash icon
  togglePassword.forEach(item => {item.classList.toggle('fa-eye-slash')});

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
            }
                function routeToHome(){
                window.location = '/Home';
    }


            function ValidateEmail(input) {

        var UserEmail = document.getElementsByName("UserEmail")[0];

        var validRegex = ` + validRegex + `;
        var SignUpButton = document.getElementById("SignUpButton");

        if (UserEmail.value.match(validRegex)) {
          alert("Valid email address!");
          routeToHome();

        // document.UserEmail.focus();

        return true;

        } else {

        alert("Invalid email address!");

        document.UserEmail.focus();

        return false;

        }
    }

        `;
        this._renderer2.appendChild(this._document.body, script);
    }
}
