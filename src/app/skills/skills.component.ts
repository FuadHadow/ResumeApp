import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class SkillsComponent implements OnInit {
  skills!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}
