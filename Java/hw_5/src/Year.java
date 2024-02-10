//Реализуйте программу, которая попросит пользователя ввести год и напечатать этот год isLeap (високосный) или нет

import java.util.Scanner;

public class Year {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("inter your year");
        int year = sc.nextInt();

    }

    private static boolean isLeapYear(int year) {
        boolean result;
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            System.out.println("the year is a " + result);
        } else {
            System.out.println("the year is NOT a  " + result);
        }
        return result;
    }
}