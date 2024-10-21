<template>
    <div>
        <div id="nav">
            <router-link to="/" class="links">Home</router-link>
            <router-link to="/people" class="links">Characters</router-link>
            <router-link to="/starships" class="links">Starships</router-link>
            <router-link to="/favorites" class="links">Favorites</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    
}
</script>

<style scoped>
@font-face {
    font-family: star-wars-logo;
    src: url(../assets/fonts/star_jedi/stjelogo/Strjmono.ttf);
}
@font-face {
    font-family: star-wars-transparent;
    src: url(../assets/fonts/star_jedi/starjedi/Starjhol.ttf);
}
    #nav {
        display: flex;
        justify-content: space-evenly;
        margin: 10px auto;
        padding: 10px;
        font-family: star-wars-transparent;
        background-color: black;
    }
    
    .links {
        font-size: 32px;
        text-decoration: none;
        color: #FFC107;
        cursor: pointer
    }

    .links:hover {
        font-family: star-wars-logo;
        font-size: 38px;
        transition: .5s;
    }
</style>