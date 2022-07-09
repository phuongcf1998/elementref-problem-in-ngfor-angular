import {
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChildren("innercolor") innercolor: QueryList<ElementRef>;

  numberList = ["first", "second", "third"];

  onItemClick(elementIndex: number) {
    const element = this.innercolor.find(
      (element, index) => index === elementIndex
    );
    console.log(this.innercolor);
    element.nativeElement.style.backgroundColor = "yellow";
  }
}
