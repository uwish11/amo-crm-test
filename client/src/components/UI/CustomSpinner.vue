<template>
  <div class="custom-spinner"></div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.custom-spinner {
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #1f6ed5 transparent #1f6ed5 transparent;
    animation: spine 1.2s linear infinite;
  }
}
@keyframes spine {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
