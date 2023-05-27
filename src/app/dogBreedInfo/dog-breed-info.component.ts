import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dog-breed-info',
  templateUrl: './dog-breed-info.component.html',
  styleUrls: ['./dog-breed-info.component.css'],
})
export class DogBreedInfoComponent implements OnInit {
  dogData: any[] = [];

  ngOnInit(): void {
    this.fetchArray();
  }

  constructor(private http: HttpClient) {}
  rootUrl: string = 'http://localhost:3000/allDogs';

  fetchArray() {
    this.http.get<any[]>('http://localhost:3000/allDogs').subscribe(
      (data) => {
        this.dogData = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectedDog: any = null;
  showMoreInfo: boolean = false;

  showDetails(dog: any) {
    this.selectedDog = dog;
    this.showMoreInfo = true;
  }

  closeInfo() {
    this.selectedDog = null;
    this.showMoreInfo = false;
  }
}
