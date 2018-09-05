import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { Noti, NOTIFICATIONS } from "./mocks";
import { getMockArray } from "./utils";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent implements OnInit {
  notifications: Noti[] = getMockArray(NOTIFICATIONS, 20);

  constructor() {}

  ngOnInit() {}
}
