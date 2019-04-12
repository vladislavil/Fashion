<template lang="pug">

  .main__content
    section.banner
      banner
        template(slot="socials")
          socials
        template(slot="oficial-offer")
          oficial-offer
</template>

<script>
  import Socials from '../components/Socials/Socials'
  import OficialOffer from '../components/OficialOffer/OficialOffer'
  import Banner from '../components/Banner/Banner'

  export default {
    components: {
      Socials,
      Banner,
      OficialOffer,
    },
    data() {
      return{
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
