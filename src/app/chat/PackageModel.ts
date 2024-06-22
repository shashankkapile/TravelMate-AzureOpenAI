export class PackageModel {
    "_id": string = '';
    "package_name": string = '';
    "package_type": string = '';
    "destination": string[] = [];
    "itinerary": string = '';
    "places_covered": string = '';
    "travel_date": string = '';
    "hotel_details": string = '';
    "start_city": string = '';
    "airline": string = '';
    "flight_stops": number = 0;
    "meals": number = 0;
    "sight_seeing_places_covered": string = '';
    "price": number = 0;
}

export class Packages {
    "message": PackageModel[] = [];
}
