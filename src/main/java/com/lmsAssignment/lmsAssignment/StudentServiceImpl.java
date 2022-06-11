package com.lmsAssignment.lmsAssignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }



    @Override
    public List<Student> getAllStudent() {
        return this.studentRepository.findAll();
    }



    @Override
    public void deleteStudent(String id) {
        Optional < Student > StudentDb = this.studentRepository.findById(id);

        if (StudentDb.isPresent()) {
            this.studentRepository.delete(StudentDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + id);
        }
    }
}
