import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export default class HomeComponent {
  protected goToTop() {window.scrollTo(0, 10)}
}
