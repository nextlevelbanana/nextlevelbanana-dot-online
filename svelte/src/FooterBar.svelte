<footer>
    <div class="footer-text">
        <div>Allow autoplay for best experience!</div>
        <div class="desktop">⬅ ➡ or ⬆ ⬇ and [enter]</div>
    </div>
</footer>

<style>
    footer {
        background-color: #ffdd22;
        border-radius: 8px;
        margin: 0 auto 0.5rem;
        color: navy;
        height: 3rem;
        font-size: 1.5rem; 
        width: calc(100% - 1rem);
        position: fixed;
        left: 0.5rem;
        bottom: 0.25rem;
    }
    
    .footer-text {
        display: inline-flex;
        justify-content: space-between;
        margin: 0.5rem;
        width: calc(100% - 1rem);
        max-width: 100%;
    }

    @media (max-width: 767px) and (min-height: 500px) {
       footer {
			display: none;
		}
    }

    @media (max-height: 500px) {

        .desktop {
            display: none;
        }
        /* footer {
            height: 9vh;
            font-size: 6vh;
            line-height: 9vh;
            margin: 0 1rem 0.5rem 1rem;
            padding: 0 0.5rem;
        } */
    }   
</style>