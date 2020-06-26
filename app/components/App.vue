<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Label :text="count" col="0" row="0" />
      <Button @tap="increaseCount">Increment count</Button>
      <Button @tap="navigateToMenu">Next page</Button>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { INCREMENT_COUNT } from '@/store/modules/counter';
import Menu from './Menu.vue';

const counterModule = namespace('counter');

@Component
export default class App extends Vue {
  msg = 'Hello World';

  @counterModule.State
  readonly count: number;

  @counterModule.Mutation
  [INCREMENT_COUNT]: () => void;

  increaseCount() {
    this[INCREMENT_COUNT]();
  }

  navigateToMenu() {
    this.$navigateTo(Menu, {
      transition: {
        name: 'fade',
        duration: 200,
      },
    });
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
