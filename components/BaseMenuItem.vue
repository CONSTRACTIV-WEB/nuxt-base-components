<template>
  <li :role="props.role">
    <NuxtLink :class="menuItem()" :to="props.to" :activeClass="props.activeClass"
      ><slot
    /></NuxtLink>
  </li>
</template>
<script setup>
  import { tv } from 'tailwind-variants'

  const props = defineProps({
    to: {
      type: [Object, String],
      required: true,
    },
    theme: {
      type: String,
    },
    activeClass: {
      type: [String, Promise],
    },
    role: {
      type: String,
      default: 'menuitem',
    },
  })

  const { theme } = useAppConfig()
  const tc = tv(theme?.menu ? theme.menu : {
    base: 'hover:underline',
  });
  const { menuItem } = tc({ theme: props.theme })
</script>