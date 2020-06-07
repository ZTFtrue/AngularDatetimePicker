import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDatetimePickerComponent } from './angular-datetime-picker.component';

describe('AngularDatetimePickerComponent', () => {
  let component: AngularDatetimePickerComponent;
  let fixture: ComponentFixture<AngularDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularDatetimePickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should virable to be have', () => {
    expect(component.maxYear).toBeTruthy();
    expect(component.minYear).toBeTruthy();
    expect(component.maxMonth).toBeTruthy();
  });
  it('should corroect day', () => {
    component.dataDay31 = [];
    component.dataDay30 = [];
    component.dataDay29 = [];
    component.dataDay28 = [];
    component.generateDays(2, 2, 2020);
    expect(component.dataDay.length === 29).toBeTrue();
    expect(component.dayIndex === 1).toBeTrue();
    component.dataDay31 = [];
    component.dataDay30 = [];
    component.dataDay29 = [];
    component.dataDay28 = [];
    component.generateDays(2, 3, 2020);
    expect(component.dataDay.length === 31).toBeTrue();
    expect(component.dayIndex === 1).toBeTrue();
    component.dataDay31 = [];
    component.dataDay30 = [];
    component.dataDay29 = [];
    component.dataDay28 = [];
    component.generateDays(2, 2, 2019);
    expect(component.dataDay.length === 28).toBeTrue();
    expect(component.dayIndex === 1).toBeTrue();
  });
  it('should can switch days', () => {
    component.selectMonth = 2;
    component.selectedMonth(2);
    component.selectYear = 2020;
    component.selectedYear(2020);
    console.log(component.dataDay);
    expect(component.dataDay.length === 29).toBeTrue();
  });
});
