## تعریف collection ؟

در واقع، در جاوا دو مفهوم جداگانه وجود دارند که ممکن است باعث سردرگمی شوند: `Collection` و `Collections`.

1. **Collection:** این یک `interface` است که بخشی از `java.util` است و پایه‌ای برای چارچوب مجموعه‌ها (Collection Framework) فراهم می‌کند. این `interface` شامل متدهایی برای کار با مجموعه‌ها است، مانند افزودن، حذف و پیمایش عناصر.

2. **Collections:** این یک `class` در `java.util` است که شامل متدهای کمکی برای کار با مجموعه‌ها است. `Collections` کلاس شامل متدهای ایستایی (static methods) است که عملیات‌هایی مانند مرتب‌سازی، جستجو و تغییر در مجموعه‌ها را انجام می‌دهند.

### `Collection` Interface

`Collection` یک `interface` است که شامل متدهای عمومی برای کار با مجموعه‌ها است.


```java
import java.util.*;

public interface Collection<E> extends Iterable<E> {
    int size();
    boolean isEmpty();
    boolean contains(Object o);
    Iterator<E> iterator();
    Object[] toArray();
    <T> T[] toArray(T[] a);
    boolean add(E e);
    boolean remove(Object o);
    boolean containsAll(Collection<?> c);
    boolean addAll(Collection<? extends E> c);
    boolean removeAll(Collection<?> c);
    boolean retainAll(Collection<?> c);
    void clear();
    boolean equals(Object o);
    int hashCode();
}
```

### `Collections` Class

`Collections` یک `class` نهایی (final class) است که شامل متدهای کمکی ایستایی برای کار با مجموعه‌ها است.

```java
import java.util.*;

public final class Collections {
    public static <T> void sort(List<T> list) {
        // متد برای مرتب‌سازی لیست
    }

    public static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key) {
        // متد برای جستجوی دودویی در لیست
    }

    // متدهای کمکی دیگر
}
```

### نتیجه‌گیری

- **Collection:** یک `interface` است که پایه‌ای برای چارچوب مجموعه‌ها فراهم می‌کند و شامل متدهای عمومی برای کار با مجموعه‌ها است.
- **Collections:** یک `class` نهایی (final class) است که شامل متدهای کمکی ایستایی برای کار با مجموعه‌ها است.

مثال استفاده از هر دو:

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // استفاده از Collection interface
        Collection<String> collection = new ArrayList<>();
        collection.add("Java");
        collection.add("Python");
        collection.add("C++");

        System.out.println("Collection: " + collection);

        // استفاده از Collections class
        List<String> list = new ArrayList<>(collection);
        Collections.sort(list);
        System.out.println("Sorted List: " + list);
    }
}
```

با این توضیحات، حالا تفاوت بین `Collection` و `Collections` مشخص‌تر شده و می‌توان تفاوت بین این دو را به خوبی درک کرد.


### interface های اصلی که از `Collection` ارث‌بری می‌کنند

1. **List:** یک مجموعه مرتب که می‌تواند شامل عناصر تکراری باشد. پیاده‌سازی‌های معروف شامل `ArrayList`, `LinkedList`, و `Vector`.
2. **Set:** یک مجموعه که نمی‌تواند شامل عناصر تکراری باشد. پیاده‌سازی‌های معروف شامل `HashSet`, `LinkedHashSet`, و `TreeSet`.
3. **Queue:** یک مجموعه که عناصر را به ترتیب خاصی برای پردازش نگهداری می‌کند. پیاده‌سازی‌های معروف شامل `PriorityQueue` و `LinkedList`.

### پیاده‌سازی‌های مختلف `Collection`

بسیاری از کلاس‌ها در جاوا از `Collection` یا interfaceهای فرعی آن ارث‌بری می‌کنند. این پیاده‌سازی‌ها ویژگی‌ها و کاربردهای خاص خود را دارند. در زیر چند مثال از پیاده‌سازی‌های مختلف آورده شده است:

**مثال: `ArrayList` که یک `List` است و از `Collection` ارث‌بری می‌کند**


```java
import java.util.ArrayList;
import java.util.Collection;

public class Main {
    public static void main(String[] args) {
        Collection<String> collection = new ArrayList<>();
        collection.add("Java");
        collection.add("Python");
        collection.add("C++");

        System.out.println("Collection: " + collection);
        System.out.println("Size: " + collection.size());
        System.out.println("Contains 'Java': " + collection.contains("Java"));
    }
}
```
### نتیجه‌گیری

`Collection` در جاوا یک `interface` است و پایه‌ای برای بسیاری از رابط‌ها و کلاس‌های موجود در چارچوب جمع‌آوری (Collection Framework) جاوا فراهم می‌کند. این `interface` مجموعه‌ای از متدها را تعریف می‌کند که همه‌ی انواع مجموعه‌ها باید پیاده‌سازی کنند، و از این رو، ساختار و رفتار مجموعه‌ها در جاوا را استانداردسازی می‌کند.



## تفاوت array با arrayList ؟

تفاوت‌های کلیدی بین `Array` و `ArrayList` در جاوا را می‌توان به چند دسته تقسیم کرد: ساختار، اندازه، عملکرد، و ویژگی‌ها. در ادامه به بررسی این تفاوت‌ها به همراه مثال‌هایی خواهیم پرداخت.

### 1. ساختار

- **Array (آرایه):** یک ساختار داده ثابت است که می‌تواند شامل عناصر از یک نوع مشخص باشد. اندازه آرایه در زمان ایجاد مشخص می‌شود و نمی‌توان آن را تغییر داد.

- **ArrayList:** یک کلاس از کتابخانه جاوا است که یک لیست پویا (قابل تغییر اندازه) از عناصر از یک نوع مشخص را فراهم می‌کند. اندازه ArrayList می‌تواند به طور پویا تغییر کند.

### 2. اندازه

- **Array:** اندازه آرایه در زمان ایجاد مشخص می‌شود و پس از آن نمی‌توان اندازه آن را تغییر داد.

 ```java
 int[] array = new int[5]; // اندازه ثابت: 5
 ```

- **ArrayList:** اندازه ArrayList به طور پویا تغییر می‌کند و می‌توان به راحتی عناصر را اضافه یا حذف کرد.

 ```java
 ArrayList<Integer> arrayList = new ArrayList<>(); // اندازه پویا
 arrayList.add(1);
 arrayList.add(2);
 ```

### 3. عملکرد

- **Array:** دسترسی به عناصر آرایه بسیار سریع است و زمان دسترسی O(1) است.

 ```java
 int element = array[2]; // دسترسی سریع به عنصر
 ```

- **ArrayList:** دسترسی به عناصر ArrayList نیز سریع است، اما ممکن است در برخی موارد کندتر از آرایه باشد به دلیل عملیات‌های داخلی مانند افزایش اندازه.

 ```java
 int element = arrayList.get(2); // دسترسی سریع به عنصر
 ```

### 4. ویژگی‌ها

- **Array:** آرایه‌ها می‌توانند شامل انواع ابتدایی (primitives) و اشیاء باشند. آن‌ها نمی‌توانند مستقیماً با ساختارهای داده‌ای کتابخانه‌های جاوا کار کنند.

 ```java
 int[] intArray = {1, 2, 3}; // آرایه از انواع ابتدایی
 String[] strArray = {"A", "B", "C"}; // آرایه از اشیاء
 ```

- **ArrayList:** ArrayList فقط می‌تواند شامل اشیاء باشد و نمی‌تواند شامل انواع ابتدایی باشد. برای استفاده از انواع ابتدایی باید از نوع Wrapper استفاده کرد. ArrayList به طور مستقیم از رابط List پیروی می‌کند و می‌تواند با دیگر ساختارهای داده‌ای کتابخانه‌های جاوا تعامل داشته باشد.

 ```java
 ArrayList<Integer> intList = new ArrayList<>(); // استفاده از نوع Wrapper برای انواع ابتدایی
 intList.add(1);
 intList.add(2);

 ArrayList<String> strList = new ArrayList<>(); // استفاده از اشیاء
 strList.add("A");
 strList.add("B");
 ```

### 5. عملیات‌های اضافی

- **Array:** عملیات‌های محدودتری نسبت به ArrayList دارند. اضافه کردن، حذف کردن، و تغییر اندازه نیاز به کدهای اضافی دارد.

- **ArrayList:** عملیات‌های بیشتری مانند افزودن، حذف کردن، مرتب‌سازی، و جستجو را ارائه می‌دهد. این عملیات‌ها به سادگی با استفاده از متدهای موجود در کلاس ArrayList انجام می‌شوند.

 ```java
 arrayList.add(3); // افزودن عنصر
 arrayList.remove(1); // حذف عنصر
 Collections.sort(arrayList); // مرتب‌سازی عناصر
 ```

### مثال مقایسه‌ای:

**مثال با Array:**

```java
public class ArrayExample {
    public static void main(String[] args) {
        int[] array = new int[5]; // ایجاد آرایه با اندازه ثابت
        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4;
        array[4] = 5;

        // دسترسی به عناصر آرایه
        for (int i = 0; i < array.length; i++) {
            System.out.println("Element at index " + i + ": " + array[i]);
        }
    }
}
```

**مثال با ArrayList:**


```java
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<Integer> arrayList = new ArrayList<>(); // ایجاد ArrayList با اندازه پویا
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        arrayList.add(4);
        arrayList.add(5);

        // دسترسی به عناصر ArrayList
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println("Element at index " + i + ": " + arrayList.get(i));
        }

        // حذف عنصر از ArrayList
        arrayList.remove(2); // حذف عنصر در اندیس 2

        // اضافه کردن عنصر به ArrayList
        arrayList.add(6);

        // مرتب‌سازی ArrayList
        Collections.sort(arrayList);

        System.out.println("Sorted ArrayList: " + arrayList);
    }
}
```

### نتیجه‌گیری

- **Array:** برای زمانی مناسب است که اندازه مجموعه داده‌ها ثابت باشد و نیاز به دسترسی سریع به عناصر داشته باشید.
- **ArrayList:** برای زمانی مناسب است که نیاز به یک لیست پویا با اندازه متغیر داشته باشید و از ویژگی‌های اضافی مانند افزودن، حذف کردن، و مرتب‌سازی بهره‌مند شوید.

هر دو ابزار در جاوا دارای کاربردهای خاص خود هستند و انتخاب بین آن‌ها بستگی به نیازهای خاص برنامه شما دارد.



## متد unmodife توی ایرنتفیس collection ؟

در جاوا، متد `unmodifiableCollection` از کلاس `Collections` ارائه شده تا یک نمای غیرقابل تغییر (unmodifiable view) از یک مجموعه (collection) ارائه دهد. این متد به شما امکان می‌دهد که یک کلکشن را به گونه‌ای بسته‌بندی کنید که نتوان آن را تغییر داد. تلاش برای تغییر این نوع از مجموعه‌ها، مانند افزودن یا حذف عناصر، منجر به پرتاب استثنا یا خطای `UnsupportedOperationException` خواهد شد.

### نحوه استفاده از `unmodifiableCollection`

برای استفاده از این متد، باید ابتدا یک مجموعه (مانند `ArrayList`, `HashSet` و غیره) داشته باشید و سپس از متد `Collections.unmodifiableCollection` برای دریافت یک نمای غیرقابل تغییر از آن استفاده کنید. در زیر یک مثال ساده آورده شده است:


```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Hello");
        list.add("World");

        Collection<String> unmodifiableList = Collections.unmodifiableCollection(list);

        System.out.println("Original list: " + list);

        // هر تلاش برای تغییر unmodifiableList منجر به خطا می‌شود
        try {
            unmodifiableList.add("Test");
        } catch (UnsupportedOperationException e) {
            System.out.println("Cannot modify the unmodifiable collection.");
        }

        System.out.println("Unmodifiable list after attempt to add: " + unmodifiableList);
    }
}
```

### توضیحات کد

1. **ایجاد لیست**: یک لیست `ArrayList` ایجاد می‌کنیم و دو رشته به آن اضافه می‌کنیم.
2. **ایجاد نمای غیر قابل تغییر**: با استفاده از `Collections.unmodifiableCollection`، یک نمای غیرقابل تغییر از لیست ایجاد شده را دریافت می‌کنیم.
3. **تلاش برای تغییر**: تلاش برای افزودن یک عنصر به نمای غیرقابل تغییر باعث پرتاب `UnsupportedOperationException` می‌شود.

### کاربردها

این تکنیک معمولاً برای جلوگیری از تغییر داده‌ها توسط کدهای ناخواسته یا اشتباه استفاده می‌شود. این کار امنیت بیشتری به برنامه‌ها می‌بخشد و از بروز خطاهای مرتبط با تغییر داده‌های مشترک جلوگیری می‌کند.
