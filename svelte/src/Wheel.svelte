<script>
    import {flip} from "svelte/animate";
    import { selected } from './stores.js';
    import json from "./things.json";
   
    const doRandom = () => {
        const idx = Math.floor(Math.random()* (items.length -2)); //don't want random or roulette
        console.log(idx)
        handleClick(items[idx]);
    }
    const doRoulette = () => {
        console.log("ROULOOO")
        const num = Math.floor(Math.random() * 100);
        console.log(num)
        handleKeypress({keyCode:39})
        let i = 0;
        let interval = 60;
        var doRou = setInterval(() => {
            i++;
            if (i > num) window.clearInterval(doRou);
            handleKeypress({keyCode:39})
        }, interval );
        
    }

    const items = [
        {id: 0, name: "Thing One", category: "game", data: [{
            name: "thing one",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 1, name: "Thing Two", category: "game", data: [{
            name: "thing two",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 2,name: "Thing Three", link: "http://www.twitter.com/levelbanan", category: "game", data: [{
            name: "thing three",
            joke: 3,
            local: 5,
            word: 3,
            meat: 1,
            weird: 2
        }]},
        {id: 3,name: "Thing Four", link: "http://www.twitter.com/nextlevelbanana", category: "game", data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 4,name: "Thing Five", category: "talk", data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 5,name: "Thing Six", category: "talk", data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 6,name: "Thing Seven", category: "link", data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 7, name: "RANDOM", category: "extra", handler: doRandom, data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]},
        {id: 8, name: "ROULETTE", category: "extra", handler: doRoulette, data: [{
            name: "thing four",
            joke: 2,
            local: 1,
            word: 3,
            meat: 4,
            weird: 5
        }]}
    ]

    //todo: parse things from json
    //then add random and roulette manually, so to directly add their handlers
    //todo: programmatically sort things, adding IDs
    //todo: add preview pics and sound for things


    let displayedItems = items.slice(0,7);

    $: $selected = displayedItems[3];

    

    const getOffset = index => {
        const num = Math.abs(index - 3);
        switch (num) {
            case 0:
                return "zero";
                break;
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
            return "three";
                break;
            case 4:
                return "four";
        }
    }

    const handleKeypress = ev => {
        const first = displayedItems[0].id;
        
        const last = displayedItems[displayedItems.length-1].id;

        switch (ev.keyCode) {
            case 13:
                handleClick($selected);
                break;
            case 39:
            case 40:
                displayedItems = [...displayedItems.slice(1), items[(last + 1)%items.length]];
                break;
            case 37:
            case 38:
                displayedItems.pop();
                let next = first - 1;
                if (next === -1) {
                    next = items.length-1;
                }
               displayedItems = [items[next],...displayedItems];
               break;

        }

    }

    const handleClick = item => {
        if (item.offset) return;

        if (item.link) {
            window.open(item.link, "_blank")
        } else if (item.handler) {
            item.handler();
        }
    }
</script>

<svelte:window on:keyup={handleKeypress}/>

<div class="wheel">
    {#each displayedItems as item, idx (item.id)}
        <div on:click={handleClick(item)} animate:flip="{{duration:150, ease: "sine"}}" class={ `item ${getOffset(idx)} ${item.category}`}>
            <div class="name">{item.name}</div>
        </div>
       
    {/each}
</div>

<style>
    .wheel {
        display: flex;  
        flex-direction: column;
        height: 100%;
        justify-content: center;
        overflow: hidden;
    }
   
    .item {
        background: linear-gradient(65deg, yellowgreen, yellow);
        border:1px solid black;
        border-right: 0;
        font-size: 3em;
        height: 16%;
        min-height: 16%;
        border-radius: 8px 0 0 8px;


    }

    .item.zero:hover {
        cursor: pointer;
    }

    .name {
        padding: 1rem 0 0 1rem;
    }

    .game {
        color: white;
    }
    .talk {
        color: cyan;
    }
    .link {
        color: yellow;
    }
    .extra {
       color: red;
    }

    .zero {
        border: 15px solid white;
        border-radius: 8px 0 0 8px;
        border-right: 0;
    }
    .one {
        margin-left: 2rem;
    }
    .two {
        margin-left: 4rem;
    }
    .three {
        margin-left: 6rem;
    }

</style>