import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from 'src/app//components/not-found/not-found.component';
import { HomeComponent } from 'src/app//components/home/home.component'
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from 'src/app//components/list-item/list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ListItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
