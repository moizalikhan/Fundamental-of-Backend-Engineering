### layered architecture: presentation, application, domain, and infrastructure
* Presentation layer: Client side
* Application layer: It controls data flow, user requests, business logic, and RESTful web services
* Domain layer: data access rules, system's state
* Infrastructure Layer: system's resources
* Separation of concerns
* Modularity
* Interact between levels using interfaces
* Separating concerns is possible thanks to dependency injection
* infrastructure layer may be easily scaled horizontally by adding additional instances.
### layered architecture is not n tier architecture: 
* While higher layers may use services in a lower layer, however, it is not valid for the otherwise situation which means one cannot use the services in higher layers.
* different layers are run on different machines
* model-view-controller is a design pattern and N-Tier architecture is an architectural style that defines the physical structure of your application.
## DisAdvantages:
* Performance Overhead
* Tight Coupling
* Scalibity challenges
* Communication Overhead
---
### MVC architecture pattern
* Model: The backend that contains all the data logic
View: The frontend or graphical user interface (GUI)
Controller: The brains of the application that controls how data is displayed through getter and setter
* Getters and setters are methods used in object-oriented programming languages to access and modify the private attributes or properties of a class. They provide a way to encapsulate the internal state of an object, allowing controlled access to its data members.
* Getter: A getter is a method that retrieves the current value of a private instance variable (or property) in a class. It allows external code to access the state of an object without directly manipulating its internal data. Getters typically have names like getPropertyName().
* Setter: A setter is a method that allows external code to modify the value of a private instance variable (or property) in a controlled way. Setters typically have names like setPropertyName().
---
### REST API
* SOAP is considered a protocol, while REST is considered a set of guidelines
* uniform interface
* Client-server based
* Stateless operations
* RESTful resource caching
* Layered system: composed of hierarchical layers. In doing so, each component cannot see beyond the immediate layer with which they are interacting.
* REST uses a resource identifier 
* REST is preferable to SOAP
* Benefits: Scalability, Flexibility and Portability, Independence, Lightweight
* challenges: REST endpoint consensus, REST API versioning, REST API authentication
* REST’s ability to cache responses
* SOAP-based approach because of its built-in security measures
### Disadvantages
* RESTful APIs are not the right fit for applications that require live data
* Reliance on HTTP
* Significant overhead with binary data transfer
---
### HTTP methods
* GET: the data you requested and sends it back to you.
* PUT: Update Idempotent
* POST: New Entry
* DELETE: Delete
* PATCH: partial modifications to a resource  specific fields not Idempotent
---
### Microservices vs Monolith
*  monolithic application is a single unified unit, a microservices architecture breaks it down into a collection of smaller independent units. 
*  microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.

### Other things to study:
* Handling multiple requests simultaneously, or concurrently, is a key requirement for building scalable and responsive APIs. Here are several strategies and best practices you can employ to ensure your API can handle multiple requests effectively:

1. **Asynchronous Processing:**
   - For tasks that are time-consuming or resource-intensive, consider implementing asynchronous processing. Instead of blocking the API while processing a request, the API can acknowledge the request and then handle the processing asynchronously. This can be achieved using tools like message queues or background job processing systems.

2. **Use of Threads or Processes:**
   - Depending on the programming language and framework you're using, you may leverage multithreading or multiprocessing to handle multiple requests concurrently. Each incoming request can be processed in a separate thread or process, allowing for parallel execution.

3. **Connection Pooling:**
   - If your API interacts with a database, use connection pooling to efficiently manage and reuse database connections. This helps prevent resource exhaustion and improves overall database performance.

4. **Load Balancing:**
   - Distribute incoming requests across multiple servers or instances using load balancing. This helps distribute the workload evenly and ensures that no single server becomes a bottleneck.

5. **Caching:**
   - Implement caching mechanisms to store and retrieve frequently requested data. This can reduce the need to perform expensive computations or database queries for repetitive requests.

6. **Optimized Database Queries:**
   - Optimize database queries to ensure they execute efficiently. Use indexing, proper query optimization techniques, and analyze the database schema to improve query performance.

7. **Connection Handling:**
   - Efficiently manage and reuse connections to external services or APIs. Establishing and tearing down connections for each request can add unnecessary overhead.

8. **Compression and Chunked Responses:**
   - Compress response data and use chunked encoding when sending large amounts of data. This can reduce the time it takes to transmit data over the network.

9. **Rate Limiting:**
   - Implement rate limiting to control the number of requests a client can make within a specified time frame. This helps prevent abuse and ensures fair usage of resources.

10. **Scalability:**
    - Design your API to be scalable by adopting a microservices architecture or utilizing cloud services that support auto-scaling. This allows you to dynamically adjust the number of instances based on demand.

11. **Connection Keep-Alive:**
    - Use HTTP keep-alive to maintain open connections between the client and server, reducing the overhead of opening and closing connections for each request.

12. **Optimized Code:**
    - Write efficient and optimized code. Identify and address performance bottlenecks, and regularly profile and analyze your code to ensure it's running efficiently.

13. **Monitoring and Logging:**
    - Implement monitoring and logging to track the performance of your API. Identify patterns, potential issues, and areas for improvement. Monitoring tools can help you detect and address performance issues in real-time.

By combining these strategies, you can build an API that efficiently handles multiple requests concurrently, providing a responsive and scalable experience for users. The specific implementation details will depend on the programming language, framework, and infrastructure you are using.

### Nodejs
While it's true that Node.js is single-threaded, it doesn't mean it can't handle multiple requests simultaneously. Node.js achieves concurrency through its event-driven, non-blocking I/O model. Here's how it works:

1. **Event-Driven and Asynchronous:**
   - Node.js operates on an event-driven architecture where asynchronous operations are central. When a request comes in, Node.js doesn't block the execution of the entire process. Instead, it registers a callback and continues processing other events. When the asynchronous operation, such as reading from a file or querying a database, is completed, the callback is invoked.

2. **Event Loop:**
   - The Node.js event loop is the mechanism that allows it to handle multiple operations concurrently. It constantly checks the event queue for new events and executes the associated callbacks. This enables Node.js to efficiently handle many I/O-bound operations without being blocked.

3. **Non-Blocking I/O:**
   - Node.js uses non-blocking I/O operations, meaning that it can initiate multiple I/O operations and continue processing other tasks while waiting for the results. This is particularly useful for scenarios where I/O operations, such as reading from a file or making network requests, would traditionally block the execution.

4. **Callback Pattern:**
   - Node.js relies heavily on callbacks, which are functions passed as arguments to asynchronous operations. When an asynchronous operation is completed, the associated callback is invoked. This enables the program to continue executing other tasks while waiting for the asynchronous operation to finish.

5. **Event-Driven Libraries:**
   - Node.js has a rich set of event-driven libraries and modules, such as the HTTP module for building web servers. These modules leverage the event-driven nature of Node.js to handle multiple concurrent connections efficiently.

6. **Cluster Module:**
   - The Cluster module in Node.js allows you to create child processes (workers) that share the same port. Each worker operates on its own thread, enabling parallel processing of incoming requests. This is particularly useful for leveraging multi-core systems.

Here's a simple example of a Node.js server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // This callback is asynchronous and non-blocking
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

In this example, the server can handle multiple incoming HTTP requests concurrently due to the asynchronous and non-blocking nature of Node.js.

While Node.js is well-suited for handling I/O-bound tasks concurrently, CPU-bound tasks can still pose a challenge because of its single-threaded nature. In such cases, using worker threads or breaking down tasks into smaller, asynchronous operations can be considered.