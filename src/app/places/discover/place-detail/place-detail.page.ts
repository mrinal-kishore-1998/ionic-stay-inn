import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  /**
   * onBookPlace() is used to book the place
   */
  public onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');    this uses a forward navigation animation
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
