import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceService } from '../../../services/device.service';
import { DeviceRequest } from '../../device/device';

import { CategoryService} from '../../../services/category.service';
import { CategoryResponse } from '../../category/category';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  request : DeviceRequest = {
    Color : '',
    PartNumber : '',
    Category_fk : '',
  }

  public category: CategoryResponse[] = [];

  constructor(
    private deviceService :  DeviceService,
    private categoryService :  CategoryService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategorias().subscribe({
      next: dados => {
        this.category = dados
        console.log(this.category);
      },
      error: ({ error }) => console.log(`${error}`),
    })
  }

  Save(){
    this.deviceService.postDevice(this.request).subscribe(
      result => { this.request = result; },
    );
    alert('criado com sucesso')
    this.router.navigate(['device']);
  }

  Cancel(): void {
    this.router.navigate(['device']);
  }

}
