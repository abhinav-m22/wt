package com.example.bill;

public class BillGenerator {
    public static double calculateBill(int units) {
        double totalAmount = 0;
        if (units <= 50) {
            totalAmount = units * 3.5;
        } else if (units <= 150) {
            totalAmount = 50 * 3.5 + (units - 50) * 4;
        } else if (units <= 250) {
            totalAmount = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
        } else {
            totalAmount = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
        }
        return totalAmount;
    }
}
