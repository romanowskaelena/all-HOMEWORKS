import java.util.Scanner;

public class Two {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Введите число 1");
        System.out.println("Введите число 2");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        int resultSum = addNum(num1, num2);
        int resultSubtract = subtractNum(num1, num2);
        int resultMultiply = multiplyNum(num1, num2);
        double resultDivide = divideNum(num1, num2);
        System.out.println("Результат сложения чисел =  " + resultSum);
        System.out.println("Результат вычитания чисел = " + resultSubtract);
        System.out.println("Результат умножения чисел =  " + resultMultiply);
        System.out.println("Результат деления чисел =   " + resultDivide);
    }

    public static int addNum(int num1, int num2) {
        return num1 + num2;
    }
    public static int subtractNum(int num1, int num2) {
        return num1 - num2;
    }
    public static int multiplyNum(int num1, int num2) {
        return num1 * num2;
    }
    public static double divideNum(int num1, int num2) {
        return num1 / num2;
    }




}
//№2
//Реализовать программу, выводящую на экран результаты:
//Сложения двух чисел
//Вычитания двух чисел
//Умножения двух чисел
//Деления двух чисел
//Каждая из арифметических операций должна быть реализована как
//два отдельных метода - один с типом void, второй - int.
//


