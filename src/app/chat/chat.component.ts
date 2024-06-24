import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { PackageModel, Packages } from './PackageModel';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, AfterViewChecked {
  
  spinnerLoading = false;
  private session_id ;
  products : PackageModel[]= [
    {
      "_id": "d4396f83afde2cb6d6060e71af32d68a",
      "package_name": "Best of Dubai - 7 Nights",
      "package_type": "Premium",
      "destination": [
          "Dubai"
      ],
      "itinerary": "7N Dubai",
      "places_covered": "Dubai",
      "travel_date": "12-10-2024",
      "hotel_details": "Movenpick Hotel Apartments Al Mamzar Dubai - MMT Special:4.0",
      "start_city": "Mumbai",
      "airline": "Emirates|Emirates",
      "flight_stops": 0,
      "meals": 5,
      "sight_seeing_places_covered": "Entry ticket to Burj Khalifa at the Top - 124 Floor (non prime time) on shared transfers from Bur Dubai or Deira Hotels. | Creek Dhow Dinner Cruise with transfers on sharing basis | Half Day City Tour of Dubai on shared transfers basis from Bur Dubai or Deira Hotels | Desert Safari with Barbeque Dinner on shared transfers. | VR Park on sharing basis | Entry ticket to Dubai Aquarium and Underwater Zoo at Dubai Mall on shared transfers from Bur Dubai or Deira Hotels",
      "price": 43598
  },
  {
      "_id": "b43c191390df8f1e3ad08346b5284b5d",
      "package_name": "3 Nights Sharjah with 2 Night stay in Dubai",
      "package_type": "Standard",
      "destination": [
          "Sharjah",
          "Dubai"
      ],
      "itinerary": "3N Sharjah . 2N Dubai",
      "places_covered": "Sharjah|Dubai",
      "travel_date": "28-12-2024",
      "hotel_details": "Centro Sharjah Hotel:4.5|Howard Johnson Bur Dubai Hotel - MMT Special:3.5",
      "start_city": "New Delhi",
      "airline": "IndiGo|IndiGo|IndiGo",
      "flight_stops": 2,
      "meals": 3,
      "sight_seeing_places_covered": "Morning half day Sharjah City Tour on from Sharjah Hotels on Private transfe (Max 4 Pax) | Morning Desert Safari From Sharjah on Sharing 4 Category | Transfer From Sharjah Hotels to Dubai Intl Airport 1-4pax (7 seater)",
      "price": 29332.5
  },
  {
      "_id": "94d45b6f1772599f12456b340a34115a",
      "package_name": "Dubai Shopping Festival - 5 Nights Holiday",
      "package_type": "Standard",
      "destination": [
          "Dubai"
      ],
      "itinerary": "5N Dubai",
      "places_covered": "Dubai",
      "travel_date": "30-01-2025",
      "hotel_details": "Hampton by Hilton Dubai Airport - MMT Special:4.5",
      "start_city": "New Delhi",
      "airline": "IndiGo|IndiGo",
      "flight_stops": 2,
      "meals": 3,
      "sight_seeing_places_covered": "Half Day City Tour of Dubai on shared transfers basis from Bur Dubai or Deira Hotels | Creek Dhow Dinner Cruise with transfers on sharing basis",
      "price": 21622
  }
  ]
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  @ViewChild('chatarea')
  private chatarea!: ElementRef;
  constructor(private apiService: ApiserviceService) {
    this.session_id = uuidv4();
  }


  chats = [
    {  
      "type": "chat-left",
      "name": "Safario",  
      "text": "Hello, I'm Safario."
    },  
    {  
      "type": "chat-right",
      "name": "You",   
      "text": "Hi, suggest me some good Dubai holiday packages."
    },
    {  
      "type": "chat-left",
      "name": "Safario",  
      "text": "Here you go!!"
    },  
    // {  
    //   "type": "chat-right",
    //   "name": "You",   
    //   "text": "Suggest me something under 12000 budget."  
    // },
    // {  
    //   "type": "chat-left",
    //   "name": "Safario",  
    //   "text": "Sorry I dont know."  
    // },  
    // {  
    //   "type": "chat-right",
    //   "name": "You",   
    //   "text": "Ok."  
    // },
  ]

  generateImage(){
    for(let i=0; i<this.products.length; i++){
      const randomNumber = Math.floor(Math.random() * 30) + 1;
      this.products[i].start_city="../assets/packages/"+randomNumber+".jpg";
      // console.log(this.products[i]);
    }
  }

  ngOnInit() { 
    this.generateImage();
    var payload ={
      "session_id": this.session_id,
      "prompt": "Hello, please suggest me some good packages in Dubai."
    }
    // this.apiService.getResponse(payload).subscribe((data: Packages) => {
    //   this.products = data.message;
    // });
    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
      this.scrollToBottom();        
  } 

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }                 
  }

  addBotRespose(text: string){
    var item =   {  
      "type": "chat-left",
      "name": "Safario",   
      "text": text,
    };
    this.chats.push(item);
  }

  addUserRespose(text: string){
    var item =   {  
      "type": "chat-right",
      "name": "You",   
      "text": text,
    };
    this.chats.push(item);
  }

  askBot(text: string){
    if(text){
      this.addUserRespose(text);
      this.addBotRespose("Loading...");
      this.spinnerLoading = true;
      var payload ={
        "session_id": this.session_id,
        "prompt": text.trim()
      }
      this.apiService
      .getResponse(payload)
      .subscribe(
        (data : Packages )=> {
          this.addBotRespose("Here you go!!");
          this.products=data.message
          this.generateImage();
          this.spinnerLoading = false;
        },
        error => {
          this.addBotRespose("Sorry, I could not find what you need. Meanwhile, here are some trips you might be interested in!");
          this.generateImage();
          this.spinnerLoading = false;
        }
      );

    }

    this.chatarea.nativeElement.value='';
    // setTimeout(() => 
    // {
    //   this.spinnerLoading = false;
    // }, 3000);
  }
}
