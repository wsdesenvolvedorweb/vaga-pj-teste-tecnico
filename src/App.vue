<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <div class="row mt-2 p-1">
        <div class="col-sm-12 col-md-4">
          <div class="card">
            <div class="card-body">
              <v-chart class="grafico-pizza" :option="option"></v-chart>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-8">
          <div class="card">
            <div class="card-body">
              <v-grafico-de-linha></v-grafico-de-linha>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="text-center">Valores das ações no mês de Junho de 2021 (Em R$)</h1>
        <div class="table-responsive mb-4">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" class="caixa-alta">Código</th>
                <th scope="col" class="caixa-alta">Nome</th>
                <th scope="col" class="caixa-alta">Último</th>
                <th scope="col" class="caixa-alta">Máxima</th>
                <th scope="col" class="caixa-alta">Mínima</th>
                <th scope="col" class="caixa-alta">Variação</th>
                <th scope="col" class="caixa-alta">Variação (em %)</th>
                <th scope="col" class="caixa-alta">Volume</th>
              </tr>
            </thead>
            <tbody @load="obterTodasAcoes">
              <tr v-for="acao in obterAcoes" :key="acao.codigo">
                <th>{{acao.codigo}}</th>
                <td>{{acao.nome}}</td>
                <td>{{acao.ultimo}}</td>
                <td>{{acao.maxima}}</td>
                <td>{{acao.minima}}</td>
                <td>{{acao.variacao}}</td>
                <td>{{acao.variacaoEmPorcentagem}}</td>
                <td>{{acao.volume}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import GraficoDeLinha from './components/GraficoDeLinha.vue';

use([
  CanvasRenderer,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
export default {
  name: 'App',
  components: {
    "v-header": Header,
    "v-footer": Footer,
    "v-chart": VChart,
    "v-grafico-de-linha": GraficoDeLinha
  },
  data() {
    return {
      option: {
        title: {
          text: "Distribuição das ações",
          left: "center",
          textStyle: {
            color: "white"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          textStyle: {
            color: "black"
          },
          left: "right"
        },
        legend: {
          orient: "horizontal",
          left: "left",
          top: "62%",
          textStyle: {
            color: "white"
          },
          data: [
            "Ambev ON",
            "Assaí ON",
            "Azul PN",
            "B2W Digital ON",
            "B3 ON",
            "Banco do Brasil",
            "Banco Inter Unit"
          ]
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            //bottom: "50%",
            height: "300",
            center: ["50%", "60%"],
            data: [
              { value: 11.49, name: "Ambev ON" },
              { value: 418.50, name: "Assaí ON" },
              { value: 1.95, name: "Azul PN" },
              { value: 1.90, name: "B2W Digital ON" },
              { value: 26.25, name: "B3 ON" },
              { value: 9.96, name: "Banco do Brasil" },
              { value: 7.38, name: "Banco Inter Unit" }
            ]
          }
        ]
      }
    }
  },
  methods: {
      ...mapActions(["actionObterTodasAcoes"]),
    obterTodasAcoes(acao) {
      const acoes = {
        codigo: acao.codigo,
        nome: acao.nome,
        maxima: acao.maxima,
        minima: acao.minima,
        variacao: acao.variacao,
        variacaoEmPorcentagem: acao.variacaoEmPorcentagem,
        volume: acao.volume,
        primeiroValor: acao.primeiroValor,
        segundoValor: acao.segundoValor,
        terceiroValor: acao.terceiroValor,
        quartoValor: acao.quartoValor,
        quintoValor: acao.quintoValor
      }
      this.actionObterTodasAcoes(acoes)
    }
  },
  computed: {
    ...mapGetters(["obterAcoes"])
  },
  created() {
    this.actionObterTodasAcoes()
  },
  mounted() {
    this.actionObterTodasAcoes()
  }
}
</script>

<style>
* {
  color: white;
}

body, .card .card-body {
  background-color: rgb(29,29,29)!important;
}

.caixa-alta {
  text-transform: uppercase;
}

.grafico-pizza {
  height: 500px;
}

.card {
    border-radius: 0!important;
}

@media only screen and (max-width: 575px) {
  .card {
    margin-top: 10px;
  }
}
</style>