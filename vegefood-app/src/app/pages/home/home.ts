import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private carouselInstance: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        const $carousel = $('.home-slider');
        if ($carousel.length > 0 && !$carousel.hasClass('owl-loaded')) {
          // Destroy existing instance if any (from main.js)
          $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
          $carousel.addClass('owl-carousel');

          this.carouselInstance = $carousel.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 1
              }
            }
          });
        }
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.carouselInstance && typeof $.fn.owlCarousel !== 'undefined') {
      const $carousel = $('.home-slider');
      if ($carousel.length > 0) {
        $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      }
    }
  }
}
