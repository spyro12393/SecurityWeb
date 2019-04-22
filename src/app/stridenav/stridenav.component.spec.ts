import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STRIDENavComponent } from './stridenav.component';

describe('STRIDENavComponent', () => {
  let component: STRIDENavComponent;
  let fixture: ComponentFixture<STRIDENavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STRIDENavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STRIDENavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
