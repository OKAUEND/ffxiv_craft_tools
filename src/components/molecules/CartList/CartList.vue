<template>
  <div class="CartList">
    <!-- v-forでループ -->
    <div class="CartList__Item">
      <div class="CartList__Title">
        <atom-image :path="'static/CRAFTER/Alchemist.png'"></atom-image>
        <atom-span>リグナムバイタ・スピニングホイール</atom-span>
        <atom-image-small
          :path="'static/CRAFTER/Alchemist.png'"
        ></atom-image-small>
      </div>
      <div class="CartList__Body">
        <accordion-samll>
          <template v-slot:Text>
            <atom-span-small>素材</atom-span-small>
          </template>
          <template v-slot:Child>
            <!-- v-forでループ -->
            <div class="CartList__ChildList">
              <div class="CartList__ChildItem">
                <atom-image-small
                  :path="'static/CRAFTER/Alchemist.png'"
                ></atom-image-small>
                :
                <atom-span>10</atom-span>
              </div>
            </div>
            <!--  -->
          </template>
        </accordion-samll>
      </div>
    </div>
    <!-- ループの終わり -->
  </div>
</template>

<script>
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
import AtomImageSmall from "@/components/atoms/Image/ImageSmall.vue";
import AtomSpan from "@/components/atoms/Text/Span.vue";
import AtomSpanSmall from "@/components/atoms/Text/SpanSmall.vue";
import AccordionSamll from "@/components/molecules/Accordion/AccordionSmall.vue";
export default {
  name: "CartList",
  components: {
    AtomSpan,
    AtomSpanSmall,
    AtomImage,
    AtomImageSmall,
    AccordionSamll
  }
};
</script>

<style lang="scss" scoped>
.CartList {
  padding-left: 4px;
  padding-right: 6px;

  &__Item {
    padding: 5px;
    display: flex;
    flex-direction: column;
    color: $palette_white;
    background-color: $Palette_black;
    margin-top: 5px;
    border-radius: 5px;
  }

  &__Title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > :first-child {
      margin-right: 4px;
    }

    & > :nth-child(2) {
      max-width: 160px;
    }
  }

  &__Body {
    margin-top: 5px;
    border-radius: 5px;
  }

  &__ChildList {
    margin-top: 5px;
    border-radius: 5px;
  }

  &__ChildItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 15px;
    margin-bottom: 5px;
    & > :first-child {
      margin-right: auto;
    }
  }
}
</style>
