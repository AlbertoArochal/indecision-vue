<template>
    <div>
        <div class="bg-dark">
            <img src="https://via.placeholder.com/250" alt="bg" />
            <h1>Indecision</h1>
        </div>
        <div class="indecision__container">
            <input type="text" placeholder="Hazme una pregunta" />
            <p>Recuerda terminar con un signo de interrogacion</p>
        </div>
        <div>
            <h2>Sere millonario?</h2>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {},
    name: "Indecision-vue",
    data() {
        return "Indecision App";
    },
};
</script>
<style>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision__container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>
