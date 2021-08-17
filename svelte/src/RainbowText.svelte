<script>
    export let text;
    const colors = ["red", "yellow", "chartreuse", "cyan", "blue", "violet", "purple"]
</script>

<div class="rainbow">
    {#each text as ch, i}
    <span style="color: {colors[i%colors.length]}">{ch}</span>
    {/each}
</div>

<style>
    .rainbow {
        padding-left: 9rem;
    }

    @media (max-height: 500px) {

        .rainbow {
            font-size: 6vh;
            padding-left: 5vw;
        }
    }

</style>