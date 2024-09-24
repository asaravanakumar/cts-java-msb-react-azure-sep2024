package com.labs.java.module.order;

import com.labs.java.module.product.model.Product;
import com.labs.java.module.product.service.ProductService;

import java.util.ServiceLoader;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Product product = new Product(100, "Laptops", "HP Pavilion", 1, 75000.0);
        System.out.println(product);



        ServiceLoader<ProductService> sl = ServiceLoader.load(ProductService.class);

        ProductService productService = sl.findFirst().get();

        productService.createProduct(product);
        System.out.println(productService.getProduct(100));
    }
}