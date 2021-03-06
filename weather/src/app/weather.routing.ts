import {Routes, RouterModule} from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ResolveLocationService } from './resolve-location.service';

const WEATHER_ROUTER: Routes =[
    {path: '', component: CurrentComponent, resolve:{current : ResolveLocationService} },
    {path: 'forecast', component:ForecastComponent}
]

export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)