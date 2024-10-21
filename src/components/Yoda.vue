<template>
    <div class="yoda-container">
        <h1>Yoda Master</h1>
        <img src="../assets/img/yoda.jpeg" alt="Yoda Master">
        <div class="more-info">
            <p>Yoda Master is a fictional character in the Star Wars franchise. He is the protagonist of the original Star Wars trilogy, and the first Star Wars film.</p>
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
    name: "Yoda",
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
            fetch('https://swapi.dev/api/people/20/')
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
    .yoda-container { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 250px;
    }

    h1 {
        font-family: star-wars-logo;
        color: yellow;
        text-align: center;
    }

    .more-info {
        background-color: yellow;
        color: black;
        padding: 10px;
        border-radius: 10px;
        margin-top: 25px;
        font-size: 25px;
    }
</style>

