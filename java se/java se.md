## String

<details open>

<summary dir="rtl"> 
1) oop؟
</summary>

<div dir="rtl">

1. **کپسوله‌سازی (Encapsulation):** کپسوله‌سازی به معنای پنهان‌سازی جزئیات پیاده‌سازی و نمایش فقط ویژگی‌ها و روش‌های ضروری به کاربر است. این امر با استفاده از دسترسی‌کننده‌های خصوصی (private) و عمومی (public) در کلاس‌ها انجام می‌شود. به عنوان مثال:
</div>

```java
    public class Car {
        private String color;
        private String model;

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public String getModel() {
            return model;
        }

        public void setModel(String model) {
            this.model = model;
        }
    }
```


<div dir="rtl">

2. **وراثت (Inheritance):** وراثت به معنی قابلیت تعریف یک کلاس جدید بر اساس یک کلاس موجود است که تمام خصوصیات و روش‌های آن را به ارث می‌برد و می‌تواند ویژگی‌ها و روش‌های جدیدی به آن اضافه کند. این امر باعث استفاده مجدد از کد می‌شود. به عنوان مثال:
</div>

```java
    public class Vehicle {
        protected String brand = "Ford";

        public void honk() {
            System.out.println("Beep beep!");
        }
    }

    public class Car extends Vehicle {
        private String modelName = "Mustang";

        public String getModelName() {
            return modelName;
        }
    }
```

<div dir="rtl">

3. **چندریختی (Polymorphism):** چندریختی به توانایی استفاده از یک تابع یا روش به روش‌های مختلف اشاره دارد. این ویژگی اجازه می‌دهد تا اشیاء از کلاس‌های مختلف به عنوان یک نوع عمومی‌تر در نظر گرفته شوند. به عنوان مثال:
</div>    

```java
    public class Animal {
        public void makeSound() {
            System.out.println("Animal makes a sound");
        }
    }

    public class Dog extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Woof");
        }
    }

    public class Cat extends Animal {
        @Override
        public void makeSound() {
            System.out.println("Meow");
        }
    }

    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound(); // Woof
        myCat.makeSound(); // Meow
    }
```

<div dir="rtl">

4. **تجرید (Abstraction):** تجرید به معنای نمایش جزئیات مهم و پنهان کردن جزئیات غیرضروری برای ساده‌سازی مدل‌سازی است. این امر با استفاده از کلاس‌های انتزاعی (abstract) و رابط‌ها (interface) انجام می‌شود. به عنوان مثال:
</div>

```java
    abstract class Animal {
        public abstract void makeSound();
    }

    class Dog extends Animal {
        public void makeSound() {
            System.out.println("Woof");
        }
    }

    class Cat extends Animal {
        public void makeSound() {
            System.out.println("Meow");
        }
    }

    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound(); // Woof
        myCat.makeSound(); // Meow
    }
```
</details>



<details open>

<summary dir="rtl"> 
2) تفاوت abstarct با interface ؟
</summary>

<div dir="rtl">

در جاوا، کلاس‌های انتزاعی (abstract classes) و رابط‌ها (interfaces) دو روش مهم برای تعریف قراردادها و رفتارهای مشترک بین کلاس‌ها هستند. با این حال، هر یک از این دو ویژگی کاربردها و محدودیت‌های خاص خود را دارند. در ادامه، تفاوت‌های اصلی بین آن‌ها را بررسی می‌کنیم:

### کلاس انتزاعی (Abstract Class)

1. **تعریف:**
   - یک کلاس انتزاعی می‌تواند شامل متدهای انتزاعی (بدون پیاده‌سازی) و متدهای معمولی (با پیاده‌سازی) باشد.

2. **ارث‌بری:**
   - یک کلاس می‌تواند فقط از یک کلاس انتزاعی ارث‌بری کند (single inheritance).

3. **سازنده‌ها:**
   - یک کلاس انتزاعی می‌تواند سازنده داشته باشد و این سازنده‌ها می‌توانند برای مقداردهی اولیه اشیاء در کلاس‌های فرزند استفاده شوند.

4. **متغیرها:**
   - یک کلاس انتزاعی می‌تواند متغیرهای نمونه (instance variables) داشته باشد.

مثال:

</div>

```java
abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void makeSound();

    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.makeSound(); // Woof
        dog.eat();       // Buddy is eating
    }
}
```

<div dir="rtl">

### رابط (Interface)

1. **تعریف:**
   - یک رابط فقط می‌تواند شامل متدهای انتزاعی (بدون پیاده‌سازی) باشد. البته، از جاوا 8 به بعد، رابط‌ها می‌توانند متدهای پیش‌فرض (default methods) و استاتیک (static methods) نیز داشته باشند که دارای پیاده‌سازی هستند.

2. **ارث‌بری:**
   - یک کلاس می‌تواند از چندین رابط پیروی کند (multiple inheritance).

3. **سازنده‌ها:**
   - یک رابط نمی‌تواند سازنده داشته باشد.

4. **متغیرها:**
   - تمام متغیرهای درون یک رابط به صورت پیش‌فرض `public`, `static` و `final` هستند.

مثال:

</div>

```java
interface Animal {
    void makeSound();

    default void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // Woof
        dog.eat();       // Animal is eating
    }
}
```

<div dir="rtl">

### تفاوت‌های کلیدی

1. **تعداد ارث‌بری:**
   - **Abstract Class:** فقط یک کلاس انتزاعی می‌تواند به ارث برده شود.
   - **Interface:** یک کلاس می‌تواند از چندین رابط پیروی کند.

2. **نوع متدها:**
   - **Abstract Class:** می‌تواند شامل متدهای انتزاعی و معمولی باشد.
   - **Interface:** تا جاوا 7، فقط شامل متدهای انتزاعی بود. از جاوا 8 به بعد، می‌تواند شامل متدهای پیش‌فرض و استاتیک نیز باشد.

3. **نوع متغیرها:**
   - **Abstract Class:** می‌تواند شامل متغیرهای نمونه و استاتیک باشد.
   - **Interface:** فقط شامل متغیرهای `public`, `static`, `final` است.

4. **کاربرد:**
   - **Abstract Class:** برای مدل‌سازی یک مفهوم عمومی‌تر که ممکن است دارای پیاده‌سازی پیش‌فرض برخی از متدها باشد.
   - **Interface:** برای تعریف قراردادهای رفتار که هر کلاس می‌تواند پیاده‌سازی‌های متفاوتی از آن‌ها ارائه دهد.

### مثال ترکیبی

برای درک بهتر تفاوت‌ها، می‌توانیم یک مثال ترکیبی بیاوریم که هر دو کلاس انتزاعی و رابط را به کار می‌گیرد:

</div>

```java
abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void makeSound();

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

interface Pet {
    void play();

    default void eat() {
        System.out.println("Pet is eating");
    }
}

class Dog extends Animal implements Pet {
    Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Woof");
    }

    @Override
    public void play() {
        System.out.println(name + " is playing");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.makeSound(); // Woof
        dog.sleep();     // Buddy is sleeping
        dog.play();      // Buddy is playing
        dog.eat();       // Pet is eating
    }
}
```

<div dir="rtl">

در این مثال، `Dog` هم از یک کلاس انتزاعی (`Animal`) و هم از یک رابط (`Pet`) استفاده می‌کند، که نشان‌دهنده قدرت و انعطاف‌پذیری ترکیب این دو ویژگی در جاوا است.
</div>

</details>


<details open>

<summary dir="rtl"> 
3) Default method در interface در حالت multiple اگر متد یکسان باشه چه خطایی میده؟
</summary>

<div dir="rtl">

در جاوا، اگر یک کلاس از چندین رابط (interface) پیروی کند که دارای متدهای پیش‌فرض (default methods) با امضای یکسان باشند، یک تضاد به وجود می‌آید. این تضاد باید به طور صریح توسط کلاس حل شود، در غیر این صورت کامپایلر جاوا خطا می‌دهد.

### خطا

وقتی یک کلاس از چندین رابط پیروی می‌کند که هر کدام متد پیش‌فرض یکسانی دارند، کامپایلر خطای زیر را می‌دهد:
```
class X inherits unrelated defaults for method Y() from types A and B
```

### مثال

برای توضیح این موضوع با یک مثال، بیایید دو رابط با متد پیش‌فرض یکسان و یک کلاس که از هر دو رابط پیروی می‌کند را بررسی کنیم:

</div>

```java
interface InterfaceA {
    default void display() {
        System.out.println("Display from InterfaceA");
    }
}

interface InterfaceB {
    default void display() {
        System.out.println("Display from InterfaceB");
    }
}

class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void display() {
        // باید تضاد را به طور صریح حل کنیم
        InterfaceA.super.display(); // یا InterfaceB.super.display();
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.display(); // باید تصمیم بگیریم کدام نمایش داده شود
    }
}
```

<div dir="rtl">

### توضیح

1. **تعریف دو رابط با متد پیش‌فرض یکسان:**
   - `InterfaceA` و `InterfaceB` هر دو دارای متد پیش‌فرض `display` هستند.

2. **پیروی کلاس از هر دو رابط:**
   - کلاس `MyClass` از هر دو رابط `InterfaceA` و `InterfaceB` پیروی می‌کند.

3. **حل تضاد:**
   - کلاس `MyClass` باید تضاد به وجود آمده را به طور صریح حل کند. این کار با استفاده از `InterfaceA.super.display()` یا `InterfaceB.super.display()` انجام می‌شود تا مشخص شود کدام نسخه از متد `display` فراخوانی شود.

### حل تضاد

هنگامی که با تضاد متدهای پیش‌فرض مواجه می‌شویم، باید به یکی از روش‌های زیر عمل کنیم:

1. **بازنویسی متد:**
   - متد را در کلاس پیاده‌سازی کرده و از یک نسخه خاص از رابط برای حل تضاد استفاده کنیم.

مثال:

</div>

```java
class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void display() {
        InterfaceA.super.display(); // یا InterfaceB.super.display();
    }
}
```

<div dir="rtl">

2. **تعریف متد جدید:**
   - می‌توانیم یک پیاده‌سازی جدید برای متد ارائه دهیم که از هیچ یک از نسخه‌های رابط استفاده نکند.

مثال:

</div>

```java
class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void display() {
        System.out.println("Display from MyClass");
    }
}
```

<div dir="rtl">

### نتیجه‌گیری

هنگامی که یک کلاس از چندین رابط با متد پیش‌فرض یکسان پیروی می‌کند، باید تضاد به وجود آمده را به طور صریح حل کنیم تا کامپایلر خطا ندهد. این کار معمولاً با بازنویسی متد و استفاده از `super` برای اشاره به متد مورد نظر در یکی از رابط‌ها انجام می‌شود.


</div>

</details>


<details open>

<summary dir="rtl"> 
4)	فرق immutabl با final چیه؟
</summary>

<div dir="rtl">

در جاوا، مفاهیم `immutable` و `final` هر دو به مدیریت وضعیت اشیاء و متغیرها مربوط می‌شوند، اما در زمینه‌ها و کاربردهای متفاوتی به کار می‌روند. در ادامه تفاوت‌های این دو مفهوم را بررسی می‌کنیم:

### `final` در جاوا

1. **متغیرهای `final`:**
   - وقتی یک متغیر (میدان، پارامتر یا متغیر محلی) به صورت `final` تعریف می‌شود، مقدار آن تنها یک بار می‌تواند مقداردهی شود و پس از آن نمی‌تواند تغییر کند.
   - مثال:

</div>

```java
final int x = 10;
x = 20; // خطا: نمی‌توان مقدار متغیر final را تغییر داد
```
<div dir="rtl">

2. **متدهای `final`:**
   - یک متد `final` نمی‌تواند در کلاس‌های فرزند بازنویسی (override) شود.
   - مثال:
   
</div>

```java
  class Parent {
      public final void display() {
          System.out.println("Display from Parent");
      }
  }

  class Child extends Parent {
      @Override
      public void display() {
          System.out.println("Display from Child"); // خطا: نمی‌توان متد final را بازنویسی کرد
      }
  }
```

<div dir="rtl">

3. **کلاس‌های `final`:**
   - یک کلاس `final` نمی‌تواند به ارث برده شود. به عبارت دیگر، هیچ کلاسی نمی‌تواند از یک کلاس `final` ارث‌بری کند.
   - مثال:

</div>


 ```java
 public final class UtilityClass {
     // بدنه کلاس
 }

 class SubUtilityClass extends UtilityClass { // خطا: نمی‌توان از کلاس final ارث‌بری کرد
     // بدنه کلاس
 }
 ```

<div dir="rtl">

### `immutable` در جاوا

1. **کلاس‌های Immutable:**
   - یک کلاس Immutable کلاسی است که پس از ایجاد شیء، وضعیت آن نمی‌تواند تغییر کند.
   - ویژگی‌های کلاس‌های Immutable:
      - تمام فیلدها باید `private` و `final` باشند.
      - کلاس باید `final` باشد تا از ارث‌بری جلوگیری شود.
      - عدم وجود setter ها برای تغییر فیلدها.
      - تمام فیلدها باید تنها از طریق سازنده مقداردهی شوند.
   - مثال:

</div>

 ```java
 public final class ImmutablePerson {
     private final String name;
     private final int age;

     public ImmutablePerson(String name, int age) {
         this.name = name;
         this.age = age;
     }

     public String getName() {
         return name;
     }

     public int getAge() {
         return age;
     }
 }
 ```

<div dir="rtl">

### تفاوت‌های کلیدی

1. **کاربرد و زمینه:**
   - `final`: برای متغیرها، متدها و کلاس‌ها به کار می‌رود تا نشان دهد که نمی‌توان آن‌ها را تغییر داد یا بازنویسی کرد.
   - `immutable`: مفهومی است که برای طراحی کلاس‌هایی به کار می‌رود که اشیاء آن‌ها پس از ایجاد غیرقابل تغییر هستند.

2. **محدودیت‌ها:**
   - `final` متغیر: نمی‌توان پس از مقداردهی اولیه مقدار آن را تغییر داد، اما اگر متغیر یک شیء باشد، می‌توان وضعیت داخلی شیء را تغییر داد مگر اینکه خود شیء Immutable باشد.
   - کلاس‌های Immutable: وضعیت داخلی اشیاء پس از ایجاد به هیچ وجه نمی‌تواند تغییر کند.

3. **سطح تأثیر:**
   - `final` متغیر: بر روی مقدار متغیر تأثیر می‌گذارد.
   - `final` متد: بر روی قابلیت بازنویسی متد تأثیر می‌گذارد.
   - `final` کلاس: بر روی قابلیت ارث‌بری کلاس تأثیر می‌گذارد.
   - Immutable: بر روی وضعیت کل شیء تأثیر می‌گذارد.

### مثال ترکیبی

برای درک بهتر تفاوت‌ها، بیایید مثالی ترکیبی را بررسی کنیم که هم از `final` و هم از کلاس Immutable استفاده می‌کند:

</div>


```java
public final class ImmutableBook {
    private final String title;
    private final String author;

    public ImmutableBook(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }
}

class Test {
    public static void main(String[] args) {
        final ImmutableBook book = new ImmutableBook("1984", "George Orwell");

        // نمی‌توانیم یک شیء جدید به متغیر book تخصیص دهیم
        // book = new ImmutableBook("Brave New World", "Aldous Huxley"); // خطا

        // اما می‌توانیم از متدهای کتاب استفاده کنیم
        System.out.println(book.getTitle()); // 1984
        System.out.println(book.getAuthor()); // George Orwell
    }
}
```

<div dir="rtl">
در این مثال، `ImmutableBook` یک کلاس Immutable است و متغیر `book` به صورت `final` تعریف شده است. این بدان معناست که:
1. کلاس `ImmutableBook` به دلیل `final` بودن نمی‌تواند به ارث برده شود.
2. وضعیت شیء `book` نمی‌تواند تغییر کند زیرا `ImmutableBook` یک کلاس Immutable است.
3. متغیر `book` نمی‌تواند به شیء دیگری تخصیص داده شود زیرا به صورت `final` تعریف شده است.

</div>

</details>
