<template>
  <v-chart class="grafico-linha" :option="option"></v-chart>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  MarkAreaComponent,
  TitleComponent,
} from "echarts/components"
import VChart from "vue-echarts"
import "echarts/lib/chart/line"

use([
  CanvasRenderer,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  MarkAreaComponent,
  TitleComponent,
]);
export default {
  name: "GraficoDeLinha",
  components: {
    "v-chart": VChart
  },
  data() {
    return {
      option: {
        title: {
        left: "center",
        text: "Desempenho das ações da Ambev ON nos últimos 5 dias",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {
        trigger: "axis",
      },
      textStyle: {
        color: "white"
      },
      legend: {
        bottom: 0,
        data: ["Ambev ON"],
        itemStyle: {},
        lineStyle: {
          opacity: 0,
        },
        textStyle: {
          color: "white"
        }
      },
      grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 52,
      },
      xAxis: {
        type: "category",
        axisTick: {
          lineStyle: {
            opacity: 0,
          },
        },
        data: ["14/06/2021", "15/06/2021", "16/06/2021", "17/06/2021", "18/06/2021"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Ambev ON",
          type: "line",
          symbol: "none",
          color: "#CCD4DF",
          data: [18.95, 19.47, 19.14, 19.09, 19.02],
          markArea: {
            silent: true,
            itemStyle: {
              color: "rgba(15, 0, 189, 0.06)",
            },
            data: [
              [
                {
                  xAxis: "1",
                },
                {
                  xAxis: "2",
                },
              ],
            ],
          },
        },
        ],
      }
    }
  }
}
</script>

<style scoped>
.grafico-linha {
  height: 500px;
}

</style>