import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { PitchComponent } from 'app/pitch/pitch.component';
import { PlayerComponent } from 'app/player/player.component';
import { AuthLoginV2Component } from '../pages/authentication/auth-login-v2/auth-login-v2.component';
import { RoomComponent } from 'app/room/room.component';

const routes = [
  {
    path: 'pitchs',
    component: PitchComponent,
    data: { animation: 'pitchs' }
  },
  {
    path: 'players',
    component: PlayerComponent,
    data: { animation: 'players' }
  },
  {
    path: 'players/:roomId',
    component: RoomComponent,
  },
  {
    path: 'login',
    component: AuthLoginV2Component,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
