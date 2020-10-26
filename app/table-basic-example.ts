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
  viewChange: boolean = false;
  elmState = [];
  selectedCell = null;
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
    setTimeout(() => {
      this.viewChange = true;
      this.getTableCellPosition();
    });
  }
  getTableCellPosition() {
    console.log(this.table);
    this.table.map((res, index) => {
      console.log(res);
      this.isInViewport(res.nativeElement, index);
    });
    console.log(this.selectedCell);
  }

  getAvailableColumn() {
    for (let index in this.elmState) {
      if (
        !this.elmState[index].compliteListElm &&
        this.elmState[index].partialListElm
      ) {
        this.elmState[index].cellIndex = this.displayedColumns[index];
        return this.elmState[index];
      } else if (
        !this.elmState[index].compliteListElm &&
        !this.elmState[index].partialListElm
      ) {
        const ind = parseInt(index, 10) - 1;
        this.elmState[ind].cellIndex = this.displayedColumns[ind];
        return this.elmState[ind];
      }
    }
  }
  isInViewport(element, index) {
    const rect = element.getBoundingClientRect();
    const elm = {
      compliteListElm:
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= this.tableWraper.nativeElement.offsetWidth,
      partialListElm:
        rect.right - element.offsetWidth <=
        this.tableWraper.nativeElement.offsetWidth,
      elmWidthBetween:
        this.tableWraper.nativeElement.offsetWidth -
        (rect.right - element.offsetWidth),
      cellIndex: null
    };
    if (this.selectedCell === null) {
      if (!elm.compliteListElm && elm.partialListElm) {
        elm.cellIndex = this.displayedColumns[index];
        this.selectedCell = elm;
      } else if (!elm.compliteListElm && !elm.partialListElm) {
        const ind = parseInt(index, 10) - 1;
        elm.cellIndex = this.displayedColumns[ind];
        this.selectedCell = elm;
      }
    }
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
