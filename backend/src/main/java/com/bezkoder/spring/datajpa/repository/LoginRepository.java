package com.bezkoder.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bezkoder.spring.datajpa.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer>{
	Login findByEmail(String email);

}
