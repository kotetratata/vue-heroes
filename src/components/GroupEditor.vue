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

<script>
import { mapActions, mapGetters } from 'vuex';
import heroes from '@/assets/heroes-list';

export default {
  name: 'GroupEditor',
  data() {
    return {
      heroes,
    };
  },
  computed: {
    ...mapGetters('Dashboard', [
      'getGroup',
      'getUnselected',
    ]),
  },
  methods: {
    ...mapActions('Dashboard', [
      'addHeroToGroup',
      'removeHeroFromGroup',
      'addToUnselected',
      'removeFromUnselected',
      'deActivateEditor',
    ]),
    selectHero(hero, index) {
      this.addHeroToGroup(hero);
      this.removeFromUnselected(index);
    },
    unSelectHero(hero, index) {
      this.addToUnselected(hero);
      this.removeHeroFromGroup(index);
    },
  },
};
</script>

<style scoped lang="scss">
  .editor{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(60,63,65,.5);
    position: absolute;
    top:0;
    left:0;

    &__menu{
      width: 50vw;
      height: 50vh;
      margin: 25vh auto;
      background-color: white;
      border: 10px dashed black;
    }

    &__inner-cont{
      display: flex;
      justify-content: space-around;
    }

    &__selected-heroes{
      li{
        display: block;
        padding: 5px;
        border:1px solid black;

        &:hover{
          background-color: grey;
        }
      }
    }
    &__unselected-heroes{
      li{
        display: block;
        padding: 5px;
        border: 1px solid red;

        &:hover{
          background-color: orange;
        }
      }
    }
  }
</style>
