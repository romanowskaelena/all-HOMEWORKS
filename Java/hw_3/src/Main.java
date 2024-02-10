import java.util.Scanner;

public class Main {

    //Введите 2 слова, воспользуйтесь сканером, состоящие из четного количества букв (проверьте количество букв в слове).

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();
        if ((str1.length() % 2 == 0) && (str2.length() % 2 == 0)) {
            System.out.println(str1);
            System.out.println(str2);
        } else {
            System.out.println("You entered short words");
        }
    }
}


