package com.lmsAssignment.lmsAssignment;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Student {
    @Id
  private  String firstname;
   private String lastname;
    private Gender gender;
    private Address address;

}
