import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, AfterViewChecked {
  
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  @ViewChild('chatarea')
  private chatarea!: ElementRef;


  chats = [
    {  
      "type": "chat-left",
      "name": "Safario",  
      "text": "Hello, I'm Safario."  
    },  
    {  
      "type": "chat-right",
      "name": "You",   
      "text": "Hi, suggest me some good packages."  
    },
    {  
      "type": "chat-left",
      "name": "Safario",  
      "text": "Sure."  
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

  ngOnInit() { 
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

  askBot(text: string){
    if(text){
      var item =   {  
        "type": "chat-right",
        "name": "You",   
        "text": text  
      };
      this.chats.push(item);
    }
    this.chatarea.nativeElement.value='';
  }
}
