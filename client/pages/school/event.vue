<template>
    <div>
            <section style="height: 100vh; position: relative;">
        <header :style="{'background-image': 'url(' + require('@/assets/img/icon-background_circel.png') + ')'}">    
            <div class="tittle-page">
                <nuxt-link to="/school" style="margin-right: 4%;">
                                    <div>
                        <img src="@/assets/img/icon_prev-white.png" alt="icon">
                    </div>
                </nuxt-link>
                School events
            </div>
        </header>

        <section class="page-content">
            <div class="uef-info">
                <div><img src="@/assets/img/logo_uef.png" alt="photo"></div>
                <p style="font-family: quickSanBold; margin: 2% 0;">Đại học Kinh tế - Tài chính thành phố Hồ Chí Minh-
                    UEF</p>
                <p class="center" style="font-size: 14px; color: #979797;  padding: 2% 10% 3% 10%;">
                    <img style="margin-right: 2%;" src="@/assets/img/icon_pin.png" alt="icon">
                    141 - 145 Điện Biên Phủ, P. 15 Q. Bình Thạnh,TP.HCM
                </p>
                <p class="center" style="height: 10%;  padding: 2% 0">
                    <img style="margin-right: 2%;" src="@/assets/img/icon_phone.png" alt="icon">
                    0123456789
                </p>
                <p class="center">
                    <img style="margin-right: 2%;" src="@/assets/img/icon_mail.png" alt="icon">
                    tuyensinh@uef.edu.vn
                </p>
            </div>

            <article class="news-content">
                <div class="new-title">
                    <div class="uef-avatar">
                        <img style="margin-right: 5%;" src="@/assets/img/logo_uef.png" alt="photo">
                    </div>

                    <div style="font-family: 'quickSanBold'; flex-grow: 1;  font-size: 14px;">
                        <p>Đại học Kinh tế - Tài chính thành phố Hồ Chí Minh - UEF</p>
                        <div class="new-time">1 hour ago</div>
                    </div>
                </div>

                <div class="new-img">
                    <img style="width: 100%;" src="@/assets/img/new-img.png" alt="photo">
                </div>

                <div class="new-content" style="padding: 5%;">
                    <p>
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                    </p>
                </div>
            </article>

            <article class="news-content">
                <div class="new-title">
                    <div class="uef-avatar">
                        <img style="margin-right: 5%;" src="@/assets/img/logo_uef.png" alt="photo">
                    </div>

                    <div style="font-family: 'quickSanBold'; flex-grow: 1;  font-size: 14px;">
                        <p>Đại học Kinh tế - Tài chính thành phố Hồ Chí Minh - UEF</p>
                        <div class="new-time">1 hour ago</div>
                    </div>
                </div>

                <div class="new-img">
                    <img style="width: 100%;" src="@/assets/img/new-img.png" alt="photo">
                </div>

                <div class="new-content" style="padding: 5%;">
                    <p>
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                        ​UEF thông báo tuyển sinh đào tạo trình độ
                    </p>
                </div>
            </article>
        </section>

        <footer>
            <div class="menu-footer">
                <a href="home.html">
                    <div class="item_menu-footer">
                        <img src="@/assets/img/icon-home.png" alt="icon">
                        <p>Home</p>
                    </div>
                </a>

                <a href="information.html">
                    <div class="item_menu-footer">
                        <img src="@/assets/img/icon-information.png" alt="icon">
                        <p>Informations</p>
                    </div>

                </a>

                <a href="school.html">
                    <div class="item_menu-footer">
                        <img src="@/assets/img/icon-school.png" alt="icon">
                        <p>Shool</p>
                    </div>
                </a>

                <a href="videos.html">
                    <div class="item_menu-footer">
                        <img src="@/assets/img/icon-video.png" alt="icon">
                        <p>Videos</p>
                    </div>
                </a>

                <a href="setting.html">
                    <div class="item_menu-footer">
                        <img src="@/assets/img/icon-setting.png" alt="icon">
                        <p>Setting</p>
                    </div>
                </a>
            </div>
        </footer>
    </section>
    </div>
</template>
<style scoped src="@/assets/css/school-event.css">
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