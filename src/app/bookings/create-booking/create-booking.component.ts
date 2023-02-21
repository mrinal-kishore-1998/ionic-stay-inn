import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  /**
   * onCancel() is used to close the modal
   */
  public onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  /**
   * onBookPlace() is used to book the current place
   */
  public onBookPlace() {
    this.modalCtrl.dismiss({ message: 'This is dummy Message' }, 'confirm');
  }
}
