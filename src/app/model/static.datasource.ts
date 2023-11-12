import { Injectable } from "@angular/core";
import { Book } from "./book.model";
import { Observable, from } from "rxjs";
//import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {

    private products: Book[] = [
        new Book(1, "Produkt 1", "Kategoria  1", "Produkt 1 (Kategoria  1)", 100),
        new Book(2, "Produkt 2", "Kategoria  1", "Produkt 2 (Kategoria  1)", 100),
        new Book(3, "Produkt 3", "Kategoria  1", "Produkt 3 (Kategoria  1)", 100),
        new Book(4, "Produkt 4", "Kategoria  1", "Produkt 4 (Kategoria  1)", 100),
        new Book(5, "Produkt 5", "Kategoria  1", "Produkt 5 (Kategoria  1)", 100),
        new Book(6, "Produkt 6", "Kategoria  2", "Produkt 6 (Kategoria  2)", 100),
        new Book(7, "Produkt 7", "Kategoria  2", "Produkt 7 (Kategoria  2)", 100),
        new Book(8, "Produkt 8", "Kategoria  2", "Produkt 8 (Kategoria  2)", 100),
        new Book(9, "Produkt 9", "Kategoria  2", "Produkt 9 (Kategoria  2)", 100),
        new Book(10, "Produkt 10", "Kategoria  2", "Produkt 10 (Kategoria  2)", 100),
        new Book(11, "Produkt 11", "Kategoria  3", "Produkt 11 (Kategoria  3)", 100),
        new Book(12, "Produkt 12", "Kategoria  3", "Produkt 12 (Kategoria  3)", 100),
        new Book(13, "Produkt 13", "Kategoria  3", "Produkt 13 (Kategoria  3)", 100),
        new Book(14, "Produkt 14", "Kategoria  3", "Produkt 14 (Kategoria  3)", 100),
        new Book(15, "Produkt 15", "Kategoria  3", "Produkt 15 (Kategoria  3)", 100),
    ];

    getProducts(): Observable<Book[]> {
        return from([this.products]);
    }
    /*
    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
    */
}