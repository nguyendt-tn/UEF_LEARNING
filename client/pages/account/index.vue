<template>
        <section style="height: 100vh;background: #1D39C4; overflow: hidden;">
            <header class="page-title">
                <p>Setting</p>
                <nuxt-link to="/account/notification">
                    <div style="position: relative;">
                        <img src="@/assets/img/icon-notifi.png" alt="icon">
                        <div class="notifi-number center">{{ $auth.user.notification.length  }}</div>
                    </div>
                </nuxt-link>
            </header>

            <section class="page-content">
                <div class="select-avatar">
                    <div style="position: relative; height: 80%;">
                        <div
                            style="position: relative;  width: 23%;  padding-top: 23%;  border-radius: 50%;  margin: 0 auto;">
                            <input type="file" hidden id="avatar">

                            <img style=" border-radius: 100%; position: absolute;  top: 0;  left: 0;  right: 0; bottom: 0;  width: 100%;  height: 100%;"
                                :src="$auth.user.avatar">

                            <label for="avatar">
                                <div class="icon_add-avatar"><img src="@/assets/img/icon-plus.png" alt="icon"></div>
                            </label>
                        </div>
                        <p style="padding-top: 2%;">Select an avatar</p>
                    </div>
                </div>

                <div class="info-user"><span>Name</span> {{ $auth.user.fullname }}</div>
                <div class="info-user"><span>Email</span> {{ $auth.user.email }}</div>
                <div class="info-user"><span>ID</span> {{ $auth.user.user_key }}</div>
                <div class="info-user"><span>Class</span> {{ $auth.user.classes }}</div>
                <div class="info-user"><span>Faculty</span> {{ $auth.user.falculty }}</div>
                <div class="info-user"><span>Phone number</span> {{ $auth.user.phone_number }}</div>
                <div class="info-user"><span>D.O.B</span> {{ this.formatDate($auth.user.birth) }}</div>

                <div class="signout"> <button><img src="@/assets/img/icon-off.png" alt="icon"> <span style="margin-left: 2%;"> Sign
                            out</span> </button></div>
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
</template>
<style scoped src="@/assets/css/account.css">
</style>
<script>
export default {
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        })
    },
    methods : {
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(),
                hours = d.getHours();
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [day, month, year].join('/');
        }
    }
}
</script>
