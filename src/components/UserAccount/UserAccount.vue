<template>
 <div class="account">
   <p class="account__status">{{user.status}}</p>
   <div class="account__status-description">i</div>
   <div class="account__tooltip">
     <div class="account__tooltip-item">
       <div class="mark"></div>
       <div class="text">completely activated</div>
     </div>
     <div class="account__tooltip-item">
       <div class="mark"></div>
       <div class="text">completely inactivated</div>
     </div>
     <div class="account__tooltip-item">
       <div class="mark"></div>
       <div class="text">account waits for receiving all needed information</div>
     </div>
   </div>
   <div class="account__change-status-button" v-if="isAdmin">
     <div class="account__slider"></div>
   </div>
 </div>
</template>

<script src="./UserAccount.js">
</script>

<style scoped src="./UserAccount.scss" lang="scss">
</style>
