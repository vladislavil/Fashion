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
    section.nav-panel
      nav-panel( :navItems="navItems" :contactItems="contactItems")

</template>

<script>
  import Socials from '../components/Socials/Socials'
  import OficialOffer from '../components/OficialOffer/OficialOffer'
  import Banner from '../components/Banner/Banner'
  import ProductTypes from '../components/ProductTypes/ProductTypes'
  import OfferBanners from '../components/OfferBanners/OfferBanners'
  import Blog from '../components/Blogs/Blogs'
  import NavPanel from '../components/NavPanel/NavPanel'

  export default {
    components: {
      Socials,
      Banner,
      OficialOffer,
      ProductTypes,
      OfferBanners,
      Blog,
      NavPanel
    },
    data() {
      return{
        items: [
          {title: "WE OFFER BRAND NEW STYLES", subtitle: "SIGN UP NOW AND GET 50% OFF", img: "../images/banner-img.png", text: "see full collection"},
          {title: "subscribe to our newsletter ", subtitle: "SIGN UP NOW AND GET 75% OFF", img: "../images/banner-img1.jpg", text: "sing up now"}
        ],
        navItems: [
          {title: "information", text1: "the brand", text2: "local stores", text3: "customer service", text4: "privacy & cookies", text5: "site map"},
          {title: "my profile", text1: "getting started", text2: "FAQs", text3: "Buying Guide", text4: "Order returns", text5: "Affiliate program"},
          {title: "your account", text1: "Shipping & returns", text2: "Secure shopping", text3: "Testimonials", text4: "Award winning", text5: "Ethical trading"},
          {title: "loock book", text1: "getting started", text2: "FAQs", text3: "Buying Guide", text4: "Order returns", text5: "Affiliate program"},
        ],
        contactItems: {
          telephone: "0123-456-789", email:"free@psa.in.ua", office: " 245 Yellow House Main Street, London. 456789"}
      }
    }
  }

</script>

<style lang="sass">

  .blog
    margin-bottom: -110px

  .nav-panel
    background-color: #f8f8f8

</style>

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
