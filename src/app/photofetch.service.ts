import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface UnsplashRandom {
  urls: {
    raw: string;
    regular: string;
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotofetchService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashRandom>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID 4C32QZuAHVi-9eF3ymLUv70ahUj-EbAbzV_gmhNUv_Y',
        },
      })
      .pipe(map((x) => x.urls?.regular));
  }
}
