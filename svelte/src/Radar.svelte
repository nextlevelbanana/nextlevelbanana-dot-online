<script>
    import { selected } from './stores.js';
    import { LayerCake, Svg } from 'layercake';

    import Radar from './RadarChart.svelte';
    import AxisRadial from './AxisRadial.svelte';

    const seriesKey = 'name';
    const xKey = [ "joke", "local", "word", "meat", "weird"];
    let data;

    $: data = $selected.data;

</script>

<div class="parent">
    <div class="chart-container">
        <LayerCake
          x={xKey}
          xDomain={[0, 10]}
          xRange={({ height }) => [0, height / 2]}
          data={data}
        >
          <Svg>
            <AxisRadial/>
            <Radar/>
          </Svg>
        </LayerCake>
      </div>
</div>

<style>
    .chart-container {
    width: 100%;
    height: 100%;

  }

  .parent {
      height: 50%;
      width: 100%;
  }
</style>