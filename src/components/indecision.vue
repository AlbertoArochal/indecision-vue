<template>
    <div>
        <img :src="image" alt="bg" />
        <div class="bg-dark">
            <h1>Indecision</h1>
            <div class="indecision__container">
                <input
                    type="text"
                    placeholder="Hazme una pregunta"
                    v-model="question"
                />
                <p>Recuerda terminar con un signo de interrogación</p>
            </div>
            <h2>{{ question }}</h2>
            <div v-if="isValidQuestion">
                <p>{{ answer }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {},
    name: "Indecision-vue",
    data() {
        return {
            question: "",
            answer: "",
            image: "",
            isValidQuestion: false,
        };
    },
    watch: {
        question(value: string) {
            this.isValidQuestion = false;
            if (!value.includes("?")) return;
            this.isValidQuestion = true;
            this.getAnswer();
        },
    },
    methods: {
        async getAnswer() {
            this.answer = "Loading...";
            const { answer, image } = await fetch("https://yesno.wtf/api").then(
                (response) => response.json()
            );

            this.answer = answer === "yes" ? "Si" : "No!";
            this.image = image;
        },
    },
};
</script>
