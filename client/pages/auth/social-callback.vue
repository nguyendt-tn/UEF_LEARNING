<template>
    <div>
        <client-only>
            <notifications group="auth" />
        </client-only>
    </div>
</template>
<script>
export default {
    async mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        })
        let loader = this.$loading.show();
        let token = this.$route.hash.split("&")[1].split("=")[1];
        let data = {
            idToken: token
        };
        let respone = await this.$axios.$post("/users/google-login", data);
        if (!respone.success) {
            loader.hide();
            return this.$router.push("/auth", () => {
                setTimeout(() => {
                    this.$notify({
                        group: "auth",
                        title: "Error",
                        text: "Có lỗi xãy ra, vui lòng thử lại sau",
                        type: "error"
                    });
                }, 100);
            });
        }
        loader.hide();
        this.$router.push("/", () => {
            setTimeout(() => {
                this.$notify({
                    group: "auth",
                    title: "Success",
                    text: "Đăng nhập thành công chào "+ respone.data.user_name,
                    type: "success"
                });
            }, 100);
            this.$auth.loginWith("user_1", { data: data });
        });
    }
};
</script>
