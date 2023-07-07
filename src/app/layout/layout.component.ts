import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isList!: number;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
