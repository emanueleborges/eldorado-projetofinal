import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../../services/category.service';
import { CategoryResponse, CategoryRequest } from '../../category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  request : CategoryRequest = {
    Name : ''
  }


  constructor(
    private categoryService :  CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Save(){
    this.categoryService.postCategory(this.request).subscribe(
      result => { this.request = result; },
    );
    alert('criado com sucesso')
    this.router.navigate(['category']);
  }
  
  Cancel(): void {
    this.router.navigate(['category']);
  }


}
