<div class="footer">
    <div>Allow autoplay for best experience!</div>
    <div class="desktop">⬅ ➡ or ⬆ ⬇ and [enter]</div>
</div>

<style>
    .footer {
        background-color: yellow;
        border-radius: 8px;
        display: inline-block;
        font-size: 1.75rem; 
        padding-left: 2rem;
        height: 2rem;
        margin-right: 1rem;
        width: 97%;
        vertical-align: top;
        color: white;
        -webkit-text-stroke: 1px black;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 767px) and (min-height: 500px) {
       .footer {
			display: none;
		}
    }

    @media (max-height: 500px) {

        .desktop {
            display: none;
        }
        .footer {
            height: 9vh;
            font-size: 6vh;
            line-height: 9vh;
            width: 94%;
        }
    }   
</style>