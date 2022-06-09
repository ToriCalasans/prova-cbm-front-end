<template>
    <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
        <div class="col-start-2 col-span-4 rounded-md shadow">
            <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
                <h1 class="font-medium text-xl">Lista de candidatos</h1>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                                <div class="w-56 relative text-slate-500">
                                    <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="max-w-sm w-full lg:max-w-full lg:flex">
                            <div
                                class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="text-gray-900 font-bold text-xl mb-2">Aurora Tereza Regina Jesus</div>
                                </div>
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full mr-4" src="../assets/avatar.jpg" alt="Avatar">
                                    <div class="text-sm">
                                        <router-link to="perfil" class="text-right mt-5">
                                            <button type="submit"
                                                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Ver
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
                        <div class=" col-span-12 sm:col-span-3">
                            <router-link to="/" class="text-left mt-5">
                                <button type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Voltar</button>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>