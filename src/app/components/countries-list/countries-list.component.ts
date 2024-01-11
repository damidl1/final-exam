import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/model/countries';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit{

  countries: Countries[] = [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.allCountries.subscribe(count => this.countries = count);
  }

}
