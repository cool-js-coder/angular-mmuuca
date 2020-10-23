import {
  Component,
  ViewChild,
  ViewChildren,
  OnInit,
  QueryList,
  AfterViewInit
} from "@angular/core";

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample implements OnInit, AfterViewInit {
  @ViewChildren("tableCell") table: QueryList<any>;
  @ViewChild("tableWraper") tableWraper;
  displayedColumns = [
    "position",
    "name",
    "weight",
    "symbol",
    "a",
    "b",
    "c",
    "d"
  ];
  dataSource = ELEMENT_DATA;
  ngOnInit() {}
  ngAfterViewInit() {
    this.getTableCellPosition();
  }
  getTableCellPosition() {
    this.table.map(res => {
      console.log(this.isInViewport(res.nativeElement));
    });
    console.log(this.tableWraper.nativeElement.offsetWidth);
  }
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= this.tableWraper.nativeElement.offsetWidth
    );
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  a: string;
  b: string;
  c: string;
  d: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 2,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 3,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 4,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 5,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 6,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 7,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 8,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 9,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  },
  {
    position: 10,
    name: "Hydrogen adksfk afakjf",
    weight: 15000000.0079,
    symbol: "Hyakfjds faklfjas faskfjasjffd",
    a: "About us Working on",
    b: " Both side working",
    c: "Continues pressure",
    d: "Continues pressure"
  }
];

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
