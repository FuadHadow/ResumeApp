import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class EducationComponent implements OnInit {
  educationList!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.educationList = this.dataService.getEducation();
  }
}
