<template>
  <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
    <div class="col-start-2 col-span-4 rounded-md shadow">
      <div class="flex flex-col">
        <div class="flex justify-center align-center">
          <img alt="Logo" class="rounded-md" src="../assets/BrasaoCBMSE.png">
        </div>
      </div>
      <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
        <h1 class="font-medium text-xl">Trabalhe conosco</h1>
      </div>
      <div class="col-span-6 m-2">

        <div class="rounded-md shadow gap-4 m-4">
          <router-link to="dadosPessoais" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Cadastre-se 
          </router-link>
        </div>
        <div class="rounded-md shadow m-4">
          <router-link to="listaCandidatos" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Ver concorrentes 
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
