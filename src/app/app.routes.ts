import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';




export const routes: Routes = [
    {
        path:'header',
        component:HeaderComponent
    },

    {
        path:'footer',
        component:FooterComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'port',
        component:PortfolioComponent

    }
];
