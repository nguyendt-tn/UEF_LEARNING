<template>
    <div>
            <section class="page-container" style="height: 100vh; position: relative;" :style="{'background-image': 'url(' + require('@/assets/img/bacground_teamwork.png') + ')'}"  >  
        <header>
            <p class="tittle-page">
                <nuxt-link to="/home-work" style="margin-right: 3%;">
                    <img src="@/assets/img/icon-prev.png" alt="icon">
                </nuxt-link>
                Teamwork
            </p>
            <p style="font-family: quickSanSemi; color: #979797;  font-size: 13px;  padding: 1% 0 0 17%;">Semester 1A,
                2020</p>
        </header>


        <section class="page-content">
            <div class="@/assets/img-background">
                <img src="@/assets/img/img_teamwork.png" alt="photo">
            </div>

            <div style="text-align: center;  font-family: 'quickSanSemi';  font-size: 20px;">
                <p>Create new task for your team!</p>
                <div>
                    <div style="margin: 8% 0 4% 0;">
                        <img src="@/assets/img/icon_arrow-long-down.png" alt="icon">
                    </div>

                    <nuxt-link to="/team-work/create">
                        <div>
                            <img src="@/assets/img/icon-tikcode.png" alt="icon">
                        </div>
                    </nuxt-link>

                </div>
            </div>
        </section>
    </section>
    </div>
</template>
<style scoped src="@/assets/css/team-work.css">
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