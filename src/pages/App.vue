<template lang="pug">

  .main__content
    section.banner
      banner
        socials

</template>

<script>
  import Socials from '../components/Socials/Socials'
  import Banner from '../components/Banner/Banner'

  export default {
    components: {
      Socials,
      Banner
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
