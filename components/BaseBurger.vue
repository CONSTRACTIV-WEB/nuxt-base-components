<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    class="relative w-12 h-12 bg-accent-500 flex-col gap-[0.4rem] items-center justify-center z-50 flex"
    @click="isOpen = !isOpen"
  >
    <span
      :class="`duration-300 ease-in-out transition-all ${
        props.isOpen === true
          ? 'w-[2.4rem] h-[3px] block bg-white absolute rotate-45'
          : 'w-[2.4rem] h-[3px] block bg-white'
      }`"
    ></span>
    <span
      :class="`duration-300 ease-in-out transition-all ${
        props.isOpen === true
          ? 'opacity-0'
          : 'w-[2.4rem] h-[3px] block bg-white opacity-100'
      }`"
    ></span>
    <span
      :class="`duration-300 ease-in-out transition-all ${
        props.isOpen === true
          ? 'w-[2.4rem] h-[3px] block bg-white absolute -rotate-45'
          : 'w-[2.4rem] h-[3px] block bg-white'
      }`"
    ></span>
  </button>
</template>

<script setup>

const props = defineProps({
    ariaLabel: {
      type: String,
      default: 'Toggle Menu'
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  })
</script>