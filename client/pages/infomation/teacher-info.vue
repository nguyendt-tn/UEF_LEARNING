<template>
    <div>
            <section class="page-container">
        <header :style="{'background-image': 'url(' + require('@/assets/img/background_teacher-info.png') + ')'}">
            <p class="tittle-page">
                <nuxt-link style="margin-right: 3%;" to="/infomation">
                    <img src="@/assets/img/icon-prev.png" alt="icon">
                </nuxt-link>
                Teacher's info
            </p>
        </header>
        <section class="page-content">
            <article class="colum">
                <div class="cl-left">
                    <div class="item-top">
                        <nuxt-link to="/infomation/teacher-info-detail">
                            <img src="@/assets/img/icon_kinh-te.png" alt="icon">
                            <p>Khoa Kinh Tế</p>
                       </nuxt-link>

                    </div>

                    <div class="item-bottom">
                        <nuxt-link to="/infomation/teacher-info-detail">
                            <img src="@/assets/img/icon_it.png" alt="icon">
                            <p>Khoa CNTT</p>
                        </nuxt-link>

                    </div>
                </div>

                <div class="cl-right">
                    <div class="item-top">
                        <nuxt-link to="/infomation/teacher-info-detail">
                            <img src="@/assets/img/icon_thuong-mai.png" alt="icon">
                            <p>Khoa Tài Chính - Thương mại</p>
                        </nuxt-link>

                    </div>

                    <div class="item-bottom">
                        <nuxt-link to="/infomation/teacher-info-detail">
                            <img src="@/assets/img/icon_luat.png" alt="icon">
                            <p>Khoa Luật</p>
                        </nuxt-link>

                    </div>
                </div>
            </article>

            <article class="row">
                <div class="item-row">
                    <img src="@/assets/img/icon_truyen-thong.png" alt="icon">
                    <p>Khoa Quan Hệ Công Chúng
                        và Truyền thông</p>
                </div>
            </article>

            <article class="colum">
                <div class="cl-left">
                    <div class="item-top">
                        <img src="@/assets/img/icon_AV.png" alt="icon">
                        <p>Khoa Tiếng Anh</p>
                    </div>
                </div>

                <div class="cl-right">
                    <div class="item-top" style="margin-bottom: 0;">
                        <img src="@/assets/img/icon_quoc-te.png" alt="icon">
                        <p>Khoa Quan Hệ Quốc Tế</p>
                    </div>
                </div>
            </article>


            <article class="row">
                <div class="item-row" style="background: #EFDBFF;">
                    <img src="@/assets/img/icon_ngon-ngu-qt.png" alt="icon">
                    <p>Khoa ngôn ngữ và Văn hóa Quốc Tế</p>
                </div>
            </article>

            <article class="row">
                <div class="item-row">
                    <img src="@/assets/img/icon_khach-san.png" alt="icon">
                    <p>Khoa Quản trị du lịch khách sạn</p>
                </div>
            </article>

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
                        <i style="font-size : 25px;color:#1D39C4" class="fas fa-file-medical-alt"></i>
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
<style scoped src="@/assets/css/teacher-info.css">
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