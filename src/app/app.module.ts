import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationParentComponent } from './registration-parent/registration-parent.component';
import { ListChildComponent } from './list-child/list-child.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationParentComponent,
    ListChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
