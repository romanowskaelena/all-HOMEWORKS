//У вас на банковском счету N долларов.
//Вы хотите снять все, но банк разрешает снять только сумму, которая является делителем текущей суммы на счету и меньше текущей суммы.
//Если вы снимаете максимально возможную сумму каждый день, сколько дней вам понадобится, чтобы забрать все свои деньги из банка?
//Примечание: если оставшаяся сумма равна 1, вы можете снять ее.
//
//Ввод:  N = 21
//Выход:  7
//Объяснение:  N = 21
//Снято 7, осталось = 14
//Снято 7, осталось = 7
//Снято 1, осталось = 6
//Снято 3, осталось = 3
//Снято 1, осталось = 2
//Снято 1, Осталось = 1
//Снято 1, осталось = 0

import java.util.Scanner;

public class Bank {

    public static void main(String[] args) {
       
        Scanner sc = new Scanner(System.in);
        System.out.println("Input amount");
        int userInput = sc.nextInt();

        if (n < userInput) {
            int result = n - userInput;
            System.out.println("снято " + userInput);
            System.out.println("осталось " + result);
        }

        int days = getDays();
        System.out.println(days + "days you need to get all your money");
    }

    public static int getDays (int ) {
        int sum;
        for (int i = userInput / 2; i > 0; i--) {
            if (userInput % i == 0) {
                sum = i;
            }
            return i;
        }
    }
}


