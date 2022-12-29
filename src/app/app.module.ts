import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { PayoutComponent } from './pages/payout/payout.component';
import { TimeComponent } from './pages/time/time.component';
import { PageheaderComponent } from './shared/pageheader/pageheader.component';
import { FooterComponent } from './shared/footer/footer.component';

//MDB
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialExampleModule } from '../material';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContractsComponent,
    DocumentsComponent,
    PayoutComponent,
    TimeComponent,
    PageheaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MdbCollapseModule,
    MdbFormsModule,
    MatDatepickerModule,
    MaterialExampleModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MdbDropdownModule,
    CdkMenuModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
