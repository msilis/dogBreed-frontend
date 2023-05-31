import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { DogBreedInfoComponent } from './dogBreedInfo/dog-breed-info.component';
import { DogBreedService } from './dog-breed.service';

@NgModule({
  declarations: [AppComponent, HeadingComponent, DogBreedInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DogBreedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
