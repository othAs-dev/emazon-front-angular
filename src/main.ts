
import { appConfig } from './app/app.config';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
