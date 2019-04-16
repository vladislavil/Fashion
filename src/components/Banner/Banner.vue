<template lang="pug">

  .banner__content
    .banner__slider
      swiper( :options="swiperOption" ref="mySwiper" )
        swiper-slide
          .banner__slide
            .banner__img-wrapper
              img(src="/images/Main-slider-img.png").banner__img
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
              slot(name="oficial-offer")
        swiper-slide
          .banner__slide
            .banner__img-wrapper
              img(src="/images/Main-slider-img.png").banner__img
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
            .banner__img-wrapper
              img(src="/images/Main-slider-img.png").banner__img
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
    slot(name="socials")

</template>


<script>

  import './index.sass'
  import { swiper, swiperSlide } from 'vue-awesome-swiper/dist/vue-awesome-swiper.js'
  import "swiper/dist/css/swiper.css"

  export default {
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
    components: {
      swiper, swiperSlide
    }
  }

</script>
