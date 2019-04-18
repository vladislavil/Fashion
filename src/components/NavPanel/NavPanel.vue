<template lang="pug">
.nav-panel
  .container
    .nav-panel__content
      .nav-panel__col(v-for="(item, index) in navItems")
        .nav-panel__title {{item.title}}
        ul.naw-panel__list
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text1}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text2}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text3}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text4}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text5}}

      .nav-panel__col
        .nav-panel__title contacts details
        ul.naw-panel__list
          li.nav-panel__item
            span.nav-panel__strong Teephone: &nbsp;
            a.nav-panel__link( :href="'tel: ' + contactItems.telephone" ) {{contactItems.telephone}}
          li.nav-panel__item
            span.nav-panel__strong Email: &nbsp;
            a.nav-panel__link( :href="'mailto: '+ contactItems.email" ) {{contactItems.email}}
          li.nav-panel__item
            span.nav-panel__strong Head Office: &nbsp;
            .nav-panel__link.nav-panel__link--hover {{contactItems.office}}

</template>

<script>

  import './index.sass'

  export default {
      props: ["navItems", "contactItems"]
  }

</script>
