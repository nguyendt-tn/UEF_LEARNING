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
                    <p>Questions: </p>
                    <textarea name="question" id="question" style="width: 100%; height: 90%;"></textarea>
                </div>

                <div class="choose-subject">
                    <span>Subject:</span>
                    <select id="change" @change="myChange()"
                        style="background: #E6E6E6;  border-radius: 15.5px;  width: 35%;  padding: 4% 4%;  margin-left: 5%;  font-size: 13px;">
                        <option value="pd1">PD2</option>
                        <option value="AV">AV</option>
                        <option value="pd">OOP</option>
                        <option value="pd">PD</option>
                    </select>
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
         myChange() {
            if (document.getElementById("change").value == "AV")
                document.querySelector(".check").style.display = "flex";
            else
                document.querySelector(".check").style.display = "none";
        },
        async onCreate(){
            let loader = this.$loading.show();
            let select = document.getElementById("change").value;
            let question = document.getElementById("question").value;
            let poster_by = this.$auth.user._id;
            let data = {
                question : question,
                poster_by : poster_by
            }
            if(select=="AV"){
                let create = await this.$axios.$post("/forums/create",data);
                let botResolve = await this.$axios.$post("/forums/bot",{ question : question });
                let text="";
                for(let i=0;i<botResolve.data.result.length;i++){
                    text = text + botResolve.data.result[i]+"\n"
                }
                let newData = {
                    forum_id : create.data.forum_id ,
                    user_id : "5fe757cfcfb10913100bf745",
                    text :text
                }
                
                let pushAnswer = await this.$axios.$post("/forums/answer",newData)
                loader.hide();
                this.$router.push("/forum", () => {
                    setTimeout(() => {
                        this.$notify({
                            group: "forum",
                            title: "Success",
                            text: "Thêm forum thành công",
                            type: "success"
                        });
                    }, 100);
                });
            }
            else{
                let create = await this.$axios.$post("/forums/create",data);
                loader.hide();
                this.$router.push("/forum", () => {
                    setTimeout(() => {
                        this.$notify({
                            group: "forum",
                            title: "Success",
                            text: "Thêm forum thành công",
                            type: "success"
                        });
                    }, 100);
                });
            }
        }
    },
}
</script>