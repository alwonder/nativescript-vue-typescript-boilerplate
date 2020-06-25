<template>
  <Page>
    <ActionBar title="WelcsdfsfdsftiveScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  mounted() {
    console.log(TNS_ENV);
  }
}
</script>

<style scoped lang="scss">
</style>
