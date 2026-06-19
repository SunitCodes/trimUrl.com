# 🔗 trimUrl.com - URL Shortener Service

A fast, reliable, and scalable URL shortening service that transforms long URLs into compact, shareable links.

<img width="1876" height="895" alt="image" src="https://github.com/user-attachments/assets/7a98b32a-d4b1-4b03-87ad-564c0701449c" />

## 🚀 Features

* Shorten long URLs into compact links
* Fast redirection service
* URL validation and security checks
* Click tracking and analytics
* RESTful API support
* User-friendly web interface
* Scalable architecture for high traffic loads
* Secure and reliable link management

## 🏗️ Architecture

trimUrl.com follows a modern distributed architecture designed for scalability and reliability.

### Core Components

* Frontend – User interface for creating and managing short URLs
* API Gateway – Routes incoming requests to appropriate services
* URL Service – Handles URL shortening and retrieval operations
* Database – Stores URL mappings and analytics data
* Analytics Service – Tracks clicks and usage statistics
* Cache Layer – Improves redirection performance

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Spring Security

### Database

* PostgreSQL

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Tools

* Docker
* Redis
* Postman

## 📦 Installation

### Prerequisites

* Java 17+
* Maven 3.8+
* PostgreSQL
* Docker (optional)

### Clone the Repository

```bash
git clone https://github.com/your-username/trimUrl.com.git
cd trimUrl.com
```

### Configure Database

Update the database configuration in:

```properties
application.properties
```

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/trimurl
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Build the Project

```bash
mvn clean install
```

### Run the Application

```bash
mvn spring-boot:run
```

Application will start on:

```text
http://localhost:8080
```

## 📊 Example Workflow

1. User submits a long URL.
2. System generates a unique short code.
3. URL mapping is stored in the database.
4. Short URL is returned to the user.
5. When accessed, the service redirects users to the original URL.
6. Click analytics are recorded.

## 🔒 Security Features

* Input validation
* Rate limiting
* Secure API endpoints
* Protection against malicious redirects

## 📂 Project Structure

```text
trimUrl.com
│
├── backend/
├── frontend/
├── screenshots/
│   ├── banner.png
│   ├── home-page.png
│   ├── url-shortener.png
│   ├── generated-link.png
│   └── analytics-dashboard.png
│
├── docker-compose.yml
└── README.md
```

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 👨‍💻 Author

**Sunit Das**

---

⭐ If you found this project useful, please consider giving it a star.
