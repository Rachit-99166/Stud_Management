package com.examly.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import com.examly.springapp.model.Student;


@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
    @Query(value = "SELECT COALESCE(MAX(id), 0) + 1 FROM Student")
    int getNextSeriesId();
}
