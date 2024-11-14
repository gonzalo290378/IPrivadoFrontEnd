import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FreeContentComponent } from './components/free-content/free-content.component';
import { PublicContentComponent } from './components/public-content/public-content.component';
import { MeetingRoomComponent } from './components/meeting-room/meeting-room.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MenuComponent } from "./components/menu/menu.component";
import { PostFreeContentComponent } from "./components/post-free-content/post-free-content.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    FreeContentComponent,
    PublicContentComponent,
    MeetingRoomComponent,
    UserProfileComponent,
    MenuComponent,
    PostFreeContentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IPrivado';
}
