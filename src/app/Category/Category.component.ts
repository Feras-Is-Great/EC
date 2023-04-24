import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css',
              '../Product/Product.component.css']
})
export class CategoryComponent implements OnInit {

constructor(
        private _renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) { }

    public ngOnInit() {

        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
        {
               let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

let cycle = index => {
  let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

  nextIndex = index !== undefined ? index : nextIndex;

  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));

  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));

  $currentSlide.removeClass("active").css("z-index", "0");

  $nextSlide.addClass("active").css("z-index", "1");

  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");

  currentIndex = index !== undefined ?
  nextIndex :
  currentIndex < $slides.length - 1 ?
  currentIndex + 1 :
  0;

  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
  currentIndex = 0;
  nextIndex = 1;

  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");

  $slides.first().addClass("active");
  $selectors.first().addClass("current");

  interval = window.setInterval(cycle, 6000);

  $selectors.on("click", e => {
    let target = $selectors.index(e.target);
    if (target !== currentIndex) {
      window.clearInterval(interval);
      cycle(target);
      interval = window.setInterval(cycle, 6000);
    }
  });

  $btns.on("click", e => {
    window.clearInterval(interval);
    if ($(e.target).hasClass("prev")) {
      let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }
    interval = window.setInterval(cycle, 6000);
  });
});
            }
        `;
        this._renderer2.appendChild(this._document.body, script);
    }

}

/*let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

let cycle = index => {
  let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

  nextIndex = index !== undefined ? index : nextIndex;

  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));

  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));

  $currentSlide.removeClass("active").css("z-index", "0");

  $nextSlide.addClass("active").css("z-index", "1");

  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");

  currentIndex = index !== undefined ?
  nextIndex :
  currentIndex < $slides.length - 1 ?
  currentIndex + 1 :
  0;

  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
  currentIndex = 0;
  nextIndex = 1;

  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");

  $slides.first().addClass("active");
  $selectors.first().addClass("current");

  interval = window.setInterval(cycle, 6000);

  $selectors.on("click", e => {
    let target = $selectors.index(e.target);
    if (target !== currentIndex) {
      window.clearInterval(interval);
      cycle(target);
      interval = window.setInterval(cycle, 6000);
    }
  });

  $btns.on("click", e => {
    window.clearInterval(interval);
    if ($(e.target).hasClass("prev")) {
      let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }
    interval = window.setInterval(cycle, 6000);
  });
});


*/
