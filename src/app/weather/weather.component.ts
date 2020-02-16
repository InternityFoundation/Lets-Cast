import { Component, OnInit } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(    private apixuService: ApixuService,
                  private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
    });
  }
}
