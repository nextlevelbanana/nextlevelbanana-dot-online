<script>
    let giveMeAForLoop = [1,2,3,4,5,6,7,8,9,10]
    import { selected } from './stores.js';

    let difficulty;

    $: difficulty = $selected.difficulty;

</script>

<div class="meter">
    {#each giveMeAForLoop as banan, i}
        {#if difficulty > i || $selected.category == "extra"}
        <img class={$selected.category == "extra"} src="assets/meterpink.png"/>
        {:else}
        <img class={$selected.category == "extra"} src="assets/metergray.png"/>
        {/if}
    {/each}

</div>

<style>
    .meter {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 1rem;
        border: 1px solid cyan;
        border-radius: 8px;
        background-color: RGBA(25, 25, 112, 0.5);
        height: 6%;
        text-align: center;
    }

    img {
        height: calc(100% - 16px);
        padding: 8px 2px;
    }
    img:first-child {
        padding-left: 8px;
    }

    img:last-child {
        padding-right: 8px;
    }

    .true {
        animation: rotation 0.8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}
</style>