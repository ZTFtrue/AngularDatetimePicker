import { Component, OnInit, Input, Output, Self, Optional, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'lib-angular-datetime-picker',
  templateUrl: './angular-datetime-picker.component.html',
  styleUrls: ['./angular-datetime-picker.component.css']
})
export class AngularDatetimePickerComponent implements OnInit {


  dataYear: number[] = [];
  dataMonth: number[] = [];
  dataDay: number[] = [];
  dataHour: number[] = [];
  dataMin: number[] = [];
  dataSec: number[] = [];

  dataDay31: number[] = [];
  dataDay30: number[] = [];
  dataDay29: number[] = [];
  dataDay28: number[] = [];

  dateMonthDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  selectYear: number;
  selectMonth: number;
  selectDay: number;
  selectHour: number;
  selectMin: number;
  selectSec: number;

  /**
 * date
 * time
 * datetime
 */
  @Input() type: string;

  @Input() maxYear: number;
  @Input() minYear: number;
  @Input() maxMonth: number;
  @Input() minMonth: number;

  @Input() maxDay: number;
  @Input() minDay: number;

  @Input() maxHour: number;
  @Input() minHour: number;

  @Input() maxMin: number;
  @Input() minMin: number;

  @Input() maxSec: number;
  @Input() minSec: number;

  yearIndex = 0;
  monthIndex = 0;
  dayIndex = 0;
  hourIndex = 0;
  minIndex = 0;
  secIndex = 0;

  @Input()
  get value(): any {
    return this._value;
  }

  set value(selected: any) {
    if (this._value !== selected) {
      this._value = selected;
    }
  }

  // tslint:disable-next-line: variable-name
  _value: any;

  showSelectView = false;

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      // ngControl.valueAccessor = this;
    }
  }
  ngOnInit(): void {
    let date: Date;
    if (this._value) {
      date = new Date(this._value);
      this.selectYear = date.getFullYear();
      this.selectMonth = date.getMonth() + 1;
      this.selectDay = date.getDate();
      this.selectHour = date.getHours();
      this.selectMin = date.getMinutes();
      this.selectSec = date.getSeconds();
    } else {
      date = new Date();
    }

    if (!this.maxYear) { this.maxYear = date.getFullYear() + 50; }
    if (!this.minYear) { this.minYear = date.getFullYear() - 50; }

    if (!this.maxMonth || this.maxMonth > 12) { this.maxMonth = 12; }
    if (!this.minMonth || this.minMonth < 1) { this.minMonth = 1; }

    if (!this.maxDay || this.maxDay > 31) { this.maxDay = 31; }
    if (!this.minDay || this.minDay < 1) { this.minDay = 1; }

    if (!this.maxHour || this.maxHour > 31) { this.maxHour = 23; }
    if (!this.minHour || this.minHour < 0) { this.minHour = 0; }

    if (!this.maxMin || this.maxMin > 59) { this.maxMin = 59; }
    if (!this.minMin || this.minMin < 0) { this.minMin = 0; }

    if (!this.maxSec || this.maxSec > 59) { this.maxSec = 59; }
    if (!this.minSec || this.minSec < 0) { this.minSec = 0; }

    this.type = this.type || 'datetime';
    switch (this.type) {
      case 'date':
        this.generateYears(date.getFullYear());
        this.generateMonths(date.getMonth() + 1);
        this.generateDays(date.getDate(), date.getMonth() + 1, date.getFullYear());
        break;
      case 'time':
        this.generateHour(date.getHours());
        this.generateMin(date.getMinutes());
        this.generateSec(date.getSeconds());
        break;
      case 'datetime':
        this.generateYears(date.getFullYear());
        this.generateMonths(date.getMonth() + 1);
        this.generateDays(date.getDate(), date.getMonth() + 1, date.getFullYear());
        this.generateHour(date.getHours());
        this.generateMin(date.getMinutes());
        this.generateSec(date.getSeconds());
        break;
      default:
        break;
    }
    console.log(this.yearIndex)
  }
  selectedYear(data: number) {
    setTimeout(e => {
      console.log(this.selectYear);
      console.log(this.yearIndex);
    }, 1000);
    this.fullDay(this.selectDay, this.selectMonth, data);
  }
  selectedMonth(data: number) {
    this.fullDay(this.selectDay, data, this.selectYear);
  }
  selectedDay(data: number) {

  }
  selectedHour(data: number) {

  }
  selectedMin(data: number) {

  }
  selectedSec(data: number) {

  }
  /***
   * yearIndex
  monthIndex
  dayIndex =
  hourIndex
  minIndex =
  secIndex =
   */
  generateYears(year: number) {
    for (let i = this.minYear; i <= this.maxYear; i++) {
      this.dataYear.push(i);
    }
    this.yearIndex = this.dataYear.indexOf(year);
  }
  generateMonths(month: number) {
    for (let i = this.minMonth; i <= this.maxMonth; i++) {
      this.dataMonth.push(i);
    }
    this.monthIndex = this.dataMonth.indexOf(month);
  }

  generateDays(day: number, month: number, year: number) {
    for (let i = this.minDay; i <= this.maxDay; i++) {
      this.dataDay31.push(i);
      if (i <= 30) {
        this.dataDay30.push(i);
        if (i <= 29) {
          this.dataDay29.push(i);
        }
        if (i <= 28) {
          this.dataDay28.push(i);
        }
      }
    }
    this.fullDay(day, month, year);
  }
  fullDay(day: number, month: number, year: number) {
    if (year % 4 === 0 && month === 2) {
      this.dataDay = this.dataDay29;
    } else {
      const tempDay = this.dateMonthDays[month - 1];
      if (tempDay === 31) {
        this.dataDay = this.dataDay31;
      } else if (tempDay === 30) {
        this.dataDay = this.dataDay30;
      } else {
        this.dataDay = this.dataDay28;
      }
    }
    this.dayIndex = this.dataDay.indexOf(day);
  }
  generateHour(hour: number) {
    for (let i = this.minHour; i <= this.maxHour; i++) {
      this.dataHour.push(i);
    }
    this.hourIndex = this.dataHour.indexOf(hour);
  }
  generateMin(min: number) {
    for (let i = this.minMin; i <= this.maxMin; i++) {
      this.dataMin.push(i);
    }
    this.minIndex = this.dataMin.indexOf(min);
  }
  generateSec(sec: number) {
    for (let i = this.minSec; i <= this.maxSec; i++) {
      this.dataSec.push(i);
    }
    this.secIndex = this.dataSec.indexOf(sec);
  }
  // 重新生成一下index
  ok() {
    switch (this.type) {
      case 'date':
        if (this.selectYear && this.selectMonth && this.selectDay) {
          this._value = this.selectYear + '-' + this.selectMonth + '-' + this.selectDay;
        }
        break;
      case 'time':
        if (this.selectHour && this.selectMin && this.selectSec) {
          this._value = this.selectHour + ':' + this.selectMin + ':' + this.selectSec;
        }
        break;
      case 'datetime':
        if (this.selectYear && this.selectMonth && this.selectDay && this.selectHour && this.selectMin && this.selectSec) {
          this._value = this.selectYear + '-' +
            this.selectMonth + '-' + this.selectDay + ' ' +
            this.selectHour + ':' + this.selectMin + ':' + this.selectSec;
        }
        break;
      default:
        break;
    }
    this.valueChange.emit(this._value);
    this.showSelectView = false;
  }
}
