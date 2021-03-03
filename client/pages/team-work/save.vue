<template>
    <div>
            <section style="height: 100vh; background: #F0F5FF; position: relative;">
        <header  >
            <div style="flex-grow: 1;">
                <p class="tittle-page">
                    <nuxt-link style="margin-right: 3%;" to="/team-work/create">
                        <img src="@/assets/img/icon-prev.png" alt="icon">
                    </nuxt-link>
                    Teamwork
                </p>
                <p style="font-family: quickSanSemi; color: #979797;  font-size: 13px;  padding: 1% 0 0 17%;">Semester
                    1A,
                    2020</p>
            </div>

            <div class="teacher-name">
                <p>@Ms.Trang</p>
            </div>
        </header>

        <section class="page-content">
            <article class="content">
                <div class="task-write">
                    <div class="name">
                        <p>Name: </p>
                        <textarea name="" id=""></textarea>
                        <div><img src="@/assets/img/close-o.png" alt="icon"></div>
                    </div>

                    <div class="task-text">
                        <p>Task: </p>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div class="task-btn">
                        <div>
                            <img src="@/assets/img/alarm.png" alt="icon">
                        </div>

                        <div class="btn">
                            <nuxt-link to="/team-work/list-task">
                                <p style="color: white;">Save</p>
                            </nuxt-link>

                        </div>

                    </div>
                </div>
            </article>
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
    </div>
</template>
<style scoped src="@/assets/css/team-work-save.css">
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