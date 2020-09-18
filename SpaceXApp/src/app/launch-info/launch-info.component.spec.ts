import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchInfoComponent } from './launch-info.component';

describe('LaunchInfoComponent', () => {
  let component: LaunchInfoComponent;
  let fixture: ComponentFixture<LaunchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
