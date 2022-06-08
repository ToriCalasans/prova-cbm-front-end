import { createRouter, createWebHistory } from "vue-router";
import TrabalheConosco from "../views/trabalheConosco.vue";
import ListaCandidatos from "../views/listaCandidatos.vue";
import DadosPessoais from "../views/dadosPessoais.vue";
import Experiencia from "../views/experiencia.vue";
import Resumo from "../views/resumo.vue";
import CadastradoSucesso from "../views/cadastradoSucesso.vue";
import Perfil from "../views/perfil.vue";


const routes = [
    {
      path: "/",
      component: TrabalheConosco,
    },
    {
      path: "/listaCandidatos",
      name: "menu-listaCandidatos",
      component: ListaCandidatos,
    },
    {
      path: "/dadosPessoais",
      name: "menu-dadosPessoais",
      component: DadosPessoais,
    },
    {
         path: "/experiencia",
         name: "menu-experiencias",
         component: Experiencia,
    },
    {
      path: "/resumo",
      name: "menu-resumo",
      component: Resumo,
    },
    {
      path: "/cadastradoSucesso",
      name: "menu-cadastradoSucesso",
      component: CadastradoSucesso,
    },
    {
      path: "/perfil",
      name: "menu-perfil",
      component: Perfil,
    } 
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { left: 0, top: 0 };
    },
  });
  export default router;