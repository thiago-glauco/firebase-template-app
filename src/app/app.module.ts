import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AuthenticationModule} from './authentication/authentication.module';
import {UserAreaModule} from './user-area/user-area.module';

import {AngularFireModule} from '@angular/fire';
import {environment} from './environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import {UnloggedComponent } from './unlogged/unlogged.component';
import { BoggusUserService } from './services/boggus-user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AuthenticationModule,
    UserAreaModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
    ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, UnloggedComponent, HomeComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticationService, UserService, BoggusUserService]
})
export class AppModule { }
