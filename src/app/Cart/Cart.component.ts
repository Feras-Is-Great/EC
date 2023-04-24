import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        {
                /* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 100;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
            }
        `;
        this._renderer2.appendChild(this._document.body, script);
    }
}
