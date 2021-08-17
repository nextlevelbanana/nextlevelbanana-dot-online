<script>
	import HeaderBar from "./HeaderBar.svelte";
	import Wheel from "./Wheel.svelte";
	import Radar from "./Radar.svelte";
	import Preview from "./Preview.svelte";
	import {selected} from "./stores.js";
	import FooterBar from "./FooterBar.svelte";
	import BananaMeter from "./BananaMeter.svelte";

</script>
<HeaderBar></HeaderBar>
<div class="rotate"><div>(rotate your screen)</div></div>

<main>
	<div class="left">
		<Preview bind:img={$selected.img} bind:wav={$selected.wav}></Preview>
		<Radar></Radar> 
	</div>
	<div class="right">
		<Wheel></Wheel>
	</div>
</main>
<BananaMeter></BananaMeter>
<FooterBar></FooterBar>

<style>
	main {
		display: flex;
		/* //justify-content: space-between; */
		overflow: hidden;
	}
	.left {
		/* border: 1px solid lime; */
		flex-grow: 1;
		max-width: 40%;
		height: calc(97vh - 6.5rem);
	}
	.right {
		/* border: 1px solid blueviolet; */
		flex-grow: 1;
		height: calc(97vh - 6.5rem);
		max-width:60%;
	}

	
    .rotate {
        display: none;
    }

	@media (max-width: 767px) and (min-height: 500px) {
        .rotate {
            display: block;
            background-color: yellow;
            color: navy;
            z-index: 10;
            border-radius: 5%;
            padding: 5vh 0;
            font-size: 10vh;
        }

		main {
			display: none;
		}
    }

	@media (max-height: 500px) {
		.left, .right {
			height: 78vh;
		}
	}
	
</style>