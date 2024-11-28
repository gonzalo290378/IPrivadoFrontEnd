import { Component } from '@angular/core';
import { MeetingRoomPageComponent } from '../meeting-room-page/meeting-room-page.component';
import { PublicFeedPageComponent } from '../public-feed-page/public-feed-page.component';
import { NavbarPageComponent } from '../../../shared/pages/navbar-page/navbar-page.component';
import { PostContentPageComponent } from '../../../shared/pages/post-content-page/post-content-page.component';
import { MaterialModule } from '../../../material/material-module';
import { RouterLink } from '@angular/router';
import { LinkLoginAndCreateAccountComponent } from "../../../shared/pages/link-login-and-create-account/link-login-and-create-account.component";

@Component({
  selector: 'app-layout-home-page',
  standalone: true,
  imports: [
    MeetingRoomPageComponent,
    PublicFeedPageComponent,
    NavbarPageComponent,
    PostContentPageComponent,
    MaterialModule,
    LinkLoginAndCreateAccountComponent
],
  templateUrl: './layout-home-page.component.html',
  styleUrl: './layout-home-page.component.css'
})
export class LayoutHomePageComponent {

}
