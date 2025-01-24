import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../users/services/auth.service';

@Component({
    selector: 'app-post-content-page',
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
    ],
    templateUrl: './post-content-page.component.html',
    styleUrl: './post-content-page.component.css'
})
export class PostContentPageComponent {

  constructor(private authService: AuthService) {}

  
  uploadedImages: string[] = [];
  textComment: string = '';
  isDragOver = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => this.uploadedImages.push(e.target.result);
        reader.readAsDataURL(file);
      });
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files) {
      Array.from(event.dataTransfer.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => this.uploadedImages.push(e.target.result);
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1);
  }

  submit(): void {
    console.log('Imágenes subidas:', this.uploadedImages);
    console.log('Comentario:', this.textComment);
  }

  
    get authenticated(){
      return this.authService.authenticated();
    }

}
