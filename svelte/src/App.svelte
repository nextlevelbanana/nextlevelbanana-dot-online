<script>
	import HeaderBar from "./HeaderBar.svelte";
	import Wheel from "./Wheel.svelte";
	import Radar from "./Radar.svelte";
	import Preview from "./Preview.svelte";
	import {selected} from "./stores.js";
	import FooterBar from "./FooterBar.svelte";

</script>
<HeaderBar></HeaderBar>
<main>
	<div class="left">
		<Preview bind:img={$selected.img} bind:wav={$selected.wav}></Preview>
		<Radar></Radar> 
	</div>
	<div class="right">
		<Wheel></Wheel>
	</div>
</main>
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
	
</style>