<script>
    import {selected} from "./stores.js";
</script>

<div class="preview">
    <h1>{$selected.name}</h1>
</div>

<style>
    .preview {
        border: 3px dashed cyan;
        height: 50%;
    }
</style>