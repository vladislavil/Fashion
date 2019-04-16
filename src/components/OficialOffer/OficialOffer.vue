<template lang="pug">
  .oficial-offer
    .oficial-offer__content
      .oficial-offer__left-content( :style="{backgroundImage: 'url('+ '../images/oficial-offer.png' +')'}")
      .oficial-offer__right-content( :style="{backgroundImage: 'url('+ '../images/special-offer-bg.png' +')'}" )
        .oficial-offer__title Special Offer Of The Month
        .oficial-offer__subtitle Black long sleeve
        .oficial-offer__wrapper
          .oficial-offer__prices
            .oficial-offer__old-price $105
            .oficial-offer__new-price $65
          a(href="#" onclick="return false").oficial-offer__button shop now
        .oficial-offer__timer
          .oficial-offer__part#hours
            .oficial-offer__time 09
            .oficial-offer__pagination ....
            .oficial-offer__text hours
          .oficial-offer__part#minutes
            .oficial-offer__time 56
            .oficial-offer__pagination ....
            .oficial-offer__text minutes
          .oficial-offer__part#seconds
            .oficial-offer__time 11
            .oficial-offer__pagination ....
            .oficial-offer__text seconds
</template>

<script>

  import './index.sass'

  export default {
    data() {
      return{

      }
    }
  }

</script>
