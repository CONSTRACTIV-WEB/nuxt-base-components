<template>
  <component :is="tag" :class="tc()">
    <slot />
  </component>
</template>
<script setup>
  import { tv } from 'tailwind-variants'

  const props = defineProps({
    tag: {
      type: String,
      default: 'h2',
    }
  })

  const { theme } = useAppConfig()
  const tc = tv({
    default: 'font-primary text-bold text-xl',
  });
</script>
