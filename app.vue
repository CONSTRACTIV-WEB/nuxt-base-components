<template>
  <div class="bg-gray-600 h-screen text-white text-[16px]">
    <BaseContainer class="p-12">
      <BaseButton>Hello</BaseButton>
      <BasePhoneLink phoneNumber="0176/465 76 091" />
      <BaseMailLink mail="test@constractiv.de" />
      <BaseMenu :data="test" theme="primary" />
      <BaseBadgePing label="1" />
      <BaseBurger />
    </BaseContainer>
  </div>
</template>

<script setup>
const test = [
  {text: 'Test 1', to: '#hierher'},
  {text: 'Test 2', to: '#hierher'},
  {text: 'Test 3', to: '#hierher'},
  {text: 'Test 4', to: '#hierher'},
]
</script>