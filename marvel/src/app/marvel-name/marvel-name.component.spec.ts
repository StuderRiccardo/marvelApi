import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelNameComponent } from './marvel-name.component';

describe('MarvelNameComponent', () => {
  let component: MarvelNameComponent;
  let fixture: ComponentFixture<MarvelNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelNameComponent]
    });
    fixture = TestBed.createComponent(MarvelNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
