<template lang="pug">
.products
  .container
    .products__content
      .products__title featured products
      ul.products__list
        li.products__item(v-for="(title, index) in titles" @click="currentCard = index")
          a.products__lnk(href="#" onclick="return false" :class="{active: currentCard === index}") {{ title }}
      transition
        .products__cards(v-show="currentCard === 0")
          .products__card(v-for="item in productsItems")
            a(href="#" onclick="return false").products__wrapper
              .products__img-wrapper
                img.products__img( :src="item.img" )
              .products__text {{ item.text }}
              .products__brend {{ item.brend }}
              .products__prices
                .products__old-price {{ item.oldPrice }}
                .products__new-price {{ item.newPrice }}
      transition
        .products__cards(v-show="currentCard === 1")
          .products__card(v-for="item in springSummer")
            a(href="#" onclick="return false").products__wrapper
              .products__img-wrapper
                img.products__img( :src="item.img" )
              .products__text {{ item.text }}
              .products__brend {{ item.brend }}
              .products__prices
                .products__old-price {{ item.oldPrice }}
                .products__new-price {{ item.newPrice }}
      transition
        .products__cards(v-show="currentCard === 2")
          .products__card(v-for="item in sweatshirt")
            a(href="#" onclick="return false").products__wrapper
              .products__img-wrapper
                img.products__img( :src="item.img" )
              .products__text {{ item.text }}
              .products__brend {{ item.brend }}
              .products__prices
                .products__old-price {{ item.oldPrice }}
                .products__new-price {{ item.newPrice }}
      transition
        .products__cards(v-show="currentCard === 3")
          .products__card(v-for="item in gadgets")
            a(href="#" onclick="return false").products__wrapper
              .products__img-wrapper
                img.products__img( :src="item.img" )
              .products__text {{ item.text }}
              .products__brend {{ item.brend }}
              .products__prices
                .products__old-price {{ item.oldPrice }}
                .products__new-price {{ item.newPrice }}
      transition
        .products__cards(v-show="currentCard === 4")
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

.novisible
  display: none

.active
  color: red

</style>
