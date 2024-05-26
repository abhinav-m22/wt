package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
            Student s1 = new Student(
                    "Abhinav",
                    "abhinav@gmail.com",
                    LocalDate.of(2003, OCTOBER, 22)
            );
            Student s2 = new Student(
                    "Alex",
                    "alex@gmail.com",
                    LocalDate.of(2024, APRIL, 20)
            );

            repository.saveAll(
                    List.of(s1, s2)
            );
        };
    }
}
