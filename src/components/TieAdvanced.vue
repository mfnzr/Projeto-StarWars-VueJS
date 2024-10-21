<template>
    <div class="vader-container">
        <h1>Tie Advanced x</h1>
        <img src="../assets/img/TieAdvanced_banner.jpg" alt="Tie Advanced x1">
        <div class="more-info">
            <p>The TIE Advanced x1 is a specialized starfighter in the Star Wars universe, famously piloted by Darth Vader during the Battle of Yavin in Episode IV: A New Hope. Unlike standard TIE Fighters, the TIE Advanced x1 features advanced shields, hyperdrive capabilities, and a more durable frame</p>
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
    name: "TieAdvanced",
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
            fetch('https://swapi.dev/api/starships/13/')
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