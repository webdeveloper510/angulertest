import { Component, OnInit } from '@angular/core';
import data from '../../assets/text.json'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
pageData=data
  constructor() { }

  ngOnInit(): void {
    console.log(this.pageData)
  }

}
