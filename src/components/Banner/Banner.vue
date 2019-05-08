<template lang="pug">
.banner
  .banner__content
    .banner__slider
      swiper( :options="swiperOption")
        swiper-slide
          .banner__slide
            .banner__img( :style="{backgroundImage: 'url('+ '../images/Main-slider-img.png' +')'}")
              .banner__wrapper
                .banner__title Summer Collection
                .banner__subtitle 01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MEN´S WEAR
                ul.banner__icons
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include right-arrow.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include heart.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include share.svg
                .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
                a.banner__button shop now
        swiper-slide
          .banner__slide
            .banner__img( :style="{backgroundImage: 'url('+'../images/Main-slider-img.png'+')'}")
              .banner__wrapper
                .banner__title Summer Collection
                .banner__subtitle 02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MEN´S WEAR
                ul.banner__icons
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include right-arrow.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include heart.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include share.svg
                .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
                a.banner__button shop now
        swiper-slide
          .banner__slide
            .banner__img( :style="{backgroundImage: 'url('+'../images/Main-slider-img.png'+')'}")
              .banner__wrapper
                .banner__title Summer Collection
                .banner__subtitle 03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MEN´S WEAR
                ul.banner__icons
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include right-arrow.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include heart.svg
                  li.banner__icon
                    a(href="#" onclick="return false").banner__link
                      include share.svg
                .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
                a.banner__button shop now
        .swiper-button-prev(slot='button-prev')
          | prev
          include prev.svg
        .swiper-button-next(slot='button-next')
          | next
          include next.svg
    socials
    oficial-offer

</template>


<script>

  import './index.sass'
  import Socials from 'components/Socials/Socials'
  import OficialOffer from 'components/OficialOffer/OficialOffer'

  export default {
    components: {
      Socials,
      OficialOffer
    },
    data() {
      return {
        swiperOption: {
          speed: 1000,
          autoplay: true,
          effect: "fade",
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          allowTouchMove: false
        },
      }
    },
  }

</script>
