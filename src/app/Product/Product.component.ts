import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        {
                const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
    activeImage.src = e.target.src;
}

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);
            }
        `;
        this._renderer2.appendChild(this._document.body, script);
    }

}
