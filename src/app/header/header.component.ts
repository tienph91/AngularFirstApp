import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchText: ''
    });
  }

}
