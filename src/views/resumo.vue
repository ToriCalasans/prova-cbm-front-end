<template>

    <div class="text-right mt-5">
    </div>
    <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
        <div class="col-start-2 col-span-4 rounded-md shadow">
            <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
                <h1 class="font-medium text-xl">Resumo</h1>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6">
                                <div class="flex justify-center">
                                    <div class="px-4 py-5 bg-white sm:p-6">
                                        <label for="cadastroResumo"
                                            class="ml-3 form-label inline-block text-gray-700">Resumo</label>
                                        <textarea name="cadastroResumo" id="resumo" rows="8" placeholder="Sobre você"
                                            class="
                                            ml-3
                                            form-control
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            focus:text-gray-700 
                                            focus:bg-white
                                            focus:border-blue-600
                                            focus:outline-none">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
                            <div class=" col-span-12 sm:col-span-3">
                                <router-link to="experiencia" class="text-left mt-5">
                                    <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Voltar</button>
                                </router-link>
                                <router-link to="/">
                                    <button @click="sucesso()" data-bs-toggle="modal" data-bs-target="cadastradoSucesso"
                                        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Salvar
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

</script>
