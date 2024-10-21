<template>
    <div class="vader-container">
        <h1>Slave um    </h1>
        <img src="../assets/img/Slave1_banner.jpg" alt="Slave 1">
        <div class="more-info">
            <p>Slave 1 is the iconic starship of the bounty hunter Boba Fett in the Star Wars universe. Originally owned by his father, Jango Fett, the ship is a modified Firespray-31-class patrol craft. It has a unique vertical design when flying, which distinguishes it from other ships. </p>
            <p>Name: {{ name }}</p>
            <p>Model: {{ model }}</p>
            <p>manufacturer: {{ manufacturer }}</p>
            <p>Cost in credits: {{ costInCredits }}</p>
            <p>Landing legs: {{ landingLegs }}</p>
            <p>Length: {{ length }}</p>
            <p>Diameter: {{ diameter }}</p>
            <p>Max atmosphering speed: {{ maxAtmospheringSpeed }}</p>
            <p>Crew: {{ crew }}</p>
            <p>Passengers: {{ passengers }}</p>
            <p>Cargo capacity: {{ cargoCapacity }}</p>
            <p>Starship class: {{ starshipClass }}</p>
            <p>Pilots: {{ pilots }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slave1",
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
            fetch('https://swapi.dev/api/starships/21/')
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