import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true, 
})
export class ContactComponent implements OnInit {
  contactInfo!: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.contactInfo = this.dataService.getContact();
  }
}
