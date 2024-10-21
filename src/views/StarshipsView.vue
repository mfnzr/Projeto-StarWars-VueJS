<template>
    <div>
        <h1>Starships</h1>
        <Starships />
    </div>
</template>

<script scoped>
import Starships from '@/components/Starships.vue';

export default {
    name: "StarshipView",
    components: {
        Starships
    }
}
</script>

<style scoped>
    h1 {
        font-family: star-wars-logo;
        color: #FFC107;
        text-align: center;
        margin-bottom: 50px;
    }
</style>