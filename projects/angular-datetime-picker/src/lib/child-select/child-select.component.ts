import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-app-child-select',
  templateUrl: './child-select.component.html',
  styleUrls: ['./child-select.component.css']
})
export class ChildSelectComponent implements OnInit, AfterViewInit {

  @Input() name: string;
  @Input() data = [];

  @Input()
  get showIndex(): number {
    return this._showIndex;
  }
  set showIndex(showIndex: number) {
    if (this._showIndex !== showIndex) {
      this._showIndex = showIndex;
    }
  }
  // tslint:disable-next-line: variable-name
  _showIndex: number;

  @Input()
  get value(): number {
    return this._value;
  }
  set value(selected: number) {
    if (this._value !== selected) {
      this._value = selected;
    }
  }
  // tslint:disable-next-line: variable-name
  _value: number;

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly showIndexChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('selectView', { static: false }) selectView: ElementRef;
  @Output() eventSelected = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectView.nativeElement.scrollTop = this._showIndex * 32;
  }

  select(data: number) {
    this._showIndex = this.data.indexOf(data);
    this._value = data;
    this.eventSelected.emit(data);
    this.valueChange.emit(data);
    this.showIndexChange.emit(this._showIndex);
    this.selectView.nativeElement.scrollTop = this._showIndex * 32;
  }
}
