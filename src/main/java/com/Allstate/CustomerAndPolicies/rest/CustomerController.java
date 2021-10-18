package com.Allstate.CustomerAndPolicies.rest;

import com.Allstate.CustomerAndPolicies.entities.Customer;
import com.Allstate.CustomerAndPolicies.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;


@RestController
@RequestMapping("/customers")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public Collection<Customer> getCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/{customer_id}")
    public Customer getCustomerID(@PathVariable("customer_id") int id){
        return customerService.getCustomerById(id);
    }

    @GetMapping("/search/policycode/{customerPolicyCode}")
    public List<Customer> getCustomerPolicyCode(@PathVariable String customerPolicyCode){
        return customerService.getCustomerByPolicyCodeContains(customerPolicyCode);
    }

    @GetMapping("/search/firstname/{customerFirstName}")
    public List<Customer> getCustomerFirstName(@PathVariable String customerFirstName){
        return customerService.getCustomerByFirstName(customerFirstName);
    }

    @GetMapping("/search/lastname/{customerLastName}")
    public List<Customer> getCustomerLastName(@PathVariable String customerLastName){
        return customerService.getCustomerByLastName(customerLastName);
    }

    @GetMapping("/search/city/{customerCity}")
    public List<Customer> getCustomerCity(@PathVariable String customerCity){
        return customerService.getCustomerByCity(customerCity);
    }

    @GetMapping("/search/zipcode/{customerZip}")
    public List<Customer> getCustomerZip(@PathVariable int customerZip){
        return customerService.getCustomerByZipCode(customerZip);
    }

    @GetMapping("/search/datejoined/{customerDateJoined}")
    public List<Customer> getCustomerDateJoined(@PathVariable String customerDateJoined){
        return customerService.getCustomerByDateJoined(customerDateJoined);
    }

    @PutMapping
    public Customer updateCustomer(@RequestBody Customer updatedCustomer){
        return customerService.updateCustomer(updatedCustomer);
    }

    @PostMapping()
    public Customer createCustomer(@RequestBody Customer newCustomer){
        return customerService.createCustomer(newCustomer);
    }
    @DeleteMapping("/{delete_id}")
    public void deleteCustomer(@PathVariable("delete_id") int idOfCustomerToDelete ){
         customerService.deleteCustomer(idOfCustomerToDelete);
    }

}
