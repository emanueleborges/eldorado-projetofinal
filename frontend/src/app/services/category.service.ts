import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CategoryResponse, CategoryRequest } from '../components/category/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private url = 'http://localhost:3000/api/category';

    constructor(private httpClient: HttpClient) {};

    public getCategorias(): Observable<CategoryResponse[]> {
      return this.httpClient.get<CategoryResponse[]>(this.url);
    }

    public postCategory(request: CategoryRequest): Observable<CategoryRequest> {
          return this.httpClient.post<CategoryRequest>(`${this.url}`, request);

  }




  }
