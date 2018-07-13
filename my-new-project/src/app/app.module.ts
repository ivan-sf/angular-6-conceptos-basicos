import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ArrayComponent } from './array/array.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    ContenidoComponent,
    ArrayComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
