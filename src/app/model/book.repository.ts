import { Injectable } from "@angular/core";
import { Book } from "./book.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class BookRepository {
    private books: Book[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.books = data;
            this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(category: string = null): Book[] {
        return this.books.filter(p => category == null || category == p.category);
    }

    getProduct(id: number): Book {
        return this.books.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}