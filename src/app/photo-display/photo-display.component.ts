import { Component, OnInit } from '@angular/core';
import { PhotofetchService } from '../photofetch.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css'],
})
export class PhotoDisplayComponent implements OnInit {
  photoURL: string = '';

  constructor(private Photofetch: PhotofetchService) {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();
    console.log('submitted');
    this.Photofetch.getPhoto().subscribe((response) => {
      console.log(response);
      this.photoURL = response;
    });
  }
}
