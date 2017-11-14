import Vue from 'vue'
import imgCdn from './imgCdn'
import timeFlier from './timeFlier'
import cutStr from './cutStr'
import unit from './unit'

const filters = {
	imgCdn,
	timeFlier,
  unit,
	cutStr
}

// 注册filters到Vue
for (let key in filters) {
  Vue.filter(key, filters[key])
}

