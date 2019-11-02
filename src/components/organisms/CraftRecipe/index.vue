<template>
  <article class="Recipewarapper">
    <section class="Recipe-container">
      <section class="Expansion"></section>
      <section class="ChoiceDetail">
        <div class="job filter-container"></div>
        <div class="Equippedjob filter-container"></div>
        <div class="level filter-container"></div>
        <div class="Secretbook filter-container"></div>
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
}
.Expansion {
}
.ChoiceDetail {
}

.filter-container {
}
</style>