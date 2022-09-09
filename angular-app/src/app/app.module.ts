import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoComponent } from './components/video/video.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  {path: '', component: VideosComponent},
  {path: 'video/:id', component: VideoPlayerComponent},
  {path: '**', pathMatch: 'full', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    VideoComponent,
    AddVideoComponent,
    VideoPlayerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
