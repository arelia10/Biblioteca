import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}
export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
};


  constructor() { }


  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
};




private configUpdate = new Subject<AppConfig>();

    private overlayOpen = new Subject<any>();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();



showProfileSidebar() {
  this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
  if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
  }
}

onMenuToggle() {
  if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
          this.overlayOpen.next(null);
      }
  }

  if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
  }
  else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
          this.overlayOpen.next(null);
      }
  }
}

isOverlay() {
  return this.config.menuMode === 'overlay';
}
isDesktop() {
  return window.innerWidth > 991;
}
onConfigUpdate() {
  this.configUpdate.next(this.config);
}
showConfigSidebar() {
  this.state.configSidebarVisible = true;
}


}
