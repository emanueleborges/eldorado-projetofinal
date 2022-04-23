import { Component, OnInit } from "@angular/core";
import { Category } from "../category/category";
import { CategoryService } from "../category/category.service";
import { Device } from "./device";
import { DeviceService } from "./device.service";

@Component({
    // selector: 'app-course-list',
    templateUrl: './device-list.component.html'
})
export class DeviceListComponent implements OnInit {

    public filteredDevice: Device[] = [];

    public devices: Device[] = [];

    public category: Category[] = [];

    private filterBy: string = '';

    constructor(private deviceService: DeviceService,
        private categoryService: CategoryService) {};

    ngOnInit(): void {
        this.retrieveAll();
        this.retrieveAllCategory();
    }

    public retrieveAll(): void {
        this.deviceService.retrieveAll().subscribe({
            next: devices => { 
                this.devices = devices;
                this.filteredDevice = this.devices;    
            },
            error: ({ error }) => console.log(`${error}`),
        });
    }

    public retrieveAllCategory(): void {
        this.categoryService.retrieveAll().subscribe({
            next: category => { 
                this.category = category;  
            },
            error: ({ error }) => console.log(`${error}`),
        });
    }

    public delete(id: number) {
        this.deviceService.retrieveById(id).subscribe({
            next: (device) => {
                if (confirm(`Are you sure you want to delete the device ${device.name}?`)) {
                    this.deviceService.deleteById(id).subscribe({
                        next: () => {
                            this.retrieveAll();
                        },
                        error: ({ error }) => console.log(`${error}`),
                    });
                }
            },
        });
    }

    set filter(value: string) {
        this.filterBy = value;
        this.filteredDevice = this.devices.filter(
            (device) => device.category.toLowerCase()
            .indexOf(this.filterBy.toLowerCase()) > -1)
    }

    get filter() {
        return this.filterBy;
    }

}