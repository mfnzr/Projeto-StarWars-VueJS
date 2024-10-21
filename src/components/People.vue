<template>
    <div id="people-container">
        <div class="people-card">
            <img src="../assets/img/Luke_Skywalker.jpg" alt="Luke Skywalker">
            <div class="card-description">
                <router-link to="/luke">
                <button class="people-info more-info">More info</button>
                </router-link>
            </div>
        </div>
        
        <div class="people-card">
            <img src="../assets/img/Leia_Organa.jpg" alt="Leia Organa">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/leia">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/Han_Solo.jpg" alt="Han Solo">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/hansolo">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/Chewbacca.jpg" alt="Chewbacca">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/chewbacca">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/YOda.jpg" alt="Yoda">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/yoda">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/Obi_Wan_Kenobi.jpg" alt="Obi-Wan Kenobi">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/kenobi">
                <button class="people-info" @click="getPeople">More info</button>
            </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/Darth_Vader.jpg" alt="Darth Vader">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/darthvader">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/R2D2.jpg" alt="R2-D2">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/r2d2">
                <button class="people-info" @click="getPeople">More info</button>
                </router-link>
            </div>
        </div>

        <div class="people-card">
            <img src="../assets/img/C-3PO.jpg" alt="C-3PO">
            <div class="card-description">
                <p class="people-name"></p>
                <router-link to="/c3po">
                <button class="people-info" @click="getPeople">More info</button>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "People",
    
}
</script>

<style scoped>
    #people-container {
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

    .people-card {
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