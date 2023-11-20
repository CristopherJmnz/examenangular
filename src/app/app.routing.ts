import{ Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { CompraComponent } from './components/compra/compra.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes:Routes=[
    {path:"", component:HomeComponent},
    {path:"cubos/:marca", component:CubosComponent},
    {path:"detalles/:id", component:DetallescuboComponent},
    {path:"login", component:LoginComponent},
    {path:"registro", component:RegistroComponent},
    {path:"perfil", component:PerfilComponent},
    {path:"comprar", component:CompraComponent},
]
export const appRoutingProvider:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
