<template>
  <div class="grid grid-cols-6 flex items-center justify-center m-16 drop-shadow">
    <div class="col-start-2 col-span-4 rounded-md shadow">
      <div class="flex flex-col justify-center sm:flex-row items-center p-5 border-b border-slate-200/60">
        <h1 class="font-medium text-xl">Perfil do candidato</h1>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <img class="w-10 h-10 rounded-full mr-4" src="../assets/avatar.jpg" alt="Avatar">
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Nome:</div>
                    <div class="px-4 py-2">Aurora Tereza Regina Jesus</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">CPF</div>
                    <div class="px-4 py-2">79349886057</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Data de Nascimento</div>
                    <div class="px-4 py-2">1983/04/12</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">
                      Signo
                    </div>
                    <div class="px-4 py-2">Áries</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Tipo sanguinío</div>
                    <div class="px-4 py-2">B+</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">aurora-jesus94@moyageorges.com.br</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Telefone</div>
                    <div class="px-4 py-2">91988285303</div>
                  </div>
                </div>

              </div>
              <div class="grid grid-cols-1">
                <p>Resumo</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div class="grid grid-cols-1">
                <p>Formação</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Instituicao: FANESE</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Curso: Faz tudo</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Instituicao: Pio Decimo</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Curso: Faz tudo II</p>
              </div>
              <div class="grid grid-cols-1">
                <p>Experiência</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Empresa: Maratá</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Cargo: Desenvolvedor front-end</p>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-12">
                  Tempo: Empresa atual</p>
              </div>

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <div class=" col-span-12 sm:col-span-3">
              <router-link to="listaCandidatos" class="text-left mt-5">
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