import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAngry,
  faBell,
  faUser,
  faSyncAlt,
  faSearch,
  faBars,
  faEllipsisH,
  faEnvelope,
  faTrashAlt,
  faTimes,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngry,
  faBell,
  faUser,
  faSyncAlt,
  faSearch,
  faBars,
  faEllipsisH,
  faEnvelope,
  faTrashAlt,
  faTimes,
  faExclamationCircle
);

@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule {}
