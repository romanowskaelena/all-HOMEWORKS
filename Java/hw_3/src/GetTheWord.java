import java.util.Scanner;

public class GetTheWord {

    public static void main(String[] args) {
   getWord();
    }
    public static void getWord(){
        Scanner scan = new Scanner(System.in);
        String st1 = scan.nextLine();
        String st2 = scan.nextLine();

        String newSt1 = st1.substring(0, st1.length() / 2);
        String newSt2 = st2.substring(0, st2.length() / 2);

        System.out.println(newSt1 + newSt2);
    }
}
//Нужно получить слово, состоящее из первой половины первого слова и второй половины второго слова. распечатать на консоль.