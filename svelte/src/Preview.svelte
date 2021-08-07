<script>
    export let img;
    export let wav;

</script>

<div class="preview">
    <div class="box" style="background-image: url({img}); ">
    </div>
    {#if wav}
    <audio autoplay="true" loop="true" src={wav}></audio>
    {/if}
</div>

<style>
    .preview {
        height: 40%;
        min-height:40%;
        max-height: 40%;
        width: 100%;
    }

    .box {
        border-top: 21px solid cyan;
        border-left: 2px solid cyan;
        border-bottom: 2px solid lime;
        border-right: 2px solid lime;
        border-radius: 0 34px 0 0;
        box-shadow: 0px 0px 10px lightcyan;
        height: 90%;
        margin: 1rem;
        overflow: hidden;
        text-align: center;
        background-position: center;
        background-size: cover;
    }
</style>