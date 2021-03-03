<template>
    <div>
    <section class="page-container" style="height: 100vh; position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
        <header>
            <div style="flex-grow: 1;">
                <p class="tittle-page">
                    <nuxt-link to="/forum" style="margin-right: 3%;"><img src="@/assets/img/icon-prev.png" alt="icon"></nuxt-link>
                    Forum
                </p>

            </div>

        </header>

        <section class="page-content">
            <article class="content">
                <div class="name">
                    <p>Name: </p>
                    <textarea name="name" id="name" :value="$auth.user.fullname "></textarea>
                    <div>
                        <nuxt-link to="/forum">
                            <img src="@/assets/img/close-o.png" alt="icon">
                        </nuxt-link>    
                    </div>
                </div>

                <div class="task-text" style="height: 64%;">
                    <p>Answer: </p>
                    <textarea name="question" id="question" style="width: 100%; height: 90%;"></textarea>
                </div>

                <div class="check">
                    <input type="checkbox" style="margin-right: 1em;">
                    <p>Nhận câu trả lời từ hệ thống</p>
                </div>



                <div class="btn">
                    <div class="center">
                        <a @click="onCreate()">
                            <p style="color: white;">Post</p>
                        </a>
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

    </div>
</template>
<style scoped src="@/assets/css/forum-create.css">
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
        async onCreate(){
            let loader = this.$loading.show();
            let text = document.getElementById("question").value;
            let user_id = this.$auth.user._id;
            let data = {
                forum_id : this.$route.params.id,
                text : text,
                user_id : user_id
            }
            console.log(data)
            let respone = await this.$axios.$post(`/forums/answer`,data);
            console.log(respone)
            loader.hide();
            this.$router.push("/forum", () => {
                    setTimeout(() => {
                        this.$notify({
                            group: "forum",
                            title: "Success",
                            text: "Thêm câu trả lời thành công",
                            type: "success"
                        });
                    }, 100);
            });
        }
    },
}
</script>