# Servlet

---

## Questions

<details open>
<summary> 
1) If there are 1000 requests to a Servlet, how many instances of Servlet are created?
</summary>

```text
In a typical Java servlet container, such as Apache Tomcat,a servlet instance is not created for every request.
Instead, servlet containers typically use a pool of servlet instances to handle multiple requests concurrently. 
When a servlet container receives a request, it checks whether there is an available servlet instance in the pool.
If an instance is available, it is used to process the request. After processing, the servlet instance is returned
to the pool for reuse. The number of servlet instances in the pool can be configured in the servlet container settings.
The servlet container manages the lifecycle of servlet instances and ensures that there are enough instances to handle
incoming requests efficiently. Therefore, the number of instances created and used depends on the servlet container's
configuration and the incoming request load. In your example, if there are 1000 requests to a servlet, 
it does not necessarily mean 1000 instances of the servlet are created. The servlet container manages the instances
efficiently, reusing them from the pool as needed to handle the incoming requests.
```
</details>
<details open>
<summary>
2) What is the life-cycle of a servlet?
</summary>

```text
The life cycle of a servlet in Java consists of several stages, from its initialization to its destruction. 
Here's an overview of the servlet life cycle stages:

1. Loading:
When a servlet container (such as Tomcat) starts or when a new web application is deployed, the servlet container loads
the servlet class. The `init()` method of the servlet is called to initialize the servlet.

2. Initialization (`init()` method):
The `init()` method is called by the servlet container after loading the servlet class.It is used for one-time initialization tasks,
such as loading configuration parameters or establishing database connections.
The `init()` method is called only once during the servlet's life cycle.

3. Request Handling (`service()` method):
For each incoming client request, the servlet container invokes the `service()`method.
The `service()` method receives the request and response objects and processes the request.
Depending on the type of request (GET, POST, etc.), the `service()` method dispatches the request to the appropriate `doXXX()`
method (e.g., `doGet()`, `doPost()`) for handling.

4. Request-Specific Handling (`doXXX()` methods):
Servlets can override specific `doXXX()` methods (e.g., `doGet()`, `doPost()`) to handle specific types of HTTP requests.
These methods are invoked by the `service()` method based on the type of request.

5. Destroying (`destroy()` method):
When a servlet container is shutting down or when a web application is removed, the `destroy()` method of the servlet is called.
This method allows the servlet to release any resources it has acquired during its life cycle,
such as closing database connections or releasing file handles. The `destroy()` method is called only once during the servlet's life cycle.

6. Unloading: 
When the servlet container unloads a servlet (which might happen when the web application is undeployed or when the server is shut down),
the servlet class is removed from memory.
It's important to note that each servlet instance handles multiple requests over its lifetime. 
The servlet container manages the life cycle of servlet instances,creating them as needed and pooling them for efficiency.
The `init()` and `destroy()` methods are called only once during the servlet's life cycle,
whereas the `service()` method and its corresponding `doXXX()` methods are called multiple times to handle different requests.
```
</details>
<details open>
<summary>
3) Difference between Get and Post Request Methods?
</summary>

```text
In HTTP, the GET and POST request methods are used to request data from a specified resource,
but they are used in slightly different ways and have different characteristics:

GET Request Method:
1. Parameters:
Data is appended to the URL in a GET request. Parameters are passed in the URL itself and are visible in the address bar.
For example, `example.com/resource?param1=value1&param2=value2`.

2. Security:
Because the data is exposed in the URL, GET requests are less secure than POST requests.
They should not be used for sensitive data like passwords or user credentials.

3. Caching: 
GET requests can be cached by browsers and intermediary servers. They are idempotent, meaning making 
the same GET request multiple times will produce the same result.

4. Length Limit: 
There is a limit to the amount of data that can be sent in a GET request. Different browsers and servers have different limits,
but there is a practical limitation on the length of URLs that can be handled.

5. Idempotence: GET requests are idempotent, meaning making the same GET request multiple times will produce the same result.
They do not change the state of the server.

6. Use Cases: GET requests are suitable for requesting data from the server, like fetching a web page, retrieving search results,
or accessing static resources.

POST Request Method:
1. Parameters: Data is sent in the body of the HTTP request in a POST request. Parameters are not visible in the URL.
This makes POST requests more secure for passing sensitive data.

2. Security:
POST requests are more secure for passing sensitive data because the data is not visible in the URL.
Parameters are sent in the body of the request, which is not visible to users or intermediary servers.

3. Caching:
POST requests are generally not cached. They are not idempotent, meaning making the same POST request multiple times
may have different effects, especially if the server state is changed.

4. Length Limit:
POST requests can send much larger amounts of data compared to GET requests. The amount of data that can be sent
is limited by the server-side configuration and network limitations, but POST requests can handle larger data payloads than GET requests.

5. Idempotence:
POST requests are not idempotent, meaning making the same POST request multiple times might not produce the same result,
especially if the server state is changed by the request.

6. Use Cases:
POST requests are suitable for submitting form data, uploading files, and performing actions on the server 
that might change the state of the server, such as updating a database or creating a new resource.

In summary, GET requests are used for safe and idempotent operations where data is passed in the URL, 
while POST requests are used for operations that may change the server state and where data is sent in 
the request body, making them more suitable for sensitive or large amounts of data.
```
</details>
<details open>
<summary>
4) What is difference between GenericServlet and HttpServlet?
</summary>

```text
`GenericServlet` and `HttpServlet` are both abstract classes in Java servlet programming,
providing different levels of abstraction and functionality for handling HTTP requests.
Here are the main differences between them:

GenericServlet:
1. Level of Abstraction:
`GenericServlet` is an abstract class that provides a generic, protocol-independent servlet.
It can handle any type of protocol, not just HTTP. It is protocol-agnostic and does not provide specific methods
for handling HTTP requests.

2. Methods:
`GenericServlet` defines a `service(ServletRequest req, ServletResponse res)` method,
which is protocol-independent and takes generic `ServletRequest` and `ServletResponse` parameters.
Subclasses of `GenericServlet` must implement this method to provide protocol-specific request handling logic.

3. Purpose:
`GenericServlet` is suitable for protocols other than HTTP, like FTP, SMTP, etc.
It provides a foundation for building servlets that handle different protocols.

HttpServlet:
1. Level of Abstraction:
`HttpServlet` is a subclass of `GenericServlet` that specifically handles HTTP requests.
It provides a higher level of abstraction for servlets that deal exclusively with HTTP protocols.

2. Methods: `HttpServlet` defines specific methods such as `doGet(HttpServletRequest req, HttpServletResponse res)`,
`doPost(HttpServletRequest req, HttpServletResponse res)`, `doPut(HttpServletRequest req, HttpServletResponse res)`,
`doDelete(HttpServletRequest req, HttpServletResponse res)`, and others. These methods are specific to handling HTTP
requests with corresponding HTTP methods (GET, POST, PUT, DELETE, etc.).

3. Purpose:
`HttpServlet` is designed for building servlets that handle HTTP requests. It includes methods tailored 
for handling different HTTP methods and provides access to `HttpServletRequest` and `HttpServletResponse` objects,
allowing developers to easily extract parameters, headers, and other information from incoming HTTP requests and send appropriate responses.

In summary, `GenericServlet` provides a generic, protocol-independent servlet foundation, while `HttpServlet`
 extends `GenericServlet` to provide a specialized framework for building servlets that specifically handle 
 HTTP requests. Developers typically use `HttpServlet` when creating web applications because it simplifies 
 the handling of HTTP requests and responses.
```
</details>
<details open>
<summary>
5) What is the purpose of RequestDispatcher Interface?
</summary>

```text
The `RequestDispatcher` interface in Java Servlet programming provides a way to dispatch a request from one servlet to another resource, which can be another servlet, a JSP page, or any other resource under the same web application. It allows communication between servlets and enables the forwarding of a client request from one servlet to another, or from a servlet to a JSP page, before sending the response back to the client.

The primary purposes of the `RequestDispatcher` interface include:

### 1. **Request Forwarding:**
   - **Scenario:** One servlet processes a request partially and then decides to pass the request to another servlet for further processing.
   - **Usage:** The `RequestDispatcher` interface allows the first servlet to forward the request, along with its attributes, to the second servlet for additional processing.
   - **Benefit:** This facilitates modular design and code reuse, allowing different servlets to handle specific tasks and collaborate to generate a complete response.

### 2. **Including Responses:**
   - **Scenario:** One servlet wants to include the response from another servlet or resource within its own response.
   - **Usage:** The `include(ServletRequest request, ServletResponse response)` method of `RequestDispatcher` includes the response generated by the included servlet or resource within the calling servlet's response.
   - **Benefit:** This is useful when multiple servlets or resources contribute to a single response, such as assembling header and footer sections from different sources.

### 3. **Redirection:**
   - **Scenario:** A servlet wants to redirect the client to another resource (servlet, JSP, HTML page, etc.) to handle the request further.
   - **Usage:** The `sendRedirect(String location)` method of `HttpServletResponse` (not directly in `RequestDispatcher`) is used to redirect the client to a different URL.
   - **Benefit:** Redirection is often used when a resource has moved, or to delegate specific tasks to different parts of a web application.

### 4. **Accessing Resources:**
   - **Scenario:** A servlet needs to access static resources or dynamic content (JSP pages, other servlets) residing within the same web application.
   - **Usage:** `RequestDispatcher` allows servlets to access other resources within the same context without exposing them directly to clients.
   - **Benefit:** This ensures controlled access to resources and enhances security by keeping certain resources inaccessible to clients directly.

In summary, the `RequestDispatcher` interface enables dynamic, flexible, and modular web application development by allowing servlets to collaborate, share data, and include or forward requests and responses. It facilitates the separation of concerns, enhancing the maintainability and extensibility of Java web applications.
```
</details>
<details>
<summary>
6) How do you forward to a jsp from the servlet?
</summary>

```text
To forward a request from a servlet to a JSP (JavaServer Pages) page, you can use the `RequestDispatcher` interface provided by the `ServletRequest` interface. Here's how you can forward a request from a servlet to a JSP:

```

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
```text
In this example:

1. The `doGet` method of the servlet is handling the HTTP GET request.
2. Any data you want to pass to the JSP can be set as request attributes using `request.setAttribute("attributeName", attributeValue)`.
3. Obtain a `RequestDispatcher` object by calling `request.getRequestDispatcher("/path/to/your.jsp")`, where `"/path/to/your.jsp"` is the relative path to your JSP file.
4. Forward the request and response objects to the JSP using `dispatcher.forward(request, response)`.

Ensure that you replace `"/path/to/your.jsp"` with the actual relative path to your JSP file. When the `dispatcher.forward()` method is called, control is transferred to the specified JSP file, and the JSP will have access to the request attributes set in the servlet.
```
</details>
<details>
<summary>
7) What is Session?
</summary>

```text

```
</details>
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

```text

```
</details>
<details>
<summary>
10) What is war file?
</summary>

```text

```
</details>
<details>
<summary>
11) What is the structure of a war file?
</summary>

```text

```
</details>
<details>
<summary>
12) What are the servlet annotations introduced in Servlet 3.0?
</summary>

```text

```
</details>
<details>
<summary>
13) What is different between web server and application server?
</summary>

```text

```
</details>
<details>
<summary>
14) What is difference between ServletConfig and ServletContext?
</summary>

```text

```
</details>
<details>
<summary>
15) What is maven? What does it do?
</summary>

```text

```
</details>