<template lang="pug">

  .main__content
    section.banner
      banner
        template(slot="socials")
          socials
        template(slot="oficial-offer")
          oficial-offer
    section.product-type
      product-types
    section.offer-banners
      offer-banners( :items = "items" :flag = "0")
    section.offer-banners
      offer-banners( :items = "items" :flag = "1")
    section.blog
      blog

</template>

<script>
  import Socials from '../components/Socials/Socials'
  import OficialOffer from '../components/OficialOffer/OficialOffer'
  import Banner from '../components/Banner/Banner'
  import ProductTypes from '../components/ProductTypes/ProductTypes'
  import OfferBanners from '../components/OfferBanners/OfferBanners'
  import Blog from '../components/Blogs/Blogs'

  export default {
    components: {
      Socials,
      Banner,
      OficialOffer,
      ProductTypes,
      OfferBanners,
      Blog
    },
    data() {
      return{
        items: [
          {title: "WE OFFER BRAND NEW STYLES", subtitle: "SIGN UP NOW AND GET 50% OFF", img: "../images/banner-img.png", text: "see full collection"},
          {title: "subscribe to our newsletter ", subtitle: "SIGN UP NOW AND GET 75% OFF", img: "../images/banner-img1.jpg", text: "sing up now"}
        ],
      }
    }
  }

</script>

<!--<style lang="sass" scoped>-->

  <!--.appear-enter-->
    <!--opacity: 0-->
    <!--transform: translateX(-30%)-->

  <!--.appear-enter-active-->
    <!--transition: opacity 1s, transform 1s-->

  <!--.appear-leave-to-->
    <!--opacity: 0-->
    <!--transform: translateX(-30%)-->

  <!--.appear-leave-active-->
    <!--transition: opacity 1s, transform 1s-->

<!--</style>-->
