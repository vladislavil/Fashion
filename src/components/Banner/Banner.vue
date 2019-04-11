<template lang="pug">

  .banner__content
    agile.banner__slider( :timing="'ease-in-out'" :prevArrow="left" :nextArrow="right" :dots="false" :speed="700" :adjustableHeight="true")
      .slide
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
            .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
            a.banner__button shop now
      .slide
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
            .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
            a.banner__button shop now
      .slide
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
            .banner__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia luctus eget eu est.
            a.banner__button shop now
    slot

</template>


<script>

  import './index.sass'
  import Agile from 'vue-agile/dist/Agile.vue'

  export default {
    data() {
      return {
        left: 'PREV <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39px" height="6px"><path fill-rule="evenodd" d="M2.948,3.978 C13.631,3.978 28.317,3.978 39.000,3.978 C39.000,3.336 39.000,2.694 39.000,2.053 C28.317,2.053 13.631,2.053 2.948,2.053 C2.943,1.368 2.938,0.684 2.934,-0.001 C1.956,0.994 0.978,1.989 0.000,2.984 C0.005,3.005 0.010,3.026 0.014,3.047 C0.992,4.032 1.970,5.015 2.948,6.000 C2.948,5.326 2.948,4.652 2.948,3.978 Z"/></svg>',
        right: 'NEXT <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39px" height="6px"><path fill-rule="evenodd" d="M36.052,3.978 C25.369,3.978 10.683,3.978 -0.000,3.978 C-0.000,3.336 -0.000,2.694 -0.000,2.053 C10.683,2.053 25.369,2.053 36.052,2.053 C36.057,1.368 36.061,0.684 36.066,-0.001 C37.044,0.994 38.022,1.989 39.000,2.984 C38.995,3.005 38.990,3.026 38.985,3.048 C38.007,4.032 37.029,5.015 36.052,6.000 C36.052,5.326 36.052,4.652 36.052,3.978 Z"/></svg>'
      }
    },
    components: {
      Agile
    }
  }

</script>
