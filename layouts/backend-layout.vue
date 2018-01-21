<template>
  <div class="layout-wrapper">
    <div class="layout-nav">
      <div class="logo"></div>
      <div class="nav">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#383856"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>录入管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">轮播图列表</el-menu-item>
              <el-menu-item index="1-2">asp案例列表</el-menu-item>
              <el-menu-item index="1-3">新闻列表</el-menu-item>
              <el-menu-item index="1-4">帮助列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">留言管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">账户管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="layout-content" style="width: calc(100% - 300px);">
      <div class="content-top"></div>
      <div class="content-inner"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backend-layout',
  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.layout-wrapper{
  height:100vh;
  .layout-nav{
    height:100vh;
    width: 300px;
    float: left;
    .logo{
      width: 299px;
      height: 78px;
      background-color: #383856;
    }
    .nav{
      ul{height:100vh;}
    }
  }
  .layout-content{
    float: left;
    height:100vh;
    .content-top{
      height: 78px;
      background-color: #fff;
    }
    .content-inner{
      height:100vh;
      background-color: #f5f5f5;
    }
  }
}

</style>