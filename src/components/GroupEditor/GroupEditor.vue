<template>
  <div class="editor">
    <div class="editor__menu">
      <h2>menu</h2>
      <div class="editor__inner-cont">
        <ul class="editor__selected-heroes">
          <li
            v-for="(hero, index) in getGroup"
            :key="index"
            @click="unSelectHero(hero, index)">
            {{hero.name}}
          </li>
        </ul>
        <ul class="editor__unselected-heroes">
          <li
            v-for="(hero, index) in getUnselected"
            :key="index"
            @click="selectHero(hero, index)">
            {{hero.name}}
          </li>
        </ul>
      </div>
      <button @click="deActivateEditor">Сохранить</button>
    </div>
  </div>
</template>

<script src="./GroupEditor.js">
</script>

<style scoped src="./GroupEditor.scss" lang="scss">
</style>
