package com.Allstate.CustomerAndPolicies.service;

import com.Allstate.CustomerAndPolicies.entities.Customer;

import java.util.Collection;
import java.util.List;

public interface CustomerService {

    Collection<Customer> getAllCustomers();
    Customer getCustomerById(int id);
    List<Customer> getCustomerByPolicyCodeContains(String policyCode);
    List<Customer> getCustomerByFirstName(String firstName);
    List<Customer> getCustomerByLastName(String lastName);
    List<Customer> getCustomerByCity(String city);
    List<Customer> getCustomerByZipCode(int zip);
    List<Customer> getCustomerByDateJoined(String date);

    Customer updateCustomer(Customer updatedCustomer);

    Customer createCustomer(Customer newCustomer);

    void deleteCustomer(int customerToDelete);
}
