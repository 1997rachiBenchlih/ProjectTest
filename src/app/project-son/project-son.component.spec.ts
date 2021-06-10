import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSonComponent } from './project-son.component';

describe('ProjectSonComponent', () => {
  let component: ProjectSonComponent;
  let fixture: ComponentFixture<ProjectSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
