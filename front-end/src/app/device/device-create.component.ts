import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Device } from "./device";
import { DeviceService } from "./device.service";
import { CategoryService } from "../category/category.service";
import { Category } from "../category/category";

@Component({
    templateUrl: './device-create.component.html'
})
export class DeviceCreateComponent implements OnInit {

    public deviceId!: any;
    public device!: Device;
    public category: Category[] = [];

    constructor(private activatedRoute: ActivatedRoute, private deviceService: DeviceService,
        private categoryService: CategoryService) {};

    ngOnInit(): void {
        this.deviceId = +this.activatedRoute.snapshot.params.id || [];
        this.retrieveDeviceById();
        this.retrieveAllCategory();
    }

    public retrieveAllCategory(): void {
        this.categoryService.retrieveAll().subscribe({
            next: category => {
                this.category = category;
            },
            error: ({ error }) => console.log(`${error}`),
        });
    }

    public retrieveDeviceById(): Device {
        this.deviceService.retrieveById(this.deviceId).subscribe({
            next: (device) => this.device = device,
            error: ({ error }) => console.log(`${error}`),
        });
        return this.device;
    }

    public save() {
        this.deviceService.save(this.retrieveDeviceById()).subscribe({
            next: (device) => {
                this.device = device;
                //alert(device.message);
            },
            error: ({ error }) => alert(`${error.message}`),
        });
    }

}
