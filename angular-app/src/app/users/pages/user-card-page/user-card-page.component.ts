import { Component, Input, OnInit } from '@angular/core';
import { UserDTO } from '../../../dto/user-dto';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatList } from '@angular/material/list';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UserImagePipe } from '../../pipes/user-image.pipe';

@Component({
  selector: 'app-user-card-page',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatGridListModule,
    MatChipListbox,
    MatChip,
    MatCardActions,
    MatButton,
    MatIcon,
    RouterLink,
    UserImagePipe,
    
  ],
  templateUrl: './user-card-page.component.html',
  styleUrl: './user-card-page.component.css'
})
export class UserCardPageComponent implements OnInit{

  @Input()
  user?: UserDTO;

  ngOnInit(): void {
    if(!this.user) throw Error('User is required')
  }
}
