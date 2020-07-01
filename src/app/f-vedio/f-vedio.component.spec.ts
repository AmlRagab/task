import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FVedioComponent } from './f-vedio.component';

describe('FVedioComponent', () => {
  let component: FVedioComponent;
  let fixture: ComponentFixture<FVedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FVedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
