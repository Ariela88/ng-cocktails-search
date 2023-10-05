import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/model/cocktail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  
  @Input() cocktails: Cocktail[] = [];

}
