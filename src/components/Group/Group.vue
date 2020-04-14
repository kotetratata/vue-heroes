<template>
  <div class="group">
     <GroupEditor v-if="editor"></GroupEditor>
    <div v-if="!(currentGroup.length)">
      <button @click="activateEditor">Создать группу</button>
    </div>
    <div class="group__list" v-else>
      <p>Here ur group</p>
      <ul>
        <li
          v-for="(hero, index) in currentGroup"
          :key="index">
          {{hero.name}}
          </li>
      </ul>
      <button @click="activateEditor">Редактировать группу</button>
      <br>
      <button @click="clearGroup">Удалить группу</button>
    </div>
  </div>
</template>

<script src="./Group.js">
</script>

<style scoped src="./Group.scss" lang="scss">
</style>
