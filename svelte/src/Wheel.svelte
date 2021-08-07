<script>
    import {flip} from "svelte/animate";
    import { selected } from './stores.js';
    import json from "./things.json";
    import RainbowText from "./RainbowText.svelte";
   
    const doRandom = () => {
        const idx = Math.floor(Math.random()* (items.length -2))+2; //don't want random or roulette
        handleClick(items[idx]);
    }
    const doRoulette = () => {
        console.log("ROULOOO")
        const num = Math.floor(Math.random() * 50);
        if (num < 2) num = 2;
        // handleKeypress({keyCode:39})
        let i = 0;
        let interval = 60;
        var doRou = setInterval(() => {
            i++;
            if (i > num) window.clearInterval(doRou);
            handleKeypress({keyCode:39})
        }, interval );
        
    }

    let items = [];

    items.push({
        id: items.length,
        name: "RANDOM",
        category: "extra",
        handler: doRandom, 
        data: [{
            name: "random",
            JOKE: 2,
            CASCADIA: 1,
            LINGUISTICS: 3,
            MEATSPACE: 4,
            WEIRD: 5
        }]
    });

    items.push({
        id: items.length,
        name: "ROULETTE",
        category: "extra",
        handler: doRoulette,
        data: [{
            name: "roulette",
            JOKE: 5,
            CASCADIA: 3,
            LINGUISTICS: 3,
            MEATSPACE: 3,
            WEIRD: 5
        }]
    });

    items = items.concat(json.things.sort((a,b) => {
            if (a.category !== b.category)
                return (a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0;
            else 
                return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        }
        ).map((thing, i) => ({...thing, id: i+2})));


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
            {#if item.name == "RANDOM" || item.name == "ROULETTE"}
                <RainbowText text={item.name} />
            {:else}
            <div class="name">{item.name}</div>
            {/if}
            {#if item.description}
            <div class="description">{item.description}</div>
            {/if}
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
        align-items: flex-start;
        background: linear-gradient(65deg, teal 30%, cyan);
        border: 2px solid chartreuse;
        border-bottom-color: lime;
        border-right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3em;
        height: 16%;
        min-height: 16%;
        border-radius: 18px 0 0 5px;
        transform: matrix(1, 0, -0.1, 1, 10, 0);
        overflow: hidden;
        box-shadow: -1px -1px 10px midnightblue;
        margin-bottom: 8px;
    }

    .description {
        font-size: 1.25rem;
    }

    .item.zero:hover {
        cursor: pointer;
    }

    .name, .description {
        padding-left: 9rem;
    }

    .games {
        color: chartreuse;
    }
    .talks {
        color: red;
    }
    .socials {
        color: yellow;
    }
    .extra {
        color: transparent;
        font-family: "NES2-Regular";
    }
    .tools {
        color: cyan;
    }
    .orgs {
        color: violet;
    }

    .zero {
        border-style: solid;
        border-top-color: chartreuse;
        border-bottom-color: lime;
        border-width: 10px 0 10px 10px;
        filter: brightness(1.0);
        -webkit-text-stroke: 1px white;
    }
    .one {
        margin-left: 4rem;
        filter: brightness(0.9);
    }
    .two {
        margin-left: 8rem;
        filter: brightness(0.7);
    }
    .three {
        margin-left: 12rem;
        filter: brightness(0.5);
    }

</style>