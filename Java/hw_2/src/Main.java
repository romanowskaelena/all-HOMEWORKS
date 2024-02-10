
public class Main {
    public static void main(String[] args) {
        String str = "I study Basic Java!";
        printString(str);
    }

    public static void printString(String str) { // 1 параметр - стринг наша строка, 2 str второй
        // параметр внутри функции

        System.out.println(str);
        System.out.println("whole string = " + str.length());
        System.out.println("предпоследний символ: " + str.charAt(str.length() - 2));
        System.out.println("предпоследнее слово: " + str.substring(14, 18));
        System.out.println(str.toLowerCase());
        System.out.println(str.toUpperCase());
    }

}