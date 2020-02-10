import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAreaRoutingModule } from './user-area-routing.module';
import {AuthenticationGuard} from '../services/authentication.guard';

import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    UserAreaRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [UserProfileComponent],
  providers: [AuthenticationGuard]
})
export class UserAreaModule { }