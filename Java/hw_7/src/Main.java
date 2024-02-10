import java.util.Random;

public class Main {
    public static void main(String[] args) {

        Random number = new Random();

        Integer[] arr = new Integer[8]; // 8 случайных целых чисел

        System.out.print("[ ");

        for (int i = 0; i < arr.length; i++) {
            arr[i] = number.nextInt(50); //интервал до 50
            System.out.print(arr[i] + ", ");

                    if (arr[i] % 2 == 0) {
                        arr[i] = 0;
                        System.out.print("(number was changed to " + arr[i] + ")" + ", ");
                    }
        }
        System.out.print("]");
    }
}


////      Создайте массив из 8 случайных целых чисел из интервала [1;50]
//        Выведите массив на консоль в строку.
//        Замените каждый элемент с нечетным индексом на ноль.
//        Снова выведете массив на консоль в отдельной строке.
