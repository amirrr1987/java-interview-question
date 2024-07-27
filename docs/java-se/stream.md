## Stream

------------------------------

<details>
<summary dir="rtl"> 
22) تفاوت map با flatmap ؟
</summary>

<div dir="rtl">
تفاوت اصلی بین `map` و `flatMap` در جاوا (و سایر زبان‌های تابعی مانند Scala و Kotlin) در نحوه پردازش و دستیابی به داده‌های تو در تو است. این تفاوت به ویژه در برنامه‌نویسی تابعی و کار با استریم‌ها (streams) در جاوا قابل توجه است. بیایید با مثال‌هایی توضیح دهیم.

### `map` در جاوا

متد `map` یک تابع را بر روی هر عنصر از استریم اعمال می‌کند و یک استریم جدید با نتایج به دست آمده تولید می‌کند. این متد به طور مستقیم روی هر عنصر اعمال می‌شود و ساختار داده را تغییر نمی‌دهد.

**مثال:**
</div>

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MapExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack");
        List<Integer> nameLengths = names.stream()
                                         .map(String::length)
                                         .collect(Collectors.toList());
        System.out.println(nameLengths); // خروجی: [4, 4, 4]
    }
}
```

<div dir="rtl">

در این مثال، متد `map` طول هر نام را به دست آورده و یک لیست از طول‌ها (لیستی از اعداد صحیح) ایجاد می‌کند.

### `flatMap` در جاوا

متد `flatMap` برای کار با استریم‌هایی استفاده می‌شود که خود شامل استریم‌های تو در تو هستند. این متد هر عنصر را به یک استریم تبدیل می‌کند و سپس این استریم‌ها را در یک استریم صاف (تک سطحی) ترکیب می‌کند. به عبارتی دیگر، `flatMap` یک استریم از استریم‌ها را به یک استریم صاف از عناصر تبدیل می‌کند.

**مثال:**
</div>


```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FlatMapExample {
    public static void main(String[] args) {
        List<List<String>> nestedNames = Arrays.asList(
            Arrays.asList("John", "Jane"),
            Arrays.asList("Jack", "Jill"),
            Arrays.asList("Joe", "Jenny")
        );

        List<String> flatNames = nestedNames.stream()
                                            .flatMap(List::stream)
                                            .collect(Collectors.toList());
        System.out.println(flatNames); // خروجی: [John, Jane, Jack, Jill, Joe, Jenny]
    }
}
```

<div dir="rtl">
در این مثال، متد `flatMap` لیست‌های تو در تو را به یک لیست صاف از رشته‌ها تبدیل می‌کند.

### مقایسه `map` و `flatMap`

**1. `map` :**
- اعمال یک تابع بر روی هر عنصر و تولید یک استریم جدید از نتایج.
- مناسب برای پردازش ساده داده‌ها.
- ساختار داده‌ها را تغییر نمی‌دهد (هر عنصر به یک عنصر تبدیل می‌شود).

**مثال:**
</div>

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
List<Integer> squares = numbers.stream()
                               .map(n -> n * n)
                               .collect(Collectors.toList());
// خروجی: [1, 4, 9, 16]
```

<div dir="rtl">
**2. `flatMap` :**
- اعمال یک تابع بر روی هر عنصر که خود یک استریم تولید می‌کند، و سپس صاف کردن استریم‌های تو در تو به یک استریم تک سطحی.
- مناسب برای پردازش داده‌های تو در تو.
- ساختار داده‌ها را تغییر می‌دهد (هر عنصر به یک استریم تبدیل می‌شود و استریم‌های تو در تو صاف می‌شوند).

**مثال:**
</div>

```java
List<List<Integer>> nestedNumbers = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5),
    Arrays.asList(6, 7, 8)
);
List<Integer> flatList = nestedNumbers.stream()
                                      .flatMap(List::stream)
                                      .collect(Collectors.toList());
// خروجی: [1, 2, 3, 4, 5, 6, 7, 8]
```

<div dir="rtl">

### نتیجه‌گیری

- **`map` :** برای اعمال یک تابع به هر عنصر و تولید یک استریم از نتایج.
- **`flatMap` :** برای اعمال یک تابع که استریم تولید می‌کند و سپس صاف کردن استریم‌های تو در تو به یک استریم تک سطحی.

این دو متد ابزارهای قدرتمندی در جاوا برای پردازش داده‌ها در استریم‌ها هستند و با استفاده مناسب از آن‌ها می‌توان کدهای تمیزتر و کارآمدتری نوشت.
</div>
</details>

<details>
<summary dir="rtl"> 
23) چطور یه لیست رو با stream فیلتر کنیم ؟
</summary>

<div dir="rtl">

برای فیلتر کردن یک لیست با استفاده از `Stream` در جاوا، می‌توانید از متد `filter` استفاده کنید. `Stream` یک API قدرتمند برای پردازش مجموعه‌های داده به صورت دکلارتیو است و به شما اجازه می‌دهد تا عملیات‌هایی مانند فیلتر کردن، نقشه‌برداری و کاهش را به سادگی انجام دهید.

### مثال: فیلتر کردن یک لیست با استفاده از Stream

فرض کنید یک لیست از اعداد صحیح دارید و می‌خواهید فقط اعداد زوج را از این لیست فیلتر کنید.

</div>

```java
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamFilterExample {
    public static void main(String[] args) {
        // ایجاد لیستی از اعداد
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        // فیلتر کردن اعداد زوج با استفاده از Stream
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(n -> n % 2 == 0)
                                           .collect(Collectors.toList());

        // نمایش لیست فیلتر شده
        System.out.println(evenNumbers); // خروجی: [2, 4, 6, 8, 10]
    }
}
```

<div dir="rtl">

### توضیح کد:

1. **ایجاد لیست:**
    - یک لیست از اعداد صحیح از 1 تا 10 ایجاد می‌شود.

2. **ایجاد Stream و فیلتر کردن:**
    - متد `stream()` برای ایجاد یک استریم از لیست اعداد استفاده می‌شود.
    - متد `filter` یک شرط برای فیلتر کردن اعداد زوج (`n -> n % 2 == 0`) اعمال می‌کند.
    - متد `collect` برای جمع‌آوری نتایج فیلتر شده به یک لیست استفاده می‌شود.

3. **نمایش لیست فیلتر شده:**
    - لیست اعداد زوج فیلتر شده با استفاده از `System.out.println` نمایش داده می‌شود.

### فیلتر کردن یک لیست از اشیاء:

فرض کنید یک لیست از اشیاء `Person` دارید و می‌خواهید فقط اشخاصی که سن آن‌ها بیشتر از 18 سال است را فیلتر کنید.

**مرحله 1: تعریف کلاس Person**

</div>

```java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}
```

<div dir="rtl">

**مرحله 2: ایجاد و فیلتر کردن لیست از اشیاء Person**

</div>

```java
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class StreamFilterExample {
    public static void main(String[] args) {
        // ایجاد لیستی از اشخاص
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 20));
        people.add(new Person("Jane", 15));
        people.add(new Person("Tom", 25));
        people.add(new Person("Lucy", 10));

        // فیلتر کردن اشخاصی که سن آن‌ها بیشتر از 18 سال است
        List<Person> adults = people.stream()
                                    .filter(person -> person.getAge() > 18)
                                    .collect(Collectors.toList());

        // نمایش لیست فیلتر شده
        adults.forEach(System.out::println); // خروجی: John (20), Tom (25)
    }
}
```

<div dir="rtl">

### توضیح کد:

1. **تعریف کلاس Person:**
    - کلاس `Person` با دو فیلد `name` و `age` تعریف شده است.
    - متدهای سازنده، getter و `toString` برای کلاس `Person` تعریف شده‌اند.

2. **ایجاد لیست:**
    - یک لیست از اشیاء `Person` ایجاد می‌شود.

3. **ایجاد Stream و فیلتر کردن:**
    - متد `stream()` برای ایجاد یک استریم از لیست اشخاص استفاده می‌شود.
    - متد `filter` یک شرط برای فیلتر کردن اشخاصی که سن آن‌ها بیشتر از 18 سال است (`person -> person.getAge() > 18`) اعمال می‌کند.
    - متد `collect` برای جمع‌آوری نتایج فیلتر شده به یک لیست استفاده می‌شود.

4. **نمایش لیست فیلتر شده:**
    - لیست اشخاص فیلتر شده با استفاده از `forEach(System.out::println)` نمایش داده می‌شود.

### نتیجه‌گیری

استفاده از `Stream` و متد `filter` در جاوا، روش قدرتمند و کارآمدی برای پردازش و فیلتر کردن لیست‌ها است. با استفاده از این ابزارها، می‌توانید کدهای خواناتر و قابل نگهداری‌تری بنویسید.

</div>

</details>

<details>
<summary dir="rtl"> 
24) consumer , suplier در java ؟
</summary>

<div dir="rtl">

در جاوا، `Consumer` و `Supplier` دو نوع از توابعی هستند که در کتابخانه `java.util.function` معرفی شده‌اند. این توابع به عنوان بخشی از API توابعی جاوا (Java Functional API) ارائه شده‌اند و برای کار با برنامه‌نویسی تابعی (functional programming) مورد استفاده قرار می‌گیرند.

### 1. `Consumer` در جاوا

**تعریف:**
- `Consumer` یک رابط تابعی (Functional Interface) است که یک ورودی را می‌پذیرد و هیچ خروجی‌ای تولید نمی‌کند. این رابط معمولاً برای انجام عملیات بر روی ورودی استفاده می‌شود، مانند چاپ کردن، ثبت لاگ، یا اعمال تغییرات بر روی یک شیء.

**ساختار:**

</div>

```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}
```

<div dir="rtl">

**مثال:**
در این مثال، یک `Consumer` تعریف شده است که یک رشته را چاپ می‌کند:

</div>

```java
import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> printConsumer = (str) -> System.out.println(str);
        printConsumer.accept("Hello, Consumer!"); // خروجی: Hello, Consumer!
    }
}
```

<div dir="rtl">

### 2. `Supplier` در جاوا

**تعریف:**
- `Supplier` یک رابط تابعی (Functional Interface) است که هیچ ورودی‌ای نمی‌پذیرد و یک خروجی تولید می‌کند. این رابط معمولاً برای تولید یا تأمین مقادیر استفاده می‌شود، مانند ایجاد یک شیء جدید، تولید مقادیر تصادفی، یا خواندن داده‌ها از یک منبع خارجی.

**ساختار:**

</div>

```java
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```

<div dir="rtl">

**مثال:**
در این مثال، یک `Supplier` تعریف شده است که یک عدد تصادفی را تولید می‌کند:

</div>

```java
import java.util.function.Supplier;
import java.util.Random;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<Integer> randomSupplier = () -> new Random().nextInt(100);
        System.out.println("Random Number: " + randomSupplier.get()); // خروجی: عدد تصادفی بین 0 تا 99
    }
}
```

<div dir="rtl">

### استفاده‌های کاربردی از `Consumer` و `Supplier`

**مثال کاربردی با `Consumer`:**
در این مثال، از `Consumer` برای چاپ تمام عناصر یک لیست استفاده می‌کنیم:

</div>

```java
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ListConsumerExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack");
        Consumer<String> printName = (name) -> System.out.println(name);

        names.forEach(printName); // چاپ تمام نام‌ها
    }
}
```

<div dir="rtl">

**مثال کاربردی با `Supplier`:**
در این مثال، از `Supplier` برای تأمین مقادیر پیش‌فرض در یک برنامه استفاده می‌کنیم:

</div>

```java
import java.util.function.Supplier;

public class DefaultSupplierExample {
    public static void main(String[] args) {
        Supplier<String> defaultSupplier = () -> "Default Value";

        String value = getValueOrDefault(null, defaultSupplier);
        System.out.println("Value: " + value); // خروجی: Default Value
    }

    public static <T> T getValueOrDefault(T value, Supplier<T> defaultSupplier) {
        return value != null ? value : defaultSupplier.get();
    }
}
```

<div dir="rtl">

### نتیجه‌گیری

- **Consumer:** برای انجام عملیات بر روی ورودی استفاده می‌شود و هیچ خروجی‌ای ندارد. مثال: چاپ کردن، ثبت لاگ.
- **Supplier:** برای تولید یا تأمین مقادیر استفاده می‌شود و هیچ ورودی‌ای ندارد. مثال: تولید مقادیر تصادفی، تأمین مقادیر پیش‌فرض.

هر دو `Consumer` و `Supplier` از ابزارهای قدرتمند برنامه‌نویسی تابعی در جاوا هستند که می‌توانند به بهبود خوانایی و نگهداری کد کمک کنند. با استفاده از این رابط‌های تابعی، می‌توانید کدهای انعطاف‌پذیرتر و قابل استفاده مجدد بنویسید.
</div>

</details>

<details>
<summary dir="rtl"> 
25) تفاوت comprable  و comprator ؟
</summary>

<div dir="rtl">

در جاوا، `Comparable` و `Comparator` دو رابط (interface) هستند که برای مرتب‌سازی اشیاء استفاده می‌شوند. این دو رابط روش‌های متفاوتی برای تعریف ترتیب اشیاء ارائه می‌دهند و هر یک دارای کاربردها و مزایای خاص خود هستند.

### `Comparable`

**تعریف:**
- `Comparable` یک رابط است که در بسته `java.lang` قرار دارد و تنها یک متد به نام `compareTo` دارد. این رابط برای تعیین ترتیب طبیعی اشیاء استفاده می‌شود.

**ساختار:**

</div>

```java
public interface Comparable<T> {
    int compareTo(T o);
}
```
<div dir="rtl">

**نحوه استفاده:**
- یک کلاس باید `Comparable` را پیاده‌سازی کند و متد `compareTo` را تعریف کند تا ترتیب طبیعی برای اشیاء آن کلاس مشخص شود.

**مثال:**

</div>

```java
public class Student implements Comparable<Student> {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.grade, other.grade);
    }

    @Override
    public String toString() {
        return name + " (" + grade + ")";
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("John", 85));
        students.add(new Student("Jane", 92));
        students.add(new Student("Jack", 70));

        Collections.sort(students);

        for (Student s : students) {
            System.out.println(s);
        }
    }
}
```
<div dir="rtl">


**خروجی:**

</div>

```
Jack (70)
John (85)
Jane (92)
```
<div dir="rtl">

### `Comparator`

**تعریف:**
- `Comparator` یک رابط است که در بسته `java.util` قرار دارد و شامل دو متد `compare` و `equals` (اختیاری) می‌باشد. این رابط برای تعیین ترتیب سفارشی اشیاء استفاده می‌شود.

**ساختار:**

</div>

```java
public interface Comparator<T> {
    int compare(T o1, T o2);

    boolean equals(Object obj);
}
```
<div dir="rtl">

**نحوه استفاده:**
- `Comparator` برای ایجاد یک کلاس جداگانه یا یک شیء مستقل استفاده می‌شود که متد `compare` را پیاده‌سازی می‌کند تا ترتیب سفارشی بین اشیاء را مشخص کند.

**مثال:**

</div>

```java
import java.util.*;

public class Student {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    @Override
    public String toString() {
        return name + " (" + grade + ")";
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student("John", 85));
        students.add(new Student("Jane", 92));
        students.add(new Student("Jack", 70));

        // استفاده از Comparator برای مرتب‌سازی بر اساس نام
        Collections.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                return s1.getName().compareTo(s2.getName());
            }
        });

        for (Student s : students) {
            System.out.println(s);
        }
    }
}
```
<div dir="rtl">

**خروجی:**

</div>

```
Jack (70)
Jane (92)
John (85)
```
<div dir="rtl">

### تفاوت‌های کلیدی بین `Comparable` و `Comparator`
</div>

<div>
1-Sometimes we can’t modify the source code of the class whose objects we want to sort, thus making the use of Comparable impossible
<br/>
2-Using Comparators allows us to avoid adding additional code to our domain classes
<br/>
3-We can define multiple different comparison strategies, which isn’t possible when using Comparable
</div>

<div dir="rtl">
1-گاهی اوقات نمی‌توانیم کد منبع کلاسی را که می‌خواهیم اشیاء آن را مرتب کنیم، تغییر دهیم، بنابراین استفاده از Comparable غیرممکن می‌شود.
<br/>
2-استفاده از Comparators به ما این امکان را می‌دهد که از اضافه کردن کد اضافی به کلاس‌های دامنه‌مان جلوگیری کنیم.
<br/>
3-می‌توانیم چندین استراتژی مقایسه متفاوت تعریف کنیم که این کار هنگام استفاده از Comparable ممکن نیست.
</div>

</details>