<template>
  <button
    @click="onClick()"
    v-show="btnVisible"
    :style="{
      'background-color': bgColor,
      color: textColor,
      border: '1px solid ' + borderColor,
    }"
    class="btn"
    :data-testid="btnText"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnText: String,
    btnVisible: Boolean,
    bgColor: String,
    textColor: String,
    borderColor: String,
    methodName: String,
  },
  methods: {
    onClick() {
      this.$emit(this.methodName)
    },
  },
}
</script>

<style>
.btn {
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  width: 186px;
  height: 48px;
  border: none;
  border-radius: 4px;
  font-family: 'Nunito Sans', sans-serif;
}
</style>
>
