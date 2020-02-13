import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAreaRoutingModule } from './user-area-routing.module';
import {AuthenticationGuard} from '../services/authentication.guard';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { ImageCropperModule } from 'ngx-image-cropper';

import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

const config: InputFileConfig = {};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserAreaRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    ImageCropperModule,
    InputFileModule.forRoot(config)
  ],
  declarations: [UserProfileComponent, PhotoUploadComponent],
  providers: [AuthenticationGuard]
})
export class UserAreaModule { }