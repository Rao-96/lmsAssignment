package com.lmsAssignment.lmsAssignment;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService StudentService;

    @GetMapping("/")
    public ResponseEntity< List < Student >> getAllStudent() {
        return ResponseEntity.ok().body(StudentService.getAllStudent());
    }

    

    @PostMapping("/")
    public ResponseEntity < Student > createStudent(@RequestBody Student Student) {
        return ResponseEntity.ok().body(this.StudentService.createStudent(Student));
    }



    @DeleteMapping("/{id}")
    public HttpStatus deleteStudent(@PathVariable String id) {
        this.StudentService.deleteStudent(id);
        return HttpStatus.OK;
    }

}
