<template>
  <layout>
    <div class="news-management">
      <div class="top"><span>我的位置：</span>帮助中心管理</div>
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
            prop="title"
            label="标题"
            width="610">
          </el-table-column>
          <el-table-column
            width="310"
            label="所属分类">
            <template slot-scope="scope">
              <div>
                {{scope.row.faq_classify===1&&'常见问题'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            width="280"
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary">编辑</el-button>
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
      tableData: [{title: '标题1', faq_classify: 1},
        {title: '标题2', faq_classify: 1}
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