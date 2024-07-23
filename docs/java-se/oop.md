## مفهوم OOP

1. **کپسوله‌سازی (Encapsulation):** کپسوله‌سازی به معنای پنهان‌سازی جزئیات پیاده‌سازی و نمایش فقط ویژگی‌ها و روش‌های ضروری به کاربر است. این امر با استفاده از دسترسی‌کننده‌های خصوصی (private) و عمومی (public) در کلاس‌ها انجام می‌شود. به عنوان مثال:

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

2. **وراثت (Inheritance):** وراثت به معنی قابلیت تعریف یک کلاس جدید بر اساس یک کلاس موجود است که تمام خصوصیات و روش‌های آن را به ارث می‌برد و می‌تواند ویژگی‌ها و روش‌های جدیدی به آن اضافه کند. این امر باعث استفاده مجدد از کد می‌شود. به عنوان مثال:

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

3. **چندریختی (Polymorphism):** چندریختی به توانایی استفاده از یک تابع یا روش به روش‌های مختلف اشاره دارد. این ویژگی اجازه می‌دهد تا اشیاء از کلاس‌های مختلف به عنوان یک نوع عمومی‌تر در نظر گرفته شوند. به عنوان مثال:

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

4. **تجرید (Abstraction):** تجرید به معنای نمایش جزئیات مهم و پنهان کردن جزئیات غیرضروری برای ساده‌سازی مدل‌سازی است. این امر با استفاده از کلاس‌های انتزاعی (abstract) و رابط‌ها (interface) انجام می‌شود. به عنوان مثال:

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

## تفاوت abstarct با interface

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

در این مثال، `Dog` هم از یک کلاس انتزاعی (`Animal`) و هم از یک رابط (`Pet`) استفاده می‌کند، که نشان‌دهنده قدرت و انعطاف‌پذیری ترکیب این دو ویژگی در جاوا است.


## Default method در interface در حالت multiple اگر متد یکسان باشه چه خطایی میده؟

در جاوا، اگر یک کلاس از چندین رابط (interface) پیروی کند که دارای متدهای پیش‌فرض (default methods) با امضای یکسان باشند، یک تضاد به وجود می‌آید. این تضاد باید به طور صریح توسط کلاس حل شود، در غیر این صورت کامپایلر جاوا خطا می‌دهد.

### خطا

وقتی یک کلاس از چندین رابط پیروی می‌کند که هر کدام متد پیش‌فرض یکسانی دارند، کامپایلر خطای زیر را می‌دهد:
```
class X inherits unrelated defaults for method Y() from types A and B
```

### مثال

برای توضیح این موضوع با یک مثال، بیایید دو رابط با متد پیش‌فرض یکسان و یک کلاس که از هر دو رابط پیروی می‌کند را بررسی کنیم:

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

```java
class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void display() {
        InterfaceA.super.display(); // یا InterfaceB.super.display();
    }
}
```
2. **تعریف متد جدید:**
   - می‌توانیم یک پیاده‌سازی جدید برای متد ارائه دهیم که از هیچ یک از نسخه‌های رابط استفاده نکند.

مثال:

```java
class MyClass implements InterfaceA, InterfaceB {
    @Override
    public void display() {
        System.out.println("Display from MyClass");
    }
}
```
### نتیجه‌گیری

هنگامی که یک کلاس از چندین رابط با متد پیش‌فرض یکسان پیروی می‌کند، باید تضاد به وجود آمده را به طور صریح حل کنیم تا کامپایلر خطا ندهد. این کار معمولاً با بازنویسی متد و استفاده از `super` برای اشاره به متد مورد نظر در یکی از رابط‌ها انجام می‌شود.


## فرق immutabl با final چیه؟


در جاوا، مفاهیم `immutable` و `final` هر دو به مدیریت وضعیت اشیاء و متغیرها مربوط می‌شوند، اما در زمینه‌ها و کاربردهای متفاوتی به کار می‌روند. در ادامه تفاوت‌های این دو مفهوم را بررسی می‌کنیم:

### `final` در جاوا

1. **متغیرهای `final`:**
   - وقتی یک متغیر (میدان، پارامتر یا متغیر محلی) به صورت `final` تعریف می‌شود، مقدار آن تنها یک بار می‌تواند مقداردهی شود و پس از آن نمی‌تواند تغییر کند.
   - مثال:

```java
final int x = 10;
x = 20; // خطا: نمی‌توان مقدار متغیر final را تغییر داد
```
2. **متدهای `final`:**
   - یک متد `final` نمی‌تواند در کلاس‌های فرزند بازنویسی (override) شود.
   - مثال:

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

3. **کلاس‌های `final`:**
   - یک کلاس `final` نمی‌تواند به ارث برده شود. به عبارت دیگر، هیچ کلاسی نمی‌تواند از یک کلاس `final` ارث‌بری کند.
   - مثال:

 ```java
 public final class UtilityClass {
     // بدنه کلاس
 }

 class SubUtilityClass extends UtilityClass { // خطا: نمی‌توان از کلاس final ارث‌بری کرد
     // بدنه کلاس
 }
 ```
### `immutable` در جاوا

1. **کلاس‌های Immutable:**
   - یک کلاس Immutable کلاسی است که پس از ایجاد شیء، وضعیت آن نمی‌تواند تغییر کند.
   - ویژگی‌های کلاس‌های Immutable:
      - تمام فیلدها باید `private` و `final` باشند.
      - کلاس باید `final` باشد تا از ارث‌بری جلوگیری شود.
      - عدم وجود setter ها برای تغییر فیلدها.
      - تمام فیلدها باید تنها از طریق سازنده مقداردهی شوند.
   - مثال:

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

در این مثال، `ImmutableBook` یک کلاس Immutable است و متغیر `book` به صورت `final` تعریف شده است. این بدان معناست که:
1. کلاس `ImmutableBook` به دلیل `final` بودن نمی‌تواند به ارث برده شود.
2. وضعیت شیء `book` نمی‌تواند تغییر کند زیرا `ImmutableBook` یک کلاس Immutable است.
3. متغیر `book` نمی‌تواند به شیء دیگری تخصیص داده شود زیرا به صورت `final` تعریف شده است.


## تفاوت overload با override

در جاوا، `Overloading` و `Overriding` دو مفهوم متفاوت هستند که برای دستیابی به چندریختی (Polymorphism) استفاده می‌شوند. هر دو این مفاهیم به متدها مربوط می‌شوند، اما در شرایط و اهداف مختلف به کار می‌روند.

### Overloading (بارگذاری مجدد متدها)

**تعریف:**
- Overloading زمانی اتفاق می‌افتد که چندین متد با همان نام، اما با امضاهای مختلف (مجموعه پارامترهای مختلف) در یک کلاس تعریف شوند. امضای متد شامل تعداد، نوع، و ترتیب پارامترها است.

**ویژگی‌ها:**
- Overloading در همان کلاس انجام می‌شود.
- امضای متدها (تعداد یا نوع پارامترها) باید متفاوت باشد.
- نوع بازگشتی متد می‌تواند متفاوت باشد، اما این تفاوت به تنهایی برای Overloading کافی نیست.
- Overloading زمان کامپایل (Compile-time) تعیین می‌شود.

**مثال:**

```java
class MathUtils {
    // متد اول
    public int add(int a, int b) {
        return a + b;
    }

    // متد دوم
    public double add(double a, double b) {
        return a + b;
    }

    // متد سوم
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils utils = new MathUtils();
        System.out.println(utils.add(2, 3));          // 5
        System.out.println(utils.add(2.5, 3.5));      // 6.0
        System.out.println(utils.add(1, 2, 3));       // 6
    }
}
```
### Overriding (بازنویسی متدها)

**تعریف:**
- Overriding زمانی اتفاق می‌افتد که یک کلاس فرزند متدی را از کلاس والد بازنویسی کند. متد بازنویسی‌شده در کلاس فرزند باید همان امضای متد در کلاس والد را داشته باشد.

**ویژگی‌ها:**
- Overriding بین کلاس والد و کلاس فرزند انجام می‌شود.
- امضای متد (نام، تعداد، نوع، و ترتیب پارامترها) باید دقیقاً یکسان باشد.
- نوع بازگشتی متد در کلاس فرزند باید با نوع بازگشتی متد در کلاس والد سازگار باشد.
- متد در کلاس فرزند باید همان سطح دسترسی یا سطح دسترسی بیشتری نسبت به کلاس والد داشته باشد.
- Overriding زمان اجرا (Run-time) تعیین می‌شود.

**مثال:**

```java
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        
        myDog.makeSound(); // Woof
        myCat.makeSound(); // Meow
    }
}
```
### تفاوت‌های کلیدی بین Overloading و Overriding

1. **مفهوم:**
   - **Overloading:** تعریف چندین متد با همان نام در یک کلاس، اما با امضاهای مختلف.
   - **Overriding:** بازنویسی متدی از کلاس والد در کلاس فرزند با همان امضا.

2. **زمان تعیین:**
   - **Overloading:** زمان کامپایل.
   - **Overriding:** زمان اجرا.

3. **محدوده کاربرد:**
   - **Overloading:** در همان کلاس.
   - **Overriding:** بین کلاس والد و کلاس فرزند.

4. **نوع بازگشتی:**
   - **Overloading:** می‌تواند متفاوت باشد.
   - **Overriding:** باید همان نوع یا نوع سازگار باشد.

5. **پارامترها:**
   - **Overloading:** تعداد، نوع، یا ترتیب پارامترها باید متفاوت باشد.
   - **Overriding:** تعداد، نوع، و ترتیب پارامترها باید یکسان باشد.

### نتیجه‌گیری

- Overloading برای دستیابی به چندریختی در سطح کلاس با تعریف متدهای هم‌نام اما با امضاهای مختلف استفاده می‌شود.
- Overriding برای بازنویسی متدهای کلاس والد در کلاس فرزند به منظور ارائه پیاده‌سازی‌های خاص هر کلاس فرزند استفاده می‌شود.


## جاوا pass by value یا pass by refrence


در جاوا، **تمام آرگومان‌ها به صورت "pass by value"** (ارسال به‌وسیله مقدار) به متدها ارسال می‌شوند. این جمله ممکن است باعث ایجاد سردرگمی شود، زیرا نحوه کار جاوا با انواع ابتدایی (primitive types) و اشیاء (objects) تفاوت دارد.

### انواع ابتدایی (Primitive Types)

وقتی یک مقدار ابتدایی (مثل `int`, `char`, `boolean`, `float` و ...) به یک متد ارسال می‌شود، یک کپی از آن مقدار ایجاد می‌شود و به متد ارسال می‌گردد. بنابراین، هر گونه تغییری که در متد روی این پارامتر اعمال شود، تأثیری روی مقدار اصلی ندارد.

**مثال:**

```java
public class Main {
    public static void main(String[] args) {
        int num = 10;
        modifyPrimitive(num);
        System.out.println("After modifyPrimitive: " + num); // هنوز 10
    }

    public static void modifyPrimitive(int value) {
        value = 20; // فقط مقدار کپی شده تغییر می‌کند
    }
}
```
### اشیاء (Objects)

در مورد اشیاء، همان قانون "pass by value" اعمال می‌شود، اما اینجا تفاوت اصلی به دلیل نحوه مدیریت مرجع‌ها (references) به وجود می‌آید. وقتی یک شیء به یک متد ارسال می‌شود، یک کپی از مرجع (reference) آن شیء ارسال می‌شود، نه خود شیء. به عبارت دیگر، مرجع به شیء کپی می‌شود، اما هر دو مرجع به همان شیء در حافظه اشاره می‌کنند.

بنابراین، اگر شما متغیرهای داخلی شیء را تغییر دهید، این تغییرات روی شیء اصلی اعمال می‌شود، اما اگر مرجع را تغییر دهید (مثلاً به یک شیء جدید اشاره کنید)، این تغییر فقط در محدوده همان متد است و تأثیری بر مرجع اصلی خارج از متد ندارد.

**مثال:**

```java
class MyObject {
    int value;
}

public class Main {
    public static void main(String[] args) {
        MyObject obj = new MyObject();
        obj.value = 10;
        modifyObject(obj);
        System.out.println("After modifyObject: " + obj.value); // خروجی 20 است
    }

    public static void modifyObject(MyObject obj) {
        obj.value = 20; // تغییر در شیء اصلی اعمال می‌شود
    }
}
```
**مثال دیگر:**

```java
class MyObject {
    int value;
}

public class Main {
    public static void main(String[] args) {
        MyObject obj = new MyObject();
        obj.value = 10;
        reassignObject(obj);
        System.out.println("After reassignObject: " + obj.value); // هنوز 10 است
    }

    public static void reassignObject(MyObject obj) {
        obj = new MyObject();
        obj.value = 20; // مرجع جدید فقط در محدوده متد معتبر است
    }
}
```
### نتیجه‌گیری

جاوا همیشه از "pass by value" استفاده می‌کند:
- **برای انواع ابتدایی:** مقدار خود نوع ابتدایی کپی و ارسال می‌شود.
- **برای اشیاء:** یک کپی از مرجع (reference) شیء ارسال می‌شود، نه خود شیء. این به این معناست که شما می‌توانید وضعیت داخلی شیء را تغییر دهید، اما نمی‌توانید مرجع اصلی را در خارج از متد تغییر دهید.


## تعریف anonymous class و nested class ؟

### Nested Class (کلاس تو در تو)

وقتی یک کلاس یا یک اینترفیس داخل یک کلاس دیگر تعریف می‌شود، به آن `Nested Class` گفته می‌شود. `Nested Class`ها دو نوع اصلی دارند:
1. **Static Nested Class**
2. **Non-static Nested Class (Inner Class)**

### انواع Inner Class

1. **Member Inner Class:**
   - یک `Inner Class` که درون یک کلاس بیرونی و خارج از متدهای آن تعریف می‌شود.
   - به اعضای کلاس بیرونی دسترسی مستقیم دارد، حتی اگر اعضا `private` باشند.

**مثال:**

```java
   class TestMemberOuter1 {
       private int data = 30;

       class Inner {
           void msg() {
               System.out.println("data is " + data);
           }
       }

       public static void main(String args[]) {
           TestMemberOuter1 obj = new TestMemberOuter1();
           TestMemberOuter1.Inner in = obj.new Inner();
           in.msg(); // خروجی: data is 30
       }
   }
```
2. **Anonymous Inner Class:**
   - یک `Inner Class` که بدون نام است و برای پیاده‌سازی یک اینترفیس یا گسترش یک کلاس استفاده می‌شود.
   - معمولاً برای پیاده‌سازی‌های فوری و کوتاه مدت استفاده می‌شود.

   **مثال:**

```java
   abstract class Person {
       abstract void eat();
   }

   class TestAnonymousInner {
       public static void main(String args[]) {
           Person p = new Person() {
               void eat() {
                   System.out.println("nice fruits");
               }
           };
           p.eat(); // خروجی: nice fruits
       }
   }
```
3. **Local Inner Class:**
   - یک `Inner Class` که درون یک متد، سازنده یا بلوک تعریف می‌شود.
   - فقط در داخل متد یا بلوک که در آن تعریف شده است قابل دسترسی است.

   **مثال:**

```java
   public class localInner1 {
       private int data = 30; // متغیر نمونه

       void display() {
           class Local {
               void msg() {
                   System.out.println(data);
               }
           }
           Local l = new Local();
           l.msg(); // خروجی: 30
       }

       public static void main(String args[]) {
           localInner1 obj = new localInner1();
           obj.display();
       }
   }
   ```

### Static Nested Class

- یک `Nested Class` که با استفاده از کلمه کلیدی `static` تعریف شده و می‌تواند بدون نیاز به نمونه‌ای از کلاس بیرونی استفاده شود.
- به اعضای `static` کلاس بیرونی دسترسی مستقیم دارد، اما به اعضای `instance` دسترسی ندارد مگر اینکه یک نمونه از کلاس بیرونی داشته باشد.

**مثال:**

```java
class Outer {
    static int data = 30;

    static class StaticNested {
        void display() {
            System.out.println("data is " + data);
        }
    }

    public static void main(String args[]) {
        Outer.StaticNested nested = new Outer.StaticNested();
        nested.display(); // خروجی: data is 30
    }
}
```

### نتیجه‌گیری

- `Nested Class`ها در جاوا به دو نوع اصلی تقسیم می‌شوند: `Static Nested Class` و `Inner Class`.
- `Inner Class`ها خود به سه دسته تقسیم می‌شوند: `Member Inner Class`, `Anonymous Inner Class`, و `Local Inner Class`.
- هر نوع از `Inner Class` کاربردها و ویژگی‌های خاص خود را دارد که در موقعیت‌های مختلف می‌تواند مفید باشد.


## چطور میشه یه متغیر رو immutable کرد ؟


در جاوا، برای ایجاد یک متغیر (شیء) به‌صورت `immutable`، باید چندین اصل و روش را رعایت کنید. در ادامه، نحوه ایجاد یک کلاس `immutable` و متغیرهای آن را توضیح می‌دهم.

### مراحل ایجاد یک کلاس `immutable`

1. **کلاس را `final` کنید تا از ارث‌بری جلوگیری شود.**
2. **تمام فیلدهای کلاس را `private` و `final` کنید تا فقط یک بار مقداردهی شوند.**
3. **هیچ `setter`ای برای فیلدها فراهم نکنید.**
4. **تمام فیلدها را از طریق سازنده مقداردهی کنید.**
5. **اگر فیلدها از نوع mutable (قابل تغییر) هستند، یک کپی عمیق از آن‌ها در سازنده و getterها ایجاد کنید.**

### مثال:

### کلاس `Employee` (کلاس مرجع):

```java
import java.util.Objects;

public final class Employee {
    private final String name;
    private final int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // متد equals و hashCode برای مقایسه صحیح اشیاء
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return age == employee.age && Objects.equals(name, employee.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    // متد toString برای نمایش اطلاعات شیء
    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```
### کلاس `Company` (کلاس اصلی):

```java
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Objects;

public final class Company {
    private final String name;
    private final List<Employee> employees;

    public Company(String name, List<Employee> employees) {
        this.name = name;
        // ایجاد کپی عمیق از لیست Employee
        this.employees = new ArrayList<>(employees.size());
        for (Employee employee : employees) {
            this.employees.add(new Employee(employee.getName(), employee.getAge()));
        }
    }

    public String getName() {
        return name;
    }

    public List<Employee> getEmployees() {
        // بازگرداندن کپی غیر قابل تغییر از لیست Employee
        List<Employee> copy = new ArrayList<>(employees.size());
        for (Employee employee : employees) {
            copy.add(new Employee(employee.getName(), employee.getAge()));
        }
        return Collections.unmodifiableList(copy);
    }

    // متد equals و hashCode برای مقایسه صحیح اشیاء
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Company company = (Company) o;
        return Objects.equals(name, company.name) && Objects.equals(employees, company.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, employees);
    }

    // متد toString برای نمایش اطلاعات شیء
    @Override
    public String toString() {
        return "Company{" +
                "name='" + name + '\'' +
                ", employees=" + employees +
                '}';
    }
}
```
### توضیحات

1. **کلاس `Employee` به صورت `final` تعریف شده است:**
   - این کار باعث می‌شود تا هیچ کلاسی نتواند از `Employee` ارث‌بری کند و متدهای آن را تغییر دهد.

2. **فیلدهای `Employee` به صورت `private` و `final` تعریف شده‌اند:**
   - این کار اطمینان می‌دهد که این فیلدها فقط یک بار مقداردهی می‌شوند و نمی‌توانند تغییر کنند.

3. **کلاس `Company` به صورت `final` تعریف شده است:**
   - این کار باعث می‌شود تا هیچ کلاسی نتواند از `Company` ارث‌بری کند و متدهای آن را تغییر دهد.

4. **فیلدهای `Company` به صورت `private` و `final` تعریف شده‌اند:**
   - این کار اطمینان می‌دهد که این فیلدها فقط یک بار مقداردهی می‌شوند و نمی‌توانند تغییر کنند.

5. **کپی عمیق برای فیلدهای مرجع:**
   - در سازنده و متد `getEmployees` کلاس `Company`، کپی عمیق از لیست `Employee`ها ایجاد شده است. این کار اطمینان می‌دهد که تغییرات در لیست `Employee`ها بر روی شیء اصلی تاثیری نخواهد داشت.

6. **بازگرداندن لیست غیر قابل تغییر:**
   - متد `getEmployees` یک لیست غیر قابل تغییر بازمی‌گرداند تا از تغییرات خارجی جلوگیری کند.

### نتیجه‌گیری

با رعایت این اصول، شما می‌توانید اطمینان حاصل کنید که شیء `Company` شما پس از مقداردهی اولیه تغییر نمی‌کند و کاملاً `immutable` است. این ویژگی به ویژه در برنامه‌های چندنخی (multi-threaded) بسیار مفید است زیرا نیازی به هماهنگ‌سازی برای دسترسی به متغیرها ندارند.


## فرق reflection با aspect ؟


Reflection و Aspect-Oriented Programming (AOP) دو مفهوم مجزا در جاوا هستند که هر کدام برای اهداف خاصی استفاده می‌شوند. در ادامه تفاوت‌های اصلی بین Reflection و AOP را بررسی می‌کنیم:

### Reflection

**تعریف:**
Reflection یک ویژگی قدرتمند در جاوا است که به برنامه‌نویسان اجازه می‌دهد تا اطلاعات مربوط به ساختار برنامه (مانند کلاس‌ها، متدها، فیلدها و سازنده‌ها) را در زمان اجرا به دست آورند و از آن‌ها برای انجام عملیات مختلف استفاده کنند.

**کاربردها:**
1. **دسترسی به اطلاعات کلاس در زمان اجرا:** مانند نام کلاس، متدها، فیلدها و سازنده‌ها.
2. **ایجاد اشیاء در زمان اجرا:** بدون استفاده از سازنده‌های معمولی.
3. **فراخوانی متدها در زمان اجرا:** بدون استفاده از نام متدها در کد.
4. **دسترسی و تغییر فیلدها در زمان اجرا:** حتی اگر این فیلدها خصوصی باشند.

**مثال:**

```java
import java.lang.reflect.*;

public class ReflectionExample {
    private String message = "Hello, Reflection!";

    public static void main(String[] args) {
        try {
            ReflectionExample obj = new ReflectionExample();

            // دسترسی به فیلد خصوصی
            Field field = ReflectionExample.class.getDeclaredField("message");
            field.setAccessible(true);
            String value = (String) field.get(obj);

            System.out.println("Field Value: " + value); // خروجی: Hello, Reflection!

            // تغییر فیلد خصوصی
            field.set(obj, "Hello, Modified Reflection!");
            System.out.println("Modified Field Value: " + obj.message); // خروجی: Hello, Modified Reflection!

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
### Aspect-Oriented Programming (AOP)

**تعریف:**
AOP یک پارادایم برنامه‌نویسی است که هدف آن جداسازی مقاطع مختلف برنامه (Concerns) است تا کدهای مربوط به مقاطع مختلف بتوانند به طور مستقل از هم توسعه و مدیریت شوند. در جاوا، AOP معمولاً با استفاده از فریم‌ورک‌هایی مانند Spring AOP و AspectJ پیاده‌سازی می‌شود.

**کاربردها:**
1. **جداسازی مقاطع مختلف برنامه:** مانند مدیریت لاگ‌ها، امنیت، تراکنش‌ها و مدیریت استثناها.
2. **افزایش خوانایی و نگهداری کد:** با جداسازی مقاطع مختلف برنامه از منطق اصلی.
3. **اضافه کردن رفتار به متدها و اشیاء:** بدون تغییر در کد منبع آن‌ها.

**اصطلاحات کلیدی در AOP:**
1. **Aspect:** یک مقطع برنامه که می‌تواند به ماژول‌های مختلف اضافه شود.
2. **Join Point:** یک نقطه در اجرای برنامه که در آن می‌توان یک مقطع را اعمال کرد.
3. **Advice:** کدی که در یک Join Point مشخص اجرا می‌شود.
4. **Pointcut:** مجموعه‌ای از Join Pointها که در آن‌ها یک Advice اعمال می‌شود.
5. **Weaving:** فرآیند اعمال Aspects به کد اصلی.

**مثال:**
استفاده از Spring AOP برای لاگ‌گیری از متدها:

```java
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBeforeMethod() {
        System.out.println("Method is about to be executed");
    }
}
```
### تفاوت‌های کلیدی

1. **هدف:**
   - **Reflection:** برای دسترسی و تغییر ساختار برنامه در زمان اجرا استفاده می‌شود.
   - **AOP:** برای جداسازی مقاطع مختلف برنامه و افزودن رفتار به متدها بدون تغییر کد منبع استفاده می‌شود.

2. **کاربرد:**
   - **Reflection:** بیشتر برای عملیات پویا مانند ایجاد اشیاء، فراخوانی متدها و دسترسی به فیلدها در زمان اجرا استفاده می‌شود.
   - **AOP:** بیشتر برای افزودن مقاطع عمومی مانند لاگ‌گیری، امنیت و مدیریت تراکنش‌ها به برنامه بدون تغییر کد منبع استفاده می‌شود.

3. **پیاده‌سازی:**
   - **Reflection:** به صورت ذاتی در جاوا موجود است و از طریق بسته `java.lang.reflect` قابل دسترسی است.
   - **AOP:** نیاز به فریم‌ورک‌های خاص مانند Spring AOP یا AspectJ دارد.

4. **پیچیدگی و نگهداری:**
   - **Reflection:** ممکن است کد پیچیده‌تر و دیباگ سخت‌تری داشته باشد.
   - **AOP:** به طور کلی خوانایی و نگهداری کد را بهبود می‌بخشد زیرا مقاطع مختلف برنامه از منطق اصلی جدا می‌شوند.

### نتیجه‌گیری

Reflection و AOP هر دو ابزارهای قدرتمندی در جاوا هستند که برای اهداف مختلفی استفاده می‌شوند. Reflection برای دسترسی و تغییر ساختار برنامه در زمان اجرا مناسب است، در حالی که AOP برای جداسازی مقاطع مختلف برنامه و افزودن رفتارهای عمومی به متدها بدون تغییر کد منبع استفاده می‌شود. با درک تفاوت‌های بین این دو، می‌توانید از هر یک به صورت مناسب در برنامه‌های خود استفاده کنید.


## تفاوت heap و stack  با مثال ؟


در جاوا، حافظه به دو بخش اصلی تقسیم می‌شود: Heap و Stack. هر یک از این بخش‌ها وظایف و کاربردهای خاص خود را دارند. در ادامه تفاوت‌های کلیدی بین Heap و Stack به همراه مثال‌هایی توضیح داده شده است.

### تفاوت‌های کلیدی بین Heap و Stack

1. **مدیریت حافظه:**
   - **Stack:** برای ذخیره‌سازی متغیرهای محلی و فراخوانی‌های متد استفاده می‌شود. این حافظه به صورت خودکار توسط JVM مدیریت می‌شود و با خروج از بلاک متد، حافظه آزاد می‌شود.
   - **Heap:** برای ذخیره‌سازی اشیاء و متغیرهای سراسری استفاده می‌شود. مدیریت این حافظه توسط Garbage Collector انجام می‌شود.

2. **سرعت دسترسی:**
   - **Stack:** دسترسی به حافظه در Stack سریع‌تر است زیرا به صورت LIFO (Last In First Out) مدیریت می‌شود.
   - **Heap:** دسترسی به حافظه در Heap کندتر است زیرا مدیریت پیچیده‌تری دارد و Garbage Collector باید آن را مدیریت کند.

3. **ساختار داده:**
   - **Stack:** به صورت ساختار داده پشته (Stack) مدیریت می‌شود.
   - **Heap:** به صورت ساختار داده هرم (Heap) مدیریت می‌شود و اشیاء به صورت نامرتب ذخیره می‌شوند.

4. **اندازه:**
   - **Stack:** حافظه Stack معمولاً کوچک‌تر است و محدودیت اندازه دارد.
   - **Heap:** حافظه Heap بزرگ‌تر است و می‌تواند مقدار بیشتری داده ذخیره کند.

5. **مدت زمان زندگی داده‌ها:**
   - **Stack:** مدت زمان زندگی داده‌ها کوتاه است و فقط تا زمان خروج از بلاک یا متد معتبر هستند.
   - **Heap:** مدت زمان زندگی داده‌ها طولانی‌تر است و تا زمانی که Garbage Collector آن‌ها را جمع‌آوری نکند، معتبر هستند.

### مثال:

برای درک بهتر تفاوت‌ها، بیایید یک مثال عملی را بررسی کنیم:

```java
public class MemoryExample {
    public static void main(String[] args) {
        int x = 5; // متغیر محلی: ذخیره شده در Stack
        int y = 10; // متغیر محلی: ذخیره شده در Stack

        MyClass obj = new MyClass(); // شیء: ذخیره شده در Heap
        obj.setValue(20);

        System.out.println("x: " + x); // 5
        System.out.println("y: " + y); // 10
        System.out.println("obj.value: " + obj.getValue()); // 20
    }
}

class MyClass {
    private int value; // فیلد نمونه: ذخیره شده در Heap

    public void setValue(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
```

### توضیحات:

1. **متغیرهای محلی (x و y):**
   - این متغیرها در حافظه Stack ذخیره می‌شوند. هر بار که متد `main` فراخوانی می‌شود، یک بلاک جدید در Stack ایجاد می‌شود و این متغیرها در آن بلاک ذخیره می‌شوند. با خروج از متد `main`، این بلاک و تمام متغیرهای محلی آن آزاد می‌شوند.

2. **شیء `MyClass` (obj):**
   - این شیء در حافظه Heap ذخیره می‌شود. متغیر `obj` که یک مرجع به این شیء است، در Stack ذخیره می‌شود، اما خود شیء در Heap قرار دارد. Garbage Collector مسئول مدیریت حافظه Heap است و زمانی که هیچ مرجعی به این شیء اشاره نکند، آن را جمع‌آوری می‌کند.

3. **فیلد نمونه `value` در کلاس `MyClass`:**
   - این فیلد به عنوان بخشی از شیء `MyClass` در Heap ذخیره می‌شود. تغییرات در این فیلد توسط متدهای `setValue` و `getValue` انجام می‌شود.

### نتیجه‌گیری

- **Stack:** برای ذخیره‌سازی متغیرهای محلی و فراخوانی‌های متد استفاده می‌شود. دسترسی سریع‌تر است و حافظه به صورت خودکار با خروج از بلاک آزاد می‌شود.
- **Heap:** برای ذخیره‌سازی اشیاء و متغیرهای سراسری استفاده می‌شود. دسترسی کندتر است و مدیریت حافظه توسط Garbage Collector انجام می‌شود.

درک تفاوت‌های بین Heap و Stack می‌تواند به بهینه‌سازی عملکرد و مدیریت بهتر حافظه در برنامه‌های جاوا کمک کند.

### نکته
توی ترد هر کدم stack خودشون رو دارن ولی heap یکیه
