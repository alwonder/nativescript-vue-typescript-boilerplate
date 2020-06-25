<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Label :text="count" col="0" row="0" />
      <Button @tap="increaseCount">Нажми</Button>
      <Button @tap="navigateToMenu">В меню</Button>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';

@Component
export default class App extends Vue {
  msg = 'Hello World';

  count = 0;

  increaseCount() {
    this.count += 1;
  }

  navigateToMenu() {
    // @ts-ignore
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
