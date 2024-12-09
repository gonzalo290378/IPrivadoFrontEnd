import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { SearchBoxComponent } from '../../../shared/pages/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    MaterialModule,
    SearchBoxComponent,
    CountryTableComponent,
    FormsModule,
  ],
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public initialValue: string = '';
  public countries: Country[] = [];

  constructor( private countryService: CountryService ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ):void  {
    this.countryService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      });

  }
}