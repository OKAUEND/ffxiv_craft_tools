<template>
  <article class="Recipewarapper">
    <section class="Recipe-container">
      <section class="Expansion"></section>
      <section class="ChoiceDetail">
        <div class="job filter-container">
          <h2>CLASS</h2>
          <categories-list
            v-for="(item, key) in CrafterJob"
            v-bind:key="key"
            v-bind:category="item"
            v-bind:typecode="'job'"
            v-bind:value="SelectedJob"
            v-on:change="updateJob"
          ></categories-list>
        </div>
        <div class="level filter-container">
          <h2>LEVEL</h2>
          <categories-list
            v-for="(item, key) in Levels"
            v-bind:key="key"
            v-bind:category="item"
            v-bind:typecode="`Level`"
            v-bind:value="SelectedLevelband"
            v-on:change="updateLevelband"
          ></categories-list>
        </div>
      </section>
    </section>
    <section class="RecipeLists"></section>
  </article>
</template>

<script>
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";
import { Icons, LevelArray } from "@/testData.js";
export default {
  name: "Oraganisms_CraftRecipe",
  components: {
    CategoriesList
  },
  data() {
    return {
      CrafterJobList: [],
      LevelList: [],
      SelectJob: {},
      SelectLevelband: {}
};
  },
  created() {
    this.CrafterJob = Icons;
    this.Levels = LevelArray;
  },
  computed: {
    CrafterJob: {
      set(value) {
        this.CrafterJobList = value;
      },
      get() {
        return this.CrafterJobList;
      }
    },
    Levels: {
      set(value) {
        this.LevelList = value;
      },
      get() {
        return this.LevelList;
      }
    },
    SelectedJob: {
      set(value) {
        this.SelectJob = value;
      },
      get() {
        return this.isExistsData(this.SelectJob.name);
      }
    },
    SelectedLevelband: {
      set(value) {
        this.SelectLevelband = value;
      },
      get() {
        return this.isExistsData(this.SelectLevelband.name);
      }
}
  },
  methods: {
    updateJob(value) {
      this.SelectedJob = value;
    },
    updateLevelband(value) {
      this.SelectedLevelband = value;
    },
    isExistsData(value) {
      if (value) {
        return value;
      } else {
        return "";
}
}
}
};
</script>

<style lang="scss" scoped>
</style>