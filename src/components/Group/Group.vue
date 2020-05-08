<template>
  <div class="group">
    <GroupEditor v-if="editor"></GroupEditor>
    <div v-if="!(currentGroup.length)">
      <button @click="activateEditor">Create group</button>
    </div>
    <div class="group__container" v-else>
      <p class="group__title">Here ur group</p>
      <ul class="group__list">
        <li
          v-for="(hero, index) in currentGroup"
          class="group__item"
          :key="index">
          {{hero.name}}
          </li>
      </ul>
      <button @click="activateEditor">Edit group</button>
      <br>
      <button @click="clearGroup">Delete group</button>
    </div>
  </div>
</template>

<script src="./Group.js">
</script>

<style scoped src="./Group.scss" lang="scss">
</style>
