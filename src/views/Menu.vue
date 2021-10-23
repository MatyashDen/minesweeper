<template>
    <div class="container h-100 text-center">
        <div class="container h-100 text-center">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-5">
                    <img :src="getUrl('mine')" class="mb-5 w-25" alt />
                    <div>
                        <button
                            class="btn w-75 btn-primary mb-2"
                            @click="openNewGame"
                        >
                            New game
                        </button>
                        <button
                            class="btn w-75 btn-primary mb-2"
                            @click="loadGame"
                        >
                            Load game
                        </button>
                        <button class="btn w-75 btn-primary mb-2">
                            Statistics
                        </button>
                        <button class="btn w-75 btn-primary mb-2">
                            Documentation
                        </button>
                        <button class="btn w-75 btn-primary mb-2" @click="changeTheme">
                            Change theme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex"

    export default {
        methods: {
            openNewGame() {
                this.$router.push({ name: "NewGame" })
            },
            loadGame() {
                this.$router.push({ name: "LoadGame" })
            },
            ...mapActions(["changeTheme"]),
            getUrl(name) {
                return this.theme == 0 ?
                '/styles/white/' + name.toString() + ".png"
                :
                '/styles/black/' + name.toString() + ".png"
            }
        },
        computed: {
            ...mapState(["theme"])
        }
    }
</script>