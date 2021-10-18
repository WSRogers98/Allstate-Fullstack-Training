package com.Allstate.CustomerAndPolicies.service;

import com.Allstate.CustomerAndPolicies.entities.Customer;
import com.Allstate.CustomerAndPolicies.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Collection<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(int id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public List<Customer> getCustomerByPolicyCodeContains(String policyCode) {
        return customerRepository.findByPolicyCodeContains(policyCode);
    }

    @Override
    public List<Customer> getCustomerByFirstName(String firstName) {
        return customerRepository.findByFirstName(firstName);
    }

    @Override
    public List<Customer> getCustomerByLastName(String lastName) {
        return customerRepository.findByLastName(lastName);
    }

    @Override
    public List<Customer> getCustomerByCity(String city) {
        return customerRepository.findByCity(city);
    }

    @Override
    public List<Customer> getCustomerByZipCode(int zip) {
        return customerRepository.findByZipCode(zip);
    }

    @Override
    public List<Customer> getCustomerByDateJoined(String date) {
        return customerRepository.findByDateJoined(date);
    }

    @Override
    public Customer updateCustomer(Customer updatedCustomer) {
        return customerRepository.save(updatedCustomer);
    }

    @Override
    public Customer createCustomer(Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }

    @Override
    public void deleteCustomer(int idOfCustomerToDelete) {
         customerRepository.deleteById(idOfCustomerToDelete);
    }
}

