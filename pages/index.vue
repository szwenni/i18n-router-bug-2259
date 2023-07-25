<template>
    <div>
        <nuxt-link style="padding: 2rem;" v-for="link in links" :to="localRoute(link.url)">{{ link.name }}</nuxt-link>
    </div>
</template>
<script setup>

const localRoute = useLocaleRoute()

const links = ref();

onMounted(() => {
    links.value = [
    {
        name: "A",
        url: "/A"
    },
    {
        name: "B",
        url: "/B"
    },
    {
        name: "C",
        url: "/C"
    },
    {
        name: "D",
        url: "/D"
    },
    {
        name: "E",
        url: "/E"
    }
];
})

</script>