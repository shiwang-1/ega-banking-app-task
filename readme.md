# EGA Banking

### Login Page

![login page](/public/login-page.png?raw=true)

### Signup Page

![signup page](/public/signup-page.png?raw=true)

### Dashboard Page

![dashboard page](/public/dashboard.png?raw=true)

### Deposits Page

![deposits page](/public/deposit-page.png?raw=true)

### Deposit Amount

![deposits page](/public/add-deposit.png?raw=true)

### Withdraw Page

![withdraw page](/public/withdraw-page.png?raw=true)

### Withdraw Amount

![withdraw page](/public/withdraw-amount.png?raw=true)

## Prerequisites

#### 1. Install [Docker](https://www.docker.com/products/docker-desktop/)

#### 2. Install [Docker Compose](https://docs.docker.com/compose/install/linux/)

#### 3. Make sure mysql is not running at local and port 3306 is free.
##### Linux:
    sudo systemctl status mysql
###### If Running:
    sudo systemctl stop mysql

#### 4. Run
    cp .env.example .env

#### 5. Run the project
    docker compose up --build

#### 6. Your project will be started on [localhost](http://localhost:81)
