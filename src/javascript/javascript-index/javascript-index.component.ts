import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-javascript-index',
  templateUrl: './javascript-index.component.html',
  styleUrls: ['./javascript-index.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class JavascriptIndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
