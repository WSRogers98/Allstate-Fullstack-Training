//package com.Allstate.CustomerAndPolicies.rest;
//
//import com.Allstate.CustomerAndPolicies.entities.Customer;
//import com.Allstate.CustomerAndPolicies.service.CustomerService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.SpringBootConfiguration;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.context.annotation.Profile;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.TestPropertySource;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static org.hamcrest.CoreMatchers.is;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.BDDMockito.given;
//import static org.mockito.Mockito.verify;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(CustomerController.class)
//public class TestCustomerController {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private CustomerService service;
//
//    @Autowired
//    private ObjectMapper mapper;
//
//    @Test
//    public void testCanGetAllCustomers() throws Exception{
//        Customer customer = new Customer(1,"Will","Rogers","charlotte",28037,"june 13th, 2021");
//        List<Customer> allCustomers =Arrays.asList(customer);
//        given(service.getAllCustomers()).willReturn(allCustomers);
//
//        mockMvc.perform(get("/customers")
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].firstName", is("Will")));
//    }
//    @Test
//    public void testCanAddCustomer() throws Exception {
//
//        Customer customer = new Customer(2,"Billy","Rogers","charlotte",28037,"june 13th, 2021");
//
//        mockMvc.perform(post("/customers")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(mapper.writeValueAsString(customer)))
//                .andExpect(status().isOk());
//        verify(service).createCustomer(any(Customer.class));
//
//    }
//    @Test
//    public void testCanUpdateCustomer() throws Exception {
//        Customer customer = new Customer(1,"Will","Rogers","charlotte",28037,"june 13th, 2021");
//        List<Customer> allCustomers =Arrays.asList(customer);
//        given(service.getAllCustomers()).willReturn(allCustomers);
//        Customer newCustomer = new Customer(1,"Spencer","Rogers","charlotte",28037,"june 13th, 2021");
//        service.updateCustomer(newCustomer);
//
//        mockMvc.perform(post("/customers")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(mapper.writeValueAsString(newCustomer)))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$[0].firstName", is("Spencer")));
//
//    }
//    }
//

