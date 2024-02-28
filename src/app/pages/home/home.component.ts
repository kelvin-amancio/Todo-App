import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { TabsComponent } from "../../components/tabs/tabs.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent, ButtonComponent, UserCardComponent, TabsComponent]
})
export class HomeComponent {
    teste:string="";
}
