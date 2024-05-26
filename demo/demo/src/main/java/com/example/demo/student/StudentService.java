package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
//        System.out.println(student);
        Optional<Student> optionalStudent = studentRepository.findStudentByEmail(student.getEmail());
        if(optionalStudent.isPresent()){
            throw new IllegalStateException("email is already registered");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean exists = studentRepository.existsById(studentId);
        if(!exists){
            throw new IllegalStateException("Student with id " + studentId + " does not exists!");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long studentId, String name, String email) {
        Student student = studentRepository.findById(studentId).orElseThrow(() -> new IllegalStateException("Student with id " + studentId + " does not exist!"));
        if(name != null && !name.isEmpty() && !Objects.equals(name, student.getName())){
            student.setName(name);
        }
        if(email != null && !email.isEmpty() && !Objects.equals(email, student.getEmail())){
            Optional<Student> optionalStudent = studentRepository.findStudentByEmail(email);
            if(optionalStudent.isPresent()){
                throw new IllegalStateException("Email already registered");
            }
            student.setEmail(email);
        }
    }
}