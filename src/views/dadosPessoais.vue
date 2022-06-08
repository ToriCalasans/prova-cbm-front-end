<template>
    <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
        <div class="col-start-2 col-span-4 rounded-md shadow">
            <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
                <h1 class="font-medium text-xl">Dados Pessoais</h1>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-6">
                                    <label for="cadastroNome"
                                        class="h-8 block text-sm font-medium text-gray-700">Nome</label>
                                    <input type="text" name="cadastroNome" id="nome"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-12 sm:col-span-3">
                                    <label for="cadastroCPF" class="block text-sm font-medium text-gray-700">CPF</label>

                                    <input v-mask="cpfMask" v-model="dataCpf" type="text" name="cadastroCPF" id="CPF"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-12 sm:col-span-3">
                                    <label for="cadastroData" class="block text-sm font-medium text-gray-700">Data de
                                        Nascimento</label>
                                    <input type="date" name="cadastroData" id="data"
                                        class="pl-3 outline-slate-300 h-8 mt-1 focus:ring-indigo-100 focus:border-indigo-100 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="cadastroSigno"
                                        class="outline-slate-300 block text-sm font-medium text-gray-700">Signo</label>
                                    <select name="cadastroSigno" id="signo"
                                        class="outline-slate-300 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>Áries</option>
                                        <option>Touro</option>
                                        <option>Gêmeos</option>
                                        <option>Câncer</option>
                                        <option>Leão</option>
                                        <option>Virgem</option>
                                        <option>Libra</option>
                                        <option>Escorpião</option>
                                        <option>Sagitário</option>
                                        <option>Capricórnio</option>
                                        <option>Aquário</option>
                                        <option>Peixes</option>
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="cadastroTipoSangue" class="block text-sm font-medium text-gray-700">Tipo
                                        Sanguinío</label>
                                    <select name="cadastroTipoSangue" id="sangue"
                                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>O-</option>
                                        <option>O</option>
                                        <option>A-</option>
                                        <option>A</option>
                                        <option>B-</option>
                                        <option>B</option>
                                        <option>AB-</option>
                                        <option>AB</option>
                                    </select>
                                </div>
                                <div class="col-span-12 sm:col-span-3">
                                    <label for="cadastroEmail"
                                        class="block text-sm font-medium text-gray-700">E-mail</label>
                                    <input type="text" name="cadastroEmail" id="email"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>

                                <div class="col-span-12 sm:col-span-3">
                                    <label for="cadastroTelefone"
                                        class="block text-sm font-medium text-gray-700">Telefone</label>
                                    <input v-mask="phoneMask" v-model="dataPhone" type="text" name="cadastroTelefone"
                                        id="telefone"
                                        class="pl-3 bg-slate-200 outline-slate-300 h-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md">
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
                            <div class=" col-span-12 sm:col-span-3">
                                <router-link to="/" class="text-left mt-5">
                                    <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Voltar</button>
                                </router-link>
                                <router-link to="experiencia" class="text-right mt-5">
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
<script setup >
import { mask } from 'vue-the-mask';
import { ref } from 'vue';

let cpfMask = ref('###.###.###-##');
let phoneMask = ref(' (##) #####-####')
let dataCpf = ref('');
let dataPhone = ref('');


</script>