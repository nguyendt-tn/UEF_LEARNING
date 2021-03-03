<template>
    <div>
        <template v-if="forums.length==0" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
            <section class="page-container" style="height: 100vh; position: relative;" > 
                <header>
                    <div style="flex-grow: 1;">
                        <p class="tittle-page">
                            <nuxt-link style="margin-right: 3%;" to="/infomation">
                                <img src="@/assets/img/icon-prev.png" alt="icon">
                            </nuxt-link>
                            
                            Forum
                        </p>

                    </div>
                    <nuxt-link to="/forum/create">
                        <div class="questions-write center">
                            <img src="@/assets/img/write.png" alt="icon">
                        </div>

                    </nuxt-link>

                </header>
                <section class="page-content" style="margin-top: 8em;height:72%">
                    <div class="img-background">
                        <img src="@/assets/img/background_forum.png" alt="photo">
                    </div>

                    <div
                        style="text-align: center;  font-family: 'quickSanSemi';  font-size: 20px; color: #979797;  margin-top: 1em;">
                        <p>Ask your teachers for help</p>
                    </div>

                </section>
            </section>
        </template>
        <template v-else>
                <section class="page-container" style="overflow-y: hidden; height: 100vh; position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
                    <header>
                        <div style="flex-grow: 1;">
                            <p class="tittle-page">
                                <nuxt-link style="margin-right: 3%;" to="/infomation">
                                    <img src="@/assets/img/icon-prev.png" alt="icon">
                                </nuxt-link>
                                Forum
                            </p>

                        </div>

                    <nuxt-link to="/forum/create">
                        <div class="questions-write center">
                            <img src="@/assets/img/write.png" alt="icon">
                        </div>

                    </nuxt-link>
                    </header>

                    <section class="page-content">
                        <article class="content" v-for="fr in forums" :key="fr._id">
                            <div class="deadline">
                                <p>{{ formatDate(fr.createdAt) }}</p>
                                <div class="pointer ellipsis">
                                    <img src="@/assets/img/icon-dot-vertical.png" alt="icon">
                                </div>

                            </div>

                            <div class="text">
                                <p>Q: {{ fr.poster_by.fullname }}</p>
                                <p style="font-family: quickSan; font-size: 14px;">
                                    {{ fr.question }}
                                </p>
                            </div>

                            <template v-if="fr.answer.length>0">
                                <div style="white-space: pre-line;" class="text" v-for="ans in fr.answer" :key="ans._id">
                                    <p>A: {{ ans.user_id.fullname }}</p>
                                    <p style="font-family: quickSan; font-size: 14px;">
                                        {{ ans.text }}
                                    </p>
                                </div>
                            </template>

                            <!-- menu-questions -->
                            <div class="overlay">
                                <div class="opt">
                                    <p>Hidden</p>
                                    <nuxt-link :to="`/forum/${fr._id}`">
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
        </template>
        <client-only>
            <notifications group="forum" />
        </client-only>
    </div>
</template>
<style scoped src="@/assets/css/forum.css">
</style>
<script>
export default {
      async asyncData({ $axios }) {

        let respone = await $axios.$get("/forums/all");
        return {
            forums : respone.data.forums
        }
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

            return hours+" giờ "+" ngày "+day + " tháng "+month;
        }
    },
    mounted() {
        this.$nextTick(() => {
            let loader = this.$loading.show();
            setTimeout(() =>loader.hide(), 500)
        });
            var optElements = document.querySelectorAll(".ellipsis");
            var btnElements = document.querySelectorAll(".btn");
            for (var i = 0; i < optElements.length; i++) {
                optElements[i].onclick = function () {
                    document.querySelector(".overlay").classList.add("top");
                };
                btnElements[i].onclick = function () {
                    document.querySelector(".overlay").classList.remove("top");
                }
            }
            
    },
}
</script>