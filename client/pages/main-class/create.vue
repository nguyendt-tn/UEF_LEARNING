<template>
    <div>
    <section class="page-container" style="position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
        <header>
            <div style="flex-grow: 1;">
                <p class="tittle-page">
                    <nuxt-link style="margin-right: 3%;" :to="`/main-class/${$auth.user.mainClass}`">
                        <img src="@/assets/img/icon-prev.png" alt="icon">
                    </nuxt-link>
                    Messenger
                </p>
            </div>

        </header>

        <section class="page-content">
            <article class="content">
                <div class="close">
                    <nuxt-link :to="`/main-class/${$auth.user.mainClass}`">
                        <img src="@/assets/img/close-o.png" alt="icon">
                    </nuxt-link>
                </div>
                <div class="text">
                    <div class="new-write">
                        <textarea placeholder="New mess" name="" id="mess" style="width:100%; height:100%;"></textarea>
                    </div>

                    <div class="btn">
                        <div class="center">
                                <p @click="onCreate()" style="color: white;">Sent</p>
                        </div>
                    </div>
                </div>

            </article>
        </section>

        <footer>
            <div class="menu-footer">
                <nuxt-link to="/">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#1D39C4;" class="fas fa-home"></i>
                        <p>Home</p>
                    </div>
                </nuxt-link>

                <nuxt-link to="/infomation">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#9797978f" class="fas fa-file-medical-alt"></i>
                        <p>Informations</p>
                    </div>

                </nuxt-link>

                <nuxt-link to="/school">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#9797978f" class="fas fa-briefcase"></i>
                        <p>Shool</p>
                    </div>
                </nuxt-link>

                <nuxt-link to="/video">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#9797978f" class="far fa-play-circle"></i>
                        <p>Videos</p>
                    </div>
                </nuxt-link>

                <nuxt-link to="/account">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#9797978f" class="fas fa-bars"></i>
                        <p>Setting</p>
                    </div>
                </nuxt-link>
            </div>
        </footer>
    </section>
    </div>
</template>
<style scoped src="@/assets/css/class-create.css">
</style>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        });

    },
    methods: {
        async onCreate(){
            let loader = this.$loading.show();
            let text = document.getElementById("mess").value;
            let data = {
                class_id : this.$auth.user.mainClass,
                text : text
            };
            let respone = await this.$axios.$post("/classes/message/create",data);
            loader.hide();
            this.$router.push("/main-class/"+data.class_id);
        }
    },
}
</script>