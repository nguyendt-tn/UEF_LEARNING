<template>
    <div>
            <section class="page-container" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
        <header>
            <p class="tittle-page">
                <nuxt-link style="margin-right: 3%;" to="/infomation/teacher-info">
                    <img src="@/assets/img/icon-prev.png" alt="icon">
                </nuxt-link>
                Khoa Kinh Tế
            </p>
        </header>

        <section class="page-content">
            <article class="content">
                <div>
                    <p>Ho ten: <span>Hoang Van Hieu</span></p>
                    <p>Hoc van: <span>Thac si</span></p>
                    <p>Avatar: </p>
                    <div class="teacher-avatar">
                        <img src="@/assets/img/avatar-teacher.jpg" alt="photo">
                    </div>

                </div>
            </article>

            <article class="content">
                <div>
                    <p>Ho ten: <span>Van Thi Thien Trang</span></p>
                    <p>Hoc van: <span>Thac si</span></p>
                    <p>Avatar: </p>
                    <div class="teacher-avatar">
                        <img src="@/assets/img/avatar-teacher2.jpg" alt="photo">
                    </div>

                </div>
            </article>

            <article class="content">
                <div>
                    <p>Ho ten: <span>Nguyen Ha Giang</span></p>
                    <p>Hoc van: <span>Tien si</span></p>
                    <p>Avatar: </p>
                    <div class="teacher-avatar">
                        <img src="@/assets/img/avatar-teacher1.jpg" alt="photo">
                    </div>

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
<style scoped src="@/assets/css/teacher-info-detail.css">
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