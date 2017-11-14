<template>
    <div>
        <div class="jm-content margin-top-20">
            <div class="jm-coal-content-warp row clearfix">
                <div class="helpleft clearfix">
                    <div class="jm-coal-left-con">
                        <h3>
                            <span>常见问题分类</span>
                        </h3>
                        <div class="jm-coal-left-body">
                            <div class="jm-coal-left-item" v-for="(item,index) in listnav" :key="index">
                                <div class="jm-coal-left-item-header" @click.prevent="goclick(item.categoryCode)">
                                <span class="font-size-14 color-font" v-model="position"
                                      :class="{active:position == item.categoryCode}">{{item.name}}</span>
                                </div>
                                <ul class="" v-show=" position == item.categoryCode">
                                    <li v-for="(question,index2) in questionList" :key="index2"  :class="{active:positionItem == question.articleContentId}">
                                        <nuxt-link :to="{path:`/help/${question.articleContentId}`,query:{categoryCode: item.categoryCode}}" :title="question.name">{{question.name}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="helpright clearfix">
                    <div class="jm-coal-center-con" v-html="questionDetail">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import platform from '~/config/platform'
  import adress from '~/config/index'
  export default{
    data () {
      return {
        platform: platform  //链接
      }
    },
    async asyncData({ store, params, query }){
      try {
        let position = query.categoryCode;
        let positionItem = params.id;
        let platformCode = store.state.common.platformCode;
        const [listnav, questionList, questionDetail] = await Promise.all([
          axios.get(`/footer/findCategorySub`, {params: {articleCategoryId: "000002"}}).then(data => data.data.data),
          axios.get(`/footer/listArtcle`, {params: {categoryCode: position}}).then(data => data.data.data),
          axios.get(`/footer/getArtcle`, {params: {articleContentId: positionItem}}).then(data => data.data.data.content)
        ])

        return {
          listnav: listnav || [],
          questionList: questionList || [],
          questionDetail: questionDetail || [],
          position,
          positionItem
        }
      }catch(e){
        console.log(e)
      }

    },
    mounted ( ) {
    },
    computed: {
    },
    methods:{
      //跳转至帮助中心
      goHelp (categoryCode, articleContentId) {
        var url="https://www.jumore.com/help/"+categoryCode+"/"+articleContentId;
        window.open(url)
      },

      //获取文章分类
      goclick  (value) {
        this.questionList=[]; //先清空
        if (this.position == value) {
          this.position = -1;
          return;
        }
        this.position = value;
        axios.get(`/api/${this.$store.state.common.platformCode}/footer/listArtcle`, {params:{categoryCode: value}}).then(({data}) =>{
          console.log(data)
          if(data.data!=undefined){
            this.questionList=data.data;
          }
        })

      }


    }

  }
</script>

<style lang="scss" scoped>
.jm-content{
    width: 1190px;
    margin: 20px auto;
}
.helpleft{ width: 25%;}
.helpright{ width: 75%;}
.helpleft,.helpright{ float:left;}
.jm-coal-left-con {
    background: #FFFFFF;
    margin-right: 20px;
}

.jm-coal-left-con h3 {
    padding-left: 25px;
    height: 43px;
    background: #d32f2f;
    line-height: 43px;
    color: #fff;
    font-size: 14px;
}
.jm-coal-left-body {
    border: 1px solid #e5e5e5;
}
.helpi{ 
    margin-right:5px;
    vertical-align: -2px;
}


.jm-coal-left-item {
}
.jm-coal-left-item ul li {
    line-height: 34px;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 23px;
    cursor: pointer;
}
.jm-coal-left-item ul li.active{
     color:#d32f2f
}

.jm-coal-left-item-header {
    line-height: 50px;
    padding-left: 13px;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
}



.jm-coal-right-con header {
    height: 41px;
    line-height: 41px;
    padding-left: 17px;
    color: #666666;
    font-size: 14px;
    border-bottom: 1px solid #e5e5e5;
}

.jm-coal-right-con ul {
    line-height: 30px;
    font-size: 12px;
    color: #999999;
    background: #FFFFFF;
    padding: 10px 13px 10px 17px;
}

.jm-coal-right-relation {
    background: #FFFFFF;
    border: 1px solid #e5e5e5;
    margin-left: 20px;
    margin-top: 20px;
}

.jm-coal-center-con {
    background: #FFFFFF;
    padding: 20px;
    min-height: 500px;
    word-break: break-all;
    border: 1px solid #e5e5e5;
}
</style>
