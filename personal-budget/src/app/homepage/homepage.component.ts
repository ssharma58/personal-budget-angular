import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {chart} from 'chart.js';

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res);

      for ( let i = 0; i < res.mybudget[i].length; i++){
       this.datasource.datasets[0].data[i] = res.mybudget[i].budget;
       this.datasource.labels[i] = res.mybudget[i].title;
       this.createChart();
    }

    });
  }
    // tslint:disable-next-line: typedef
    createChart(){
    const ctx = document.getElementById('myChart');
    const myPieChart = new chart(ctx, {
        type : 'pie',
        data: this.datasource
    });
    }


}
