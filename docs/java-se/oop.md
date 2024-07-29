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


## معماری garbage collector ؟

معماری Garbage Collector (GC) در جاوا برای مدیریت خودکار حافظه طراحی شده است. این معماری به اجزای مختلفی تقسیم می‌شود که هر کدام نقش خاصی در جمع‌آوری و بازپس‌گیری حافظه‌ی اشیائی که دیگر مورد استفاده نیستند، دارند. در ادامه، معماری کلی GC را توضیح می‌دهم و سپس با استفاده از یک نمودار آن را نمایش می‌دهم.

### اجزای کلیدی معماری Garbage Collector

1. **Heap Memory:**
   - **Young Generation (نسل جوان):**
      - **Eden Space:** اشیاء جدید ابتدا در اینجا ایجاد می‌شوند.
      - **Survivor Spaces (S0 و S1):** اشیاء از Eden Space که هنوز زنده هستند به یکی از این دو فضای Survivor منتقل می‌شوند.
   - **Old Generation (نسل قدیمی):** اشیاءی که مدت طولانی‌تری زنده می‌مانند به اینجا منتقل می‌شوند.
   - **Permanent Generation (PermGen) / Metaspace:** برای ذخیره‌سازی متادیتاهای کلاس و اطلاعات مربوط به کلاس‌ها استفاده می‌شود (در نسخه‌های جدید جاوا، Metaspace جایگزین PermGen شده است).

2. **Garbage Collection Phases:**
   - **Minor GC:** جمع‌آوری زباله‌های Young Generation.
   - **Major GC / Full GC:** جمع‌آوری زباله‌های Old Generation و گاهی اوقات همه نسل‌ها.

### نمودار معماری Garbage Collector

برای نمایش تصویری از معماری GC، به نمودار زیر توجه کنید:

```
+-----------------+
|     Heap Memory  |
+-----------------+
|                 |
| +-------------+ |    +-------------+
| | Young Gen   | |    | Old Gen     |
| |             | |    |             |
| | +---------+ | |    | +---------+ |
| | | Eden    | |----->| | Object  | |
| | |         | |    | | |         | |
| | +---------+ | |    | +---------+ |
| | +---------+ | |    |             |
| | | S0      | |----->|             |
| | +---------+ | |    +-------------+
| | +---------+ | |
| | | S1      | | |
| | +---------+ | |
| +-------------+ |
|                 |
+-----------------+

Legend:
- Young Gen: Generation for new objects
  - Eden: Space where new objects are initially allocated
  - S0, S1: Survivor spaces for objects that survive garbage collection in Eden
- Old Gen: Generation for long-lived objects
```

### توضیحات نمودار

1. **Heap Memory:**
   - **Young Generation (نسل جوان):**
      - **Eden Space:** جایی که اشیاء جدید ابتدا ایجاد می‌شوند.
      - **Survivor Spaces (S0 و S1):** اشیائی که از Eden Space جان سالم به در می‌برند به یکی از این فضاهای Survivor منتقل می‌شوند. در هر مرحله، یکی از این فضاها به عنوان مقصد و دیگری به عنوان منبع استفاده می‌شود.
   - **Old Generation (نسل قدیمی):** اشیاءی که برای مدت طولانی‌تری زنده می‌مانند به اینجا منتقل می‌شوند و در اینجا نگهداری می‌شوند.

2. **فرآیندهای Garbage Collection:**
   - **Minor GC:** این فرآیند برای جمع‌آوری زباله‌های موجود در Young Generation انجام می‌شود. اشیاء زنده از Eden Space به Survivor Space ها منتقل می‌شوند.
   - **Major GC / Full GC:** این فرآیند برای جمع‌آوری زباله‌های موجود در Old Generation و گاهی اوقات در تمامی نسل‌ها انجام می‌شود. این فرآیند سنگین‌تر است و مدت زمان بیشتری طول می‌کشد.

اشیاءی که استفاده نمی‌شوند و به آنها دسترسی وجود ندارد، در مراحل مختلف جمع‌آوری زباله (Garbage Collection) از بین می‌روند، و این مراحل بستگی به محل قرارگیری این اشیاء در حافظه Heap دارد. به طور کلی، روند کار به این صورت است:

### Young Generation

1. **Eden Space:**
   - اشیاء جدید ابتدا در اینجا ایجاد می‌شوند.
   - وقتی فضای Eden پر می‌شود، یک Minor GC (جمع‌آوری زباله‌ی کوچک) انجام می‌شود.
   - در طی Minor GC، اشیاء زنده از Eden Space به یکی از فضاهای Survivor (S0 یا S1) منتقل می‌شوند.
   - اشیائی که دسترسی به آنها وجود ندارد و در Eden Space قرار دارند، در این مرحله جمع‌آوری و حذف می‌شوند.

2. **Survivor Spaces (S0 و S1):**
   - اشیاءی که از مرحله‌ی قبلی جان سالم به در برده‌اند به این فضاها منتقل می‌شوند.
   - هر بار که یک Minor GC اجرا می‌شود، اشیاء زنده بین دو فضای Survivor جابجا می‌شوند.
   - اگر یک شیء پس از چندین Minor GC هنوز زنده باشد، به Old Generation منتقل می‌شود.
   - اشیائی که دسترسی به آنها وجود ندارد و در Survivor Spaces قرار دارند، در طی Minor GC جمع‌آوری و حذف می‌شوند.

### Old Generation

- **Old Generation:**
   - اشیائی که برای مدت طولانی‌تری زنده می‌مانند و از مراحل چندگانه‌ی Minor GC جان سالم به در برده‌اند، به Old Generation منتقل می‌شوند.
   - جمع‌آوری زباله در Old Generation به عنوان Major GC یا Full GC شناخته می‌شود.
   - اشیائی که دسترسی به آنها وجود ندارد و در Old Generation قرار دارند، در طی Major GC یا Full GC جمع‌آوری و حذف می‌شوند.

### نتیجه‌گیری

- اشیائی که دسترسی به آنها وجود ندارد و در Young Generation قرار دارند (Eden Space و Survivor Spaces)، در طی Minor GC جمع‌آوری و حذف می‌شوند.
- اشیائی که به Old Generation منتقل شده‌اند و دسترسی به آنها وجود ندارد، در طی Major GC یا Full GC جمع‌آوری و حذف می‌شوند.

### نمودار فرآیند Garbage Collection

```
+-----------------+
|     Heap Memory  |
+-----------------+
|                 |
| +-------------+ |    +-------------+
| | Young Gen   | |    | Old Gen     |
| |             | |    |             |
| | +---------+ | |    | +---------+ |
| | | Eden    | |----->| | Object  | |
| | |         | |    | | |         | |
| | +---------+ | |    | +---------+ |
| | +---------+ | |    |             |
| | | S0      | |----->|             |
| | +---------+ | |    +-------------+
| | +---------+ | |
| | | S1      | | |
| | +---------+ | |
| +-------------+ |
|                 |
+-----------------+

Legend:
- Young Gen: Generation for new objects
  - Eden: Space where new objects are initially allocated
  - S0, S1: Survivor spaces for objects that survive garbage collection in Eden
- Old Gen: Generation for long-lived objects
```

در این نمودار، فرآیندهای جمع‌آوری زباله و نحوه‌ی جابجایی اشیاء بین فضاهای مختلف نمایش داده شده است. اشیاء غیرقابل دسترسی در هر یک از این فضاها در طی جمع‌آوری زباله حذف می‌شوند.

### نتیجه‌گیری کلی

Garbage Collector در جاوا از یک معماری چند نسلی استفاده می‌کند که شامل Young Generation, Old Generation و (در نسخه‌های قدیمی) Permanent Generation می‌شود. این معماری به بهبود کارایی GC و مدیریت بهینه‌تر حافظه کمک می‌کند. استفاده از نمودارها و توضیحات بالا می‌تواند به درک بهتر نحوه کار GC و بهینه‌سازی برنامه‌های جاوا کمک کند.


## فرق generic با object چیه و generic چه مزیتی داره؟

در جاوا، تفاوت‌های اصلی بین `Object` و `Generic` در نحوه مدیریت نوع داده‌ها و مزایایی که Generic ارائه می‌دهد، قابل مشاهده است. برای درک بهتر این تفاوت‌ها، بیایید ابتدا هر یک را تعریف کنیم و سپس به مزایا و معایب هر کدام بپردازیم.

### `Object`

- **تعریف:**
   - `Object` نوع پایه‌ای است که همه کلاس‌ها در جاوا از آن ارث‌بری می‌کنند. وقتی از `Object` به عنوان نوع داده استفاده می‌کنید، می‌توانید هر شیء جاوا را در آن قرار دهید.

- **مثال:**

  ```java
  public class ObjectExample {
      public static void main(String[] args) {
          Object obj1 = "Hello";
          Object obj2 = 123;

          System.out.println(obj1);
          System.out.println(obj2);
      }
  }
  ```
- **معایب:**
   - استفاده از `Object` به دلیل عدم اطلاع از نوع دقیق داده، نیاز به عملیات تبدیل نوع (type casting) دارد.
   - عملیات تبدیل نوع می‌تواند منجر به خطاهای زمان اجرا (runtime errors) شود.
   - امنیت نوع (type safety) را فراهم نمی‌کند، بنابراین احتمال خطاهای نوع زیاد است.

### `Generic`

- **تعریف:**
   - Generics یک ویژگی در جاوا است که به شما اجازه می‌دهد تا کلاس‌ها، رابط‌ها و متدهایی را تعریف کنید که بتوانند با انواع داده‌های مختلف به صورت ایمن (type-safe) کار کنند، بدون نیاز به تبدیل نوع.

- **مثال:**

  ```java
  import java.util.ArrayList;
  import java.util.List;

  public class GenericExample {
      public static void main(String[] args) {
          List<String> stringList = new ArrayList<>();
          stringList.add("Hello");
          // stringList.add(123); // کامپایل نمی‌شود، زیرا فقط رشته‌ها مجاز هستند

          String str = stringList.get(0); // نیازی به تبدیل نوع نیست
          System.out.println(str);
      }
  }
  ```
- **مزایا:**
   - **امنیت نوع (Type Safety):** Generics تضمین می‌کند که تنها نوع‌های صحیح داده به ساختار داده اضافه می‌شوند. این ویژگی باعث کاهش خطاهای زمان اجرا و افزایش پایداری برنامه می‌شود.
   - **کاهش نیاز به تبدیل نوع (Casting):** با استفاده از Generics، نیازی به تبدیل نوع نیست، که کد را خواناتر و قابل نگهداری‌تر می‌کند.
   - **استفاده مجدد (Reusability):** Generics به شما اجازه می‌دهد تا کدهایی بنویسید که با انواع داده‌های مختلف کار کنند، که این ویژگی باعث افزایش استفاده مجدد از کد می‌شود.

### تفاوت‌های کلیدی بین `Object` و `Generic`

1. **امنیت نوع (Type Safety):**
   - **Object:** نیاز به تبدیل نوع دارد و احتمال خطاهای زمان اجرا وجود دارد.
   - **Generic:** امنیت نوع را فراهم می‌کند و خطاهای زمان کامپایل را کاهش می‌دهد.

2. **خوانایی و نگهداری کد:**
   - **Object:** نیاز به تبدیل نوع کد را پیچیده‌تر و خوانایی آن را کاهش می‌دهد.
   - **Generic:** کاهش نیاز به تبدیل نوع باعث خواناتر و قابل نگهداری‌تر شدن کد می‌شود.

3. **استفاده مجدد از کد:**
   - **Object:** کدهایی که از `Object` استفاده می‌کنند به صورت کلی‌تر هستند و برای استفاده مجدد نیاز به تبدیل نوع دارند.
   - **Generic:** کدهای Generic به شما اجازه می‌دهند که یک کد را برای انواع داده‌های مختلف استفاده کنید، بدون نیاز به تغییر کد اصلی.

### نتیجه‌گیری

- **`Object`:** استفاده از `Object` برای نگهداری انواع داده‌های مختلف معمولاً نیاز به تبدیل نوع دارد و ممکن است منجر به خطاهای زمان اجرا شود.
- **`Generic`:** استفاده از Generics باعث افزایش امنیت نوع، کاهش نیاز به تبدیل نوع و افزایش استفاده مجدد از کد می‌شود.

با توجه به این مزایا، استفاده از Generics به طور کلی ترجیح داده می‌شود، به خصوص در مواقعی که نیاز به کار با انواع داده‌های مختلف به صورت ایمن دارید.


## تفاوت deep copy با shallow copy با مثال ؟

در جاوا، وقتی شما یک شیء را کپی می‌کنید، می‌توانید از دو روش اصلی استفاده کنید: **Shallow Copy** و **Deep Copy**. این دو روش نحوه کپی‌برداری از اشیاء و زیر‌اشیاء (nested objects) را مشخص می‌کنند. بیایید این دو روش را با جزئیات بیشتر بررسی کنیم و مثال‌هایی برای هر کدام ارائه دهیم.

### Shallow Copy

**تعریف:**
- Shallow Copy یک کپی سطحی از شیء ایجاد می‌کند. در این روش، یک کپی جدید از شیء ایجاد می‌شود، اما هر مرجع (reference) به اشیاء دیگر همچنان به همان اشیاء اشاره می‌کند. این بدان معناست که تغییر در زیر‌اشیاء در کپی اصلی و کپی سطحی منعکس می‌شود.

**مثال:**

```java
import java.util.Arrays;

class ShallowCopyExample implements Cloneable {
    int[] data;

    public ShallowCopyExample(int[] data) {
        this.data = data;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // Shallow copy
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        int[] data = {1, 2, 3};
        ShallowCopyExample original = new ShallowCopyExample(data);
        ShallowCopyExample shallowCopy = (ShallowCopyExample) original.clone();

        System.out.println("Original data: " + Arrays.toString(original.data));
        System.out.println("Shallow copy data: " + Arrays.toString(shallowCopy.data));

        // Modify the data array
        original.data[0] = 10;

        System.out.println("After modification:");
        System.out.println("Original data: " + Arrays.toString(original.data));
        System.out.println("Shallow copy data: " + Arrays.toString(shallowCopy.data));
    }
}
```
**خروجی:**

```
Original data: [1, 2, 3]
Shallow copy data: [1, 2, 3]
After modification:
Original data: [10, 2, 3]
Shallow copy data: [10, 2, 3]
```

در این مثال، تغییر در آرایه `data` در شیء اصلی نیز در کپی سطحی منعکس می‌شود، زیرا هر دو به همان آرایه اشاره می‌کنند.

### Deep Copy

**تعریف:**
- Deep Copy یک کپی عمیق از شیء ایجاد می‌کند. در این روش، یک کپی جدید از شیء و تمام زیر‌اشیاء ایجاد می‌شود. بنابراین، تغییرات در زیر‌اشیاء در کپی اصلی و کپی عمیق مستقل از یکدیگر هستند.

**مثال:**

```java
import java.util.Arrays;

class DeepCopyExample implements Cloneable {
    int[] data;

    public DeepCopyExample(int[] data) {
        this.data = data;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        // Perform a deep copy
        int[] clonedData = new int[data.length];
        System.arraycopy(data, 0, clonedData, 0, data.length);
        return new DeepCopyExample(clonedData);
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        int[] data = {1, 2, 3};
        DeepCopyExample original = new DeepCopyExample(data);
        DeepCopyExample deepCopy = (DeepCopyExample) original.clone();

        System.out.println("Original data: " + Arrays.toString(original.data));
        System.out.println("Deep copy data: " + Arrays.toString(deepCopy.data));

        // Modify the data array
        original.data[0] = 10;

        System.out.println("After modification:");
        System.out.println("Original data: " + Arrays.toString(original.data));
        System.out.println("Deep copy data: " + Arrays.toString(deepCopy.data));
    }
}
```
**خروجی:**

```
Original data: [1, 2, 3]
Deep copy data: [1, 2, 3]
After modification:
Original data: [10, 2, 3]
Deep copy data: [1, 2, 3]
```
در این مثال، تغییر در آرایه `data` در شیء اصلی هیچ تاثیری بر روی کپی عمیق ندارد، زیرا آرایه‌ای جدید برای کپی عمیق ایجاد شده است.

### مقایسه Deep Copy و Shallow Copy

- **Shallow Copy:**
   - کپی سطحی از شیء.
   - مراجع به زیر‌اشیاء همچنان به همان اشیاء اصلی اشاره می‌کنند.
   - تغییرات در زیر‌اشیاء در کپی اصلی و کپی سطحی منعکس می‌شوند.
   - سریع‌تر و کمتر مصرف‌کننده حافظه است.

- **Deep Copy:**
   - کپی عمیق از شیء.
   - کپی‌های جدید از زیر‌اشیاء ایجاد می‌شود.
   - تغییرات در زیر‌اشیاء در کپی اصلی و کپی عمیق مستقل هستند.
   - کندتر و مصرف‌کننده حافظه بیشتری است.

### نتیجه‌گیری

- **Shallow Copy:** مناسب برای مواقعی که نیازی به تغییرات مستقل در زیر‌اشیاء نیست.
- **Deep Copy:** مناسب برای مواقعی که نیاز به تغییرات مستقل در زیر‌اشیاء دارید و نمی‌خواهید کپی اصلی و کپی جدید تاثیری بر روی یکدیگر داشته باشند.

با درک این مفاهیم، می‌توانید بسته به نیاز خود تصمیم بگیرید که از کدام روش کپی‌برداری استفاده کنید.


## copmostion چیه ، با مثال؟


**تعریف:**
ترکیب (Composition) یک روش طراحی شی‌ءگرا است که در آن یک کلاس شامل اشیاء دیگر به عنوان اعضای خود است. در ترکیب، به جای استفاده از ارث‌بری (Inheritance) برای اشتراک‌گذاری رفتار بین کلاس‌ها، یک کلاس با داشتن اشیاء از کلاس‌های دیگر رفتار مورد نیاز را به دست می‌آورد. این روش انعطاف‌پذیری بیشتری نسبت به ارث‌بری ارائه می‌دهد و به باز استفاده‌ی مجدد کد کمک می‌کند.

### مزایای ترکیب

1. **قابلیت استفاده مجدد کد:** می‌توانید رفتارهای مختلف را در کلاس‌های جداگانه تعریف کنید و آن‌ها را در کلاس‌های دیگر استفاده کنید.
2. **کاهش وابستگی:** تغییرات در یک کلاس تأثیر کمتری بر روی کلاس‌های دیگر دارد.
3. **انعطاف‌پذیری:** می‌توانید رفتارهای مختلف را به اشیاء در زمان اجرا اضافه یا تغییر دهید.

### مثال از ترکیب

فرض کنید می‌خواهیم یک سیستم ساده برای مدیریت خودروها ایجاد کنیم. به جای ارث‌بری از کلاس‌های مختلف، از ترکیب استفاده می‌کنیم.

**مثال:**

```java
// کلاس Engine که رفتار موتور را تعریف می‌کند
class Engine {
    public void start() {
        System.out.println("Engine started.");
    }

    public void stop() {
        System.out.println("Engine stopped.");
    }
}

// کلاس Transmission که رفتار جعبه دنده را تعریف می‌کند
class Transmission {
    public void shiftUp() {
        System.out.println("Gear shifted up.");
    }

    public void shiftDown() {
        System.out.println("Gear shifted down.");
    }
}

// کلاس Car که از ترکیب استفاده می‌کند تا رفتارهای Engine و Transmission را به دست آورد
class Car {
    private Engine engine;
    private Transmission transmission;

    public Car() {
        this.engine = new Engine();
        this.transmission = new Transmission();
    }

    public void startCar() {
        engine.start();
        transmission.shiftUp();
    }

    public void stopCar() {
        transmission.shiftDown();
        engine.stop();
    }
}

// کلاس اصلی برای تست کردن سیستم
public class CompositionExample {
    public static void main(String[] args) {
        Car car = new Car();
        car.startCar(); // خروجی: Engine started. Gear shifted up.
        car.stopCar();  // خروجی: Gear shifted down. Engine stopped.
    }
}
```
### توضیحات مثال:

1. **کلاس‌های Engine و Transmission:**
   - این کلاس‌ها رفتارهای خاصی را تعریف می‌کنند. `Engine` رفتارهای مربوط به موتور و `Transmission` رفتارهای مربوط به جعبه دنده را تعریف می‌کند.

2. **کلاس Car:**
   - این کلاس از ترکیب استفاده می‌کند و شامل اشیاء از کلاس‌های `Engine` و `Transmission` است. با این روش، `Car` می‌تواند از رفتارهای تعریف شده در این کلاس‌ها استفاده کند بدون اینکه از آن‌ها ارث‌بری کند.

3. **متدهای startCar و stopCar:**
   - این متدها از اشیاء `engine` و `transmission` برای اجرای رفتارهای مربوط به روشن و خاموش کردن خودرو استفاده می‌کنند.

### نتیجه‌گیری

ترکیب یک روش طراحی قدرتمند است که به شما اجازه می‌دهد تا رفتارهای مختلف را در کلاس‌های جداگانه تعریف کنید و آن‌ها را به کلاس‌های دیگر اضافه کنید. این روش انعطاف‌پذیری بیشتری نسبت به ارث‌بری ارائه می‌دهد و به کاهش وابستگی‌ها و افزایش استفاده مجدد از کد کمک می‌کند.

## انواع exception ؟

در جاوا، استثناها (Exceptions) به دو دسته کلی تقسیم می‌شوند: استثناهای بررسی‌شده (Checked Exceptions) و استثناهای بررسی‌نشده (Unchecked Exceptions). هر یک از این دسته‌ها شامل انواع مختلفی از استثناها هستند که برای مدیریت خطاها و شرایط غیرعادی در برنامه‌ها استفاده می‌شوند.

### 1. Checked Exceptions (استثناهای بررسی‌شده)

Checked Exceptions استثناهایی هستند که در زمان کامپایل بررسی می‌شوند. برنامه‌نویس باید این نوع استثناها را به صورت صریح مدیریت کند، یعنی باید از `try-catch` استفاده کند یا متد مربوطه را با کلمه کلیدی `throws` علامت‌گذاری کند.

**مثال‌های Checked Exceptions:**
- **IOException:** این استثنا زمانی رخ می‌دهد که یک عملیات ورودی/خروجی دچار مشکل می‌شود.
- **SQLException:** این استثنا زمانی رخ می‌دهد که یک خطا در دسترسی به پایگاه داده رخ می‌دهد.
- **ClassNotFoundException:** این استثنا زمانی رخ می‌دهد که کلاس مورد نظر در زمان اجرا یافت نشود.

**مثال:**

```java
import java.io.*;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("test.txt");
            BufferedReader fileInput = new BufferedReader(file);

            // خواندن و نمایش اولین خط از فایل
            System.out.println(fileInput.readLine());
            fileInput.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 2. Unchecked Exceptions (استثناهای بررسی‌نشده)

Unchecked Exceptions استثناهایی هستند که در زمان اجرا رخ می‌دهند و نیازی به مدیریت صریح در زمان کامپایل ندارند. این استثناها از کلاس `RuntimeException` مشتق می‌شوند.

**مثال‌های Unchecked Exceptions:**
- **NullPointerException:** این استثنا زمانی رخ می‌دهد که به یک مرجع تهی (null reference) دسترسی پیدا کنید.
- **ArrayIndexOutOfBoundsException:** این استثنا زمانی رخ می‌دهد که به یک ایندکس خارج از محدوده یک آرایه دسترسی پیدا کنید.
- **ArithmeticException:** این استثنا زمانی رخ می‌دهد که یک خطای ریاضی مانند تقسیم بر صفر رخ دهد.

**مثال:**

```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // خطای ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            e.printStackTrace();
        }

        try {
            String str = null;
            System.out.println(str.length()); // خطای NullPointerException
        } catch (NullPointerException e) {
            e.printStackTrace();
        }
    }
}
```

### 3. Error (خطاها)

خطاها شرایط غیرعادی جدی هستند که معمولاً توسط برنامه قابل بازیابی نیستند. این خطاها از کلاس `Error` مشتق می‌شوند و نیازی به مدیریت صریح ندارند. خطاها معمولاً توسط JVM پرتاب می‌شوند.

**مثال‌های Error:**
- **OutOfMemoryError:** این خطا زمانی رخ می‌دهد که JVM نتواند حافظه بیشتری اختصاص دهد.
- **StackOverflowError:** این خطا زمانی رخ می‌دهد که پشته‌ی فراخوانی متدها پر شود.

**مثال:**

```java
public class ErrorExample {
    public static void main(String[] args) {
        try {
            recursiveMethod();
        } catch (StackOverflowError e) {
            e.printStackTrace();
        }
    }

    public static void recursiveMethod() {
        // فراخوانی بازگشتی برای ایجاد خطای StackOverflowError
        recursiveMethod();
    }
}
```
### نتیجه‌گیری

در جاوا، مدیریت استثناها بخش مهمی از برنامه‌نویسی است که به برنامه‌نویسان اجازه می‌دهد تا خطاها و شرایط غیرعادی را به صورت مؤثری مدیریت کنند. درک تفاوت بین Checked Exceptions، Unchecked Exceptions، و Errors و استفاده صحیح از هر یک از آن‌ها به شما کمک می‌کند تا برنامه‌های پایدارتر و قابل اعتمادتری ایجاد کنید.


## memory leak چطور اتفاق میفته ؟


**Memory Leak** (نشت حافظه) زمانی اتفاق می‌افتد که برنامه حافظه‌ای را که دیگر مورد استفاده قرار نمی‌دهد، آزاد نمی‌کند. در نتیجه، حافظه به طور مستمر کاهش می‌یابد و در نهایت ممکن است برنامه با کمبود حافظه مواجه شود. در جاوا، مدیریت حافظه توسط Garbage Collector انجام می‌شود، اما همچنان ممکن است نشت حافظه رخ دهد.

### چگونه Memory Leak اتفاق می‌افتد؟

در جاوا، Memory Leak معمولاً به دلایل زیر رخ می‌دهد:

1. **object reference غیرضروری :**
   - وقتی اشیاءی که دیگر نیازی به آن‌ها نیست، همچنان توسط مرجع‌های فعال نگه داشته می‌شوند، Garbage Collector نمی‌تواند آن‌ها را بازیابی کند.

2. **استفاده نادرست از مجموعه‌ها (Collections):**
   - اضافه کردن اشیاء به مجموعه‌ها (مانند `List`, `Set`, `Map`) بدون حذف آن‌ها زمانی که دیگر نیازی به آن‌ها نیست، می‌تواند منجر به نشت حافظه شود.

3. **مراجع استاتیک (Static References):**
   - مراجع استاتیک تا زمانی که کلاس بارگذاری شده است، در حافظه باقی می‌مانند. اگر اشیاءی به صورت استاتیک مرجع‌دهی شوند و دیگر استفاده نشوند، حافظه آن‌ها آزاد نخواهد شد.

4. **شنوندگان و رسیورها (Listeners and Callbacks):**
   - ثبت شنوندگان یا رسیورها بدون لغو ثبت آن‌ها می‌تواند باعث نگه‌داشتن مراجع غیرضروری شود.

### مثال‌های Memory Leak

**مثال 1: object reference غیرضروری**

```java
import java.util.ArrayList;
import java.util.List;

public class MemoryLeakExample {
    private List<String> dataList = new ArrayList<>();

    public void addData() {
        for (int i = 0; i < 100000; i++) {
            dataList.add("Data " + i);
        }
    }

    public void clearData() {
        // این خط از کد مراجع به اشیاء را آزاد نمی‌کند
        dataList.clear(); 
        // dataList = null; // راه‌حل درست: آزاد کردن مرجع
    }

    public static void main(String[] args) {
        MemoryLeakExample example = new MemoryLeakExample();
        example.addData();
        example.clearData();
    }
}
```

**مثال 2: استفاده نادرست از collection**

```java
import java.util.HashMap;
import java.util.Map;

public class MemoryLeakWithMap {
    private Map<Integer, String> map = new HashMap<>();

    public void addData() {
        for (int i = 0; i < 100000; i++) {
            map.put(i, "Data " + i);
        }
    }

    public void clearData() {
        // این خط از کد مراجع به اشیاء را آزاد نمی‌کند
        map.clear(); 
        // map = null; // راه‌حل درست: آزاد کردن مرجع
    }

    public static void main(String[] args) {
        MemoryLeakWithMap example = new MemoryLeakWithMap();
        example.addData();
        example.clearData();
    }
}
```

**مثال 3: مراجع استاتیک**

```java
public class StaticReferenceExample {
    private static List<String> dataList = new ArrayList<>();

    public static void addData() {
        for (int i = 0; i < 100000; i++) {
            dataList.add("Data " + i);
        }
    }

    public static void clearData() {
        // این خط از کد مراجع به اشیاء را آزاد نمی‌کند
        dataList.clear(); 
        // dataList = null; // راه‌حل درست: آزاد کردن مرجع
    }

    public static void main(String[] args) {
        addData();
        clearData();
    }
}
```

**مثال 4: Listeners and Callbacks**

```java
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class ListenerLeakExample extends JFrame {
    public ListenerLeakExample() {
        JButton button = new JButton("Click me");
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button clicked");
            }
        });
        add(button);
        setSize(200, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public static void main(String[] args) {
        ListenerLeakExample example = new ListenerLeakExample();
        // example.dispose(); // راه‌حل درست: حذف شنوندگان قبل از بستن
    }
}
```

### چگونه از Memory Leak جلوگیری کنیم؟

1. **استفاده از ابزارهای پروفایلینگ (Profiling):**
   - ابزارهایی مانند VisualVM، YourKit، JProfiler می‌توانند برای شناسایی نشت‌های حافظه استفاده شوند.

2. **مراجع ضعیف (Weak References):**
   - استفاده از `WeakReference` برای نگه‌داشتن اشیاءی که می‌توانند بازیابی شوند.

3. **مدیریت درست مجموعه‌ها:**
   - اطمینان حاصل کنید که اشیاءی که دیگر نیازی به آن‌ها نیست از مجموعه‌ها حذف می‌شوند.

4. **حذف شنوندگان:**
   - اطمینان حاصل کنید که شنوندگان و رسیورها به درستی ثبت و لغو ثبت می‌شوند.

5. **بررسی کد برای مراجع استاتیک:**
   - از مراجع استاتیک با احتیاط استفاده کنید و مطمئن شوید که زمانی که دیگر نیازی به آن‌ها نیست، آزاد می‌شوند.

### نتیجه‌گیری

نشت حافظه یک مشکل جدی است که می‌تواند منجر به کاهش کارایی و در نهایت شکست برنامه شود. با درک نحوه وقوع نشت‌های حافظه و استفاده از تکنیک‌های مناسب برای جلوگیری از آن‌ها، می‌توانید برنامه‌های پایدارتر و کارآمدتری ایجاد کنید.



## has-a relation و is-a relation  در جاوا چیه ؟

در طراحی شیءگرا (Object-Oriented Design)، ارتباطات بین کلاس‌ها معمولاً به دو نوع تقسیم می‌شوند: **"is-a"** و **"has-a"**.

### **"Is-a" Relation**
ارتباط **"is-a"** نشان‌دهنده وراثت (inheritance) است، جایی که یک کلاس از یک کلاس دیگر ارث می‌برد و رابطه‌ای سلسله‌مراتبی را تشکیل می‌دهد. برای مثال، اگر کلاس `Dog` از کلاس `Animal` ارث ببرد، می‌گوییم که `Dog` یک نوع `Animal` است (Dog is an Animal).

### **"Has-a" Relation**
ارتباط **"has-a"**، همچنین به عنوان ترکیب (composition) یا تجمع (aggregation) شناخته می‌شود، نشان‌دهنده این است که یک کلاس از طریق داشتن یک یا چند نمونه از دیگر کلاس‌ها، با آن‌ها ارتباط دارد. این ارتباط نشان می‌دهد که یک شیء از یک کلاس حاوی یا مالک اشیائی از کلاس‌های دیگر است.

### مثال‌های "Has-a" Relation

#### ترکیب (Composition)
در ترکیب، اشیاء متعلق به یک کلاس بخشی از کلاس دیگر هستند و چرخه حیات آن‌ها به چرخه حیات شیء مالک وابسته است. وقتی که شیء مالک نابود شود، اشیاء ترکیبی آن نیز نابود می‌شوند.

مثال:

```java
class Engine {
    // ویژگی‌ها و رفتارهای Engine
}

class Car {
    private Engine engine; // Car یک Engine دارد

    public Car() {
        engine = new Engine(); // Engine به طور مستقیم در Car ساخته می‌شود
    }
}
```

در این مثال، `Car` یک `Engine` دارد. وقتی که شیء `Car` نابود می‌شود، شیء `Engine` نیز نابود می‌شود، زیرا `Engine` بخشی از `Car` است.

#### تجمع (Aggregation)
در تجمع، اشیاء متعلق به یک کلاس بخشی از کلاس دیگر هستند، اما چرخه حیات آن‌ها به طور مستقل از شیء مالک مدیریت می‌شود. این اشیاء ممکن است بعد از نابودی شیء مالک همچنان وجود داشته باشند.

مثال:

```java
class Engine {
    // ویژگی‌ها و رفتارهای Engine
}

class Car {
    private Engine engine; // Car یک Engine دارد

    public Car(Engine engine) {
        this.engine = engine; // Engine به طور مستقل به Car داده می‌شود
    }
}

public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine();
        Car car = new Car(engine); // Car یک Engine دارد
    }
}
```
در این مثال، `Car` یک `Engine` دارد، اما `Engine` به طور مستقل از `Car` ساخته شده است و می‌تواند بعد از نابودی شیء `Car` همچنان وجود داشته باشد.

### خلاصه
ارتباط **"has-a"** نشان‌دهنده این است که یک کلاس حاوی یا مالک اشیاء دیگری است و می‌تواند به دو نوع ترکیب (composition) و تجمع (aggregation) تقسیم شود. این ارتباط به مدیریت بهتر ارتباطات بین اشیاء و بهبود طراحی شیءگرا کمک می‌کند.
در طراحی شیءگرا (Object-Oriented Design)، ارتباطات بین کلاس‌ها معمولاً به دو نوع تقسیم می‌شوند: **"is-a"** و **"has-a"**.

### **"Is-a" Relation**
ارتباط **"is-a"** نشان‌دهنده وراثت (inheritance) است، جایی که یک کلاس از یک کلاس دیگر ارث می‌برد و رابطه‌ای سلسله‌مراتبی را تشکیل می‌دهد. برای مثال، اگر کلاس `Dog` از کلاس `Animal` ارث ببرد، می‌گوییم که `Dog` یک نوع `Animal` است (Dog is an Animal).

### **"Has-a" Relation**
ارتباط **"has-a"**، همچنین به عنوان ترکیب (composition) یا تجمع (aggregation) شناخته می‌شود، نشان‌دهنده این است که یک کلاس از طریق داشتن یک یا چند نمونه از دیگر کلاس‌ها، با آن‌ها ارتباط دارد. این ارتباط نشان می‌دهد که یک شیء از یک کلاس حاوی یا مالک اشیائی از کلاس‌های دیگر است.

### مثال‌های "Has-a" Relation

#### ترکیب (Composition)
در ترکیب، اشیاء متعلق به یک کلاس بخشی از کلاس دیگر هستند و چرخه حیات آن‌ها به چرخه حیات شیء مالک وابسته است. وقتی که شیء مالک نابود شود، اشیاء ترکیبی آن نیز نابود می‌شوند.

مثال:

```java
class Engine {
    // ویژگی‌ها و رفتارهای Engine
}

class Car {
    private Engine engine; // Car یک Engine دارد

    public Car() {
        engine = new Engine(); // Engine به طور مستقیم در Car ساخته می‌شود
    }
}
```

در این مثال، `Car` یک `Engine` دارد. وقتی که شیء `Car` نابود می‌شود، شیء `Engine` نیز نابود می‌شود، زیرا `Engine` بخشی از `Car` است.

#### تجمع (Aggregation)
در تجمع، اشیاء متعلق به یک کلاس بخشی از کلاس دیگر هستند، اما چرخه حیات آن‌ها به طور مستقل از شیء مالک مدیریت می‌شود. این اشیاء ممکن است بعد از نابودی شیء مالک همچنان وجود داشته باشند.

مثال:

```java
class Engine {
    // ویژگی‌ها و رفتارهای Engine
}

class Car {
    private Engine engine; // Car یک Engine دارد

    public Car(Engine engine) {
        this.engine = engine; // Engine به طور مستقل به Car داده می‌شود
    }
}

public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine();
        Car car = new Car(engine); // Car یک Engine دارد
    }
}
```
در این مثال، `Car` یک `Engine` دارد، اما `Engine` به طور مستقل از `Car` ساخته شده است و می‌تواند بعد از نابودی شیء `Car` همچنان وجود داشته باشد.

### خلاصه
ارتباط **"has-a"** نشان‌دهنده این است که یک کلاس حاوی یا مالک اشیاء دیگری است و می‌تواند به دو نوع ترکیب (composition) و تجمع (aggregation) تقسیم شود. این ارتباط به مدیریت بهتر ارتباطات بین اشیاء و بهبود طراحی شیءگرا کمک می‌کند.
