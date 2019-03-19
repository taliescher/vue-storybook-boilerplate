<template>
  <button class="button" :style="{color: color, borderColor: color}" @click="handleClick" @dblclick="handleDblclick" :class="{rounded: rounded}"><slot></slot>!</button>
</template>

<script>
  export default {
    props: {
      rounded: Boolean,
      handleClick: {
        default: () => () => null
      },
      handleDblclick: {
        default: () => () => null
      },
      color: {
        default: '#42b983'
      }
    }
  }
</script>

<style scoped>
@import './Button.scss';
</style>
