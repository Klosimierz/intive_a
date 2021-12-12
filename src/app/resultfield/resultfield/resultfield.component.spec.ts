import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultfieldComponent } from './resultfield.component';

describe('ResultfieldComponent', () => {
  let component: ResultfieldComponent;
  let fixture: ComponentFixture<ResultfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
