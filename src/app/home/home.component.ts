import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private deviceService: DeviceDetectorService) { }

  get device(): any {
    return this.deviceService.getDeviceInfo();
  }

  get isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  get isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  get isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }
}
