package com.labs.sboot.controller;

import com.labs.sboot.model.Order;
import com.labs.sboot.model.ResponseMessage;
import com.labs.sboot.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class OrderController {

    @Autowired
    @Qualifier("orderServiceColImpl")
//    @Qualifier("orderServiceJpaImpl")
//    @Qualifier("orderServiceRepositoryImpl")
    private OrderService orderService;

    // CREATE       POST /orders
    // LIST ALL     GET /orders
    // VIEW         GET /orders/{id}
    // UPDATE       PUT /orders/{id}
    // DELETE       DELETE /orders/{id}


    @PostMapping(path="/orders")
    public ResponseEntity<ResponseMessage> create(@RequestBody @Valid Order order) throws URISyntaxException {
        int id = orderService.create(order);

        ResponseMessage response;
        if(id > 0) {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                    .buildAndExpand(id).toUri();

             response = new ResponseMessage("Success", "Order created successfully");
            return ResponseEntity.created(uri).body(response);
        } else {
            response = new ResponseMessage("Failure", "Order created failed");
            return ResponseEntity.internalServerError().body(response);
        }

    }

    @GetMapping(path="/orders")
    public Collection<Order> getAll() {
        return orderService.viewAll();
    }

    @GetMapping(path="/orders/{id}")
    public Order get(@PathVariable int id) {
        return orderService.view(id);
    }
    
    @PutMapping(path="/orders/{id}")
    public ResponseEntity<ResponseMessage> update(@PathVariable int id, @RequestBody @Valid Order order) {
        boolean flag = orderService.update(id, order);

        ResponseMessage response;
        if(flag) {
            response = new ResponseMessage("Success", "Order updated successfully");
            return ResponseEntity.ok(response);
        } else {
            response = new ResponseMessage("Failure", "Order updation failed");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @DeleteMapping(path="/orders/{id}")
    public ResponseEntity<ResponseMessage> delete(@PathVariable int id) {
        boolean flag = orderService.delete(id);
        ResponseMessage response;
        if(flag) {
            response = new ResponseMessage("Success", "Order deleted successfully");
            return ResponseEntity.ok(response);
        } else {
            response = new ResponseMessage("Failure", "Order deletion failed");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @GetMapping(path="/orders/stats")
    public ResponseEntity<?> stats() {
        List<Map<String, Integer>> catWiseCount = orderService.getCategoryWiseCount();
        return ResponseEntity.ok(catWiseCount);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseMessage> handleValidationException(MethodArgumentNotValidException e) {
        String errorMsg = e.getBindingResult()
                .getAllErrors()
                .stream()
                .map(err -> err.getDefaultMessage())
                .collect(Collectors.joining(", "));

        ResponseMessage response = new ResponseMessage("Failure", errorMsg);
        return ResponseEntity.badRequest().body(response);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseMessage> handleGenericException(Exception e) {
        ResponseMessage response = new ResponseMessage("Failure", e.getMessage());
        return ResponseEntity.internalServerError().body(response);
    }

}
