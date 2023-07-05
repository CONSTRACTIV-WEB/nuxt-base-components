<template>
  <ul :role="role" :aria-label="ariaLabel" :class="menu()">
    <BaseMenuItem
      v-if="props.data"
      v-for="(item, index) in props.data"
      :key="index"
      :to="item.to"
      :theme="props.theme"
    >
      {{ item.text }}
    </BaseMenuItem>
    <slot v-else />
  </ul>
</template>
<script setup>
  import { tv } from 'tailwind-variants'
  import BaseMenuItem from './BaseMenuItem.vue'

  const props = defineProps({
    data: {
      type: Array,
    },
    role: {
      type: String,
      default: 'menu',
    },
    ariaLabel: {
      type: String,
      default: 'Menu',
    },
    theme: {
      type: String,
      default: 'primary',
    }
  })

  const { theme } = useAppConfig()
  const tc = tv(theme?.menu ? theme.menu : {
    base: 'flex flex-row gap-6',
  });
  const { menu } = tc({ theme: props.theme })
</script>