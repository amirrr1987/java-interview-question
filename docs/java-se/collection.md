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



## تفاوت list و set

در جاوا، `List` و `Set` دو نوع مجموعه (collection) هستند که برای ذخیره‌سازی و مدیریت داده‌ها استفاده می‌شوند، اما تفاوت‌های کلیدی در نحوه عملکرد و ویژگی‌های آن‌ها وجود دارد. در ادامه، تفاوت‌های اصلی بین `List` و `Set` را بررسی می‌کنیم:

### `List`
- **تعریف**: `List` یک مجموعه مرتب از عناصر است که می‌تواند شامل عناصر تکراری باشد.
- **پیاده‌سازی‌های اصلی**: `ArrayList`, `LinkedList`, `Vector`
- **ویژگی‌ها**:
    - **ترتیب**: `List` ترتیب عناصر را حفظ می‌کند. عناصر به ترتیب افزوده شده نمایش داده می‌شوند.
    - **دسترسی به عناصر**: می‌توان به عناصر `List` با استفاده از اندیس (index) دسترسی داشت. این امر باعث می‌شود که بتوان عناصر را به راحتی اضافه، حذف و یا تغییر داد.
    - **تکرار**: `List` می‌تواند شامل عناصر تکراری باشد، به این معنی که یک مقدار می‌تواند بیش از یک بار در `List` ظاهر شود.

**مثال**:
```java
import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Apple"); // عنصر تکراری
        System.out.println(list); // [Apple, Banana, Apple]
        
        // دسترسی به عنصر با استفاده از اندیس
        System.out.println(list.get(1)); // Banana
    }
}
```

### `Set`
- **تعریف**: `Set` یک مجموعه غیرمرتب از عناصر است که هیچ عنصر تکراری ندارد.
- **پیاده‌سازی‌های اصلی**: `HashSet`, `LinkedHashSet`, `TreeSet`
- **ویژگی‌ها**:
    - **ترتیب**: `Set` ترتیب خاصی برای عناصر خود ندارد، مگر اینکه از پیاده‌سازی خاصی مانند `LinkedHashSet` (ترتیب افزوده شده) یا `TreeSet` (ترتیب طبیعی یا مشخص شده) استفاده شود.
    - **دسترسی به عناصر**: `Set` از اندیس برای دسترسی به عناصر پشتیبانی نمی‌کند، بنابراین باید از طریق پیمایش (iteration) به عناصر دسترسی پیدا کرد.
    - **تکرار**: `Set` نمی‌تواند شامل عناصر تکراری باشد. اگر سعی کنید یک عنصر تکراری به `Set` اضافه کنید، اضافه نخواهد شد.

**مثال**:
```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // عنصر تکراری اضافه نمی‌شود
        System.out.println(set); // [Apple, Banana]
    }
}
```

### خلاصه تفاوت‌ها
| ویژگی            | `List`                      | `Set`                     |
|------------------|-----------------------------|---------------------------|
| ترتیب عناصر      | ترتیب عناصر را حفظ می‌کند  | ترتیب خاصی ندارد (مگر در پیاده‌سازی‌های خاص) |
| تکرار عناصر      | می‌تواند شامل عناصر تکراری باشد | نمی‌تواند شامل عناصر تکراری باشد |
| دسترسی به عناصر  | با استفاده از اندیس        | دسترسی با اندیس پشتیبانی نمی‌شود |
| پیاده‌سازی‌های اصلی | `ArrayList`, `LinkedList`, `Vector` | `HashSet`, `LinkedHashSet`, `TreeSet` |

### کاربردها
- **`List`**: زمانی استفاده می‌شود که ترتیب عناصر و دسترسی به آن‌ها با اندیس اهمیت دارد. به عنوان مثال، برای ذخیره‌سازی لیستی از آیتم‌ها که ممکن است تکراری باشند و ترتیب آن‌ها مهم است.
- **`Set`**: زمانی استفاده می‌شود که یکتا بودن عناصر مهم است و نمی‌خواهیم عناصر تکراری در مجموعه داشته باشیم. به عنوان مثال، برای ذخیره‌سازی مجموعه‌ای از آیتم‌های منحصر به فرد مانند شناسه‌های کاربری.

امکان ذخیره‌سازی مقدار `null` در `List` و `Set` وجود دارد، اما برخی تفاوت‌ها و محدودیت‌ها در این خصوص وجود دارد. در ادامه، نحوه برخورد `List` و `Set` با مقدار `null` را بررسی می‌کنیم.

### `List`:
در `List`، می‌توانید مقدار `null` را ذخیره کنید و هیچ محدودیتی برای تعداد مقادیر `null` وجود ندارد.

**مثال:**
```java
import java.util.ArrayList;
import java.util.List;

public class ListNullExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add(null); // اضافه کردن مقدار null
        list.add("Banana");
        list.add(null); // اضافه کردن مقدار null تکراری

        System.out.println(list); // [Apple, null, Banana, null]
    }
}
```

### `Set`:
در `Set`، می‌توانید یک مقدار `null` را ذخیره کنید، اما فقط یک مقدار `null` مجاز است. این به این دلیل است که `Set` از عناصر تکراری پشتیبانی نمی‌کند.

**مثال:**
```java
import java.util.HashSet;
import java.util.Set;

public class SetNullExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add(null); // اضافه کردن مقدار null
        set.add("Banana");
        set.add(null); // تلاش برای اضافه کردن مقدار null تکراری

        System.out.println(set); // [null, Apple, Banana]
    }
}
```

### محدودیت‌ها و رفتارهای خاص
- **`HashSet` و `LinkedHashSet`**: این پیاده‌سازی‌های `Set` اجازه می‌دهند که یک مقدار `null` ذخیره شود.
- **`TreeSet`**: این پیاده‌سازی از `Set` اجازه ذخیره‌سازی مقدار `null` را نمی‌دهد زیرا برای مرتب‌سازی عناصر به مقایسه آن‌ها نیاز دارد و مقایسه `null` با سایر عناصر منجر به `NullPointerException` می‌شود.

**مثال از `TreeSet`:**
```java
import java.util.Set;
import java.util.TreeSet;

public class TreeSetNullExample {
    public static void main(String[] args) {
        Set<String> set = new TreeSet<>();
        set.add("Apple");
        set.add(null); // این خطا ایجاد می‌کند: NullPointerException
        set.add("Banana");

        System.out.println(set);
    }
}
```

### خلاصه:
- **`List`**: اجازه ذخیره‌سازی مقادیر متعدد `null` را می‌دهد.
- **`HashSet` و `LinkedHashSet`**: اجازه ذخیره‌سازی یک مقدار `null` را می‌دهند.
- **`TreeSet`**: اجازه ذخیره‌سازی مقدار `null` را نمی‌دهد.

با در نظر گرفتن این محدودیت‌ها، می‌توانید تصمیم بگیرید که کدام ساختار داده برای نیازهای خاص شما مناسب‌تر است.



## فرق ConcurrentHashMap با Hashtable

در جاوا، `ConcurrentHashMap` و `Hashtable` هر دو برای ذخیره‌سازی و مدیریت داده‌ها در قالب کلید-مقدار استفاده می‌شوند و هر دو برای استفاده در محیط‌های چندنخی طراحی شده‌اند. اما بین این دو تفاوت‌های کلیدی وجود دارد که به کارایی و نحوه‌ی مدیریت همزمانی آن‌ها مربوط می‌شود. در ادامه به توضیح تفاوت‌های اصلی بین `ConcurrentHashMap` و `Hashtable` می‌پردازیم:

### 1. قفل‌بندی (Synchronization)
- **`Hashtable`**:
  - `Hashtable` به طور کامل synchronized است، به این معنی که هر عملیات روی `Hashtable` به طور همزمان با استفاده از یک قفل واحد انجام می‌شود. این باعث می‌شود که تمام عملیات‌ها به صورت سریالی انجام شوند که می‌تواند باعث کاهش کارایی در محیط‌های چندنخی شود.
  - همه متدهای `Hashtable` synchronized هستند، به این معنی که تنها یک نخ می‌تواند در یک زمان به متد دسترسی داشته باشد.

- **`ConcurrentHashMap`**:
  - `ConcurrentHashMap` از قفل‌بندی بهینه‌تری استفاده می‌کند. به جای یک قفل واحد، از چندین قفل کوچک‌تر به نام "segments" یا "buckets" استفاده می‌کند. این به معنای آن است که چندین نخ می‌توانند به صورت همزمان به بخش‌های مختلف `ConcurrentHashMap` دسترسی داشته باشند و عملیات‌های خود را انجام دهند، که باعث افزایش کارایی در محیط‌های چندنخی می‌شود.
  - عملیات‌های خواندن (`read`) در `ConcurrentHashMap` معمولاً بدون قفل هستند، در حالی که عملیات‌های نوشتن (`write`) از قفل‌های بخش‌بندی‌شده استفاده می‌کنند.

### 2. کارایی (Performance)
- **`Hashtable`**:
  - به دلیل استفاده از یک قفل واحد برای تمام عملیات‌ها، `Hashtable` در محیط‌های چندنخی کارایی کمتری نسبت به `ConcurrentHashMap` دارد. در برنامه‌هایی که تعداد زیادی عملیات همزمان دارند، `Hashtable` می‌تواند باعث کاهش سرعت و افزایش زمان انتظار شود.

- **`ConcurrentHashMap`**:
  - به دلیل استفاده از قفل‌های بخش‌بندی‌شده و بهینه‌سازی‌های دیگر، `ConcurrentHashMap` کارایی بهتری در محیط‌های چندنخی دارد. عملیات‌های همزمان می‌توانند به صورت موازی و با تداخل کمتر اجرا شوند.

### 3. تراکم و نگهداری (Consistency)
- **`Hashtable`**:
  - از آنجا که `Hashtable` به طور کامل synchronized است، تضمین می‌کند که در هر زمان تنها یک نخ می‌تواند عملیات را انجام دهد، بنابراین از نظر تراکم و نگهداری کاملاً مطمئن است.

- **`ConcurrentHashMap`**:
  - `ConcurrentHashMap` نیز تضمین‌های قوی تراکم و نگهداری دارد، اما بهینه‌سازی‌های بیشتری برای کارایی بهتر در محیط‌های چندنخی دارد. به عنوان مثال، در حین انجام عملیات خواندن، ممکن است داده‌هایی که همزمان در حال تغییر هستند مشاهده شوند، اما این تأثیری بر صحت کلی نقشه (map) ندارد.

### 4. Null مقادیر و کلیدها
- **`Hashtable`**:
  - `Hashtable` اجازه نمی‌دهد که کلیدها یا مقادیر null باشند. اگر سعی کنید یک کلید یا مقدار null اضافه کنید، یک `NullPointerException` پرتاب خواهد شد.

- **`ConcurrentHashMap`**:
  - مشابه `Hashtable`، `ConcurrentHashMap` نیز اجازه نمی‌دهد که کلیدها یا مقادیر null باشند. این به منظور جلوگیری از مشکلات بالقوه در مدیریت همزمانی است.

### مثال کد
مثالی از استفاده از `ConcurrentHashMap` و `Hashtable`:

```java
import java.util.Hashtable;
import java.util.concurrent.ConcurrentHashMap;

public class Example {
    public static void main(String[] args) {
        // Hashtable example
        Hashtable<String, Integer> hashtable = new Hashtable<>();
        hashtable.put("key1", 1);
        hashtable.put("key2", 2);
        System.out.println("Hashtable: " + hashtable);

        // ConcurrentHashMap example
        ConcurrentHashMap<String, Integer> concurrentHashMap = new ConcurrentHashMap<>();
        concurrentHashMap.put("key1", 1);
        concurrentHashMap.put("key2", 2);
        System.out.println("ConcurrentHashMap: " + concurrentHashMap);
    }
}
```

### خلاصه
- **`Hashtable`**: تمام متدها synchronized هستند، کارایی کمتر در محیط‌های چندنخی، اجازه نمی‌دهد که کلیدها یا مقادیر null باشند.
- **`ConcurrentHashMap`**: استفاده از قفل‌های بخش‌بندی‌شده برای بهبود کارایی در محیط‌های چندنخی، عملیات‌های خواندن بدون قفل، اجازه نمی‌دهد که کلیدها یا مقادیر null باشند.

انتخاب بین این دو کلاس به نیازهای خاص برنامه شما بستگی دارد. اگر کارایی در محیط‌های چندنخی اهمیت زیادی دارد، `ConcurrentHashMap` انتخاب بهتری است. اگر نیاز به تراکم مطلق و عدم همزمانی دارید، `Hashtable` نیز می‌تواند مناسب باشد، هرچند به ندرت استفاده می‌شود.