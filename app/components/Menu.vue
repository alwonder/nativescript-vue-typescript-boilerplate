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
import { Action, Getter, namespace } from 'vuex-class';

@Component
export default class Menu extends Vue {
}
</script>

<style scoped lang="scss">
</style>
