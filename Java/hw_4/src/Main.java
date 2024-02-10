import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       System.out.println("Введите дробное число");
       double m = sc.nextDouble();
       System.out.println("Введите 2 дробное число");
       double n = sc.nextDouble();

       double newNum = findNumber(m, n);
       System.out.println("число "+ newNum + " ближе к 10");
    }
    public static double findNumber(double m, double n) {
        double result;
        if (Math.abs(10 - m) < Math.abs(10 - n)) {
            result = m;
        } else {
           result = n;
        } return result;
    }
}
/*
Создать программу, выводящую на экран ближайшее к 10 из двух чисел, записанных в переменные m и n.
Числа могут быть, как целочисленные, так и дробные.
 */
