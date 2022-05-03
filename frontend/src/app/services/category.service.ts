import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CategoryResponse, CategoryRequest , CategoryId} from '../components/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private url = 'http://app-eldorado.herokuapp.com/api/category';

    constructor(
      private httpClient: HttpClient
    ) {};

    public getCategorias(): Observable<CategoryResponse[]> {
      return this.httpClient.get<CategoryResponse[]>(this.url);
    }

    public postCategory(request: CategoryRequest): Observable<CategoryRequest> {
      return this.httpClient.post<CategoryRequest>(`${this.url}`, request);
    }

    public getCategory(id: string ): Observable<CategoryId> {
      return this.httpClient.get<CategoryId>(`${this.url}/${id}`);
    }

    public deleteCategory(id: string ): Observable<CategoryId>  {
      return this.httpClient.delete<CategoryId>(`${this.url}/${id}`);
    }
}
