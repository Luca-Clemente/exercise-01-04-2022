import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';
import { SubjectsService } from './subjects.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TimerComponent,
    SubjectsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, SubjectsService],
})
export class AppModule {}
