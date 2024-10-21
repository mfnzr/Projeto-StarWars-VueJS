<template>
    <div class="chewie-container">
        <h1>Chewbacca</h1>
        <img src="../assets/img/Chewbacca_banner.jpeg" alt="Chewbacca">
        <div class="more-info">
            <p>Chewbacca is a fictional character in the Star Wars franchise. He is the protagonist of the original Star Wars trilogy, and the first Star Wars film.</p>
            <ul>
                <li>Height: {{ height }}</li>
                <li>Mass: {{ mass }}</li>
                <li>Hair color: {{ hairColor }}</li>
                <li>Skin color: {{ skinColor }}</li>
                <li>Eye color: {{ eyeColor }}</li>
                <li>Birthday year: {{ birthYear }}</li>
                <li>Gender: {{ gender }}</li>
                <li>Name: {{ name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Chewbacca",
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
            fetch('https://swapi.dev/api/people/13/')
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
    .chewie-container { 
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

