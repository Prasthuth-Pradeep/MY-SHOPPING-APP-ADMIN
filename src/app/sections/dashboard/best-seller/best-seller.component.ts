import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  bestSellerCtx: any;
  bestSellerChart: any;
  bestSellerCanvas: any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.loadBestSellerChart();
  }

  async loadBestSellerChart() {
    Chart.register(...registerables);
    this.bestSellerCanvas = document.getElementById('bestSellerChart');
    this.bestSellerCtx = this.bestSellerCanvas.getContext('2d');
    this.bestSellerChart = new Chart(this.bestSellerCtx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend:{
            display: false
          }
        }
      }
    });
  }

}
