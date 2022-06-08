<template>
    <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
        <div class="col-start-2 col-span-4 rounded-md shadow">
            <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
                <h1 class="font-medium text-xl">Experiência</h1>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="cadastroInstituicao"
                                        class="block text-sm font-medium text-gray-700">Instituição de ensino</label>
                                    <input type="text" name="cadastroInstituicao" id="instituicao"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="cadastroCurso"
                                        class="block text-sm font-medium text-gray-700">Curso</label>
                                    <input type="text" name="cadastroCurso" id="curso"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="cadastroEmpresa"
                                        class="block text-sm font-medium text-gray-700">Empresa</label>
                                    <input type="text" name="cadastroEmpresa" id="empresa"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="cadastroCargo"
                                        class="block text-sm font-medium text-gray-700">Cargo</label>
                                    <input type="text" name="cadastroCargo" id="cargo"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-12 sm:col-span-3">
                                    <label for="CadastroTempoServico"
                                        class="block text-sm font-medium text-gray-700">Tempo de
                                        serviço (Anos)</label>
                                    <input v-mask="maskTempoTrabalho" v-model="dataTempoTrabalho" type="text"
                                        name="CadastroTempoServico" id="tempoServico"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-12 sm:col-span-3">
                                    <div class="flex justify-center">
                                        <div class="form-check form-switch">
                                            <p class="flex flex-col text-xl form-check-label inline-block text-gray-800"
                                                for="empregoAtual">Já está no mercado?</p>
                                            <input
                                                class="inline-flex justify-center mt-2 py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
                                                v-model="valorBtn" @click="trocaValorBtn()" type="button">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
                            <div class=" col-span-12 sm:col-span-3">
                                <router-link to="dadosPessoais" class="text-left mt-5">
                                    <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Voltar</button>
                                </router-link>
                                <router-link to="resumo" class="text-right mt-5">
                                    <button type="submit"
                                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Prosseguir
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let valorBtn = ref('Não');
let maskTempoTrabalho = ref('##');
let dataTempoTrabalho = ref('');

const trocaValorBtn = () => {
    if (valorBtn.value == 'Sim') {
        valorBtn.value = 'Não'
    } else {
        valorBtn.value = 'Sim';
    }
}
</script>
