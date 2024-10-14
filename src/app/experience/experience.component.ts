import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class ExperienceComponent implements OnInit {
  experiences!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperience();
  }
}
