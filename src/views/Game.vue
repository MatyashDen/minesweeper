<template>
    <div class="container h-100 text-center">
        <div class="container h-100 text-center">
            <div class="row h-100 justify-content-center align-items-center">
                <div>
                    <table>
                        <tr v-for="row in field" class="">
                            <td
                                v-for="cell in row"
                                class="cell"
                                @click="tryClick(cell)"
                            >
                                <template v-if="cell.isOpen">
                                    <div v-if="cell.type == CellType.number">
                                        <img
                                            :src="getUrl(cell.number)"
                                            :alt="cell.number"
                                        />
                                    </div>
                                    <div v-else class="text-danger">
                                        <img :src="getUrl('mine')" alt="X" />
                                    </div>
                                </template>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script scoped>
    import { mapActions, mapState } from "vuex"

    export default {
        props: { shouldGenerate: Boolean },
        data() {
            return {

            }
        },
        mounted() {
            if (this.shouldGenerate) {
                this.generateField()
            }
        },
        methods: {
            ...mapActions(["generateField"]),
            getUrl(name) {
                return this.theme == 0 ?
                    '/styles/white/' + name.toString() + ".png"
                    :
                    '/styles/black/' + name.toString() + ".png"
            },
            tryClick(cell) {
                cell.isOpen = true
                if (cell.type == "bomb") alert('you lose')
            }
        },
        computed: {
            ...mapState(["field", "theme"])
        },
    }
</script>
<style scoped>
    .cell {
        width: 50px;
        height: 50px;
        font-size: 20px;
        border: black solid 1px;
        cursor: pointer;
    }

    img {
        width: 45px;
        height: 45px;
    }
</style>