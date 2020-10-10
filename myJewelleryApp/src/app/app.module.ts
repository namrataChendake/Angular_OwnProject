import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomenavComponent } from './Layout/homenav/homenav.component';
import { HomebannerComponent } from './Layout/homebanner/homebanner.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './Layout/aboutus/aboutus.component';
import { HomeComponent } from './Layout/home/home.component';
import { ProductsComponent } from './Layout/products/products.component';
import { GoldComponent } from './Products/gold/gold.component';
import { SliverComponent } from './Products/sliver/sliver.component';
import { RingsComponent } from './Products/gold/rings/rings.component';
import { BanglasComponent } from './Products/gold/banglas/banglas.component';
import { earingComponent } from './Products/gold/earing/earing.component';

// services
import { SharedService } from './services/shared.service';
import { GoldmenuComponent } from './Products/gold/goldmenu/goldmenu.component';

// const routes: Routes = []; // Syntax
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'gold',
    component: GoldmenuComponent,
    children: [
      { path: '', component: GoldComponent },
      { path: 'bangals', component: BanglasComponent },
      { path: 'earing', component: earingComponent },
      { path: 'ring', component: RingsComponent },
    ],
  },
  { path: 'sliver', component: SliverComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomenavComponent,
    HomebannerComponent,
    FooterComponent,
    AboutusComponent,
    HomeComponent,
    GoldComponent,
    ProductsComponent,
    SliverComponent,
    RingsComponent,
    BanglasComponent,
    earingComponent,
    GoldmenuComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
