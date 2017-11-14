<template>
  <div class="search">
    <form @submit.prevent="submit">
      <ul class="search-type">
        <li @click="changeSearchType(item)" v-for="item in searchTypes" :key="item.type"
            :class="{'active': searchType === item.type}">{{ item.title }}
        </li>
      </ul>

      <div class="search-main">
        <input class="search-input"
               @keyup="onKeyup"
               @focus="onInputFocus"
               @click.stop="onInputClick"
               @input="onInputSearch"
               v-model="keyword"
               :placeholder="searchTypes[searchType].placeholder"/>
        <button type="button" @click.stop.prevent="search" class="search-btn">搜 索</button>

        <div class="results" v-show="isShowSearch">
          <div class="search-result" v-show="searchList.length > 0">
            <ul>
              <li @mouseenter="mouseenter(index)" v-for="(item, index) in searchList" :key="item.id">
                <a href="" :class="{'active': currentSelectIndex === index}">{{ item.title }}</a>
              </li>
            </ul>
          </div>

          <div class="search-history" v-show="searchList.length === 0 && historys.length > 0">
            <p class="search-tip">最近搜索</p>

            <div>
              <a class="tag text-overflow" v-for="item in historys" :key="item">{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </form>

    <p class="hot-search" v-if="hot.length > 0">
      <span>热门搜索：</span>
      <a href="" v-for="item in hot" :key="item.title">{{ item.title }}</a>
    </p>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    props: {
      hot: {
        type: Array,
        'default': []
      }
    },
    data () {
      return {
        keyword: '',
        currentSelectIndex: 0,
        searchTypes: [
          {title: '商品', type: 0, placeholder: '请输入您要查询的产品名称'},
          {title: '企业', type: 1, placeholder: '请输入您要查询的企业名称'},
        ],

        historys: [],

        searchList: [],

        isShowSearch: false,
        searchList: [
          {title: 11111, id: 1},
          {title: 22222, id: 2},
          {title: 33333, id: 3},
          {title: 44444, id: 4},
          {title: 55555, id: 5},
          {title: 66666, id: 6},
        ],
        searchType: 0,
      }
    },

    watch: {
      async keyword(){
        // 数据重新查询 索引重置
        this.currentSelectIndex = 0
        let data = []

        // 数据模拟
        for (let i = 0; i < 6; i++) {
          data[i] = {
            title: '标题：' + Math.floor(Math.random() * 99999),
            id: Math.floor(Math.random() * 99999)
          }
        }

        console.log(1111)
        this.searchList = data
        this.isShowSearch = true
      }
    },

    mounted () {
      // 从localStorage 中获取
      try {
        this.historys = JSON.parse(localStorage.getItem('historySearch'))
      } catch (e) {
        console.log('历史搜索：'+ e)
      }

      // 绑定document 点击事件 隐藏搜索列表
      document.addEventListener('click', this.docuemtClick, false)
    },

    destory(){
      document.removeEventListener('click', this.docuemtClick, false)
    },

    methods: {
      submit (e) {
        console.log()
      },

      /**
       * document 点击
       * 重置选择索引、搜索列表
       */
      docuemtClick () {
        this.currentSelectIndex = 0
        this.isShowSearch = false
        this.searchList.length = 0
      },

      /**
       * 输入搜索
       */
      async onInputSearch (event) {



//        const data = await axios.get('/api/search/1002/associational_word', {
//          params: {
//            keyType: this.searchType,
//            keyWord: this.keyword
//          }
//        })

      },

      /**
       * input 光标获取事件
       */
      onInputFocus () {
        this.isShowSearch = true
      },

      /**
       * input 点击
       */
      onInputClick () {},

      /**
       * 鼠标移入事件
       */
      mouseenter (index) {
        this.currentSelectIndex = index
      },


      /**
       * 隐藏下拉搜索列表框
       * 同时删除上一次的搜索列表
       */
      closeSearchList(){
        this.isShowSearch = false
        this.searchList = []
      },

      /**
       * 键盘事件
       */
      onKeyup (event) {
        const keyCode = event.keyCode
        console.log(keyCode)
        switch (keyCode) {
          // ↑
          case 38:
            this.currentSelectIndex--
            if (this.currentSelectIndex < 0) {
              this.currentSelectIndex = this.searchList.length - 1
            }

            // 填充input输入框
            this.keyword = this.searchList[this.currentSelectIndex].title || ''
            break

          // ↓
          case 40:
            this.currentSelectIndex++
            if (this.currentSelectIndex >= this.searchList.length) {
              this.currentSelectIndex = 0
            }

            // 填充input输入框
            this.keyword = this.searchList[this.currentSelectIndex].title || ''

            break

          // Enter  执行父级的方法
          case 13:

            this.$emit('searchSelect', this.searchList[this.currentSelectIndex])

            // 填充input输入框
            this.keyword = this.searchList[this.currentSelectIndex].title || ''

            this.closeSearchList()
            break
        }


      },

      search () {
        this.$emit('searchSelect', this.searchList[this.currentSelectIndex])
      },

      /**
       * 改变搜索类型
       * @param item
       */
      changeSearchType (item) {
        this.searchType = item.type
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .tag {
    padding: 6px 14px;
    text-align: center;
    border: 1px solid #dedede;
    color: #6e6e6e;
    margin-right: 10px;
    display: inline-block;
    border-radius: 2px;
    max-width: 100px;
  }

  .hot-search {
    color: #9e9e9e;
    padding-top: 3px;

    a {
      margin-right: 15px;
    }
  }

  .search {
    width: 100%;
    font-size: 12px;

    .search-main {
      background-color: $--color-primary;
      padding: 2px 0 2px 2px;
      height: 36px;
      position: relative;
    }

    .results {
      position: absolute;
      top: 100%;
      left: 0;
      width: 85%;
      background: #fff;
      border: 1px solid #dedede;
      border-top: none;
      border-radius: 2px;
      z-index: 21;
      /*display: none;*/
    }

    .search-result {
      a {
        display: block;
        line-height: 32px;
        padding-left: 10px;
        color: #3e3e3e;
        font-size: 14px;

        &:hover, &.active {
          background-color: #f5f5f5;
        }
      }
    }

    .search-history {
      padding: 10px;
      color: #9e9e9e;
      .tag {
        margin-top: 10px;
      }

      .search-tip {
        margin: 0;
      }
    }

    .search-input {
      width: 100%;
      border: none;
      height: 100%;
      padding: 0 90px 0 18px;

      &:focus {
        outline: none;
      }
    }
    .search-btn {
      background-color: $--color-primary;
      color: #fff;
      border: none;
      height: 100%;
      width: 80px;
      font-size: 16px;
      position: absolute;
      right: 0;
      top: 0;
    }

    .search-type {
      height: 28px;

      li {
        float: left;
        line-height: 28px;
        color: #3e3e3e;
        padding: 0 15px;
        cursor: pointer;
      }

      .active {
        background-color: $--color-primary;
        color: #fff;
      }
    }
  }
</style>
