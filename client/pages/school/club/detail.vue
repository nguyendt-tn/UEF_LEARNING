<template>
    <section style="height: 100vh;">
        <header :style="{'background-image': 'url(' + require('@/assets/img/img-ellipse_club.png') + ')'}"> 
            <div class="header-content">
                <p class="tittle-page">
                    <nuxt-link to="/school/club" style="margin-right: 3%;">
                    <img src="@/assets/img/icon_prev-white.png" alt="icon"></nuxt-link>
                    Clubs
                </p>
                <div class="post-new">
                    <div class="icon-pen center">
                        <img src="@/assets/img/icon-pen.png" alt="icon">
                    </div>
                </div>
            </div>

        </header>

        <div class="club-info">
            <div class="club-avatar">
                <img src="@/assets/img/logo-eraw.jpg" alt="photo">
            </div>
            <p class="club_short-name">ECC</p>
            <p class="club_full-name">E-Commerce Club</p>
        </div>

        <section class="page-content">
            <div class="menu-page-content">
                <div class="news">
                    News
                    <div class="line"></div>
                </div>
                <div class="information">
                    Information
                    <div style="display: none;" class="line"></div>
                </div>
            </div>

            <div class="News" style="height: 85%;  overflow-y: scroll;">
                <article class="club_new-content">
                    <div class="new-title">
                        <div class="avatar">
                            <img style="margin-right: 5%;" src="@/assets/img/logo_ecc.png" alt="photo">
                        </div>

                        <div class="new-title-text" style="font-family: 'quickSanBold';">
                            <div style="display: flex;  justify-content: space-between;">
                                <p class="club-name">ECC</p>
                                <div><img src="@/assets/img/icon-dot-vertical.png" alt="icon"></div>
                            </div>
                            <div class="new-time">1 hour ago</div>
                        </div>
                    </div>

                    <div class="new-img">
                        <img style="width: 100%;" src="@/assets/img/img-ecc-new.png" alt="photo">
                    </div>

                    <div class="new-contents">
                        <p class="new-content-title">[TIN TỨC ECC]</p>
                        <p class="content">
                            ​UEF thông báo tuyển sinh đào tạo trình độ. ​UEF thông báo tuyển sinh đào tạo trình độ. ​UEF
                            thông báo tuyển sinh đào tạo trình độ
                        </p>
                    </div>
                </article>
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
</template>
<style scoped src="@/assets/css/club-detail.css">
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