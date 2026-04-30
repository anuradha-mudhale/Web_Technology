import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Rps } from '../games/rps/rps';
import { Memory } from '../games/memory/memory';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'rps',component:Rps},
    {path:'memory',component:Memory},

];

