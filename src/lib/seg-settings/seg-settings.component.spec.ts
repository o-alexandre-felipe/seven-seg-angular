import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegSettingsComponent } from './seg-settings.component';

describe('SegSettingsComponent', () => {
  let component: SegSettingsComponent;
  let fixture: ComponentFixture<SegSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
