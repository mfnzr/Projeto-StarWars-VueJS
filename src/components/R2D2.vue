<template>
    <div class="r2d2-container">
        <img src="../assets/img/R2D2_banner.png" alt="R2-D2">
        <div class="more-info">
            <p>R2-D2 is a fictional character in the Star Wars franchise. He is the main protagonist of the original Star Wars trilogy, and the first Star Wars film.</p>
            <p>Name: {{ name }}</p>
            <p>Height: {{ height }}</p>
            <p>Mass: {{ mass }}</p>
            <p>Hair color: {{ hairColor }}</p>
            <p>Skin color: {{ skinColor }}</p>
            <p>Eye color: {{ eyeColor }}</p>
            <p>Birthday year: {{ birthYear }}</p>
            <p>Gender: {{ gender }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "R2D2",
    data() {
        return {
            name: null,
            height: null,
            mass: null,
            hairColor: null,
            skinColor: null,
            eyeColor: null,
            birthYear: null,
            gender: null,
            species: null,
            vehicles: null,
            starships: null,
        }
    },
    methods: {
        getPerson() {
            fetch('https://swapi.dev/api/people/3/')
                .then(response => response.json())
                .then(data => {
                    this.name = data.name;
                    this.height = data.height;
                    this.mass = data.mass;
                    this.hairColor = data.hair_color;
                    this.skinColor = data.skin_color;
                    this.eyeColor = data.eye_color;
                    this.birthYear = data.birth_year;
                    this.gender = data.gender;
                    this.species = data.species;
                    this.vehicles = data.vehicles;
                    this.starships = data.starships;
                })
        }
    },
    mounted() {
        this.getPerson();
    }
}
</script>

<style scoped>

    img {
        width: 100%;
    }
    .r2d2-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 250px;
    }

    h1 {
        font-family: star-wars-logo;
        color: #FFC107;
        text-align: center;
    }

    .more-info {
        background-color: #FFC107;
        color: black;
        padding: 10px;
        border-radius: 10px;
        margin-top: 25px;
        font-size: 25px;
    }
</style>