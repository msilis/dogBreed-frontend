import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogBreedService {
  constructor(private httpClient: HttpClient) {}

  fetchDogInfo(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/allDogs');
  }
}
