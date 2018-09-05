import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-action-buttons",
  templateUrl: "./action-buttons.component.html",
  styleUrls: ["./action-buttons.component.scss"]
})
export class ActionButtonsComponent implements OnInit {
  @Input()
  size = "sm";
  @Input()
  color = "";

  constructor() {}

  ngOnInit() {}
}
