import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {

    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
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
        `;
        this._renderer2.appendChild(this._document.body, script);
        this._renderer2.destroy();
    }
}



/*
Get Scripts to work inside a component:
1- Import this:
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';


/ / 2- Put this inside the component:
    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        {
                / / Here Goes Your Script
            }
        `;
        this._renderer2.appendChild(this._document.body, script);
    }
*/
