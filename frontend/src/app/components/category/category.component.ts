import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../services/category.service';
import { CategoryResponse, CategoryId } from '../category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: CategoryResponse[] = [];

  request : CategoryId = {
    id : ''
  }


  constructor(private categoryService: CategoryService,
    private router: Router) {};

  ngOnInit(): void {
    this.ListAll();
  }

  ListAll(): void{
    this.categoryService.getCategorias().subscribe({
      next: category => {
          this.category = category;
      },
      error: ({ error }) => console.log(`${error}`),
    });
  }
  
  Delete(id: string): void{
    this.categoryService.deleteCategory(id).subscribe({
      next: category => {
        this.request = category;
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
