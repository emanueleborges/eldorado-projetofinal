import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Category } from '../components/category/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    private url = 'http://localhost:3000/api/category';

    constructor(private httpClient: HttpClient) {};

    public retrieveAll(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(this.url);
  }

  }
