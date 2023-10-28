# Servlet

---

## Questions

<details open>
<summary> 
1) If there are 1000 requests to a Servlet, how many instances of Servlet are created?
</summary>

<div dir="rtl">
توی یک java servlet container مثل apache tomcat به ازای هر request یه servlet instance ساخته نمیشه، در عوض توی servlet container 
معمولا یه pool از servlet instance وجود داره که چندین ریکوئست رو به صورت همزمان handle میکنه
وقتی که servlet container یه ریکئستی دریافت میکنه ابتدا چک میکنه که آیا servlet instance توی pool مجود هست یا نه، اگر instanceای وجود داشته باشه ، برای پردازش این request استفاده میشه وب عد از پردازش servlet instance به pool برگردونده میشه تا دوباره مورد استفاده قرار بگیره.
در نتیجه توی یه servlet container تعدای servlet instance  وجود داره که همیشه برای پردازش ریکوئست ها آماده هستند، در مثال سوال اگر 1000 ریکوئست وجود داشته باشه
این به معنی این نیست که 1000 instance برای پردازش این ریکوئست ها وجود داره ، servlet container مدیریت ریکوئست ها ر وبه عهده داره و به servlet instnce ]ای موجود در pool به صورت مدیریت شده 
درخواست ها رو برای پردازش میفرسته.
</div>

</details><br>
<details open>
<summary>
2) What is the life-cycle of a servlet?
</summary>

<div dir="rtl">

1. Loading:<br>
وقتی که یه servlet containar ( مثل apache tomcat) start میشه یا یه web application جدید deploy میشه ، سروبت کانتینر(servlet container)، servlet class رو load میکنه

2. Initialization (`init()` method):<br>
 متد init بعد از لود شدن servlet class توسط servlet container صدا زده میشه، این متد یکبار برای Initialize کردن تسک ها صدا زده میشه مثل config کردن پارامترها یا etablish کردن کانکشن دیتابیس
 متد Init فقط یکبار طی life cycle سرولت صدا زده میشه

3. Request Handling (`service()` method):<br>
به ازای هر request  ورودی از سمت کلاینت، servlet container متد service رو فراخونی میکنه.
متد service آبجکت های ریکوئست و ریسپانس رو دریافت و ریکوئست موردنظر رو پردازش میکنه
بسته به نوع ریکوئست(get , post , ...) متد service ریکوئست برای handle کردن ریکوئست اون رو به dispatch و به متد مورد نظر تحویل میده مثل doGet, doPost , ..

4. Request-Specific Handling (`doXXX()` methods):<br>
سرولت ها برای handle کردن انواع مختلف از http request ها میتون متدهای خاص هر نوع رو override کنند ( doGet, doPost , ..)
این متدها بوسیله متد service بر اساس نوع ریکوئست فراخونی میشن.

5. Destroying (`destroy()` method):<br>
زمانیکه یه سرولت کانتینر shutdown میشه یا یه web application حذف میشه، متد destroy مربوط به سرولت صدا زده میشه
این متد به سرولت اجازه آزاد کردن resource هایی که طی life cycle سرولت مورد استفاده قرار گرفتن رو میده مثل بستن کانکشنهای باز دیتابیس و ..
این متد فقط یکبار طی life cycle سرولت فراخونی میشه.

6. Unloading:<br>
وقتی که سرولت کانتینر یه سرولت رو به اصطلاح unload میکنه ( زمانی که وب اپلیکیشن undeploy میشه یا وقتی که سرور shutdown میشه servlet class
مربوطه از memory پاک میشه.
</div>
</details><br>

<details open>
<summary>
3) Difference between Get and Post Request Methods?
</summary>

<div dir="rtl">
پارامترهای ریکوئست get درون Url قرار داره اما پارامترهای یه ریکوئست post درون بدنه ریکوئست استفاده میشه.
</div>
</details><br>
<details open>
<summary>
4) What is difference between GenericServlet and HttpServlet?
</summary>

<div dir="rtl">
هردوی این کلاس ها از نوع abstract هستن با این تفاوت که genericServlet فارغ از نوع پروتکل برای handle کردن هر نوع ریکوئستی قابل استفاده س اما httpServlet ( که از genericServlet ارث بری کرده) فقط برای ریکوئست های مبروط به پروتکل http قابل استفاده س 
</div>
</details><br>
<details open>
<summary>
5) What is the purpose of RequestDispatcher Interface?
</summary>

<div dir="rtl">
این اینترفیس قابلیت forward یه ریکوئست از یه سرولت رو به یه سرولت دیگه یا یه JSP و .. قبل از ارسال RESPONSE به سمت گلاینت فراهم میکنه
</div>

</details><br>
<details>
<summary>
6) How do you forward to a jsp from the servlet?
</summary>

<div dir="rtl">
با استفاده از اینترفیس RequestDispatcher
</div>

```java
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ServletForwardingToJSP")
public class ServletForwardingToJSP extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Set any attributes you want to pass to the JSP
        request.setAttribute("attributeName", attributeValue);
        
        // Get the RequestDispatcher object to forward the request to the desired JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("/path/to/your.jsp");
        
        // Forward the request and response objects to the JSP
        dispatcher.forward(request, response);
    }
}
```

</details><br>
<details>
<summary>
7) What is Session?
</summary>

<div dir="rtl">
راهی برای web application فراهم می‌کند تا اطلاعات وضعیت user رو توی چندین request حفظ کنند و تجربه‌های شخصی و تعاملی کاربر را در وب ممکن می‌سازد.
</div>
</details><br>
<details>
<summary>
8) What are Cookies?
</summary>

```text

```
</details>
<details>
<summary>
9) What is filter?
</summary>
<div dir="rtl">
فیلتر در Java Servlet یک جزء reusable است که می تواند وظایف فیلتر
را بر روی درخواست یک منبع، پاسخ از یک منبع یا هر دو انجام دهد.
فیلترها برای انجام عملکردهایی مانند logging، authentication، authorization، input validation،
تبدیل داده یا encryption قبل از رسیدن درخواست به سرور یا پس از تولید پاسخ توسط سرولت استفاده می‌شوند.
فیلترها به ویژه برای کارهایی مفید هستند که باید به طور مداوم در چندین servlet در یک برنامه وب اعمال شوند
</div>

```java
import javax.servlet.*;
import java.io.IOException;

public class MyFilter implements Filter {
    public void init(FilterConfig config) throws ServletException {
        // Initialization code, if needed
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // Perform filtering tasks before the request reaches the servlet
        
        // Call the next filter in the chain, or the servlet if it's the last filter
        chain.doFilter(request, response);
        
        // Perform filtering tasks on the response after the servlet has been executed
    }

    public void destroy() {
        // Cleanup code, if needed
    }
}
```

In this example, `doFilter()` is where the filtering logic is implemented. 
The `chain.doFilter(request, response)` line passes the request and response objects to the next filter
in the chain or to the servlet if it's the last filter in the chain.

</details>
<details>
<summary>
10) What is different between web server and application server?
</summary>

```text

```
</details>
<details>
<summary>
11) What is difference between ServletConfig and ServletContext?
</summary>

```text

```
</details>
<details>
<summary>
12) What is maven? What does it do?
</summary>

```text

```
</details>