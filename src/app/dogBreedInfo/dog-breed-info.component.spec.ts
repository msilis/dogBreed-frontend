import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogBreedInfoComponent } from './dog-breed-info.component';

describe('DogBreedInfoComponent', () => {
  let component: DogBreedInfoComponent;
  let fixture: ComponentFixture<DogBreedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogBreedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
