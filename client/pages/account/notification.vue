<template>
    <div>
            <section style="background: #F6F9FF; height: 100vh; width: 100%">
        <header>
            <p class="tittle-page">
                <nuxt-link to="/account" style="margin-right: 3%;"><img src="@/assets/img/icon-prev.png" alt="icon"></nuxt-link>
                Notification
            </p>
        </header>

        <article>
            <a href="#" v-for="noti in $auth.user.notification" :key="noti._id">
                <div class="item">
                    <div>
                        <p class="tittle-deadline">{{ noti.title }} </p>
                        <p class="time-deadline">on {{ formatDate(noti.time) }} </p>
                    </div>

                    <div style="align-self: center;"><img src="@/assets/img/icon-more_plus.png" alt="icon"></div>
                </div>
            </a>




        </article>

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
                        <i style="font-size : 25px;color:#9797978f" class="far fa-play-circle"></i>
                        <p>Videos</p>
                    </div>
                </nuxt-link>

                <nuxt-link to="/account">
                    <div class="item_menu-footer">
                        <i style="font-size : 25px;color:#1D39C4" class="fas fa-bars"></i>
                        <p>Setting</p>
                    </div>
                </nuxt-link>
            </div>
        </footer>
    </section>
    </div>
</template>
<style scoped src="@/assets/css/notification.css">
</style>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        })
    },
    methods: {
            formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(),
                hours = d.getHours(),
                minutes = d.getMinutes();
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return hours+" giờ "+minutes+" ngày "+day + " tháng "+month;
        }
    },
}
</script>