package com.examples.sboot.graphql;

import com.examples.sboot.graphql.model.Book;
import com.examples.sboot.graphql.service.BookService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootGraphqlDemoApplication {

	@Autowired
	private BookService bookService;

	@PostConstruct
	public void loadBooks() {
		bookService.saveBook(new Book( "J.K. Rowling", "Harry Potter and the Chamber of Secrets"));
		bookService.saveBook(new Book("J.R.R. Tolkien", "The Lord of the Rings"));
		bookService.saveBook(new Book("Jeffrey Archer", "Not a Penny More, Not a Penny Less"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringBootGraphqlDemoApplication.class, args);
	}

}