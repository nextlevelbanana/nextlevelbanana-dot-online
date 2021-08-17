    <script>
        import {sortOrder} from "./stores";
    </script>
    
    <div class="bubble"></div><div class="bubble"></div><div class="header">
        <span>nextlevelbanana.online</span>
        {#if $sortOrder != "default"}
        <span class="sort">{$sortOrder}</span>
        {/if}
    </div><div class="bubble"></div><div class="bubble"></div>

<style>
    .header, .bubble {
        background-color: yellow;
            border-radius: 8px;
            display: inline-block;
        font-size: 3rem; 
        padding-left: 2rem;
        height: 4rem;
        margin-right: 1rem;
        
    }
    .bubble {
        width: 1rem;
        padding: 0;
    }

    .header {
        width: calc(100% - 12rem);
        vertical-align: top;
        color: navy;
        display: inline-flex;
        justify-content: space-between;
    }

    .sort {
        color: white;
        -webkit-text-stroke: 2px black;
        padding-right: 1rem;
    }
  

    @media (max-height: 500px) {

        .header, .bubble {
            height: 9vh;
            font-size: 6vh;
            line-height: 9vh;
        }

    }
</style>