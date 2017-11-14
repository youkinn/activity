<template>
  <div class="search-item" v-showsearchbtn>
    <label class="label">{{ label }}：</label>

    <div class="lists">
      <div class="style1" :class="{'is-show': isShowMore}" v-show="!isShowMultiple">
        <ul class="clearfix r-lists">
          <li :class="{'active': currentChecks.length === 0 || currentChecks.length === data.length}" @click="addAll()">
            不限
          </li>

          <li @click="add(item)" :class="{'active': currentChecks.includes(item) && data.length > currentChecks.length}"
              v-for="item in data" :key="item.id">{{item.name}}
          </li>
        </ul>
      </div>

      <div class="style2" v-show="isShowMultiple">
        <div>


          <label class="el-checkbox">
            <span class="el-checkbox__input" :class="{' is-checked': checkboxCheckeds.length === data.length}">
              <span class="el-checkbox__inner"></span>
              <input @change="checkAll" type="checkbox" class="el-checkbox__original">
            </span>
            <span class="el-checkbox__label">不限</span>
          </label>

          <label class="el-checkbox" v-for="item in data" :key="item.id">
            <span class="el-checkbox__input" :class="{' is-checked': checkboxCheckeds.includes(item)}">
              <span class="el-checkbox__inner"></span>
              <input @change.stop="toggle(item)" type="checkbox" class="el-checkbox__original">
            </span>
            <span class="el-checkbox__label">{{ item.name }}</span>
          </label>
        </div>

        <div class="text-center">
          <button class="cancel" @click="cancel">取消</button>
          <button class="ok" @click="ok">确定</button>
        </div>
      </div>

    </div>

    <div class="action">
      <div v-show="!isShowMultiple">
        <button @click="showMultiple()" v-if="isMultiple">多选 <i class="icon icon-plus"></i></button>
        <button class="btn-showmore" @click="showMore()" :class="{'is-show': isShowMore}">更多 <i class="icon icon-arrow-down"></i>
        </button>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    props: ['data', 'label', 'isMultiple', 'checks', 'type'],
    data () {
      return {
        isShowMultiple: false,
        isShowMore: false,
        currentChecks: this.checks,
        checkboxCheckeds: [...this.checks]
      }
    },

    methods: {
      showMore () {
        this.isShowMore = !this.isShowMore
      },

      showMultiple () {
        this.isShowMultiple = !this.isShowMultiple
      },

      cancel () {
        this.isShowMultiple = false
      },

      ok () {
        this.isShowMultiple = false
        this.currentChecks = [...this.checkboxCheckeds]
        this.$emit('checkeds', {type: this.type, data: this.currentChecks})
      },

      add (item) {
        if (this.isMultiple) {
          if (!this.currentChecks.includes(item)) {
            this.checks.push(item)
          }
        } else {
          this.currentChecks = [item]
        }

        this.$emit('checkeds', {type: this.type, data: this.currentChecks})
      },

      addAll () {

        this.currentChecks = []
        this.$emit('checkeds', {type: this.type, data: this.currentChecks})
      },

      change (item) {
        console.log(item)
      },

      checkAll () {
        if (this.checkboxCheckeds.length === this.data.length) {
          this.checkboxCheckeds = []
        } else {
          this.checkboxCheckeds = [...this.data]
        }

        debugger
      },

      toggle (item) {
        if (this.checkboxCheckeds.includes(item)) {
          const index = this.checkboxCheckeds.findIndex((item2) => item.name === item2.name)
          this.checkboxCheckeds.splice(index, 1)
        } else {
          this.checkboxCheckeds.push(item)
        }

      }
    },
    computed: {
      checkList: {
        get () {
          if (this.currentChecks.length < 1) {
            return ['不限']
          }
          return this.currentChecks.map((item) => item.name)
        },

        set (val) {
          const last = val[val.length - 1]
          if (last === '不限') {
            this.currentChecks = this.data
          } else {
            this.currentChecks = val.map((item) => {
              return this.data.find((item2) => item2.name === item)
            })
          }

          this.$emit('checkeds', {type: this.type, data: this.currentChecks})
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .search-item {
    font-size: 14px;
    font-family: "MicrosoftYaHei";
    overflow: hidden;

    padding: 15px 0 15px 24px;
    display: table;
    width: 100%;
    table-layout: fixed;

    + .search-item {
      border-top: 1px solid #dedede;
    }

    .label {
      display: table-cell;
      width: 60px;
      color: #9e9e9e;
    }

    .lists {
      display: table-cell;

      .style1 {
        height: 30px;
        overflow: hidden;

        &.is-show {
          height: auto;


        }
      }

      li {
        margin-right: 30px;
        color: #3e3e3e;
        cursor: pointer;
        line-height: 30px;
        display: inline-block;
      }

      .active {
        color: #f64f38;
      }
    }

    .style2 {

    }

    .action {
      width: 190px;
      display: table-cell;
      button {
        padding: 6px 12px;
        border: 1px solid #dedede;
        color: #6e6e6e;
        background: #fff;
        font-size: 14px;
        margin-right: 10px;
        border-radius: 4px;
        cursor: pointer;
      }

      .btn-showmore {
        display: none;
      }

      .icon-arrow-down {
        transition: all .3s;
      }

      .is-show {
        .icon-arrow-down{
          transform: rotate(180deg);
        }
      }

      .icon {
        margin-left: 5px;
      }
    }
  }

  .cancel {
    width: 68px;
    text-align: center;
    line-height: 30px;
    color: #f64f38;
    border: 1px solid #f64f38;
    background: #fff;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
  }

  .ok {
    width: 68px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #f64f38;
    background: #f64f38;
    cursor: pointer;
  }
</style>
