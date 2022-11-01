<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menuLIst"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        @click="menuClick(item.path)"
        v-for="item in item.children"
        :key="item.id"
        :index="'/' + item.path"
      >
        <template #title>
          <el-icon>
            <component :is="iconst" />
          </el-icon>
          <span>{{ item.username }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup>
import { ref } from 'vue'
import { menu } from '@/api/menu'
// 菜单数据
const menuLIst = ref([])
// 初始化渲染列表数据
const initMenuList = async () => {
  const res = await menu()
  menuLIst.value = res.data.users
}
initMenuList()
// 默认的菜单选项
const defaultActive = ref(sessionStorage.getItem('path') || '/user')
// 菜单点击
const menuClick = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
// 图标
const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const iconst = ref('menu')
</script>
<style scoped></style>
