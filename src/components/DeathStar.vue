<template>
    <div class="vader-container">
        <h1>Death Star</h1>
        <img src="../assets/img/DeathStar_banner.jpg" alt="Death Star">
        <div class="more-info">
            <p>The Death Star is a massive space station and superweapon featured in the Star Wars universe. Created by the Galactic Empire, it has the capability to destroy entire planets with its powerful superlaser. The first Death Star appears in Episode IV: A New Hope and is destroyed by the Rebel Alliance during the Battle of Yavin. A second, larger Death Star is featured in Episode VI: Return of the Jedi, which is also destroyed, marking a significant victory for the Rebels. Its design symbolizes the Empire's oppressive control and its reliance on fear to maintain power.</p>
            <ul>
                <li>Name: {{ name }}</li>
                <li>Model: {{ model }}</li>
                <li>manufacturer: {{ manufacturer }}</li>
                <li>Cost in credits: {{ costInCredits }}</li>
                <li>Landing legs: {{ landingLegs }}</li>
                <li>Length: {{ length }}</li>
                <li>Diameter: {{ diameter }}</li>
                <li>Max atmosphering speed: {{ maxAtmospheringSpeed }}</li>
                <li>Crew: {{ crew }}</li>
                <li>Passengers: {{ passengers }}</li>
                <li>Cargo capacity: {{ cargoCapacity }}</li>
                <li>Starship class: {{ starshipClass }}</li>
                <li>Pilots: {{ pilots }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "DeathStar",
    data() {
        return {
            name: null,
            model: null,
            manufacturer: null,
            costInCredits: null,
            length: null,
            diameter: null,
            maxAtmospheringSpeed: null,
            crew: null,
            passengers: null,
            cargoCapacity: null,
            starshipClass: null,
        }
    },
    methods: {
        getPerson() {
            fetch('https://swapi.dev/api/starships/9/')
                .then(response => response.json())
                .then(data => {
                    this.name = data.name;
                    this.model = data.model;
                    this.manufacturer = data.manufacturer;
                    this.costInCredits = data.cost_in_credits;
                    this.length = data.length;
                    this.diameter = data.diameter;
                    this.maxAtmospheringSpeed = data.max_atmosphering_speed;
                    this.crew = data.crew;
                    this.passengers = data.passengers;
                    this.cargoCapacity = data.cargo_capacity;
                    this.starshipClass = data.starship_class;
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
    .vader-container {
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