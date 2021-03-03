<template>
    <section style="height: 100vh;">
        <header>
            <div class="info-user">
                <div class="page-name">Video</div>
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
            <div class="video">
                <article>
                    <iframe height="199" src="https://www.youtube.com/embed/ILr_rU-lISk" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </article>

                <div class="posts-info">
                    <img style="border-radius: 50px; height: 44px;  width: 44px;"
                        src="@/assets/img/logo_itech.png" alt="photo">
                    <p class="posts-info_content">[Khóa học lập trình C++ Cơ bản] - Bài 1: Giới thiệu về C++ | HowKteam</p>
                </div>
            </div>

            <div class="video">
                <article>
                    <iframe height="199" src="https://www.youtube.com/embed/pTJJsmejUOQ" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </article>

                <div class="posts-info">
                    <img style="border-radius: 50px; height: 44px;  width: 44px;"
                        src="@/assets/img/logo_itech.png" alt="photo">
                    <p class="posts-info_content">Flutter Course - Full Tutorial for Beginners (Build iOS and Android Apps)
</p>
                </div>
            </div>

            <div class="video">
                <article>
                    <iframe height="199" src="https://www.youtube.com/embed/DLX62G4lc44" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </article>

                <div class="posts-info">
                    <img style="border-radius: 50px; height: 44px;  width: 44px;"
                        src="@/assets/img/logo_itech.png" alt="photo">
                    <p class="posts-info_content">Learn React JS - Full Course for Beginners - Tutorial 2019</p>
                </div>
            </div>
            
            <div class="video">
                <article>
                    <iframe height="199" src="https://www.youtube.com/embed/-cMqr9HpZ-Y" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </article>

                <div class="posts-info">
                    <img style="border-radius: 50px; height: 44px;  width: 44px;"
                        src="@/assets/img/logo_itech.png" alt="photo">
                    <p class="posts-info_content">React JS Tutorial for Beginners - Full Course in 12 Hours [2021]</p>
                </div>
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
                        <i style="font-size : 25px;color:#9797978f" class="fas fa-briefcase"></i>
                        <p>Shool</p>
                    </div>
                </nuxt-link>

                <nuxt-link to="/video">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#1D39C4" class="far fa-play-circle"></i>
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
<style scoped src="@/assets/css/video.css">
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