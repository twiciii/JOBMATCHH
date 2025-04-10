<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/try/style.css">
  <title>CreativeVenture - Authentication</title>
</head>
<body>

<header>
  <a class="logo-01">
    <img src="website logo-01.png" width="75px" height="75px">
  </a>
  <nav class="navbar">
    <div>
      <a href="#">Explore</a>
      <a href="#sec.2">Contact</a>
      <a href="#sec.1">About Us</a>
      <button class="btnlogin-popup" id="login-btn">Login</button>
    </div>
  </nav>
</header>

<div class="wrapper">
  <span class="icon-close"><ion-icon name="close"></ion-icon></span>
  
  <!-- Login Form -->
  <div class="form-box login">
    <h2>Login</h2>
    <form action="login.php" method="POST">
      <div class="input-box">
        <span class="icon"><ion-icon name="mail"></ion-icon></span>
        <input type="email" name="email" required>
        <label>Email</label>
      </div>
      <div class="input-box">
        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
        <input type="password" name="password" required>
        <label>Password</label>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="login-register">
        <p>Don't have an account? <a href="#" class="register-link">Register</a></p>
      </div>
    </form>
  </div>

  <!-- Registration Form -->
  <div class="form-box register">
    <h2>Register</h2>
    <form action="register.php" method="POST">
      <div class="input-box">
        <span class="icon"><ion-icon name="person"></ion-icon></span>
        <input type="text" name="username" required>
        <label>Username</label>
      </div>
      <div class="input-box">
        <span class="icon"><ion-icon name="mail"></ion-icon></span>
        <input type="email" name="email" required>
        <label>Email</label>
      </div>
      <div class="input-box">
        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
        <input type="password" name="password" required>
        <label>Password</label>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"> I agree to the terms & conditions</label>
      </div>
      <button type="submit" class="btn">Register</button>
      <div class="login-register">
        <p>Already have an account? <a href="#" class="login-link">Login</a></p>
      </div>
    </form>
  </div>
</div>

<script src="/try/script.js"></script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>
</html>