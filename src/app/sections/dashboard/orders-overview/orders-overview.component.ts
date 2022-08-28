import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-orders-overview',
  templateUrl: './orders-overview.component.html',
  styleUrls: ['./orders-overview.component.scss']
})
export class OrdersOverviewComponent implements OnInit {

  ordersOverviewCtx: any;
  ordersOverviewChart: any;
  ordersOverviewCanvas: any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.loadOrdersOverviewChart();
  }
  async loadOrdersOverviewChart() {
    Chart.register(...registerables);
    this.ordersOverviewCanvas = document.getElementById('orderOverviewChart');
    console.log(this.ordersOverviewCanvas)
    this.ordersOverviewCtx = this.ordersOverviewCanvas.getContext('2d');
    this.ordersOverviewChart = new Chart(this.ordersOverviewCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        maintainAspectRatio	: false
      }
    });
  }

}
