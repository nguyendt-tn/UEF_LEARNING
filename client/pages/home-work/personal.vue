<template>
    <div>
            <div id="container">
        <section :style="{'background-image': 'url(' + require('@/assets/img/Group_105.png') + ')'}" class="personal">
            <header class="header hperson start">
                <nuxt-link to="/home-work">
                    <img src="@/assets/img/chevron-left-w.png" alt="">
                </nuxt-link>
                <div class="back">
                    <h1>Personal</h1>
                    <span>Semester 1A, 2020</span>
                </div>
            </header> 
            <div class="subject center">
                <div class="select-subject start">
                    <span>Subject:</span>
                    <select name="subject" id="subject">
                        <option value="pd1">PD1</option>
                        <option value="pd2">PD2</option>
                    </select>
                </div>
            </div>
            <div class="subject subject-teacher center">
                <div class="select-subject start">
                    <span>Tag your teacher</span>
                    <input type="text" name="tag_teacher" value="@Ms.Trang">
                </div>
            </div>
        </section>
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
                        <img src="@/assets/img/export.png" alt="">
                    </a>
                    <section></section>
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
                        <img src="@/assets/img/export.png" alt="">
                    </a>
                    <section></section>
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
                        <img src="@/assets/img/export.png" alt="">
                    </a>
                    <section></section>
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
                        <img src="@/assets/img/export.png" alt="">
                    </a>
                    <section></section>
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
    </div>
    </div>
</template>
<style scoped src="@/assets/css/personal.css">
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