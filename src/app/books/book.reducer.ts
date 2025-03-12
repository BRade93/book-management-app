import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";
import { state } from "@angular/animations";

export const initialState: Book[] = [];

export const bookReducer = createReducer(
    initialState,
    on(AddBook, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
)