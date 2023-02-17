import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'P1',
      'Whispering Pines Cottages',
      'A stay straight out of the pages of a Ruskin Bond novel. ',
      'https://tinyurl.com/3mbje84j',
      5999
    ),
    {
      id: 'P2',
      description:
        'Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise',
      title: 'Aura House',
      imageUrl: 'https://tinyurl.com/428n2nxu',
      price: 28163,
    },
    new Place(
      'P3',
      'The Naked House',
      'It is an architectural villa on the south side of Koh Samui, private and in a natural environment, it has sweeping ocean views and has a great salt water lap pool. Half way up a hill, it gets natural breezes, whithout mozzies even at dusk',
      'https://tinyurl.com/yt3cthe5',
      14099
    ),
    {
      id: 'P4',
      description:
        'Hideout Beehive is one of the most popular bamboo houses in Bali, with spectacular river views and a jacuzzi pool - perfect for a quick staycation with your friends',
      title: 'Hideout Beehive',
      imageUrl: 'https://tinyurl.com/4rc94phm',
      price: 20145,
    },
    new Place(
      'P5',
      'Bedrock Home',
      'Bedrock home is a unique creation of 6 circular earth bag rooms connected together by a small network of tunnels. The whole building process we used as much of what we had available on site as possible, rocks from the excavation became the patio, sticks and trees became tables and lamps, the earthen plaster and floors came from the excavation site as well',
      'https://tinyurl.com/ycka2jrb',
      14099
    ),
    {
      id: 'P6',
      description: `Sooty's Hideout is located inside the great Himalayan National Park and offers you an authentic experience of luxury while being close to the nature; after all, the backyard to your room is the jungle.`,
      title: `Sooty's Hideout`,
      imageUrl: 'https://tinyurl.com/2t3eecj8',
      price: 4699,
    },
    new Place(
      'P7',
      'Villa Moon Shadow',
      'This magnificent waterfront home is located on the southeast coast of Koh Samui, just minutes from Chaweng Beach',
      'https://tinyurl.com/5bnhaj53',
      129466
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {
      ...this._places.find((place) => {
        place.id === id;
      }),
    };
  }

  constructor() {}
}
