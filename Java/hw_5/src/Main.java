// Создайте две переменные isEdekaOpen и isReweOpen, значения которых зависят от того, открыты
// магазины или нет. Реализует логический метод canBuy,  возвращающий boolean
// Значение этой
// переменной должно быть true, если хотя бы один магазин открыт, иначе false.
// Отобразите строку «Я могу купить еду, это ……» и значение.


public class Main {
    public static void main(String[] args) {

        boolean isEdekaOpen;
        boolean isReweOpen;
        boolean result = canBuy(isEdekaOpen, isReweOpen);
        if ((isEdekaOpen = true) || (isReweOpen = true)) {
            System.out.println("i can buy food" + result);
        }
    }

    public static boolean canBuy(boolean isEdekaOpen, boolean isReweOpen) {
        return isEdekaOpen || isReweOpen;
    }

}