import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class ReferenceComponent implements OnInit {
  references!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.references = this.dataService.getReferences();
  }
}
