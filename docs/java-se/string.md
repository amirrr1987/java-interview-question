## String 

----------


<details>
<summary dir="rtl"> 
16) تفاوت string با string buffer و string builder ؟
</summary>

<div dir="rtl">

در جاوا، کلاس‌های `String`, `StringBuffer`, و `StringBuilder` برای کار با رشته‌ها استفاده می‌شوند. هر یک از این کلاس‌ها ویژگی‌ها و کاربردهای خاص خود را دارند. در ادامه به تفاوت‌ها و ویژگی‌های این کلاس‌ها می‌پردازیم:

### 1. کلاس `String`

**ویژگی‌ها:**
- **Immutable (غیرقابل تغییر):** پس از ایجاد یک شیء `String`، نمی‌توان محتوای آن را تغییر داد. هر تغییر در یک شیء `String` باعث ایجاد یک شیء جدید می‌شود.
- **کلاس نهایی (final):** نمی‌توان از کلاس `String` ارث‌بری کرد.

**مثال:**

</div>

```java
String str1 = "Hello";
String str2 = str1.concat(" World"); // str1 تغییر نمی‌کند، یک شیء جدید ایجاد می‌شود
System.out.println(str1); // خروجی: Hello
System.out.println(str2); // خروجی: Hello World
```

<div dir="rtl">

### 2. کلاس `StringBuffer`

**ویژگی‌ها:**
- **Mutable (قابل تغییر):** محتوای `StringBuffer` پس از ایجاد می‌تواند تغییر کند.
- **Thread-safe (ایمن در برابر دسترسی چند نخی):** متدهای `StringBuffer` هماهنگ (synchronized) هستند، بنابراین برای استفاده در محیط‌های چند نخی (multi-threaded) مناسب است.
- **کندتر از `StringBuilder`:** به دلیل هماهنگی متدها، عملیات‌ها کمی کندتر از `StringBuilder` هستند.

**مثال:**

</div>

```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
System.out.println(sb.toString()); // خروجی: Hello World
```
<div dir="rtl">

### 3. کلاس `StringBuilder`

**ویژگی‌ها:**
- **Mutable (قابل تغییر):** محتوای `StringBuilder` پس از ایجاد می‌تواند تغییر کند.
- **Not thread-safe (ایمن در برابر دسترسی چند نخی نیست):** متدهای `StringBuilder` هماهنگ (synchronized) نیستند، بنابراین برای استفاده در محیط‌های تک‌نخی (single-threaded) یا در مواردی که هماهنگی توسط برنامه‌نویس مدیریت می‌شود، مناسب است.
- **سریع‌تر از `StringBuffer`:** به دلیل عدم هماهنگی متدها، عملیات‌ها سریع‌تر از `StringBuffer` هستند.

**مثال:**

</div>

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString()); // خروجی: Hello World
```
<div dir="rtl">

### تفاوت‌های کلیدی

1. **قابلیت تغییر (Mutability):**
   - `String` غیرقابل تغییر (Immutable) است. هر تغییر در رشته باعث ایجاد یک شیء جدید می‌شود.
   - `StringBuffer` و `StringBuilder` قابل تغییر (Mutable) هستند. می‌توان محتوای آن‌ها را بدون ایجاد شیء جدید تغییر داد.

2. **ایمنی در برابر دسترسی چند نخی (Thread Safety):**
   - `String` ذاتاً ایمن در برابر دسترسی چند نخی است زیرا غیرقابل تغییر است.
   - `StringBuffer` ایمن در برابر دسترسی چند نخی است زیرا متدهای آن هماهنگ (synchronized) هستند.
   - `StringBuilder` ایمن در برابر دسترسی چند نخی نیست زیرا متدهای آن هماهنگ نیستند.

3. **کارایی (Performance):**
   - `String` به دلیل ایجاد اشیاء جدید در هر تغییر، کندتر از `StringBuffer` و `StringBuilder` است.
   - `StringBuffer` به دلیل هماهنگی متدها، کمی کندتر از `StringBuilder` است.
   - `StringBuilder` سریع‌ترین گزینه است زیرا متدهای آن هماهنگ نیستند.

### موارد استفاده

- از `String` برای رشته‌های ثابت و غیرقابل تغییر استفاده کنید.
- از `StringBuffer` در برنامه‌هایی استفاده کنید که نیاز به تغییر رشته‌ها در محیط‌های چند نخی دارند.
- از `StringBuilder` در برنامه‌هایی استفاده کنید که نیاز به تغییر رشته‌ها در محیط‌های تک‌نخی دارند یا هماهنگی دسترسی چند نخی توسط برنامه‌نویس مدیریت می‌شود.

### نتیجه‌گیری

با توجه به تفاوت‌های بالا، انتخاب بین `String`, `StringBuffer`, و `StringBuilder` بستگی به نیازهای خاص برنامه شما دارد. برای رشته‌های ثابت از `String`، برای تغییر رشته‌ها در محیط‌های چند نخی از `StringBuffer`، و برای تغییر رشته‌ها در محیط‌های تک‌نخی از `StringBuilder` استفاده کنید.

</div>

</details>


<details>
<summary dir="rtl"> 
17) 	تفاوت new کردن string با literal(مستقیم)  تعریف کردن اون ؟
</summary>

<div dir="rtl">

در جاوا، تعریف یک رشته (`String`) به دو روش اصلی انجام می‌شود: استفاده از literal (مستقیم) و استفاده از کلمه کلیدی `new`. هر یک از این روش‌ها رفتار متفاوتی دارد و تفاوت‌های مهمی بین آن‌ها وجود دارد. در ادامه به بررسی این تفاوت‌ها می‌پردازیم:

### استفاده از String Literal

وقتی یک رشته به صورت مستقیم و با استفاده از literal تعریف می‌شود، به طور خودکار در یک مکان ویژه به نام "String Pool" در حافظه ذخیره می‌شود. اگر رشته دیگری با همان مقدار ایجاد شود، به جای ایجاد یک شیء جدید، به همان شیء موجود در String Pool اشاره می‌کند.

**مثال:**

</div>

```java
String str1 = "Hello";
String str2 = "Hello";

System.out.println(str1 == str2); // خروجی: true
System.out.println(str1.equals(str2)); // خروجی: true
```

<div dir="rtl">

در این مثال، `str1` و `str2` هر دو به همان شیء در String Pool اشاره می‌کنند، بنابراین عملگر `==` که مراجع را مقایسه می‌کند، `true` بازمی‌گرداند.

### استفاده از کلمه کلیدی new

وقتی یک رشته با استفاده از کلمه کلیدی `new` تعریف می‌شود، حتی اگر رشته دیگری با همان مقدار وجود داشته باشد، یک شیء جدید در حافظه heap ایجاد می‌شود و به String Pool اشاره نمی‌کند.

**مثال:**

</div>

```java
String str3 = new String("Hello");
String str4 = new String("Hello");

System.out.println(str3 == str4); // خروجی: false
System.out.println(str3.equals(str4)); // خروجی: true
```

<div dir="rtl">

در این مثال، `str3` و `str4` به دو شیء مختلف در حافظه heap اشاره می‌کنند، بنابراین عملگر `==` که مراجع را مقایسه می‌کند، `false` بازمی‌گرداند. اما متد `equals` که محتوا را مقایسه می‌کند، `true` بازمی‌گرداند.

### تفاوت‌های کلیدی

1. **String Pool:**
   - **Literal:** رشته‌های ایجاد شده با استفاده از literal به String Pool اضافه می‌شوند. اگر رشته‌ای با همان مقدار قبلاً در String Pool وجود داشته باشد، به همان شیء اشاره می‌کند.
   - **new:** رشته‌های ایجاد شده با استفاده از `new` مستقیماً به حافظه heap می‌روند و هر بار یک شیء جدید ایجاد می‌کنند، حتی اگر مقدار یکسان باشد.

2. **کارایی:**
   - **Literal:** استفاده از literal کارایی بیشتری دارد زیرا باعث استفاده مجدد از اشیاء موجود در String Pool می‌شود و از ایجاد اشیاء اضافی جلوگیری می‌کند.
   - **new:** استفاده از `new` حافظه بیشتری مصرف می‌کند زیرا هر بار یک شیء جدید ایجاد می‌کند.

3. **مقایسه مراجع:**
   - **Literal:** رشته‌های ایجاد شده با literal که مقدار یکسانی دارند، به همان شیء در String Pool اشاره می‌کنند، بنابراین مقایسه با `==` نتیجه `true` می‌دهد.
   - **new:** رشته‌های ایجاد شده با `new` حتی اگر مقدار یکسانی داشته باشند، به اشیاء مختلفی اشاره می‌کنند، بنابراین مقایسه با `==` نتیجه `false` می‌دهد.

### نتیجه‌گیری

- **استفاده از literal:** زمانی که می‌خواهید رشته‌های ثابت و بدون تغییر داشته باشید، استفاده از literal مناسب است. این روش کارایی بیشتری دارد و از حافظه بهینه‌تر استفاده می‌کند.
- **استفاده از new:** زمانی که نیاز به ایجاد رشته‌های جدید و مجزا دارید، استفاده از `new` مناسب است. این روش هر بار یک شیء جدید ایجاد می‌کند و به String Pool اشاره نمی‌کند.

با درک این تفاوت‌ها، می‌توانید تصمیم بگیرید که کدام روش برای نیازهای خاص برنامه شما مناسب‌تر است.
</div>

</details>


<details>
<summary dir="rtl"> 
18)	String pool چیه؟	هدف از ساخت string pool چی بوده ؟
</summary>

<div dir="rtl">

### String Pool چیست؟

`String Pool` در جاوا یک ناحیه حافظه ویژه در `Heap` است که برای ذخیره‌سازی رشته‌های `String` استفاده می‌شود. این ناحیه به طور خاص برای مدیریت بهینه رشته‌ها طراحی شده است. وقتی یک رشته با استفاده از literal (مستقیم) تعریف می‌شود، JVM ابتدا بررسی می‌کند که آیا رشته‌ای با همان مقدار در `String Pool` وجود دارد یا نه. اگر وجود داشته باشد، مرجع به همان شیء بازگشت داده می‌شود؛ در غیر این صورت، رشته جدیدی ایجاد شده و در `String Pool` ذخیره می‌شود.

### هدف از ساخت String Pool

هدف اصلی از ایجاد `String Pool` در جاوا بهبود کارایی و استفاده بهینه از حافظه است. برخی از اهداف کلیدی شامل موارد زیر هستند:

1. **صرفه‌جویی در حافظه:**
   - با استفاده از `String Pool`، رشته‌های تکراری تنها یک بار در حافظه ذخیره می‌شوند. به جای ایجاد چندین شیء `String` با همان مقدار، یک شیء واحد ایجاد می‌شود و تمامی مراجع به آن شیء اشاره می‌کنند.

2. **بهبود کارایی:**
   - با جلوگیری از ایجاد اشیاء تکراری، JVM می‌تواند کارایی برنامه را بهبود بخشد. این کار باعث کاهش زمان و منابع مورد نیاز برای تخصیص و مدیریت حافظه می‌شود.

3. **کاهش هزینه‌های Garbage Collection:**
   - تعداد کمتر اشیاء `String` در حافظه به معنای کاهش بار بر روی Garbage Collector است، زیرا اشیاء کمتری برای مدیریت و پاکسازی وجود دارد.

### مثال

برای درک بهتر `String Pool` و رفتار آن، بیایید یک مثال ساده را بررسی کنیم:

</div>

```java
public class StringPoolExample {
    public static void main(String[] args) {
        // رشته ایجاد شده با literal
        String str1 = "Hello";
        String str2 = "Hello";

        // رشته ایجاد شده با کلمه کلیدی new
        String str3 = new String("Hello");
        String str4 = new String("Hello");

        // مقایسه مراجع
        System.out.println(str1 == str2); // خروجی: true
        System.out.println(str1 == str3); // خروجی: false
        System.out.println(str3 == str4); // خروجی: false

        // مقایسه محتوا
        System.out.println(str1.equals(str3)); // خروجی: true
        System.out.println(str3.equals(str4)); // خروجی: true
    }
}
```

<div dir="rtl">

### توضیح

1. **استفاده از literal:**
   - `str1` و `str2` به همان شیء در `String Pool` اشاره می‌کنند، بنابراین `str1 == str2` نتیجه `true` می‌دهد.

2. **استفاده از کلمه کلیدی new:**
   - `str3` و `str4` به دو شیء مجزا در heap اشاره می‌کنند، بنابراین `str3 == str4` نتیجه `false` می‌دهد.

### چگونه می‌توان یک رشته را به String Pool اضافه کرد؟

اگر یک رشته با استفاده از کلمه کلیدی `new` ایجاد شده باشد و بخواهیم آن را به `String Pool` اضافه کنیم، می‌توانیم از متد `intern()` استفاده کنیم:

</div>

```java
String str5 = new String("Hello");
String str6 = str5.intern(); // str6 به شیء موجود در String Pool اشاره می‌کند

System.out.println(str5 == str6); // خروجی: false
System.out.println(str1 == str6); // خروجی: true
```
<div dir="rtl">

### نتیجه‌گیری

`String Pool` در جاوا یک مکانیزم قدرتمند برای مدیریت کارآمد حافظه و بهبود کارایی برنامه‌ها است. این مکانیزم با جلوگیری از ایجاد رشته‌های تکراری، صرفه‌جویی قابل توجهی در حافظه و کاهش بار بر روی Garbage Collector را فراهم می‌کند. استفاده صحیح از `String Pool` می‌تواند تاثیر قابل توجهی بر عملکرد و کارایی برنامه‌های جاوا داشته باشد.

</div>

</details>


## Collection

----------

<details>

<summary dir="rtl"> 
19) تعریف collection ؟
</summary>

<div dir="rtl">

در واقع، در جاوا دو مفهوم جداگانه وجود دارند که ممکن است باعث سردرگمی شوند: `Collection` و `Collections`.

1. **Collection:** این یک `interface` است که بخشی از `java.util` است و پایه‌ای برای چارچوب مجموعه‌ها (Collection Framework) فراهم می‌کند. این `interface` شامل متدهایی برای کار با مجموعه‌ها است، مانند افزودن، حذف و پیمایش عناصر.

2. **Collections:** این یک `class` در `java.util` است که شامل متدهای کمکی برای کار با مجموعه‌ها است. `Collections` کلاس شامل متدهای ایستایی (static methods) است که عملیات‌هایی مانند مرتب‌سازی، جستجو و تغییر در مجموعه‌ها را انجام می‌دهند.

### `Collection` Interface

`Collection` یک `interface` است که شامل متدهای عمومی برای کار با مجموعه‌ها است.

</div>

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

<div dir="rtl">

### `Collections` Class

`Collections` یک `class` نهایی (final class) است که شامل متدهای کمکی ایستایی برای کار با مجموعه‌ها است.

</div>

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
<div dir="rtl">

### نتیجه‌گیری

- **Collection:** یک `interface` است که پایه‌ای برای چارچوب مجموعه‌ها فراهم می‌کند و شامل متدهای عمومی برای کار با مجموعه‌ها است.
- **Collections:** یک `class` نهایی (final class) است که شامل متدهای کمکی ایستایی برای کار با مجموعه‌ها است.

مثال استفاده از هر دو:

</div>

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

<div dir="rtl">

با این توضیحات، حالا تفاوت بین `Collection` و `Collections` مشخص‌تر شده و می‌توان تفاوت بین این دو را به خوبی درک کرد.


### interface های اصلی که از `Collection` ارث‌بری می‌کنند

1. **List:** یک مجموعه مرتب که می‌تواند شامل عناصر تکراری باشد. پیاده‌سازی‌های معروف شامل `ArrayList`, `LinkedList`, و `Vector`.
2. **Set:** یک مجموعه که نمی‌تواند شامل عناصر تکراری باشد. پیاده‌سازی‌های معروف شامل `HashSet`, `LinkedHashSet`, و `TreeSet`.
3. **Queue:** یک مجموعه که عناصر را به ترتیب خاصی برای پردازش نگهداری می‌کند. پیاده‌سازی‌های معروف شامل `PriorityQueue` و `LinkedList`.

### پیاده‌سازی‌های مختلف `Collection`

بسیاری از کلاس‌ها در جاوا از `Collection` یا interfaceهای فرعی آن ارث‌بری می‌کنند. این پیاده‌سازی‌ها ویژگی‌ها و کاربردهای خاص خود را دارند. در زیر چند مثال از پیاده‌سازی‌های مختلف آورده شده است:

**مثال: `ArrayList` که یک `List` است و از `Collection` ارث‌بری می‌کند**

</div>

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

<div dir="rtl">

### نتیجه‌گیری

`Collection` در جاوا یک `interface` است و پایه‌ای برای بسیاری از رابط‌ها و کلاس‌های موجود در چارچوب جمع‌آوری (Collection Framework) جاوا فراهم می‌کند. این `interface` مجموعه‌ای از متدها را تعریف می‌کند که همه‌ی انواع مجموعه‌ها باید پیاده‌سازی کنند، و از این رو، ساختار و رفتار مجموعه‌ها در جاوا را استانداردسازی می‌کند.
</div>

</details>

<details>
<summary dir="rtl"> 
20) تفاوت array با arrayList ؟
</summary>

<div dir="rtl">

تفاوت‌های کلیدی بین `Array` و `ArrayList` در جاوا را می‌توان به چند دسته تقسیم کرد: ساختار، اندازه، عملکرد، و ویژگی‌ها. در ادامه به بررسی این تفاوت‌ها به همراه مثال‌هایی خواهیم پرداخت.

### 1. ساختار

- **Array (آرایه):** یک ساختار داده ثابت است که می‌تواند شامل عناصر از یک نوع مشخص باشد. اندازه آرایه در زمان ایجاد مشخص می‌شود و نمی‌توان آن را تغییر داد.

- **ArrayList:** یک کلاس از کتابخانه جاوا است که یک لیست پویا (قابل تغییر اندازه) از عناصر از یک نوع مشخص را فراهم می‌کند. اندازه ArrayList می‌تواند به طور پویا تغییر کند.

### 2. اندازه

- **Array:** اندازه آرایه در زمان ایجاد مشخص می‌شود و پس از آن نمی‌توان اندازه آن را تغییر داد.

</div>

 ```java
 int[] array = new int[5]; // اندازه ثابت: 5
 ```

<div dir="rtl">

- **ArrayList:** اندازه ArrayList به طور پویا تغییر می‌کند و می‌توان به راحتی عناصر را اضافه یا حذف کرد.

</div>

 ```java
 ArrayList<Integer> arrayList = new ArrayList<>(); // اندازه پویا
 arrayList.add(1);
 arrayList.add(2);
 ```

<div dir="rtl">

### 3. عملکرد

- **Array:** دسترسی به عناصر آرایه بسیار سریع است و زمان دسترسی O(1) است.

</div>

 ```java
 int element = array[2]; // دسترسی سریع به عنصر
 ```

<div dir="rtl">

- **ArrayList:** دسترسی به عناصر ArrayList نیز سریع است، اما ممکن است در برخی موارد کندتر از آرایه باشد به دلیل عملیات‌های داخلی مانند افزایش اندازه.

</div>

 ```java
 int element = arrayList.get(2); // دسترسی سریع به عنصر
 ```

<div dir="rtl">

### 4. ویژگی‌ها

- **Array:** آرایه‌ها می‌توانند شامل انواع ابتدایی (primitives) و اشیاء باشند. آن‌ها نمی‌توانند مستقیماً با ساختارهای داده‌ای کتابخانه‌های جاوا کار کنند.

</div>

 ```java
 int[] intArray = {1, 2, 3}; // آرایه از انواع ابتدایی
 String[] strArray = {"A", "B", "C"}; // آرایه از اشیاء
 ```

<div dir="rtl">

- **ArrayList:** ArrayList فقط می‌تواند شامل اشیاء باشد و نمی‌تواند شامل انواع ابتدایی باشد. برای استفاده از انواع ابتدایی باید از نوع Wrapper استفاده کرد. ArrayList به طور مستقیم از رابط List پیروی می‌کند و می‌تواند با دیگر ساختارهای داده‌ای کتابخانه‌های جاوا تعامل داشته باشد.

</div>

 ```java
 ArrayList<Integer> intList = new ArrayList<>(); // استفاده از نوع Wrapper برای انواع ابتدایی
 intList.add(1);
 intList.add(2);

 ArrayList<String> strList = new ArrayList<>(); // استفاده از اشیاء
 strList.add("A");
 strList.add("B");
 ```

<div dir="rtl">

### 5. عملیات‌های اضافی

- **Array:** عملیات‌های محدودتری نسبت به ArrayList دارند. اضافه کردن، حذف کردن، و تغییر اندازه نیاز به کدهای اضافی دارد.

- **ArrayList:** عملیات‌های بیشتری مانند افزودن، حذف کردن، مرتب‌سازی، و جستجو را ارائه می‌دهد. این عملیات‌ها به سادگی با استفاده از متدهای موجود در کلاس ArrayList انجام می‌شوند.

</div>

 ```java
 arrayList.add(3); // افزودن عنصر
 arrayList.remove(1); // حذف عنصر
 Collections.sort(arrayList); // مرتب‌سازی عناصر
 ```
<div dir="rtl">

### مثال مقایسه‌ای:

**مثال با Array:**

</div>

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

<div dir="rtl">

**مثال با ArrayList:**

</div>

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

<div dir="rtl">

### نتیجه‌گیری

- **Array:** برای زمانی مناسب است که اندازه مجموعه داده‌ها ثابت باشد و نیاز به دسترسی سریع به عناصر داشته باشید.
- **ArrayList:** برای زمانی مناسب است که نیاز به یک لیست پویا با اندازه متغیر داشته باشید و از ویژگی‌های اضافی مانند افزودن، حذف کردن، و مرتب‌سازی بهره‌مند شوید.

هر دو ابزار در جاوا دارای کاربردهای خاص خود هستند و انتخاب بین آن‌ها بستگی به نیازهای خاص برنامه شما دارد.

</div>

</details>

<details>
<summary dir="rtl"> 
21) متد unmodife توی ایرنتفیس collection ؟
</summary>

<div dir="rtl">
در جاوا، متد `unmodifiableCollection` از کلاس `Collections` ارائه شده تا یک نمای غیرقابل تغییر (unmodifiable view) از یک مجموعه (collection) ارائه دهد. این متد به شما امکان می‌دهد که یک کلکشن را به گونه‌ای بسته‌بندی کنید که نتوان آن را تغییر داد. تلاش برای تغییر این نوع از مجموعه‌ها، مانند افزودن یا حذف عناصر، منجر به پرتاب استثنا یا خطای `UnsupportedOperationException` خواهد شد.

### نحوه استفاده از `unmodifiableCollection`

برای استفاده از این متد، باید ابتدا یک مجموعه (مانند `ArrayList`, `HashSet` و غیره) داشته باشید و سپس از متد `Collections.unmodifiableCollection` برای دریافت یک نمای غیرقابل تغییر از آن استفاده کنید. در زیر یک مثال ساده آورده شده است:

</div>


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
<div dir="rtl">

### توضیحات کد

1. **ایجاد لیست**: یک لیست `ArrayList` ایجاد می‌کنیم و دو رشته به آن اضافه می‌کنیم.
2. **ایجاد نمای غیر قابل تغییر**: با استفاده از `Collections.unmodifiableCollection`، یک نمای غیرقابل تغییر از لیست ایجاد شده را دریافت می‌کنیم.
3. **تلاش برای تغییر**: تلاش برای افزودن یک عنصر به نمای غیرقابل تغییر باعث پرتاب `UnsupportedOperationException` می‌شود.

### کاربردها

این تکنیک معمولاً برای جلوگیری از تغییر داده‌ها توسط کدهای ناخواسته یا اشتباه استفاده می‌شود. این کار امنیت بیشتری به برنامه‌ها می‌بخشد و از بروز خطاهای مرتبط با تغییر داده‌های مشترک جلوگیری می‌کند.
</div>
</details>


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