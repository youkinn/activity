/**
 * 定义图片加载监听事件
 * @param  {[type]} ele     [description]
 * @param  {[type]} binding [description]
 * @return {[type]}         [description]
 */

import config from '~/config'

const lazyload = (ele, binding) => {
  // 是否加cdn
  const imgCdn = binding.modifiers.cdn

  let listeners = []
  let imageCache = []
  let imgSrc = imgCdn ? (config.IMG_ADDRESS + binding.value) : binding.value

  let init = { // 初始化图片懒加载 默认图片
    lazyLoad: false,
    default: require('~/assets/img/default.png')
  }

  // 为数组添加移除功能
  if (!Array.prototype.remove) {
    Array.prototype.remove = function (item) {
      if (!this.length) return
      var index = this.indexOf(item)
      if (index > -1) {
        this.splice(index, 1)
        return this
      }
    }
  }

  const onListen = (ele, bind) => {
    if (bind) {
      ele.addEventListener('scroll', render)
    } else {
      init.lazyLoad = false
      ele.removeEventListener('scroll', render)
    }
  }

  const render = (e) => {
    for (var i = 0; i < listeners.length; i++) {
      checkCanShow(listeners[i])
    }
  }

  const setEleSrc = (ele, imgSrc) => {
    ele.src = imgSrc
    ele.style.opacity = 1
    // ele.nextElementSibling.style.display = 'block'
    ele.setAttribute('load', 'success')
  }
  const alreadyLoad = (ele, imgSrc) => {
    if (imageCache.indexOf(imgSrc) > -1) {
      setEleSrc(ele, imgSrc)
      return true
    }
    return false
  }

  const checkCanShow = (item,ele) => {
    var ele = item.ele
    var top = ele.getBoundingClientRect().top
    if (top + 10 < window.innerHeight) {
      if(ele.getAttribute('load') == "fail"){
        loadImgAsync(item, (ele, imgSrc) => {
          setEleSrc(ele, imgSrc)
          imageCache.push(imgSrc)
        }, (e) => {
          console.log('image load fail')
        })
      }
      return true
    }
    return false
  }

  const loadImgAsync = (item, resolve, reject) => {
    let img = new Image()
    img.src = item.imgSrc
    img.onload = () => {
      resolve(item.ele, item.imgSrc)
    }
    img.onerror = (e) => {
      reject(e)
    }
    listeners.remove(item)
  }

  // ele.nextElementSibling.style.display = 'none'
  ele.setAttribute('load', 'fail')
  if (alreadyLoad(ele, imgSrc)) {
    return false
  }
  let item = {
    ele: ele,
    imgSrc: imgSrc
  }
  ele.src = init.default

  if (checkCanShow(item)) {
    return false
  }
  listeners.push(item)
  if (!init.lazyLoad) {
    init.lazyLoad = true
    onListen(window, true)
  }
}

export default {
  inserted: lazyload
}
