<template lang="pug">

  .container
    .product-types__content
      .product-types__title product types
      .product-types__subtitle up to 30% discount
      .product-types__slider
        swiper( :options="swiperOption" ref="mySwiper" ).product-types__swiper
          swiper-slide
            .product-types__slide
              .product-types__wrapper
                .product-types__img( :style="{backgroundImage: 'url('+ '../images/product-img1.png' +')'}")
                a(href="#" onclick="return false").product-types__button shop men
          swiper-slide
            .product-types__slide
              .product-types__wrapper
                .product-types__img( :style="{backgroundImage: 'url('+ '../images/product-img2.png' +')'}")
                a(href="#" onclick="return false").product-types__button shop women
          swiper-slide
            .product-types__slide
              .product-types__wrapper
                .product-types__img( :style="{backgroundImage: 'url('+ '../images/product-img3.png' +')'}")
                a(href="#" onclick="return false").product-types__button shop kids
          swiper-slide
            .product-types__slide
              .product-types__wrapper
                .product-types__img( :style="{backgroundImage: 'url('+ '../images/product-img1.png' +')'}")
                a(href="#" onclick="return false").product-types__button shop kids

          .swiper-button-prev(slot='button-prev')
            | prev
          .swiper-button-next(slot='button-next')
            | next
</template>

<script>

  import './index.sass'
  import { swiper, swiperSlide } from 'vue-awesome-swiper/dist/vue-awesome-swiper.js'
  import "swiper/dist/css/swiper.css"

  export default {
    data() {
      return {
        swiperOption: {
          spaceBetween: 26,
          slidesPerView: 3,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
        },
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }

</script>
