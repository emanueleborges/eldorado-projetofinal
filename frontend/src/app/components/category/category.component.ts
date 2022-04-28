import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../services/category.service';
import { CategoryResponse } from '../category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: CategoryResponse[] = [];


  constructor(private categoryService: CategoryService) {};

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


  /*
  Save(): void {
    const data = {
      Name: 'this.category.Name',
    };

    this.categoryService.save(data).subscribe(
      (res) => {
        console.log(res);

      }
    );
  }
*/



}
