package com.lmsAssignment.lmsAssignment;

import java.util.List;

public interface StudentService {

    Student createStudent(Student Student);



    List< Student > getAllStudent();



    void deleteStudent(String id);
}
