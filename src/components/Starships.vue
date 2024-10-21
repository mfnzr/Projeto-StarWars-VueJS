<template>
    <div id="starships-container">
        <div class="starships-card">
            <img src="../assets/img/DeathStar.jpg" alt="Death Star">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/deathstar">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>
        
        <div class="starships-card">
            <img src="../assets/img/StarDestroyer.jpg" alt="Star Destroyer">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/stardestroyer">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/TieAdvancedx1.jpg" alt="TIE Advanced x1">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/tieadvancedx1">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/XWing.jpg" alt="X-wing">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/xwing">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/MillenniumFalcon.jpg" alt="Millennium Falcon">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/millenniumfalcon">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/Slave1.jpg" alt="Slave 1">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/slave1">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>  

        <div class="starships-card">
            <img src="../assets/img/ImperialShuttle.jpg" alt="Imperial Shuttle">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/imperialshuttle">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/YWing.jpg" alt="Y-Wing">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/ywing">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>

        <div class="starships-card">
            <img src="../assets/img/RepublicCruiser.jpg" alt="Republic Cruiser">
            <div class="card-description">
                <div>
                    <p class="people-name"></p>
                    <router-link to="/republiccruiser">
                        <button class="people-info" @click="getPeople">More info</button>
                    </router-link>
                    <button class="people-info more-info">Favorite</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Starships",
    
}
</script>

<style scoped>
    #starships-container {
        max-width: 1280px;
        display: grid;
        grid-template-rows: 400px 400px 400px;
        grid-template-columns: repeat(3, minmax(250px, .25fr));
        gap: 25px;
        margin-top: 50px;
        margin: auto;
        overflow: hidden;
        justify-content: center;
    }

    .starships-card {
        height: 300px;
        border: 5px solid #FFC107;
        border-radius: 10px;

    }

    img {
        width: 100%; 
        height: 100%;
    }

    button {
        background-color: #FFC107;
        border: 5px solid black;
        color: black;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
        font-family: star-wars-logo;
        font-size: 20px;
        text-decoration: none;
    }

    button:hover {
        background-color: white;
        transition: .5s;
        cursor: pointer;
    }

    .card-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>