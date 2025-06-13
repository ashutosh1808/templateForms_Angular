import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports:[FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string="";
  email:string="";
  country:string="";
  city:string="";

  countries=[
    "usa","uk","india"
  ]

  cities: {[key:string]:string[]}={
    usa:['New York','LA','Chicago'],
    uk:['London','Dublin','Glasgow'],
    india:['Delhi','Mumbai','Chennai','Kolkata']
  }

  submitForm(myForm:NgForm){
    if(myForm.valid){
      const formValues=JSON.stringify(myForm.value);
      console.log(formValues)
      alert("Form submitted successfully!")
    }
    else{
      alert("Please fill up the data")
    }
  }

  resetValue(myForm:NgForm){
    myForm.resetForm();
  }
  
  getCountriesById(country:string){
    return this.cities[country] || []
  }
}
