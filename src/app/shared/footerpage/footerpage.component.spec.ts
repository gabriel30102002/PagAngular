import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpageComponent } from './footerpage.component';

describe('FooterpageComponent', () => {
  let component: FooterpageComponent;
  let fixture: ComponentFixture<FooterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
