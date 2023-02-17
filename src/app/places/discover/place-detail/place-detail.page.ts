import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeID')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeID'));
    });
  }

  /**
   * onBookPlace() is used to book the place
   */
  public onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');    this uses a forward navigation animation
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
