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

    @media (max-width: 767px) and (min-height: 550px) {
       footer {
			display: none;
		}
    }
    
    @media (max-height: 550px) {
        footer{
            font-size: 0.75rem;
            height: 1rem;
            margin: 0 auto 0.125rem;
        }
        
        .footer-text {
            margin-top: 0;
        }
        
        .desktop {
            display: none; /* at this height they're probably on a touchscreen*/
        }
    }
</style>