import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../services/category.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: Category[] = [];

  constructor(private categoryService: CategoryService) {};

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.categoryService.retrieveAll().subscribe({
      next: category => {
          this.category = category;
      },
      error: ({ error }) => console.log(`${error}`),
  });  }
}
