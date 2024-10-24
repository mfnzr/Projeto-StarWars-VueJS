import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PeopleView from '@/views/PeopleView.vue';
import StarshipsView from '@/views/StarshipsView.vue';

import LukeView from '@/views/LukeView.vue';
import LeiaView from '@/views/LeiaView.vue';
import HanSoloView from '@/views/HanSoloView.vue';
import ChewbaccaView from '@/views/ChewbaccaView.vue';
import YodaView from '@/views/YodaView.vue';
import KenobiView from '@/views/KenobiView.vue';
import DarthVaderView from '@/views/DarthVaderView.vue';
import R2D2View from '@/views/R2D2View.vue';
import C3POView from '@/views/C3POView.vue';

import DeathStarView from '@/views/DeathStarView.vue';
import StarDestroyerView from '@/views/StarDestroyerView.vue';
import TieAdvancedView from '@/views/TieAdvancedView.vue';
import XWingView from '@/views/XWingView.vue';
import MillenniumFalconView from '@/views/MillenniumFalconView.vue';
import Slave1View from '@/views/Slave1View.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/', name: 'Home', component: HomeView },
      { path: '/people', name: 'People', component: PeopleView },
      { path: '/starships', name: 'Starships', component: StarshipsView },
      { path: '/luke', name: 'Luke', component: LukeView },
      { path: '/leia', name: 'Leia', component: LeiaView }, 
      { path: '/hansolo', name: 'HanSolo', component: HanSoloView },
      { path: '/chewbacca', name: 'Chewbacca', component: ChewbaccaView },
      { path: '/yoda', name: 'Yoda', component: YodaView },
      { path: '/kenobi', name: 'Kenobi', component: KenobiView },
      { path: '/darthvader', name: 'DarthVader', component: DarthVaderView },
      { path: '/r2d2', name: 'R2D2', component: R2D2View }, 
      { path: '/c3po', name: 'C3PO', component: C3POView },
      { path: '/deathstar', name: 'DeathStar', component: DeathStarView },
      { path: '/stardestroyer', name: 'StarDestroyer', component: StarDestroyerView},
      { path: '/tieadvancedx1', name: 'TieAdvanced', component: TieAdvancedView},
      { path: '/xwing', name: 'XWing', component: XWingView},
      { path: '/millenniumfalcon', name: 'MillenniumFalcon', component: MillenniumFalconView},
      { path: '/slave1', name: 'Slave1', component: Slave1View},
    ]
}); 

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;