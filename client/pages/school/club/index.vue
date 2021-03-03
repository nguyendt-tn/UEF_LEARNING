<template>
    <section style="height: 100vh;">
        <header>
            <p class="tittle-page">
                <nuxt-link to="/school"  style="margin-right: 3%;"><img src="@/assets/img/icon-prev.png" alt="icon"></nuxt-link>
                Clubs
            </p>
        </header>

        <div style="position: absolute; top: 0; right: 0; z-index: 1;"><img src="@/assets/img/img-ellipse_club.png" alt="icon">
        </div>

        <section class="page-content">
            <article class="clubs">
                <div class="info-club">
                    <nuxt-link to="/school/club/detail">
                        <div class="club-avatar">
                            <img src="@/assets/img/logo-eraw.jpg" alt="photo">
                        </div>
                    </nuxt-link>
                    <p class="club-name">ECC</p>
                </div>
                <div class="info-club">
                    <nuxt-link to="/school/club/detail">
                        <div class="club-avatar">
                            <img src="@/assets/img/logo_itech.png" alt="photo">
                        </div>
                    </nuxt-link>
                    <p class="club-name">Itech Club</p>
                </div>
                <div class="info-club">
                    <nuxt-link to="/school/club/detail">
                        <div class="club-avatar">
                            <img src="@/assets/img/logo_faculty.png" alt="photo">
                        </div>
                    </nuxt-link>
                    <p class="club-name">FIT Knowledge</p>
                </div>
                <div class="info-club">
                    <nuxt-link to="/school/club/detail">
                        <div class="club-avatar">
                            <img src="@/assets/img/logo_warm-hub.png" alt="photo">
                        </div>
                    </nuxt-link>
                    <p class="club-name">Warm hubs</p>
                </div>
                <div class="info-club">
                    <nuxt-link to="/school/club/detail">
                        <div class="club-avatar">
                            <img src="@/assets/img/logo-eraw.jpg" alt="photo">
                        </div>
                    </nuxt-link>
                    <p class="club-name">ERAW</p>
                </div>
            </article>

            <section class="club_news-content">
                <article class="club_new-content">
                    <div class="new-title">
                        <div class="avatar">
                            <nuxt-link to="/school/club/detail">
                                <img style="margin-right: 5%;" src="@/assets/img/logo_itech.png" alt="photo">
                            </nuxt-link>
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


                <article class="club_new-content">
                    <div class="new-title">
                        <div class="avatar">
                            <nuxt-link to="/school/club/detail">
                                <img style="margin-right: 5%;" src="@/assets/img/logo_faculty.png" alt="photo">
                            </nuxt-link>
                        </div>

                        <div class="new-title-text" style="font-family: 'quickSanBold';">
                            <div style="display: flex;  justify-content: space-between;">
                                <p class="club-name">FIT Knowledge</p>
                                <div><img src="@/assets/img/icon-dot-vertical.png" alt="icon"></div>
                            </div>
                            <div class="new-time">1 hour ago</div>
                        </div>
                    </div>

                    <div class="new-img">
                        <img style="width: 100%;" src="@/assets/img/img-ecc-new.png" alt="photo">
                    </div>

                    <div class="new-contents">
                        <p class="new-content-title">[TIN TỨC FIT Knowledge ]</p>
                        <p class="content">
                            ​UEF thông báo tuyển sinh đào tạo trình độ. ​UEF thông báo tuyển sinh đào tạo trình độ. ​UEF
                            thông báo tuyển sinh đào tạo trình độ
                        </p>
                    </div>
                </article>
            </section>
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
<style scoped src="@/assets/css/club.css">
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