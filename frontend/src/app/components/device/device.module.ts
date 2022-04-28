import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DeviceCreateComponent } from "./device-create.component";
import { DeviceListComponent } from "./device-list.component";

@NgModule({
    declarations: [
        DeviceListComponent,
        DeviceCreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'devices',
                component: DeviceListComponent,
            },
            {
                path: 'device/create',
                component: DeviceCreateComponent,
            },
            {
                path: 'device/update/:id',
                component: DeviceCreateComponent,
            }
        ]),
    ]    
})
export class DeviceModule { }