<script>
    import {flip} from "svelte/animate";
    import {fly} from "svelte/transition";
    import { selected, sortOrder } from './stores.js';
    import json from "./things.json";
    import RainbowText from "./RainbowText.svelte";
   
    const doRandom = () => {
        const idx = Math.floor(Math.random()* (items.length -2))+2; //don't want random or roulette
        handleClick(items[idx]);
    }
    const doRoulette = () => {
        let num = Math.floor(Math.random() * 50);
        if (num < 2) num = 2;
        let i = 0;
        let interval = 60;
        var doRou = setInterval(() => {
            i++;
            if (i > num) window.clearInterval(doRou);
            handleKeypress("ArrowDown")
        }, interval );
        
    }

    let items = [];

    const fixedItems = [{
        id: 0,
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
    },{
        id: 1,
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
    }];


    const defaultSort = things => {
        return things
        .sort((a,b) => {
            if (a.category !== b.category)
                return (a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0;
            else 
                return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        }).map((thing, i) => ({...thing, id: i+2}));;
    }

    const allAlphaSort = things => {
        return things.sort((a,b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        }).map((thing, i) => ({...thing, id: i+2}));;
    }

    const difficultySort = things => {
        return things
        .sort((a,b) => {
            if (a.difficulty !== b.difficulty)
                return (a.difficulty < b.difficulty) ? -1 : (a.difficulty > b.difficulty) ? 1 : 0;
            else 
                return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        }).map((thing, i) => ({...thing, id: i+2}));;
    }

    let currentSort = defaultSort;
    
    const sortMethods = [defaultSort, allAlphaSort, difficultySort];
    let displayedItems = [];
    let currentName = "";

    $: {
        items = fixedItems.concat(currentSort(json.things));
        displayedItems = items.slice(0,7);
    }

    $: if (currentSort == allAlphaSort) {
        $sortOrder = "ABC";
    } else if (currentSort == difficultySort) {
        $sortOrder = "HARD";
    } else {
        $sortOrder = "default";
    }

    $:  $selected = displayedItems[3];
       

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

    const handleKeypress = key => {
        const first = displayedItems[0].id;
        
        const last = displayedItems[displayedItems.length-1].id;

        if (key == "ArrowRight" || key == "ArrowDown") {
            displayedItems = [...displayedItems.slice(1), items[(last + 1)%items.length]];
            
        } else if (key == "ArrowLeft" || key == "ArrowUp") {

            displayedItems.pop();
                let next = first - 1;
                if (next === -1) {
                    next = items.length-1;
                }
            displayedItems = [items[next],...displayedItems];
        } else if (key == "Enter") {
            handleClick($selected);
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

    let keysDown = new Set();

    const handleKeydown = ev => {
        keysDown.add(ev.key);     
    }

    const handleKeyup = ev => {

        if (keysDown.has("ArrowLeft") && keysDown.has("ArrowRight") ||
        keysDown.has("ArrowUp") && keysDown.has("ArrowDown")) {
            currentName = $selected.name;
            currentSort = sortMethods[(sortMethods.indexOf(currentSort) + 1) % sortMethods.length];
            keysDown.clear();
        }
        else if (keysDown.size) {
            handleKeypress(ev.key)
            keysDown.delete(ev.key);
        }
    }

    let touchstart;
    const handleTouchStart = ev => {
        touchstart = ev.touches[0].screenY.toFixed(0);
    }

    const handleTouchMove = ev => {
        console.log(window.innerHeight)
       let newTouch = ev.changedTouches[0].screenY.toFixed(0);
       console.log(touchstart)
       if (newTouch - touchstart > (window.innerHeight * 0.05)) {
           touchstart = newTouch;
           handleKeydown("ArrowUp");
           handleKeyup({key: "ArrowUp"});
       } else if (touchstart - newTouch > (window.innerHeight * 0.05)) {
        touchstart = newTouch;
           handleKeydown("ArrowDown");
           handleKeyup({key: "ArrowDown"});
       }
    }

</script>

<svelte:window on:touchstart={handleTouchStart} on:touchmove={handleTouchMove} on:keydown={handleKeydown} on:keyup={handleKeyup}/>

<div class="wheel" >
    {#key currentSort}
    {#each displayedItems as item, idx (item.id)}
            <div in:fly={{x: -200}} on:click={handleClick(item)} animate:flip|local="{{duration:150, ease: "sine"}}" class={ `item ${getOffset(idx)} ${item.category}`}>
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
    {/key}

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
        background: linear-gradient(65deg, teal 50%, #00aaaa);
        border: 2px solid chartreuse;
        border-bottom-color: lime;
        border-right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 3rem;

        height: 16%;
        min-height: 16%;
        border-radius: 18px 0 0 5px;
        transform: matrix(1, 0, -0.1, 1, 10, 0);
        overflow: hidden;
        box-shadow: -1px -1px 10px midnightblue;
        margin-bottom: 8px;
    }

    .description {
        font-size: 1.5rem;
    }

    .item.zero:hover {
        cursor: pointer;
    }

    .name, .description {
        padding-left: 5rem;
    }

    .games {
        color: chartreuse;
    }
    .talks {
        color: orange;
    }
    .socials {
        color: #ffdd22;
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
        text-shadow: 0 0 10px navy;
    }
    .zero .description {
        -webkit-text-stroke: 0;
        letter-spacing: 0.1em;
    }
    .one {
        margin-left: 4rem;
        filter: brightness(0.9);
    }
    .one .description{
        display: none;
    }
    .two {
        margin-left: 8rem;
        filter: brightness(0.7);
    }
    .three {
        margin-left: 12rem;
        filter: brightness(0.5);
    }

    @media (max-height: 500px) {

        .name {
            font-size: 5vh;
        }
        .description {
            font-size: 3vh;
        }

        .name, .description {
            padding-left: 5vw;
        }

        .zero {
            -webkit-text-stroke: 0px white;
            border-width: 5px 0 5px 5px;

        }

    }

</style>