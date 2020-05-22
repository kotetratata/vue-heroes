<template>
 <div class="hero-card">
   <p class="hero-card__name">
     {{getSelectedUser.name}}
     <br>
     {{getSelectedUser.login}}
   </p>
   <div class="tab-container">
     <p class="tab-container__item"
        v-for="(item,index) in userTabs"
        :key="index"
        @click="changeTab(index)">
       {{item.title}}
     </p>
   </div>
   <h2>{{currentTab}}</h2>
   <keep-alive>
     <component :is="currentTab" :user="getSelectedUser"></component>
   </keep-alive>
 </div>
</template>

<script src="./User.js">
</script>

<style scoped src="./User.scss" lang="scss">
</style>
