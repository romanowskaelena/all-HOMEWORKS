import java.util.Random;

public class Task2 {
    public static void main(String[] args) {

        Random number = new Random();

        Integer[] arr = new Integer[5];

        System.out.print("[ ");

        for (int i = 0; i < arr.length; i++) {
            arr[i] = number.nextInt(99);
            System.out.print(arr[i] + ", ");
            }

        System.out.print("]");

       if (isIncrease(arr)) {
           System.out.println("\nМассив является возрастающей последовательностью");
       } else {
           System.out.println("\nМассив является убывающей последовательностью");
            }

    }

    public static boolean isIncrease(Integer[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                return true;
                }
        } return false;
    }

}

////        Создайте массив из 5 случайных целых чисел из интервала [10;99]
////        Выведите его на консоль в строку.
////        Определите и выведите на экран сообщение о том, является ли массив строго возрастающей последовательностью.