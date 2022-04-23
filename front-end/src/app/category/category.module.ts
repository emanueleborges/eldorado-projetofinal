import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CategoryCreateComponent } from "./category-create.component";
import { CategoryListComponent } from "./category-list.component";

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryCreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'category',
                component: CategoryListComponent,
            },
            {
                path: 'category/create',
                component: CategoryCreateComponent,
            },
            {
                path: 'category/update/:id',
                component: CategoryCreateComponent,
            }
        ]),
    ]
})
export class CategoryModule { }
