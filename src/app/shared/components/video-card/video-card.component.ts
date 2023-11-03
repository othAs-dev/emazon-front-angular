import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {
  @Input() darkCard: boolean = false;
  @Input() rightSide: boolean = false;
  @Input() src!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() link!: string;

}
