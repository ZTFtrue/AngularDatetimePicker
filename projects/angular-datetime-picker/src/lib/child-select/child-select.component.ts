import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child-select',
  templateUrl: './child-select.component.html',
  styleUrls: ['./child-select.component.css']
})
export class ChildSelectComponent implements OnInit, AfterViewInit {

  @Input() name: string;
  @Input() data = [];
  @Input() showIndex = 0;


  @Input()
  get value(): number {
    return this._value;
  }

  set value(selected: number) {
    if (this._value !== selected) {
      this._value = selected;
    }
  }
  _value: number;
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('selectView', { static: false }) selectView: ElementRef;
  @Output() eventSelected = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectView.nativeElement.scrollTop = this.showIndex * 32;
  }

  select(data: number) {
    this._value = data;
    this.eventSelected.emit(data);
    this.valueChange.emit(data);
    this.selectView.nativeElement.scrollTop = this.data.indexOf(data) * 32;
  }
}
