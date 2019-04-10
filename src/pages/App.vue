<template lang="pug">

  .main__content
    transition(name="appear" mode="out-in")
      //router-view
      socials(:socials = "socials")

</template>

<script>
  import Socials from '../components/Socials/Socials'

  export default {
    components: {
      Socials
    },
    data() {
      return{
        socials: [
          '/images/share/facebook.svg',
          '/images/share/google.svg',
          '/images/share/inst.svg',
          '/images/share/twitter.svg'
        ]
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

