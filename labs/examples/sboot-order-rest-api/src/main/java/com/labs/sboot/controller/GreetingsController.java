package com.labs.sboot.controller;

import com.labs.sboot.model.Greeting;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@RestController("/greetings")
public class GreetingsController {
    @Operation(summary = "Creates Greetings message")
    @PostMapping(consumes = {"application/json", "application/xml", MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ResponseEntity<?> greetingWithPost(@RequestBody @Valid Greeting greeting) throws URISyntaxException {

        String msg = "Greetings created - " + greeting;
        log.info(msg);
        URI uri = new URI("http://localhost:8080/spring-order-rest-api/greetings/" + 1);
        return ResponseEntity.created(uri).body("Greetings created");
    }
}
