package com.bezkoder.spring.datajpa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="login")
@AllArgsConstructor
//@NoArgsConstructor
@Data
public class Login {
	
	@Id
	@GeneratedValue
	private int sno;
	
	public Login(int sno, String email, String password) {
		super();
		this.sno = sno;
		this.email = email;
		this.password = password;
	}
	public Login() {
	}
	private String email;
	private String password;
	private String full_name;
	private String address;
	private Long phone_no;
	
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Long getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(Long phone_no) {
		this.phone_no = phone_no;
	}
	@Override
	public String toString() {
		return "Login [sno=" + sno + ", email=" + email + ", password=" + password + ", full_name=" + full_name
				+ ", address=" + address + ", phone_no=" + phone_no + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	
}
