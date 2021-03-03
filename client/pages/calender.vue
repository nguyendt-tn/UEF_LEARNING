<template>
    <div>
            <section class="page-container" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}">
        <header>
            <p class="tittle-page">
                <nuxt-link style="margin-right: 3%;" to="/">
                <img src="@/assets/img/icon_prev-white.png" alt="icon"></nuxt-link>
                Calender task
            </p>
        </header>

        <section class="page-content">
            <div class="@/assets/img-background">
                <img src="@/assets/img/background_calender-task.png" alt="photo">
            </div>

            <div style="text-align: center;  font-family: 'quickSanSemi'; margin-top: 1em; font-size: 20px;">
                <p>Create new task here!</p>
                <div>
                    <div style="margin: 8% 0 4% 0;">
                        <img src="@/assets/img/arrow-long-down.png" alt="icon">
                    </div>

                    <a href="">
                        <div class="center"
                            style="background: rgba(240, 245, 255, 0.44);  width: 45px;  height: 45px;  border-radius: 50%;">
                            <img src="@/assets/img/icon-pen.png" alt="icon">
                        </div>
                    </a>

                </div>
            </div>
        </section>
    </section>
    </div>
</template>
<style scoped src="@/assets/css/calender.css">
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