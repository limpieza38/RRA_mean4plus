import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsFormComponent } from './records-form.component';

describe('RecordsFormComponent', () => {
  let component: RecordsFormComponent;
  let fixture: ComponentFixture<RecordsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
