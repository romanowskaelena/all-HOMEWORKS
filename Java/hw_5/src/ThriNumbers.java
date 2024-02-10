
//Реализуйте программу, которая попросит пользователя ввести три целых числа (используйте сканер) и напечатает максимум из трех чисел.

import java.util.Scanner;

public class ThriNumbers {
    public static void main(String[] args) {
        Scanner scr = new Scanner(System.in);

        System.out.println(" Введите первое число ");
        int num1 = scr.nextInt();

        System.out.println(" Введите второе число ");
        int num2 = scr.nextInt();

        System.out.println(" Введите третье число ");
        int num3 = scr.nextInt();

        int max;

        if ((num1 != num3) && (num2 != num3) && (num1 != num2)) {

            if (num1 > num2 && num1 > num3) {
                max = num1;
            } else if (num2 > num1 && num2 > num3) {
                max = num2;
            } else {
                max = num3;
            }
            System.out.println("максимальное число " + max);

        } else {
            System.out.println("введите другие числа");
        }
    }
}