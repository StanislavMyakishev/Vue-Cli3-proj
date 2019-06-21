<template>
    <div class="main">
        <img src="https://via.placeholder.com/200x80" alt="Logo" class="logo">
        <h1 class="header">Sign Up</h1>
        <button class="login-out"><i class="fab fa-facebook-square"></i>Continue with Facebook</button>
        <p class="or"><span class="or__text">OR</span></p>
        <form action="" class="first">
            <fieldset>
                <input type="email" name="" id="" placeholder="Email Address">
                <input type="password" name="" id="" placeholder="Password">
                <button type="submit" class="join">Join *Outsorcrer*</button>
                <p class="small">By registering you confirm that you accept the Terms and Conditions and Privacy Policy</p>
                <hr>
            </fieldset>
        </form>
        <p class="login">Already have an account? <a href="">Log In</a></p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main {
        margin: 20px auto;
        width: 400px;
        padding: 24px 32px;
        background-color: white;
        box-shadow: 0 0 4px 0 rgba(0,0,0,.08), 0 2px 4px 0 rgba(0,0,0,.12);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 3px;
        font-size: 14px;
    }

    button {
        border-radius: 3px;
        color: white;
        padding: 13px 22px;
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    .login-out {
        background: linear-gradient(to bottom,#4267B2 0,#3b5c9f 100%);
        border: 1px solid 1px solid #3b5c9f;
    }

    .join {
        background: linear-gradient(to bottom,#139ff0 0,#0087e0 100%);
        border: 1px solid #0087e0;
    }

    .header {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 20px 0;
    }

    i {
        margin-right: 15px;
        font-size: 24px;
    }

    .or {
        position: relative;
        width: 100%;
        text-align: center;
        margin: 25px 0;
    }

    .or::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        border-bottom: 1px solid #DEDEDE;
        z-index: 1;
    }

    .or__text {
        position: relative;
        z-index: 2;
        background: white;
        padding: 0 10px;
        font-size: 13px;
        color: #363f4d;
        font-weight: 700;
    }

    fieldset {
        border: none;
    }

    input {
        font-size: 16px;
        border: 1px solid #BEC0C2;
        border-radius: 3px;
        color: #1f2836;
        width: 100%;
        height: 46px;
        padding: 0 16px;
    }

    input:last-of-type {
        margin: 20px 0;
    }

    .small {
        padding-top: 20px;
        font-size: .9rem;
        line-height: 1.4;
    }

    hr {
        background: #DEDEDE;
        border: none;
        height: 1px;
    }

    a {
        text-decoration: none;
    }

    .login {
        padding-top: 15px;
    }
</style>
