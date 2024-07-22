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
