import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { TagsListComponent } from './views/tags-list/tags-list.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';
import { ExpertsListComponent } from './views/experts-list/experts-list.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { TypeStatesComponent } from './components/type-states/type-states.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { TypeScoreComponent } from './components/type-score/type-score.component';
import { SelectorTypeStatesComponent } from './components/selector-type-states/selector-type-states.component';
import { SelectorTypeScoreComponent } from './components/selector-type-score/selector-type-score.component';
import { SelectorTagComponent } from './components/selector-tag/selector-tag.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { TagNewPageComponent } from './pages/tag/tag-new-page/tag-new-page.component';
import { ExpertNewPageComponent } from './pages/expert/expert-new-page/expert-new-page.component';
import { TagComponent } from './components/forms/tag/tag.component';
import { TagDetailPageComponent } from './pages/tag/tag-detail-page/tag-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoSvgComponent,
    NavigationComponent,
    TagsListComponent,
    TagPageComponent,
    ExpertsListComponent,
    ExpertPageComponent,
    TypeStatesComponent,
    TypeTagComponent,
    TypeScoreComponent,
    SelectorTypeStatesComponent,
    SelectorTypeScoreComponent,
    SelectorTagComponent,
    DialogComponent,
    FooterNavComponent,
    TagNewPageComponent,
    ExpertNewPageComponent,
    TagComponent,
    TagDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
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
