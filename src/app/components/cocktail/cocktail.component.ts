import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/model/cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent {

  @Input() cocktails?:Cocktail;

}
