package com.Allstate.CustomerAndPolicies.repo;

import com.Allstate.CustomerAndPolicies.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    List<Customer> findByPolicyCodeContains(String policyCode);

    List<Customer> findByFirstName(String firstName);

    List<Customer> findByLastName(String lastName);

    List<Customer> findByCity(String city);

    List<Customer> findByDateJoined(String date);

    List<Customer> findByZipCode(int zip);
}
