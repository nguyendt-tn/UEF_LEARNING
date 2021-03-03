<template>
    <div>
        <template v-if="classes.message.length==0">
                <section class="page-container" style="height: 100vh; position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
                <header>
                    <div style="flex-grow: 1;">
                        <p class="tittle-page">
                            <nuxt-link style="margin-right: 3%;" to="/">
                                <img src="@/assets/img/icon-prev.png" alt="icon">
                            </nuxt-link>
                            Messenger
                        </p>
                    </div>

                    <div class="opt">
                        <div @click="opRom()"><img src="@/assets/img/icon-meeting-room.png" alt=""></div>
                        <nuxt-link to="/main-class/create">
                            <div class="questions-write center">
                                <img src="@/assets/img/write.png" alt="icon">
                            </div>
                        </nuxt-link>
                    </div>
                </header>
                <section class="page-content" style="margin-top: 5em;">
                    <div class="img-background">
                        <img src="@/assets/img/img-background-mess.png" alt="photo">
                    </div>

                    <div
                        style="text-align: center;  font-family: 'quickSanSemi';  font-size: 20px; color: #979797;  margin-top: 1em;">
                        <p>Hey, it’s emty</p>
                    </div>

                </section>

                <div class="overlay" @click="clRom()"></div>
                <section class="sidle-bar-meeting-room">
                    <article class="title-sidle-bar">
                        <img src="@/assets/img/people-room.png" alt="">
                        <p style="margin-left: 4%;">Meeting room</p>
                    </article>
                    <section class="container-members">
                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Van Dong</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Duong Thanh Nguyen</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Van Dong</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>
                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>
                    </section>
                </section>
            </section>
        </template>
        <template v-else>
            <section class="page-container" style="position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
                <header>
                    <div style="flex-grow: 1;">
                        <p class="tittle-page">
                            <nuxt-link  style="margin-right: 3%;" to="/">
                                <img src="@/assets/img/icon-prev.png" alt="icon">
                            </nuxt-link>
                            Messenger
                        </p>
                    </div>

                    <div class="opt">
                        <div @click="opRom()"><img src="@/assets/img/icon-meeting-room.png" alt=""></div>
                        <nuxt-link to="/main-class/create">
                            <div class="questions-write center">
                                <img src="@/assets/img/write.png" alt="icon">
                            </div>
                        </nuxt-link>
                    </div>
                </header>

                <section class="page-content">
                    <article class="content" v-for="cl in classes.message" :key="cl._id">
                        <div class="deadline">
                            <p>{{ formatDate(cl.time) }}</p>
                            <div class="pointer ellipsis">
                                <img src="@/assets/img/icon-dot-vertical.png" alt="icon">
                            </div>

                        </div>

                        <div class="text">
                            <p>Name: {{ cl.user_id.fullname }}</p>
                            <p style="font-family: quickSan; font-size: 14px;">
                                {{ cl.text }}
                            </p>
                        </div>
                        <!-- menu-questions -->
                        <div class="overlay1">
                            <div class="opt">
                                <p class="hidden">Hidden</p>
                                <nuxt-link to="/main-class/create">
                                    <p>Answer</p>
                                </nuxt-link>
                                <p>Copy link</p>
                                <div class="btn">
                                    <div class="center">

                                        <p style="color: white;">Close</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <div class="overlay" @click="clRom()"></div>
                <section class="sidle-bar-meeting-room">
                    <article class="title-sidle-bar">
                        <img src="@/assets/img/people-room.png" alt="">
                        <p style="margin-left: 4%;">Meeting room</p>
                    </article>
                    <section class="container-members">
                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Van Dong</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Duong Thanh Nguyen</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Van Dong</p>
                        </div>

                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>
                        <div class="member">
                            <div class="item-info">
                                <img style="border-radius: 50px; height: 48px;  width: 48px; margin-right: 1em;"
                                    src="@/assets/img/96859090_1019149501813168_320106596925440000_o.jpg" alt="photo">
                            </div>
                            <p class="name-member" style="font-weight: 600;">Vo Cao Ky Duyen</p>
                        </div>
                    </section>
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
        </template>
    </div>
</template>
<style scoped src="@/assets/css/main-class.css">
</style>
<script>
export default {
      async asyncData({ $axios,route  }) {
        let respone = await $axios.$get("/classes/class/"+route.params.id);
        return {
            classes : respone.data.classes
        }
    },
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        });
                    var optElements = document.querySelectorAll(".ellipsis");
        var btnElements = document.querySelectorAll(".btn");
        var ctElements = document.querySelectorAll(".content");
        for (var i = 0; i < optElements.length; i++) {
            optElements[i].onclick = function () {
                document.querySelector(".overlay1").classList.add("top");
            };
            btnElements[i].onclick = function () {
                document.querySelector(".overlay1").classList.remove("top");
            }
        }
    },
    methods: {
            opRom() {
                document.querySelector(".sidle-bar-meeting-room ").style.left = "15%";
                document.querySelector(".overlay").style.display = "block";
            },
            clRom() {
                document.querySelector(".sidle-bar-meeting-room ").style.left = "100%";
                document.querySelector(".overlay").style.display = "none";
            },
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

                return hours+" giờ "+" ngày "+day + " tháng "+month;
            }
    },
}
</script>