<template lang="pug">

  .main__content
    section.main__banner
      banner
    section.main__products
      products( :titles="titles" :productsItems="productsItems" )
    section.main__offer-banners
      offer-banners( :items = "items" :flag = "0")
    section.main__product-type
      product-types
    section.main__products
      products( :titles="titles" :productsItems="productsItems" )
    section.main__offer-banners
      offer-banners( :items = "items" :flag = "1")
    section.main__blog
      blog
    section.main__nav-panel
      nav-panel( :navItems="navItems" :contactItems="contactItems")

</template>

<script>
  import Banner from '../components/Banner/Banner'
  import ProductTypes from '../components/ProductTypes/ProductTypes'
  import OfferBanners from '../components/OfferBanners/OfferBanners'
  import Blog from '../components/Blogs/Blogs'
  import NavPanel from '../components/NavPanel/NavPanel'
  import Products from '../components/Products/Products'

  export default {
    components: {
      Banner,
      ProductTypes,
      OfferBanners,
      Blog,
      NavPanel,
      Products
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
        productsItems: [
          {img: "../images/featured-img1.png", text: "Ted Baker Womens Light", brend: "Gucci", oldPrice: "$700", newPrice: "$120", tab: 1},
          {img: "../images/featured-img2.png", text: "Ted Baker Womens Light", brend: "Gucci", oldPrice: "$700", newPrice: "$120", tab: 2},
          {img: "../images/featured-img3.png", text: "Ted Baker Womens Light", brend: "Gucci", oldPrice: "$700", newPrice: "$120", tab: 3},
          {img: "../images/featured-img4.png", text: "Ted Baker Womens Light", brend: "Gucci", oldPrice: "$700", newPrice: "$120", tab: 4}
        ],
        titles: ["All", "spring-summer", "sweatshirt", "gadgets", "outdoor"],
        contactItems: {
          telephone: "0123-456-789", email:"free@psa.in.ua", office: " 245 Yellow House Main Street, London. 456789"}
      }
    }
  }

</script>

<style lang="sass">

  .main__offer-banners
    margin: 0 0 px-to-vw(60, 1920)

  .main__products
    padding: 5.20833vw 0

  .main__blog
    margin-bottom: px-to-vw(-130, 1920)

  .main__nav-panel
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
