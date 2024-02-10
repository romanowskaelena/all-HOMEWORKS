import java.util.Scanner;

public class MathOperations {

    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);

        System.out.println("введите число а: ");
        int a = number.nextInt();
        System.out.println("введите число b: ");
        int b = number.nextInt();

        int result1 = addMethod(a, b);
        System.out.println("результат сложения = " + result1);

        int result2 = subtraktionMethod(a, b);
        System.out.println("результат вычитания = " + result2);

        int result3 = multMethod(a, b);
        System.out.println("результат деления  = " + result3);

        int result4 = divideMethod(a, b);
        System.out.println("результат умножения = " + result4);

    }

    public static int addMethod(int num1, int num2) {
        return num1 + num2;
    }

    public static int subtraktionMethod(int num1, int num2) {
        return num1 - num2;
    }

    public static int multMethod(int num1, int num2) {
        return num1 * num2;
    }

    public static int divideMethod(int num1, int num2) {
        return num1 / num2;

    }
}
