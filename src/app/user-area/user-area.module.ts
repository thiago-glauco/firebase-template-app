import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAreaRoutingModule } from './user-area-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UserProfileComponent]
})
export class UserAreaModule { }