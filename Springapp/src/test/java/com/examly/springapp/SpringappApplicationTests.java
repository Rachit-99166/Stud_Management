package com.examly.springapp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders; 
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc

class SpringappApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test

    void testaddStudents() throws Exception {

        String st = "{\"id\":5001,\"name\": \"demo\",\"department\": \"cse\",\"phonenumber\": \"1234567890\"}";

        mockMvc.perform(MockMvcRequestBuilders.post("/addStudent")
                .contentType(MediaType.APPLICATION_JSON)
                .content(st)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                //.andExpect(jsonPath("$").value(true))

                .andReturn();

    }

    @Test

    void testGetStudentById() throws Exception {

        mockMvc.perform(get("/getById/5001")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("demo"))
                .andReturn();

    }

    @Test

    void getAllStudents() throws Exception {

        mockMvc.perform(get("/getAllStudent")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andReturn();

    }

}
