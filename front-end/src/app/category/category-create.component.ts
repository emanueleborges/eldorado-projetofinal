import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category } from "./category";
import { CategoryService } from "./category.service";

@Component({
    templateUrl: './category-create.component.html'
})
export class CategoryCreateComponent implements OnInit {

    public categoryId!: any;
    public category!: Category;

    constructor(private activatedRoute: ActivatedRoute,
        private categoryService: CategoryService) {};

    ngOnInit(): void {
        this.categoryId = +this.activatedRoute.snapshot.params.id || [];
        this.retrieveCategoryById();
    }

    public retrieveCategoryById(): Category {
        this.categoryService.retrieveById(this.categoryId).subscribe({
            next: (category) => this.category = category,
            error: ({ error }) => console.log(`${error}`),
        });
        return this.category;
    }

    public save() {
        this.categoryService.save(this.retrieveCategoryById()).subscribe({
            next: (category) => {
                this.category = category;
                //alert(category.message);
            },
            error: ({ error }) => alert(`${error.message}`),
        });
    }

}
