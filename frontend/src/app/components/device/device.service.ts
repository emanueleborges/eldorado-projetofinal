import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { DeviceResponse, DeviceRequest , DeviceId} from '../device/device';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    private url = 'http://app-eldorado.herokuapp.com/api/device';

    constructor(private httpClient: HttpClient) {};

    public getDevices(): Observable<DeviceResponse[]> {
      return this.httpClient.get<DeviceResponse[]>(this.url);
    }

    public postDevice(request: DeviceRequest): Observable<DeviceRequest> {
      return this.httpClient.post<DeviceRequest>(`${this.url}`, request);
    }

    public getDevice(id: string ): Observable<DeviceId> {
      return this.httpClient.get<DeviceId>(`${this.url}/${id}`);
    }

    public deleteDevice(id: string ): Observable<DeviceId>  {
      return this.httpClient.delete<DeviceId>(`${this.url}/${id}`);
    }

}
