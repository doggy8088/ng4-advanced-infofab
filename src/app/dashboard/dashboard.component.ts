import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {initDashboard} from 'app/shared/init-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    $(initDashboard);
  }

  goCards(id) {
    // this.router.navigateByUrl('/cards/' + id);
    this.router.navigate(['/cards', id]);
  }
}
