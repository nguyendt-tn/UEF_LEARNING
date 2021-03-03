<template>
    <div>
              <section class="page-sign-in">
        <div class="img-page-sign-in">
            <img style="height: 100%; width: 100%;" src="@/assets/img/get_start.png" alt="photo">
        </div>
        <div class="form-btn">
            <form class="form-sign-in" action=" " method="POST">
                <div class="account-sign-in">
                    <input type="text" name="name" id="user_key" placeholder=" User Name" />
                </div>

                <div class="account-sign-in" style="position: relative">
                    <input  :type="type"
                            v-model="password" id="password" name="pass" placeholder=" Password" />
                    <img class="pass-word-eye" src="@/assets/img/icon-eye-password.png" alt="photo" @click="showHidden()" />
                    <div class="forget-password">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>

                <div class="login width google">
                    <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?protocol=oauth2&response_type=id_token&client_id=208564129374-90bg3t3i6fgri8ce0ff7rge93gjhren7.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fauth%2Fsocial-callback&scope=openid%20profile%20email&state=HmFKCdQRW0-7KPnmWUbUf&flowName=GeneralOAuthFlow">
                        <span>Login with Google</span>
                        <img src="@/assets/img/icon_google.svg" alt="photo"
                            style="vertical-align: middle; padding-left: 5%" /></a>
                </div>

                <div class="login width microsoft">
                    <a href="#">
                        <span>Login with Microsoft</span>
                        <img src="@/assets/img/icon_microsoft.svg" alt="photo"
                            style="vertical-align: middle; padding-left: 4%" />
                    </a>
                </div>
                <div>
                    <p class="login-button" @click="onLogin()" id="login-btn">LOGIN</p>
                </div>
            </form>

        </div>
    </section>
        <client-only>
            <notifications group="auth" />
        </client-only>
    </div>
</template>
<style scoped src="@/assets/css/auth.css">
</style>
<script>
export default {
    data() {
        return {
            type: "password",
            password: ""
        };
    },
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        })
    },
    methods: {
        showHidden() {
            if (this.type == "password") this.type = "text";
            else this.type = "password";
        },
        async onLogin(){
            let loader = this.$loading.show();
            let user_key = document.getElementById("user_key").value;
            let password = document.getElementById("password").value;
            let data = { user_key : user_key, password : password };
            let respone = await this.$axios.$post("/users/login", data);
            if(!respone.success){
                loader.hide();
                return this.$notify({
                        group: "auth",
                        title: "Error",
                        text:  respone.data.error,
                        type: "error"
                    });
            }
            loader.hide();
            this.$router.push("/", () => {
                setTimeout(() => {
                    this.$notify({
                        group: "auth",
                        title: "Success",
                        text: "Đăng nhập thành công chào "+respone.data.user_name,
                        type: "success"
                    });
                }, 100);
            this.$auth.loginWith("user", { data: data });
            });
        }
   }
}
</script>