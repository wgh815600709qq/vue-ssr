<template>
  <layout>
    <div class="news-management">
      <div class="top"><span>我的位置：</span>新闻动态管理</div>
      <div class="content">
        <el-select v-model="value" placeholder="选择分类搜索">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
            label="展示图片"
            width="310">
            <template slot-scope="scope">
              <div>
                <img :src="scope.row.path" style="width:190px;height: 120px;margin:3px 48px;">
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            width="310"
            label="新闻标题">
          </el-table-column>
          <el-table-column
            prop="department_id"
            width="310"
            label="所属分类">
            <template slot-scope="scope">
              <div>
                {{scope.row.news_classify===1&&'公司动态'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            width="280"
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary">编辑</el-button>
              <el-button type="success" v-if="scope.row.is_top">置顶</el-button>
              <el-button type="success" v-else>取消置顶</el-button>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        <el-button type="primary" style="margin:20px;">管理分类</el-button>
        <el-button type="primary" style="margin:20px;">添加</el-button>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </layout>

</template>

<script>
import layout from '../../layouts/backend-layout.vue'
export default {
  name: 'asp-case',
  data () {
    return {
      tableData: [{path: '../v.png', title: '标题1', news_classify: 1, is_top: 1},
        {path: '../v.png', title: '标题2', news_classify: 1, is_top: 0}
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  components: {
    layout
  }
}
</script>

<style lang="less" scoped>
.news-management{
  .top{
    padding:24px 0px 10px 50px;
    color:#383856;
    font-size: 14px;
    span{
      color:#999;
    }
  }
  .footer{
    display: flex;
    align-items: center;
  }
}
</style>