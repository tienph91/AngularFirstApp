import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-latest-new',
  templateUrl: './latest-new.component.html',
  styleUrls: ['./latest-new.component.css']
})
export class LatestNewComponent implements OnInit {
  latestNewForm;

  constructor(private formBuilder: FormBuilder,) {
    this.latestNewForm = this.formBuilder.group({

    });
 
   }

  ngOnInit(): void {
    
  }

}
