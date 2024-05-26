package com.example.bill;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BillController {
    @GetMapping("/calculate/{units}")
    public String calculateBill(@PathVariable Integer units){
        double totalAmount = BillGenerator.calculateBill(units);
        return "Total Amount: Rs. " + totalAmount;
    }
}
