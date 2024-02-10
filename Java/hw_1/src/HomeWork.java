
public class HomeWork {
    public static void main(String[] args) {

        byte bSimple = 4;
        Byte bClass = 4;
        System.out.println("simple byte = " + bSimple + ". Class byte = " + bClass + ".");

        short sSimple = 56;
        Short sClass = 56;
        System.out.println("simple short = " + sSimple + ". " + "Class short = " + sClass + ".");

        char chSimple = 'G';
        Character chClass = new Character('G');
        System.out.println("simple char = " + chSimple + ". " + "Class char = " + chClass + ".");

        int iSimple = 89;
        Integer iClass = new Integer(89);
        // Integer iClass = Integer.valueOf(89) //
        System.out.println("simple int = " + iSimple + " ." + "Class int = " + iClass + ".");

        float fSimple = 4.7333436f;
        Float fClass = new Float(4.7333436f);
        // or  Float fClass = 4.7333436f //используем такой синтаксис!!
        // or  Float fClass = Float.valueOf(4.7333436f)
        System.out.println("simple float = " + fSimple + " ." + "Class float = " + fClass + ".");

        double dSimple = 4.355453532;
        Double dClass = new Double(4.355453532);
        System.out.println("simple double = " + dSimple + " ." + "Class double = " + dClass + ".");

        long lSimple = 12121;
        Long lClass = new Long(12121);
        System.out.println("simple long = " + lSimple + " ." + "Class long = " + lClass + ".");

        ////
        Integer num = 345;
        Integer num1 = num / 100; //=3,45. это Выводим!
        Integer num2 = num / 10; //=34,5
        Integer num3 = num2 % 10; //=34 / 10 c остатком = 3,4(остаток 4). это Выводим!
        Integer num4 = num % 10; //=345 / 10 с остатком = 34,5 (остаток 5). это Выводим!
        System.out.println(num1 + " , " + num3 + " , " + num4);

    }
}