package com.example.book.controllers;

import com.example.book.entities.Book;
import com.example.book.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks(){
        return bookService.findAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book){
        return bookService.saveBook(book);
    }

}
