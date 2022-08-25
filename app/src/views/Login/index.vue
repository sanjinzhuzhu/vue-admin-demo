<template>
  <div class="container" id="container">
    <div class="form-container register-container">
      <!-- register form -->
      <!-- login -->
      <div class="form-container login-container">
        <form action="#">
          <h1>image</h1>
          <input type="admin" placeholder="admin" />
          <input type="password" placeholder="password" />
          <a href="#">forget password?</a>
          <button>login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.template {
  font-family: Arial, Helvetica, sans-serif;
  background: #f8f8f8;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 1.5rem auto;
}
h1 {
  margin: 1rem;
  font-size: 0.8rem;
}
a{
  color: rgb(255, 211, 192);
  font-size: 0.8rem;
  text-decoration: none;
   transform: scale(0.95, 0.95)
}
.container {
  margin: auto;
  background: #fff;
  border-radius: 10px;
 justify-content: center;
  padding: 0.6rem;
  width: 30rem;
  height: 15rem;
  overflow: hidden;
  max-width: 100vw;
  min-height: 70vh;
  
}
.form-container form {
  box-shadow: 0 14px 28px rgba(0.05, 0, 0, 0.05),
    0 10px 10px rgba(0, 0, 0, 0.082);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
  height: 100%;
  /* justify-content:  center; */
  align-items: center;
}
.form-container input {
  width: 50%;
  height: 1rem;
  text-indent: 0.2rem;
  border: 1px solid rgb(255, 211, 192);
  border-left: none;
  border-right: none;
  border-top: none;
  outline: none;
  margin: 1.6rem 0;
  
}
.form-container button:active {
  transform: scale(0.95, 0.95);
}
.form-container button {
  padding: 0.4rem 1rem;
  background: rgb(255, 211, 192);
  color: white;
  border: 1px solid ;
  outline: none;
  cursor: pointer;
  width: 5rem;
  border-radius: 8px;
  transition: all 100ms ease-in;
  margin: 0.6rem 0;
  font-size: 0.6rem;
  padding: 0.5rem 0;
}
</style>