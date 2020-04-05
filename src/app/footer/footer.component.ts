import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerForm;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.footerForm = this.formBuilder.group({
      searchText: ''
    });
  }

}
