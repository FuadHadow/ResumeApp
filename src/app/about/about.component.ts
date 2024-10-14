import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true, 
})
export class AboutComponent implements OnInit {
  description!: string;
  basicInfo!: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const data = this.dataService.getAboutData();
    this.description = data.description;
    this.basicInfo = data.basicInfo;
  }
}
