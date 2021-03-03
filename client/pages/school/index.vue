<template>
    <section style="height: 100vh;">
        <header>
            <div class="info-user">
                <div class="page-name">Home</div>
                <div class="item-info">
                    <nuxt-link to="/account">
                        <img style="border-radius: 50px; height: 48px;  width: 48px;"
                            :src="$auth.user.avatar" alt="photo">
                    </nuxt-link>
                    <p style="font-family: quickSanSemi;">{{ $auth.user.fullname.split(" ")[2] }}</p>
                </div>
            </div>

            <div class="search">
                <input :style="{'background-image': 'url(' + require('@/assets/img/icon_search.png') + ')'}" type="text" placeholder="Search">
                <div><img style="width: 100%;" src="@/assets/img/scan.png" alt="icon"></div>
            </div>

        </header>

        <section class="page-content">
            <div class="menu_page-content">
                <nuxt-link style="width: 47%;" to="/school/event">
                    <div class="item-menu">
                        <div>
                            <img src="@/assets/img/school-event.png" alt="icon">
                        </div>
                        <p class="item-menu_title">School events</p>
                    </div>
                </nuxt-link>

                <nuxtLink to="/school/club" style="width: 47%;" >
                    <div class="item-menu" style="background: #FFF1B8;">
                        <div>
                            <img src="@/assets/img/clups.png" alt="icon">
                        </div>
                        <p class="item-menu_title">Clubs</p>
                    </div>
                </nuxtLink>
            </div>


            <div class="menu_page-content">
                <nuxt-link style="width: 47%;" to="/library">
                    <div class="item-menu" style="background: #F0F5FF;">
                        <div>
                            <img src="@/assets/img/libary.png" alt="icon">
                        </div>
                        <p class="item-menu_title">Libary</p>
                    </div>
                </nuxt-link>
            </div>
        </section>

        <footer>
            <div class="menu-footer">
                <nuxt-link to="/">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#9797978f;" class="fas fa-home"></i>
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
                        <i style="font-size : 25px;color:#1D39C4" class="fas fa-briefcase"></i>
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