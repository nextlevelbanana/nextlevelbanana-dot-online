import { writable } from 'svelte/store';

export const selected = writable({name: "loading", data: [{
    name: "loading",
    joke: 2,
    local: 2,
    word: 2,
    meat: 2,
    weird: 2
}]});

export const sortOrder = writable("default");