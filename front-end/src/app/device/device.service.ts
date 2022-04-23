import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Device } from "./device";

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    private baseUrl = 'http://localhost:3000/api/device';

    constructor(private httpClient: HttpClient) {};

    public retrieveAll(): Observable<Device[]> {
        return this.httpClient.get<Device[]>(this.baseUrl);
    }

    public retrieveById(id: number): Observable<Device> {
        return this.httpClient.get<Device>(`${this.baseUrl}/${id}`);
    }

    public save(device: Device): Observable<Device> {
        const object = { name: device.name, color: device.color,
            part_number: device.part_number, id_category: Number(device.id_category) };

        if (device.id) {
            return this.httpClient.put<Device>(`${this.baseUrl}/update/${device.id}`, object);
        } else {
            return this.httpClient.post<Device>(`${this.baseUrl}/create`, object);
        }
    }

    public deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
    }

}
