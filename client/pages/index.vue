<template>
    <div>
            <section style="height: 100vh;">
        <header>
            <div class="info-user">
                <div class="page-name">Home</div>
                <div class="item-info">
                    <nuxt-link to="/account">
                        <img v-if="$auth.loggedIn" style="border-radius: 50px; height: 48px;  width: 48px;"
                            :src="$auth.user.avatar" alt="photo">
                    </nuxt-link>
                    <p v-if="$auth.loggedIn" style="font-family: quickSanSemi;">{{ $auth.user.fullname.split(" ")[2] }}</p>
                </div>
            </div>

            <div class="search">
                <input :style="{'background-image': 'url(' + require('@/assets/img/icon_search.png') + ')'}" type="text" placeholder="Search">
                <div><img style="width: 100%;" src="@/assets/img/scan.png" alt="icon"></div>
            </div>
        </header>

        <section class="page-content">
            <div class="menu_page-content">
                <a style="width: 47%;" href="">
                    <div class="item-menu">
                        <nuxt-link to="/home-work">
                                                    <div>
                            <img src="@/assets/img/icon_homeWork.png" alt="icon">
                        </div>
                        </nuxt-link>
                        <p class="item-menu_title">Homework</p>
                    </div>
                </a>

                <nuxt-link style="width: 47%;" to="/calender">
                    <div class="item-menu" style="background: #FFF1B8;">
                        <div>
                            <img src="@/assets/img/calender-task.png" alt="icon">
                        </div>
                        <p class="item-menu_title">Calender Task</p>
                    </div>
                </nuxt-link>


            </div>

            <div class="menu_page-content">
                <a style="width: 47%;" href="">
                    <div class="item-menu" style="background: #F0F5FF;">
                        <nuxt-link v-if="$auth.loggedIn" :to="`/main-class/${$auth.user.mainClass}`">
                                                    <div>
                            <img src="@/assets/img/icon_mainClass.png" alt="icon">
                        </div>
                        </nuxt-link>
                        <p class="item-menu_title">Main Class</p>
                    </div>
                </a>

            </div>
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
            <client-only>
            <notifications group="auth" />
        </client-only>
    </div>

</template>

<style scoped src="@/assets/css/index.css">
</style>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        })
    },
}
</script>