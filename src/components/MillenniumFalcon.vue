<template>
    <div class="vader-container">
        <h1>Miellennium Falcon </h1>
        <img src="../assets/img/MillenniumFalcon_banner.jpg" alt="Millennium Falcon">
        <div class="more-info">
            <p>The Millennium Falcon is a legendary starship in the Star Wars universe, piloted by Han Solo and his co-pilot, Chewbacca. Known for its distinctive, disk-shaped design, the Falcon is a heavily modified YT-1300 Corellian freighter. Despite its rugged appearance, it is one of the fastest ships in the galaxy, equipped with powerful weapons, advanced shielding, and a hyperdrive. The Millennium Falcon played a key role in many pivotal events, including the destruction of both Death Stars. Its speed, versatility, and charm make it one of the most iconic ships in Star Wars history.</p>           
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
    name: "MillenniumFalcon",
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
            fetch('https://swapi.dev/api/starships/10/')
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