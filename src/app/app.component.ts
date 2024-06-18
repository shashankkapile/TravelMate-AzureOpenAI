import { Component, ElementRef,  ViewChild, viewChild,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'azurehackathon';

  products = [
    {
      "_id": "364b2ab0b18e0050cdb6b5cf94a35c4d",
      "package_name": "Leisurely North East with Pelling Toy Train Special",
      "package_type": "Deluxe",
      "destination": [
        "Gangtok",
        "Pelling",
        "Darjeeling"
      ],
      "itinerary": "2N Gangtok . 2N Pelling . 2N Darjeeling",
      "places_covered": "Gangtok|Pelling|Darjeeling",
      "travel_date": "18-06-2024",
      "hotel_details": "Lemon Tree Hotel  Gangtok:4.3|The Aryan Regency:3.7|Ramada by Wyndham Darjeeling Gandhi Road:4.4",
      "start_city": "Mumbai",
      "airline": "Spicejet",
      "flight_stops": 1,
      "meals": 3,
      "sight_seeing_places_covered": "Changu Lake - Excursion | Baba Mandir | Flower Exhibition | Do Drul | Namgayal Institute of Tibetology | Bhakthang Waterfall | Directorate of Handicrafts and Handloom | Helipad Viewpoint | Rimbi Waterfall | Darap Village | Kanchenjunga Falls | Khehopalri Lake | Pemayangtse Monastery | Rabdentse Ruins",
      "price": 27454.5
    },
    {
      "_id": "f0a458da62f383c19aec79a4f67058fc",
      "package_name": "Magical Pattaya & Bangkok - Super Saver",
      "package_type": "Premium",
      "destination": [
        "Pattaya",
        "Bangkok"
      ],
      "itinerary": "3N Pattaya . 2N Bangkok",
      "places_covered": "Pattaya|Bangkok",
      "travel_date": "12-09-2024",
      "hotel_details": "Siam Bayshore Resort Pattaya:4.5|AVANI Atrium Bangkok:4.0",
      "start_city": "Mumbai",
      "airline": "Spicejet|Go Air",
      "flight_stops": 0,
      "meals": 5,
      "sight_seeing_places_covered": "Pattaya Family Freebie | Pattaya Value Pack | Hotel In Pattaya to Hotel In Bangkok by Shared Transfer",
      "price": 25019
    },
    {
      "_id": "f0a458da62f383c19aec79a4f67058fc",
      "package_name": "Magical Pattaya & Bangkok - Super Saver",
      "package_type": "Premium",
      "destination": [
        "Pattaya",
        "Bangkok"
      ],
      "itinerary": "3N Pattaya . 2N Bangkok",
      "places_covered": "Pattaya|Bangkok",
      "travel_date": "12-09-2024",
      "hotel_details": "Siam Bayshore Resort Pattaya:4.5|AVANI Atrium Bangkok:4.0",
      "start_city": "Mumbai",
      "airline": "Spicejet|Go Air",
      "flight_stops": 0,
      "meals": 5,
      "sight_seeing_places_covered": "Pattaya Family Freebie | Pattaya Value Pack | Hotel In Pattaya to Hotel In Bangkok by Shared Transfer",
      "price": 25019
    },
    {
      "_id": "f0a458da62f383c19aec79a4f67058fc",
      "package_name": "Magical Pattaya & Bangkok - Super Saver",
      "package_type": "Premium",
      "destination": [
        "Pattaya",
        "Bangkok"
      ],
      "itinerary": "3N Pattaya . 2N Bangkok",
      "places_covered": "Pattaya|Bangkok",
      "travel_date": "12-09-2024",
      "hotel_details": "Siam Bayshore Resort Pattaya:4.5|AVANI Atrium Bangkok:4.0",
      "start_city": "Mumbai",
      "airline": "Spicejet|Go Air",
      "flight_stops": 0,
      "meals": 5,
      "sight_seeing_places_covered": "Pattaya Family Freebie | Pattaya Value Pack | Hotel In Pattaya to Hotel In Bangkok by Shared Transfer",
      "price": 25019
    },
    {
      "_id": "f0a458da62f383c19aec79a4f67058fc",
      "package_name": "Magical Pattaya & Bangkok - Super Saver",
      "package_type": "Premium",
      "destination": [
        "Pattaya",
        "Bangkok"
      ],
      "itinerary": "3N Pattaya . 2N Bangkok",
      "places_covered": "Pattaya|Bangkok",
      "travel_date": "12-09-2024",
      "hotel_details": "Siam Bayshore Resort Pattaya:4.5|AVANI Atrium Bangkok:4.0",
      "start_city": "Mumbai",
      "airline": "Spicejet|Go Air",
      "flight_stops": 0,
      "meals": 5,
      "sight_seeing_places_covered": "Pattaya Family Freebie | Pattaya Value Pack | Hotel In Pattaya to Hotel In Bangkok by Shared Transfer",
      "price": 25019
    }
  ]
  @ViewChild("plan")
  private planElement!: ElementRef;

  @ViewChild("about")
  private aboutElement!: ElementRef;

  scrollToPlan() {
    this.planElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(){
    this.aboutElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
