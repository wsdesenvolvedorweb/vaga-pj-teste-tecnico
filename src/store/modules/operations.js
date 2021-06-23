import { baseUrl } from "../../config"
import axios from "axios"

export const OBTER_TODAS_ACOES = "OBTER_TODAS_ACOES"

const state = {
    acoes: []
}

const getters = {
    obterAcoes: (estado) => estado.acoes
}

const mutations = {
    [OBTER_TODAS_ACOES] (estado, valor) {
        estado.acoes = valor
    }
}

const actions = {
    actionObterTodasAcoes({ commit }) {
        return axios.get(baseUrl).then((resposta) => {
            commit(OBTER_TODAS_ACOES, resposta.data)
        }).catch((erro) => {
            throw erro
        })
    }    
}

export default {
    state,
    getters,
    actions,
    mutations
}