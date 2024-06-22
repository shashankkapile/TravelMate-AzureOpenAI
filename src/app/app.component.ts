import { Component, ElementRef,  ViewChild, viewChild,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'azurehackathon';

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
