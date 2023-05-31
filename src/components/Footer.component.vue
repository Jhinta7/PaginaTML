<template>
    <footer class="footer">
        <div class="p-grid p-nogutter p-align-center">
            <div class="p-col-12 p-lg-6  p-text-center p-text-lg-left">
                <pv-button icon="pi pi-discord" class="mx-3" @click="irADiscord" severity="help" rounded outlined aria-label="Bookmark" />
                <pv-button icon="pi pi-youtube" class="mx-3" @click="irAYoutube" severity="help" rounded outlined aria-label="Bookmark" />
                <pv-button icon="pi pi-youtube" class="mx-3" @click="irATwitch" severity="help" rounded outlined aria-label="Bookmark">
                    <img alt="logo" src="https://cdn.discordapp.com/attachments/1105817539700867153/1112693103095205958/whitetwitch-icon-0.png" class="h-2rem" />
                </pv-button>
                <pv-button icon="pi pi-twitter" class="mx-3" @click="irATwitter" severity="help" rounded outlined aria-label="Bookmark" />
            </div>
            <div class="p-col-12 p-lg-6 p-text-center p-text-lg-right">
                <div class="p-grid p-justify-center p-lg-justify-end">
                    <p class="texto-footer">© 2023 Tetris Moderno Latinoamerica</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        irADiscord() {
            window.open('https://discord.gg/j2bF8Kpj2V', '_blank');
        },
        irATwitch() {
            window.open('https://www.twitch.tv/tm_latam', '_blank');
        },
        irATwitter() {
            window.open('https://twitter.com/TM_Latam_', '_blank');
        },
        irAYoutube() {
            window.open('https://www.youtube.com/@tm_latam', '_blank');
        }
    }
}
</script>

<style scoped>
.footer {
    background-color: #241d2f;
    padding: 20px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    text-align: center;
}

.texto-footer {
    color: lightgray;
}

</style>