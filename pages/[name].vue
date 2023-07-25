<template>
    <div>{{ name }}</div>
</template>
<script setup>

defineI18nRoute({
  paths: {
    de: '/[name]',
  },
});

const name = ref();
const route = useRoute();
name.value = route.params.name;
</script>