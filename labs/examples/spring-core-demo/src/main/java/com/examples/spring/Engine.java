package com.examples.spring;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class Engine { //implements InitializingBean, DisposableBean {

	private Engine() {

	}

	private static Engine engine;

	private int capacity;
	private int noOfCynclinders;
	private int torque;

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getNoOfCynclinders() {
		return noOfCynclinders;
	}

	public void setNoOfCynclinders(int noOfCynclinders) {
		this.noOfCynclinders = noOfCynclinders;
	}

	public int getTorque() {
		return torque;
	}

	public void setTorque(int torque) {
		this.torque = torque;
	}

	// Factory Method
	public static Engine getInstance() {
		System.out.println("Static Factory method called...");
		if(engine == null) {
			engine = new Engine();
		}
		return engine;
	}
	
//	public void init() {
//		System.out.println("Engine Bean Initialized...");
//	}
//	
//	public void destroy() {
//		System.out.println("Engine Bean Destroyed...");
//	}	

}
