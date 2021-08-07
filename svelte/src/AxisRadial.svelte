<script>
	import { getContext } from 'svelte';

	const { width, height, xScale, extents, config } = getContext('LayerCake');
	export let linePaddingFactor = 1.1;
	export let labelPaddingFactor = 1.25;
	let max;

	$: max = $xScale(Math.max(...[0,5]));

	$: angleSlice = (Math.PI * 2) / $config.x.length;

	function anchor (total, i) {
		if (i === 0 || i === total / 2) {
			return 'middle';
		} else if (i < total / 2) {
			return 'start';
		}
		return 'end';
	}
</script>

<g
	transform="translate({ $width / 2 }, { $height / 2 })"
>

	<circle
		cx="0"
		cy="0"
		r="{max}"
		stroke="#fff"
		stroke-width="1"
		fill="teal"
	></circle>	
	<circle
		cx="0"
		cy="0"
		r="{max *.8}"
		stroke="none"
		stroke-width="1"
		fill="turquoise"
	></circle>
	<circle
		cx="0"
		cy="0"
		r="{max *.6}"
		stroke="none"
		stroke-width="1"
		fill="teal"
	></circle>
	<circle
		cx="0"
		cy="0"
		r="{max *.4}"
		stroke="none"
		stroke-width="1"
		fill="turquoise"
	></circle>
	<circle
		cx="0"
		cy="0"
		r="{max *.2}"
		stroke="none"
		stroke-width="1"
		fill="teal"
	></circle>
	

	{#each $config.x as label, i}
		<line
			x1="0"
			y1="0"
			x2="{(max * linePaddingFactor) * Math.cos(angleSlice * i - Math.PI / 2)}"
			y2="{(max * linePaddingFactor) * Math.sin(angleSlice * i - Math.PI / 2)}"
			stroke="#ccc"
			stroke-width="1"
			fill="none"
		>
		</line>
		
		<text
			text-anchor="{anchor($config.x.length, i)}"
			dy="0.35em"
			font-size="1.5rem"
			fill="cyan"
			class="label"
			stroke="navy"
			lengthAdjust="spacing"
			textLength="30%"
			font-family="NES2-Regular"
			transform="translate({(max * labelPaddingFactor) * Math.cos(angleSlice * i - Math.PI / 2)}, {(max * labelPaddingFactor) * Math.sin(angleSlice * i - Math.PI / 2)})">{label}</text>
	{/each}
</g>
