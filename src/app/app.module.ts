import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { LogoSvgComponent } from './components/logo-svg/logo-svg.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './store/reducers/rootReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

import { TagsListComponent } from './views/tags-list/tags-list.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';
import { TagDetailPageComponent } from './pages/tag/tag-detail-page/tag-detail-page.component';
import { ExpertsListComponent } from './views/experts-list/experts-list.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { ExpertDetailPageComponent } from './pages/expert/expert-detail-page/expert-detail-page.component';
import { TypeStatesComponent } from './components/type-states/type-states.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { TypeScoreComponent } from './components/type-score/type-score.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoSvgComponent,
    NavigationComponent,
    TagsListComponent,
    TagPageComponent,
    TagDetailPageComponent,
    ExpertsListComponent,
    ExpertPageComponent,
    ExpertDetailPageComponent,
    TypeStatesComponent,
    TypeTagComponent,
    TypeScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument({
      maxAge:10
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
