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
		overflow: hidden;
	}
	.left {
		flex-grow: 1;
		max-width: 40%;
		margin-top: 5rem;
		height: calc(97vh - 6.5rem);
	}
	.right {
		flex-grow: 1;
		max-width:60%;
		height: 100vh;
	}
	
    .rotate {
        display: none;
    }

	@media (max-width: 767px) and (min-height: 550px) {
        .rotate {
            display: block;
            background-color: #ffdd22;
			border-radius: 8px;
            color: navy;
            z-index: 10;
            margin: 1rem;
			margin-top: 5rem;
			padding: 0.5rem;
            font-size: 2rem;
			text-align: center;
        }

		main {
			display: none;
		}
    }
	
	@media (max-height: 550px) {
		.left {
			margin-top: 4rem;
		}
	}
	
</style>