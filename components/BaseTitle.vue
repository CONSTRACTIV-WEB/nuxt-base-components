<template>
  <component :is="tag" :class="tc(props.theme)">
    <slot />
  </component>
</template>
<script setup>
  import { tv } from 'tailwind-variants'

  const props = defineProps({
    tag: {
      type: String,
      default: 'h2',
    },
    theme: {
      type: String,
    }
  })

  const { theme } = useAppConfig()
  const tc = tv(theme?.title ? theme.title : {
    base: 'font-primary text-bold text-xl',
  });
</script>
