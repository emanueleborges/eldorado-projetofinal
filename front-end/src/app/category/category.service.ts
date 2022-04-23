import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseUrl = 'http://localhost:3000/api/category';

    constructor(private httpClient: HttpClient) {};

    public retrieveAll(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(this.baseUrl);
    }


    public retrieveById(id: number): Observable<Category> {
        return this.httpClient.get<Category>(`${this.baseUrl}/${id}`);
    }

    public save(category: Category): Observable<Category> {
        const object = { name: category.name };

        if (category.id) {
            return this.httpClient.put<Category>(`${this.baseUrl}/update/${category.id}`, object);
        } else {
            return this.httpClient.post<Category>(`${this.baseUrl}/create`, object);
        }
    }

    public deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
    }

}
