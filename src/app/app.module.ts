import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpHeaders } from "@angular/common/http";

//servicios
import { ServiciosService } from './services/servicios.service';

import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router'

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidnavComponent } from './components/shared/sidnav/sidnav.component';
import { AdscreenComponent } from './components/adscreen/adscreen.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipoDetalleComponent } from './components/shared/modals/equipo-detalle/equipo-detalle.component';
import { HomeComponent } from './components/home/home.component';

import { ChartsComponent } from './components/charts/charts.component';

import { DevicesDisconnectedComponent } from './components/charts/devices-disconnected/devices-disconnected.component';
import { DevicesVersionAppComponent } from './components/charts/devices-version-app/devices-version-app.component';
import { DevicesCatalogueVersionComponent } from './components/charts/devices-catalogue-version/devices-catalogue-version.component';

import { EstadoEquiposComponent } from './components/estado-equipos/estado-equipos.component';
import { TopDesconectadosComponent } from './components/charts/top-desconectados/top-desconectados.component';
import { ListaCatalogosComponent } from './components/lista-catalogos/lista-catalogos.component';
import { ListaDispositivosComponent } from './components/lista-dispositivos/lista-dispositivos.component';
import { CatalogueVersionSucursalComponent } from './components/charts/catalogue-version-sucursal/catalogue-version-sucursal.component';
import { ApkComponent } from './components/charts/apk/apk.component';
import { ApkSucursalesComponent } from './components/charts/apk-sucursales/apk-sucursales.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'DashboardComponent', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adscreen', component: AdscreenComponent},
  { path: '**', component:HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidnavComponent,
    AdscreenComponent,
    LoginComponent,
    DashboardComponent,
    EquipoDetalleComponent,
    HomeComponent,
    ChartsComponent,
    DevicesDisconnectedComponent,
    DevicesVersionAppComponent,
    DevicesCatalogueVersionComponent,
    EstadoEquiposComponent,
    TopDesconectadosComponent,
    ListaCatalogosComponent,
    ListaDispositivosComponent,
    CatalogueVersionSucursalComponent,
    ApkComponent,
    ApkSucursalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },
    ), 
    BrowserAnimationsModule,
    MzButtonModule,
    MzModalModule,
    MzSidenavModule,
    MzSelectModule
    
  ],
  providers: [
    ServiciosService,
    AuthGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, //Interceptor
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
   }

 }
