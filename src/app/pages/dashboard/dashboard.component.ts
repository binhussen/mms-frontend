import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, single } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  /**
   * dashboard report design
   *
   */

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Board', rows: 1, cols: 2 },
          { title: 'lineChart', cols: 1, rows: 2 },
          { title: 'pieChart', cols: 1, rows: 2 },
        ];
      }

      return [
        { title: 'board', cols: 2, rows: 1 },
        { title: 'lineChart', cols: 1, rows: 1 },
        { title: 'pieChart', cols: 1, rows: 2 },
      ];
    })
  );
  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService
  ) {}
  localError() {
    throw Error('The app component has thrown an error!');
  }

  failingRequest() {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }

  successfulRequest() {
    this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
  }

  //

  //
  numberOfRequests!: number;
  numberOfDamages!: number;
  numberOfWeapon!: number;
  numberOfBullet!: number;
  numberOfOther!: number;
  numberOfCustomer!:number;
  //Pie Chart
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  pieChartData = [
    {
      name: 'Weapon',
      value: 1,
    },
    {
      name: 'Bullet',
      value: 1,
    },
    {
      name: 'Other',
      value: 1,
    },
    {
      name: 'Requests',
      value: 1,
    },
    {
      name: 'Damages',
      value: 1,
    },
  ];
  //
  statCardList = [
    {
      icon: 'storefront',
      title: 'Number of item In Store',
      amount: this.numberOfWeapon,
    },
    {
      icon: 'shopping_cart',
      title: 'Number of Requests',
      amount: this.numberOfRequests,
    },
    {
      icon: 'shopping_cart',
      title: 'Number of Damages',
      amount: this.numberOfDamages,
    },
    {
      icon: 'group icon',
      title: 'Number of External Customer',
      amount: this.numberOfCustomer,
    },
  ];
  //Line Chart
  // options
  view: any[] = [700, 300];

  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Weapon';
  timeline: boolean = true;

  lineChart = [
    {
      name: 'Inventory',
      series: [
        {
          name: '2011',
          value: 10,
        },
        {
          name: '2012',
          value: 20,
        },
        {
          name: '2013',
          value: 30,
        },
        {
          name: '2014',
          value: 40,
        },
      ],
    },

    {
      name: 'Distribute',
      series: [
        {
          name: '2011',
          value: 20,
        },
        {
          name: '2012',
          value: 40,
        },
        {
          name: '2013',
          value: 50,
        },
        {
          name: '2014',
          value: 70,
        },
      ],
    },
    {
      name: 'Damages',
      series: [
        {
          name: '2011',
          value: 20,
        },
        {
          name: '2012',
          value: 40,
        },
        {
          name: '2013',
          value: 50,
        },
        {
          name: '2014',
          value: 70,
        },
      ],
    },
    {
      name: 'Requests',
      series: [
        {
          name: '2011',
          value: 20,
        },
        {
          name: '2012',
          value: 40,
        },
        {
          name: '2013',
          value: 50,
        },
        {
          name: '2014',
          value: 70,
        },
      ],
    },
  ];

  ngOnInit() {
    this.getData();
  }

  getData() {
    // number of Store
    this.dashboardService
      .findAll('http://localhost:5000/api/storeheaders')
      .subscribe((val) => (this.numberOfWeapon = val.length));
     console.log(this.numberOfWeapon);

    // number of damages
    this.dashboardService
      .findAll('http://localhost:5000/api/damagesHeaders')
      .subscribe((val) => (this.numberOfDamages = val.length));
    // number of Requests
    this.dashboardService
      .findAll('http://localhost:5000/api/requestheaders')
      .subscribe((val) => (this.numberOfRequests = val.length));
    // number of Customer
    this.dashboardService
      .findAll('http://localhost:5000/api/customers')
      .subscribe((val) => {
        this.numberOfCustomer = val.length;
        // update chart
        this.getCharts();
        //  update board
        this.getBoard();
      });
  }

  getCharts() {
    this.pieChartData = [
      {
        name: 'Weapon',
        value: this.numberOfWeapon,
      },
      {
        name: 'Bullet',
        value: this.numberOfBullet,
      },
      {
        name: 'Other',
        value: this.numberOfOther,
      },
      {
        name: 'Requests',
        value: this.numberOfRequests,
      },
      {
        name: 'Damages',
        value: this.numberOfDamages,
      },
    ];
  }

  getBoard() {
    this.statCardList = [
      {
        icon: 'storefront',
        title: 'Number of Item In Store',
        amount: this.numberOfWeapon,
      },
      {
        icon: 'shopping_cart',
        title: 'Number of Requests',
        amount: this.numberOfRequests,
      },
      {
        icon: 'shopping_cart',
        title: 'Number Of Damages',
        amount: this.numberOfDamages,
      },
      {
        icon: 'group icon',
        title: 'Number of External Customer',
        amount: this.numberOfCustomer,
      },
    ];
  }
}
