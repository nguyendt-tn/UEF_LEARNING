<template>
    <div>
            <div id="container">
        <header class="header course start">
            <nuxt-link to="/infomation">
                <img src="@/assets/img/chevron-left.png" alt="">
            </nuxt-link>
            <div class="back">
                <h1>Course</h1>
                <span>Semester 1A, 2020</span>
            </div>
        </header>  
        <div class="option">
            <div class="two-option between">
              <div class="start underline-option " style="height : 50px">
                    <nuxt-link to="/infomation/course">
                        <span style="margin-left: 2rem;">Documents</span>
                    </nuxt-link>
                </div>
                <div class="end "  style="height : 50px">
                    <nuxt-link to="/infomation/1001-question">
                        <span style="margin-right: 2rem;">1001 Questions</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="document">
            <div class="list between">
                <div class="l1">
                    <img src="@/assets/img/file-text.png" alt="">
                    <div class="name">
                        <h1>Tài liệu Tiếng Anh</h1>
                        <span>Update by Ms Trang</span>
                    </div>
                </div>
                <div class="l2">
                    <a href="">
                        <img src="@/assets/img/software-download.png" alt="">
                    </a>
                </div>
            </div>
            <div class="list between">
                <div class="l1">
                    <img src="@/assets/img/file-text.png" alt="">
                    <div class="name">
                        <h1>Tài liệu Tiếng Anh</h1>
                        <span>Update by Ms Trang</span>
                    </div>
                </div>
                <div class="l2">
                    <a href="">
                        <img src="@/assets/img/software-download.png" alt="">
                    </a>
                </div>
            </div>
            <div class="list between">
                <div class="l1">
                    <img src="@/assets/img/file-text.png" alt="">
                    <div class="name">
                        <h1>Tài liệu Tiếng Anh</h1>
                        <span>Update by Ms Trang</span>
                    </div>
                </div>
                <div class="l2">
                    <a href="">
                        <img src="@/assets/img/software-download.png" alt="">
                    </a>
                </div>
            </div>
            <div class="list between">
                <div class="l1">
                    <img src="@/assets/img/file-text.png" alt="">
                    <div class="name">
                        <h1>Tài liệu Tiếng Anh</h1>
                        <span>Update by Ms Trang</span>
                    </div>
                </div>
                <div class="l2">
                    <img src="@/assets/img/spinner.png" alt="">
                </div>
            </div>
            <div class="list between">
                <div class="l1">
                    <img src="@/assets/img/file-text.png" alt="">
                    <div class="name">
                        <h1>Tài liệu Tiếng Anh</h1>
                        <span>Update by Ms Trang</span>
                    </div>
                </div>
                <div class="l2">
                    <img src="@/assets/img/check-square.png" alt="">
                </div>
            </div>
        </div>
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
    </div>
    </div>
</template>
<style scoped src="@/assets/css/course.css">
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