<script>
    export let name;
    export let offset;
</script>

<div  class={ `item ${offset}`}>
    <div class="name">{name}</div>
</div>

<style>
    .item {
        background: linear-gradient(65deg, #ffdd22, yellowgreen);
        border:1px solid red;
        height: 100%;
        min-height: 100%;
    }

    .zero {
        border: 3px solid white;
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