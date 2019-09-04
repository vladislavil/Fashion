import Vue from 'vue';
import Header from "./header"
import './header.pug'
import './header.sass'

export default () => {

  const header = new Vue({
    render: createElem => createElem(Header),
  }).$mount("#header");

};
