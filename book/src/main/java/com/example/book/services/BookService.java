package com.example.book.services;

import com.example.book.dao.BookRepository;
import com.example.book.entities.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    public BookRepository  bookRepository;

    public List<Book> findAllBooks(){
        return bookRepository.findAll();
    }
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
}
