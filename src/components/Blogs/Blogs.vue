<template lang="pug">
.blog
  .blog__container
    .blog__slider
      swiper( :options="swiperOption").blog__slide-content
        swiper-slide
          a(href="#" onclick="return false").blog__content
            .blog__img( :style="{backgroundImage: 'url(' + '../images/blog-img1.png' + ')'}")
            .blog__wrapper
              .blog__title The 15 Secrets About Fashion People
              .blog__subtitle January 12, 2020 by admin
        swiper-slide
          a(href="#" onclick="return false").blog__content
            .blog__img( :style="{backgroundImage: 'url(' + '../images/blog-img2.png' + ')'}")
            .blog__wrapper
              .blog__title The 15 Secrets About Fashion People
              .blog__subtitle January 13, 2020 by admin
        .swiper-button-prev(slot='button-prev')
          include left.svg
        .swiper-button-next(slot='button-next')
          include right.svg

</template>

<script>

  import './index.sass'

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
  }

</script>
