import { Component, OnInit } from '@angular/core';
import { DeviceService} from '../../services/device.service';
import { DeviceResponse, DeviceId } from '../device/device';
import { Router } from '@angular/router';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public device: DeviceResponse[] = [];

  request : DeviceId = {
    id : ''
  }
  constructor(private deviceService: DeviceService,
    private router: Router) {};
  ngOnInit(): void {
    this.ListAll();

  }
  ListAll(): void{
    this.deviceService.getDevices().subscribe({
      next: device => {
          this.device = device;
          console.log('Dados Array ->', JSON.parse(JSON.stringify(this.device)));
      },
      error: ({ error }) => console.log(`${error}`),
    });
  }



  Delete(id: string): void{
    this.deviceService.deleteDevice(id).subscribe({
      next: device => {
        this.request = device;
    },
    error: ({ error }) => console.log(`${error}`),
    });
    alert('Deletado com Sucesso!');
    this.refresh();

  }

  refresh(): void {
    window.location.reload();
  }



}
