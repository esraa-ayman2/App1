import { Routes } from '@angular/router';

export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path: "home", loadComponent: ()=> import("./components/home/home.component").then((c)=> c.HomeComponent), title:"Home"},
{path: "about", loadComponent: ()=>import ("./components/about/about.component").then((c)=> c.AboutComponent), title:"about"},
{path: "portfolio", loadComponent: ()=> import("./components/portfolio/portfolio.component").then((c)=> c.PortfolioComponent), title: "Portfoilo"},
{path: "contact", loadComponent: ()=> import("./components/contact/contact.component").then((c)=> c.ContactComponent), title:"Contact"},
{path: "**",loadComponent: ()=> import("./components/notfound/notfound.component").then(c => c.NotfoundComponent) , title:"Not Found"}
];
