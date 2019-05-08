<template lang="pug">
.products
  .container
    .products__content
      .products__title featured products
      ul.products__list
        li.products__item(v-for="(title, index) in titles" @click="currentCard = index")
          a.products__lnk(href="#" onclick="return false" :class="{active: currentCard === index}") {{ title }}
      .products__content-wrapper
        transition(name="tab" mode="out-in" )
          .products__cards(v-if="currentCard === 0" key="0")
            .products__card(v-for="item in productsItems")
              a(href="#" onclick="return false").products__wrapper
                .products__img-wrapper
                  img.products__img( :src="item.img" )
                .products__text {{ item.text }}
                .products__brend {{ item.brend }}
                .products__prices
                  .products__old-price {{ item.oldPrice }}
                  .products__new-price {{ item.newPrice }}
          .products__cards(v-if="currentCard === 1" key="1")
            .products__card(v-for="item in springSummer")
              a(href="#" onclick="return false").products__wrapper
                .products__img-wrapper
                  img.products__img( :src="item.img" )
                .products__text {{ item.text }}
                .products__brend {{ item.brend }}
                .products__prices
                  .products__old-price {{ item.oldPrice }}
                  .products__new-price {{ item.newPrice }}
          .products__cards(v-if="currentCard === 2" key="2")
            .products__card(v-for="item in sweatshirt")
              a(href="#" onclick="return false").products__wrapper
                .products__img-wrapper
                  img.products__img( :src="item.img" )
                .products__text {{ item.text }}
                .products__brend {{ item.brend }}
                .products__prices
                  .products__old-price {{ item.oldPrice }}
                  .products__new-price {{ item.newPrice }}
          .products__cards(v-if="currentCard === 3" key="3")
            .products__card(v-for="item in gadgets")
              a(href="#" onclick="return false").products__wrapper
                .products__img-wrapper
                  img.products__img( :src="item.img" )
                .products__text {{ item.text }}
                .products__brend {{ item.brend }}
                .products__prices
                  .products__old-price {{ item.oldPrice }}
                  .products__new-price {{ item.newPrice }}
          .products__cards(v-if="currentCard === 4" key="4")
            .products__card(v-for="item in outdoor")
              a(href="#" onclick="return false").products__wrapper
                .products__img-wrapper
                  img.products__img( :src="item.img" )
                .products__text {{ item.text }}
                .products__brend {{ item.brend }}
                .products__prices
                  .products__old-price {{ item.oldPrice }}
                  .products__new-price {{ item.newPrice }}
</template>

<script>

  import './index.sass'

  export default {
    data() {
      return {
        currentCard: 0
      }
    },
    props: ["titles", "productsItems"],
    computed: {
      springSummer() {
        let buf = [];
        this.productsItems.map(function(value, key) {
          if(value.tab === 1) {
            console.log(value);
            buf.push(value);
            console.log('buf', buf)
          }
        });
        return buf;
      },
      sweatshirt(){
        let buf = [];
        this.productsItems.map(function(value, key) {
          if(value.tab === 2) {
            console.log(value);
            buf.push(value);
            console.log('buf', buf)
          }
        });
        return buf;
      },
      gadgets(){
        let buf = [];
        this.productsItems.map(function(value, key) {
          if(value.tab === 3) {
            console.log(value);
            buf.push(value);
            console.log('buf', buf)
          }
        });
        return buf;
      },
      outdoor(){
        let buf = [];
        this.productsItems.map(function(value, key) {
          if(value.tab === 4) {
            console.log(value);
            buf.push(value);
            console.log('buf', buf)
          }
        });
        return buf;
      }
    },
  }

</script>


<style lang="sass">

.active
  color: red

.tab-enter
  opacity: 0

.tab-enter-active
  transition: opacity 1s, transform 1s, height 1s

.tab-leave-to
  opacity: 0

.tab-leave-active
  transition: opacity 1s, transform 1s, height 1s

</style>
