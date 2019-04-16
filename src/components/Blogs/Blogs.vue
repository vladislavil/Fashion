<template lang="pug">

  .container
    .blog__slider
      swiper( :options="swiperOption" ref="mySwiper" )
        swiper-slide
          .blog__content
            .blog__img( :style="{backgroundImage: 'url(' + '../images/blog-img1.png' + ')'}")
            .blog__wrapper
              .blog__title The 15 Secrets About Fashion People
              .blog__subtitle January 12, 2020 by admin
        swiper-slide
          .blog__content
            .blog__img( :style="{backgroundImage: 'url(' + '../images/blog-img2.png' + ')'}")
            .blog__wrapper
              .blog__title The 15 Secrets About Fashion People
              .blog__subtitle January 13, 2020 by admin

</template>

<script>

  import './index.sass'
  import { swiper, swiperSlide } from 'vue-awesome-swiper/dist/vue-awesome-swiper.js'
  import "swiper/dist/css/swiper.css"

  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 25,
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
