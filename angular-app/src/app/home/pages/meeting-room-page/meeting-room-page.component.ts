import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserDTO } from '../../../dto/user-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-room-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './meeting-room-page.component.html',
  styleUrl: './meeting-room-page.component.css',
})

export class MeetingRoomPageComponent implements OnInit {

  constructor(private userService: UserService) {}
    
  users: UserDTO[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  page = 0;
  size = 5;

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.isLoading = true;
    this.error = null;
  
    this.userService.findAll(this.page, this.size).subscribe({
      next: (data) => {
        this.users = data.content;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        console.error(err);
        this.isLoading = false;
      },
    });
  }

}
