<template>
  <layout>
    <div class="carousel-management">
      <div class="top"><span>我的位置：</span>轮播图管理</div>
      <div class="content">
        <el-table
          :data="tableData"
          stripe
          border style="width:100%;">
          <el-table-column
            label="序号"
            width="80">
            <template slot-scope="scope">
              <div>
                {{scope.$index + 1}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="path"
            label="图片"
            width="409">
            <template slot-scope="scope">
              <div>
                <img :src="scope.row.path" style="width:288px;height: 120px;margin:3px 48px;">
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            width="230"
            label="名字">
          </el-table-column>
          <el-table-column
            prop="linkUrl"
            width="490"
            label="链接">
          </el-table-column>
          <el-table-column
            width="280"
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary">编辑</el-button>
              <el-button type="success" v-if="scope.row.status">下架</el-button>
              <el-button type="success" v-else>上架</el-button>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-button type="primary" style="margin:20px;">添加</el-button>
    </div>
  </layout>
</template>

<script>
import layout from '../../layouts/backend-layout.vue'
export default {
  name: 'carousel',
  data () {
    return {
      tableData: [{path: '../v.png', name: '广告位置1', linkUrl: 'www.baidu.com', status: 1},
        {path: '../v.png', name: '广告位置1', linkUrl: 'www.baidu.com', status: 0}
      ]
    }
  },
  // async asyncData () {
  //   let { data } = await axios.get('/api/users')
  //   return { users: data }
  // },
  components: {
    layout
  }
}
</script>

<style lang="less" scoped>
.carousel-management{
  .top{
    padding:24px 0px 10px 50px;
    color:#383856;
    font-size: 14px;
    span{
      color:#999;
    }
  }
}
</style>