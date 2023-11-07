<script>
    import { selected } from './stores.js';
    import { LayerCake, Svg } from 'layercake';

    import Radar from './RadarChart.svelte';
    import AxisRadial from './AxisRadial.svelte';

    const xKey = [  "WEIRD", "IRL", "PNW", "LANG","JOKE"];
    let data;

    $: {
      data = $selected.data;
    }

</script>

<div class="parent">
    <div class="chart-container">
        <LayerCake
          padding={{ top: 20, right: 0, bottom: 6, left: 0 }}
          x={xKey}
          xDomain={[0, 6]}
          xRange={({ height }) => [0, height / 2]}
          data={data}
        >
          <Svg>
            <AxisRadial/>

            {#if data[0].name !== "roulette" && data[0].name !== "random"}
            <Radar/>
            {:else}
            <text
              font-family="NES2-Regular"
              font-size="100"
              transform-origin="50% 50%"
              x="45%"
              y="50%"
              fill="#f0c"
              opacity="0.5"
              stroke="#foc"
              stroke-width="1"
            >
            <animateTransform attributeName="transform"
            attributeType="XML"
            type="scale"
            values="0.2; 2; 0.2"
            dur="0.8s"
            repeatCount="indefinite"/>?</text>
            {/if}
          </Svg>
        </LayerCake>
      </div>
</div>

<style>
    .chart-container {
      width: 100%;
      height: 52%;
      margin: auto auto;
  }

  .parent {
      height: 75%;
      width: 95%;
      padding-top: 20%;
      margin: auto;
  }
  @media (max-height: 550px) {
    .parent {
      padding-top: 15%;
    }
    .chart-container {
      width: 120%;
    }
  }
</style>