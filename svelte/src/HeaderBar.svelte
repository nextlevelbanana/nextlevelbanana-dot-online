    <script>
        import {sortOrder} from "./stores";
    </script>
    <header>
        <div class="bubble"></div><div class="bubble2"></div><div class="header">
            <span>nextlevelbanana.online</span>
            {#if $sortOrder != "default"}
            <span class="sort">{$sortOrder}</span>
            {/if}
        </div><div class="bubble2"></div><div class="bubble"></div>
    </header>

<style>
    header {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 0.25rem;   
        position: fixed;
        top: 0.25rem;
        z-index: 30;
    }
    .header, .bubble, .bubble2 {
        background-color: #ffdd22;
            border-radius: 8px;
            display: inline-block;
        font-size: 3rem; 
        height: 4rem;
        margin-right: 1rem;        
    }
    .bubble, .bubble2 {
        width: 1rem;
        padding: 0;
    }
    
    .bubble:first-child {
        margin-left: 1rem;
    }

    .header {
        flex-grow: 1;
        color: navy;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .sort {
        color: white;
        -webkit-text-stroke: 2px black;
        padding-right: 1rem;
    }
  

    @media (max-height: 550px) {
        .header, .bubble, .bubble2 {
            height: 9vh;
            font-size: 2rem;
            line-height: 9vh;
        }
    }
    
    @media (max-width: 767px) and (min-height: 550px) {
        .header {
            font-size: 2rem;
            align-items: center;
            word-break: break-all;
        }
        .bubble2 {
            display: none;
        }
    }
    
    @media (max-width: 430px) {
        .header {
            font-size: 1.5rem;
            align-items: center;
            word-break: break-all;
        }
        .bubble2 {
            display: none;
        }
    }
</style>