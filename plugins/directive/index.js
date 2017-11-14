import Vue from 'vue'
import lazyload from './lazyload'
import move from './move'
import showsearchbtn from './showsearchbtn'

const directives = {
  showsearchbtn,
  lazyload,
  move
}

Object.keys(directives).forEach((key)=>{
  console.log(directives[key])
  Vue.directive(key,  directives[key])
})

