import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../services/device.service';

import { DeviceResponse, DeviceRequest } from '../../device/device';
import { Router } from '@angular/router';

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


  constructor(
    private DeviceService :  DeviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Save(){
    this.DeviceService.postDevice(this.request).subscribe(
      result => { this.request = result; },
    );
    alert('criado com sucesso')
    this.router.navigate(['device']);
  }

  Cancel(): void {
    this.router.navigate(['device']);
  }


}
