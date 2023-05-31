import { Component, OnInit } from '@angular/core';

import { DogBreedService } from '../dog-breed.service';

@Component({
  selector: 'app-dog-breed-info',
  templateUrl: './dog-breed-info.component.html',
  styleUrls: ['./dog-breed-info.component.css'],
})
export class DogBreedInfoComponent implements OnInit {
  dogData: any[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.fetchArray();
  }

  constructor(private dogBreedService: DogBreedService) {}

  //For Local Testing
  fetchArray() {
    this.isLoading = true;
    this.dogBreedService.fetchDogInfo().subscribe(
      (data) => {
        this.dogData = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  //For Production build
  /*  fetchArray() {
    this.isLoading = true;
    this.http
      .get<any[]>('https://fluffy-octo-invention.vercel.app/allDogs')
      .subscribe(
        (data) => {
          this.dogData = data;
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  } */

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
