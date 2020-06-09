<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <Label :text="count" col="0" row="0" />
      <Button @tap="increaseCount">Нажми</Button>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Hello World!',
        count: 0,
      }
    },
    methods: {
      increaseCount() {
        this.count++;
      }
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
