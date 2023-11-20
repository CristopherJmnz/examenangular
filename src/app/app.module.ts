import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { routing,appRoutingProvider } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CubosService } from './services/cubos.service';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CompraComponent } from './components/compra/compra.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubosComponent,
    DetallescuboComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProvider,
    CubosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
