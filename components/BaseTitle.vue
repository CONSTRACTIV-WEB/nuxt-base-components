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
  const styles = theme.title ? theme.title : {
    default: 'font-primary text-bold text-xl',
  };
  const tc = tv(styles);
</script>
