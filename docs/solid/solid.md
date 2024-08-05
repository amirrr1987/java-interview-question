### 1. Single Responsibility Principle (SRP)
**اصل مسئولیت تک‌منظوره** بیان می‌کند که هر کلاس باید تنها یک وظیفه داشته باشد و باید تنها یک دلیل برای تغییر آن وجود داشته باشد.

**مثال:**
فرض کنید یک کلاس `Employee` داریم که اطلاعات مربوط به یک کارمند و عملکرد گزارش‌دهی را مدیریت می‌کند. این یک نقض SRP است، زیرا کلاس `Employee` دو وظیفه دارد: مدیریت اطلاعات کارمند و تولید گزارش.

**بدون SRP:**
```java
class Employee {
    private String name;
    private int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    public void printEmployeeDetails() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
```

**با SRP:**
در اینجا ما کلاس را به دو بخش تقسیم کرده‌ایم: `Employee` که اطلاعات کارمند را مدیریت می‌کند و `EmployeeReport` که وظیفه تولید گزارش را دارد.

```java
class Employee {
    private String name;
    private int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}

class EmployeeReport {
    public void printEmployeeDetails(Employee employee) {
        System.out.println("Name: " + employee.getName() + ", Age: " + employee.getAge());
    }
}
```

### 2. Open/Closed Principle (OCP)
**اصل باز/بسته** بیان می‌کند که کلاس‌ها باید برای توسعه باز و برای تغییر بسته باشند. به عبارت دیگر، باید بتوان کلاس‌ها را بدون تغییر در کد موجود گسترش داد.

**مثال:**
فرض کنید یک کلاس `Shape` داریم که روش `area` برای محاسبه مساحت دارد. می‌خواهیم بتوانیم انواع جدیدی از اشکال را اضافه کنیم بدون اینکه نیاز به تغییر در کد موجود داشته باشیم.

**بدون OCP:**
```java
class Shape {
    enum ShapeType { CIRCLE, RECTANGLE }

    ShapeType type;
    double radius;
    double width, height;

    public double area() {
        switch (type) {
            case CIRCLE:
                return Math.PI * radius * radius;
            case RECTANGLE:
                return width * height;
            default:
                return 0;
        }
    }
}
```

**با OCP:**
در اینجا، از کلاس‌های مشتق‌شده استفاده کرده‌ایم تا بتوانیم اشکال جدید را بدون تغییر در کد موجود اضافه کنیم.

```java
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}
```

### 3. Liskov Substitution Principle (LSP)
**اصل جایگزینی لیسکوف** بیان می‌کند که اشیاء از یک کلاس پایه باید بتوانند با اشیاء از کلاس‌های مشتق بدون تغییر در رفتار برنامه جایگزین شوند.

**مثال:**
فرض کنید یک کلاس `Bird` داریم که روش `fly` دارد. تمام کلاس‌های مشتق‌شده از `Bird` باید بتوانند جایگزین `Bird` شوند بدون اینکه رفتار نادرستی نشان دهند.

**نقض LSP:**
```java
class Bird {
    public void fly() {
        System.out.println("Flying");
    }
}

class Sparrow extends Bird {
    // پرنده‌ای که می‌تواند پرواز کند
}

class Ostrich extends Bird {
    // پرنده‌ای که نمی‌تواند پرواز کند، نقض LSP
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Ostrich can't fly");
    }
}
```

**رعایت LSP:**
به جای ارث‌بری از `Bird`، یک کلاس پایه جدید به نام `FlyingBird` برای پرندگان که می‌توانند پرواز کنند ایجاد می‌کنیم.

```java
class Bird {
    // کلاس پایه برای تمام پرندگان
}

class FlyingBird extends Bird {
    public void fly() {
        System.out.println("Flying");
    }
}

class Sparrow extends FlyingBird {
    // پرنده‌ای که می‌تواند پرواز کند
}

class Ostrich extends Bird {
    // پرنده‌ای که نمی‌تواند پرواز کند، نقض LSP نمی‌شود
}
```

### 4. Interface Segregation Principle (ISP)
**اصل جداسازی رابط** بیان می‌کند که کلاس‌ها نباید مجبور باشند که رابط‌هایی را پیاده‌سازی کنند که از آن‌ها استفاده نمی‌کنند.

**مثال:**
فرض کنید یک رابط `Worker` داریم که روش‌های `work` و `eat` دارد. روبات‌ها فقط نیاز به روش `work` دارند و نباید مجبور به پیاده‌سازی روش `eat` شوند.

**نقض ISP:**
```java
interface Worker {
    void work();
    void eat();
}

class Robot implements Worker {
    public void work() {
        System.out.println("Robot working");
    }

    // روبات‌ها نمی‌توانند بخورند، نقض ISP
    public void eat() {
        throw new UnsupportedOperationException("Robots don't eat");
    }
}
```

**رعایت ISP:**
با جدا کردن رابط‌ها، می‌توانیم کلاس‌ها را مجبور به پیاده‌سازی تنها روش‌هایی کنیم که واقعاً نیاز دارند.

```java
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

class Robot implements Workable {
    public void work() {
        System.out.println("Robot working");
    }
}

class Human implements Workable, Eatable {
    public void work() {
        System.out.println("Human working");
    }

    public void eat() {
        System.out.println("Human eating");
    }
}
```

### 5. Dependency Inversion Principle (DIP)
**اصل وارونگی وابستگی** بیان می‌کند که ماژول‌های سطح بالا نباید به ماژول‌های سطح پایین وابسته باشند؛ هر دو باید به انتزاعات وابسته باشند. انتزاعات نباید به جزئیات وابسته باشند؛ جزئیات باید به انتزاعات وابسته باشند.

**مثال:**
فرض کنید یک کلاس `Notification` داریم که پیام‌ها را ارسال می‌کند. اگر `Notification` مستقیماً به `EmailService` وابسته باشد، تغییر در نحوه ارسال پیام‌ها مستلزم تغییر در `Notification` است.

**نقض DIP:**
```java
class EmailService {
    public void sendEmail(String message) {
        System.out.println("Email sent: " + message);
    }
}

class Notification {
    private EmailService emailService;

    public Notification() {
        emailService = new EmailService();
    }

    public void notifyUser(String message) {
        emailService.sendEmail(message);
    }
}
```

**رعایت DIP:**
با استفاده از انتزاع (`MessageService`)، می‌توانیم بدون تغییر در `Notification` نوع سرویس پیام‌رسانی را تغییر دهیم.

```java
interface MessageService {
    void sendMessage(String message);
}

class EmailService implements MessageService {
    public void sendMessage(String message) {
        System.out.println("Email sent: " + message);
    }
}

class SMSService implements MessageService {
    public void sendMessage(String message) {
        System.out.println("SMS sent: " + message);
    }
}

class Notification {
    private MessageService messageService;

    public Notification(MessageService messageService) {
        this.messageService = messageService;
    }

    public void notifyUser(String message) {
        messageService.sendMessage(message);
    }
}

public class Main {
    public static void main(String[] args) {
        MessageService emailService = new EmailService();
        Notification notification = new Notification(emailService);
        notification.notifyUser("Hello Email!");

        MessageService smsService = new SMSService();
        Notification notification2 = new Notification(smsService);
        notification2.notifyUser("Hello SMS!");
    }
}
```

### نتیجه‌گیری
اصول SOLID به توسعه‌دهندگان کمک می‌کنند تا نرم‌افزارهای قابل نگهداری، توسعه‌پذیر و پایدار ایجاد کنند. با پیاده‌سازی این اصول در طراحی شیءگرای خود، می‌توانید از مشکلات بسیاری که در توسعه نرم‌افزارهای بزرگ رخ می‌دهد جلوگیری کنید و کدهای بهتری بنویسید.