<template>
    <div>
        <h1>Characters</h1>
        <People />
    </div>
</template>

<script scoped>
import People from '@/components/People.vue';

export default {
    name: "PeopleView",
    components: {
        People
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