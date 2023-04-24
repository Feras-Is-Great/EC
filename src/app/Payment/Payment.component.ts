import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'Payment',
  templateUrl: './Payment.component.html',
  styleUrls: ['./Payment.component.css']
})
export class PaymentComponent implements OnInit {
    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        {
                const DeliveryOption = document.getElementById("radioForDelivery");
        const DeliveryOptionContainer = document.getElementById("FormForDelivery");

        const CreditCardOption = document.getElementById("radioForCreditCard");
        const CreditCardOptionContainer = document.getElementById("FormForCreditCard");

        const PaypalOption = document.getElementById("radioForPaypal");
        const PaypalOptionContainer = document.getElementById("FormForPaypal");


        DeliveryOptionContainer.style.display = "none";
        CreditCardOptionContainer.style.display = "none";
        PaypalOptionContainer.style.display = "none";


        DeliveryOption.addEventListener("change", ()=>{
            if(DeliveryOption.checked === true){
                console.log("delivery selected");
                DeliveryOptionContainer.style.display = "flex";
                CreditCardOptionContainer.style.display = "none";
                PaypalOptionContainer.style.display = "none";
            }
        });
        CreditCardOption.addEventListener("change", ()=>{
            if(CreditCardOption.checked === true){
                console.log("credit card selected");
                CreditCardOptionContainer.style.display = "flex";
                DeliveryOptionContainer.style.display = "none";
                PaypalOptionContainer.style.display = "none";
            }
        });
        PaypalOption.addEventListener("change", ()=>{
            if(PaypalOption.checked === true){
                console.log("paypal selected");
                PaypalOptionContainer.style.display = "flex";
                CreditCardOptionContainer.style.display = "none";
                DeliveryOptionContainer.style.display = "none";
            }
        });


        function submission(){
            window.location.href="/Invoice";
        }
            }
        `;
        this._renderer2.appendChild(this._document.body, script);
    }

}
