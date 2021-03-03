<template>
    <div>
            <div id="container">
                <section class="homework" :style="{'background-image': 'url(' + require('@/assets/img/Group_105.png') + ')'}">
                    <header class="header hwork start">
                        <nuxt-link to="/">
                            <img src="@/assets/img/chevron-left-w.png" alt="">
                        </nuxt-link>
                        <div class="back">
                            <h1>Homework</h1>
                            <span>Semester 1A, 2020</span>
                        </div>
                    </header> 
                    <div class="teamwork center">
                        <nuxt-link to="/team-work">
                            <img src="@/assets/img/Group 145.png" alt="">
                        </nuxt-link>
                    </div>
                    <div class="personal center">
                        <nuxt-link to="/home-work/personal">
                            <img src="@/assets/img/Group 146.png" alt="">
                        </nuxt-link>
                    </div>
                </section>
                <section class="deadline">
                    <div class="note start"> 
                        <span>Deadline note</span>
                    </div>
                    <div class="list-note between" > 
                        <div class="note start">
                            <div class="one-note note-luc">
                                <h1 class="center">Subject : PD2</h1>
                                <img src="@/assets/img/alarm.png" alt="">
                                <span> 3:30 pm</span>
                            </div>
                            <div class="one-note note-red">
                                <h1 class="center">Subject : PD2</h1>
                                <img src="@/assets/img/alarm.png" alt="">
                                <span> 3:30 pm</span>
                            </div>
                        </div>
                        <div class="next center">
                            <img src="@/assets/img/chevron-right.png" alt="">
                        </div>  
                    </div>
                    <div class="list-note center" style="display: none;">
                        <div :style="{'background-image': 'url(' + require('@/assets/img/jumping-2194230-0.png') + ')'}" class="no-note center">
                            <span>You don't have any note</span>
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
<style scoped src="@/assets/css/home-work.css">
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