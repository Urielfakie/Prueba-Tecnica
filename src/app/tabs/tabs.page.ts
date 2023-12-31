import { Component } from '@angular/core';
import { ServerdbService } from '../services/serverdb';
import { UserData } from '../services/userClass';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  name: string = "";
  lastname: string = "";
  constructor(
    private serverdbService: ServerdbService,
  ) {}


}
