import { HomeService } from './../../../services/home-service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private HomeService : HomeService) { }

  ngOnInit(): void {
    this.service.get
  }
