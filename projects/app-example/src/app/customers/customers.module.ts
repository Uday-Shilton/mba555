import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent, MasterComponent } from '../pages';
import { HeaderComponent, ListItemComponent } from '../components';
import { LibMasterDetailModule } from '../master-detail/public-api';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { charactersReducer } from '../state/character.reducer';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [CustomersRoutingModule,
            SharedModule,
            NgSelectModule,
            HttpClientModule,
            LibMasterDetailModule,
            StoreModule.forRoot({ characters: charactersReducer }),
            StoreDevtoolsModule.instrument(),
            CoreModule,
            SharedModule,
            FormsModule],
  declarations: [CustomersRoutingModule.components,
    DetailComponent,
    MasterComponent,
    HeaderComponent,
    ListItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomersModule { }