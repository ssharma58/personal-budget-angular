import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public datasource = {
    datasets: [
       {
           data: [],
        backgroundColor: [
                '#FF6384',
                '#63FF84',
                '#84FF63',
                '#8463FF',
                '#808000',
                '#FFFF00',
          ],
       }
    ],
    labels: []
      };

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => {
      console.log(res);
      for ( var i = 0 ; i < res.mybudget.length; i++) {
          this.datasource.datasets[0].data[i] = res.mybudget[i].budget;
          this.datasource.labels[i] = res.mybudget[i].title;
          this.createChart();
      }
    });
    }

    // tslint:disable-next-line: typedef
    createChart(){
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type : 'pie',
        data: this.datasource
    });
    }


}
