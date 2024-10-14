import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  name!: string;
  role!: string;
  image!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const data = this.dataService.getHeaderData();
    this.name = data.name;
    this.role = data.role;
    this.image = data.image;
  }
}
