<template>
  <div>
    必須素材
    <div>
      有効化<input type="checkbox" v-model="isEnable" @change="EventEmit" />
    </div>
    <div>value<input type="text" v-model="value" @input="EventEmit" /></div>
    <div>
      IconPath<input type="text" v-model="IconName" @input="EventEmit" />
    </div>
    <div>
      素材のID<input type="text" v-model="ChildDocumentID" @input="EventEmit" />
    </div>
    <div>{{ DocumentReference.path }}</div>
  </div>
</template>

<script>
import firebase from "@/firebase.js";
export default {
  data() {
    return {
      isEnable: false,
      value: 0,
      IconName: "none",
      ChildDocumentID: 0
    };
  },
  props: {
    storeLog: {
      type: Object,
      required: true
    }
  },
  computed: {
    DocumentReference() {
      console.log(this.ChildDocumentID);
      if (this.ChildDocumentID === 0 || this.ChildDocumentID === "") {
        return {
          path: "none"
        };
      }
      const DocumentPath = `CraftingLog/${Number(this.ChildDocumentID)}`;
      const Ref = firebase.firestore().doc(DocumentPath);
      return Ref;
    }
  },
  watch: {
    storeLog: function(LogData) {
      this.isEnable = LogData.isEnable;
      this.value = LogData.value ? LogData.value : 0;
      this.IconName = LogData.image;
      this.ChildDocumentID = LogData.ChildDocument.id ? LogData.value : 0;
    }
  },
  methods: {
    EventEmit() {
      if (!this.isEnable) {
        return this.$emit("change", {
          isEnable: false
        });
      }

      if (this.value <= 0) {
        return this.$emit("change", {
          isEnable: false
        });
      }

      if (this.ChildDocumentID === 0 || this.ChildDocumentID === "") {
        return this.$emit("change", {
          isEnable: false
        });
      }

      const DocumentPath = `CraftingLog/${Number(this.ChildDocumentID)}`;
      const DocRef = firebase.firestore().doc(DocumentPath);

      return this.$emit("change", {
        isEnable: this.isEnable,
        value: this.value,
        Icon: this.IconName,
        ChildDocument: DocRef
      });
    }
  }
};
</script>

<style></style>
