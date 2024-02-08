package com.bezkoder.spring.datajpa.services;

import com.bezkoder.spring.datajpa.model.Login;

public interface UserService {
	Login findByEmail(String email);
}
