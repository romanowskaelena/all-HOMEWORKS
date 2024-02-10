//Представим, что у нас есть устройство, в котором две колбы.
//Прибор работает корректно, если температура первой колбы выше 100 градусов, а температура второй колбы меньше 100 градусов.
//Вы должны написать метод, который проверяет это устройство.
//Ваша программа должна иметь переменные temperature1 и temperature2.
//В результате метод возвращает true или false.


public class Main {
    public static void main(String[] args) {

    int temp1 = 120;
    int temp2 = 50;

    boolean workOrNot = checkUstrojstvo(temp1, temp2);

    if ((temp1 > 100) && (temp2 < 100)) {
            System.out.println("прибор рабоатет корректно" + workOrNot);
            } else {
            System.out.println("прибор работaет НЕ корректно" + workOrNot);
            }
    }

    private static boolean checkUstrojstvo (int temp1, int temp2) {
        return temp1 > 100 && temp2 < 100;
    }

}



