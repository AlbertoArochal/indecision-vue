<template>
    <h2>{{ customTitle }}</h2>
    <p data-testid="counter">{{ count }}</p>

    <p>{{ count }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <div>
        <button data-testid="decrement" @click="decrement">Decrement</button>
        <button data-testid="increment" @click="increment">Increment</button>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 101,
            validator(value: number) {
                return value >= 100;
            },
        },
    },
    name: "Counter-Vue",
    data() {
        return {
            count: this.start,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        getSquareValue() {
            console.log("getSquareValue() called");
            return this.count * this.count;
        },
    },
    computed: {
        SquareCounter() {
            return this.count * this.count;
        },

        customTitle() {
            return this.title || "Counter";
        },
    },
};
</script>

<style>
h2 {
    font-size: 2em;
    font-weight: normal;
}
p {
    font-size: 1.2em;
}
button {
    background-color: #2efd95;
    border-radius: 5px;
    border: 1px solid #2efd95;
    font-size: 1em;
    margin: 5px;
    padding: 12px;
}
button:hover {
    background-color: #02c765;
    border: 1px solid #2efd95;
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
button:active {
    background-color: #2efd95;
    border: 1px solid #2efd95;
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
}
</style>
