<template>
  <layout>
    <div class="asp-case-management">
      <div class="top"><span>我的位置：</span>案例展示管理</div>
      <div class="content">
        <el-select v-model="value" placeholder="请选择">
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
            prop="name"
            width="310"
            label="案例名字">
          </el-table-column>
          <el-table-column
            prop="department_id"
            width="310"
            label="所属分类">
            <template slot-scope="scope">
              <div>
                {{scope.row.department_id===1&&'正颌外科'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="file_name"
            width="310"
            label="上传文档">
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
      tableData: [{path: '../v.png', name: '辅助设计', department_id: 1, file_name: 'abcd.pdf'},
        {path: '../v.png', name: '辅助设计', department_id: 1, file_name: 'abc.pdf'}
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
.asp-case-management{
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