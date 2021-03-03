<template>
    <div>
            <section style="height: 100vh; background: #F0F5FF;">
        <header :style="{'background-image': 'url(' + require('@/assets/img/icon-background_circel2.png') + ')'}">
            <p class="tittle-page">
                <nuxt-link to="/team-work"  style="margin-right: 3%;">
                    <img src="@/assets/img/icon_prev-white.png" alt="icon">
                </nuxt-link>
                Teamwork
            </p>
            <p style="font-family: quickSanSemi;  font-size: 13px;  padding: 1% 0 0 14%;">Semester 1A,
                2020</p>
        </header>

        <section class="page-content">
            <div class="choose-subject">
                <span>Subject:</span>
                <select
                    style="background: #E6E6E6;  border-radius: 15.5px;  width: 30%;  padding: 2% 4%;  margin-left: 5%;  font-size: 13px;"
                    name="cars" id="cars">
                    <option value="pd1">PD2</option>
                    <option value="pd1">PD1</option>
                    <option value="pd">PD</option>
                    <option value="pd">PD</option>
                </select>
            </div>

            <div class="tag-teacher">
                <p>Tag your teacher</p>
                <div class="name-teacher">
                    <a href="">@Ms.Linh</a>
                </div>

                <div><img src="@/assets/img/icon-close.png" alt="icon"></div>
            </div>

            <div class="tag-friends">
                <p>Tag your friends</p>
                <div class="name-friends">
                    <a href="">@Ms.Quyen</a>
                    <a href="">@Van</a>
                </div>
                <div><img src="@/assets/img/icon-close.png" alt="icon"></div>
            </div>

            <div style="color: #FFFFFF; font-size: 16px; font-family: 'quickSanSemi'; text-align: center;">
                <div><img src="@/assets/img/icon-arrow-long-up.png" alt="icon"></div>
                <p style="margin-top: 4%;">Keep filling to create new board task</p>
            </div>

            <div class="node-create">
                <nuxt-link to="/team-work/save">
                    <button class="btn">Create</button>
                </nuxt-link>
            </div>
        </section>

        <div class="background-page center"><img src="@/assets/img/img-page_create-teamwork.png" alt="icon"></div>

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
<style scoped src="@/assets/css/teamwork-create.css">
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