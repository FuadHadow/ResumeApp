import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  standalone: true, 
  imports: [CommonModule],
})
export class PortfolioComponent implements OnInit {
  portfolioItems!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.portfolioItems = this.dataService.getPortfolio();
  }
}
