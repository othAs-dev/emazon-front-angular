import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    register()
  }
}
