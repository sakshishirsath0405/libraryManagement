package com.bezkoder.spring.datajpa.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.spring.datajpa.model.Login;
import com.bezkoder.spring.datajpa.repository.LoginRepository;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	LoginRepository dao;

	@Override
	public Login findByEmail(String email) {
		return dao.findByEmail(email);
	}

}
