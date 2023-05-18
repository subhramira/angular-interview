import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css'],
  standalone: true,
  imports:[RouterModule]
})
export class MainIndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
