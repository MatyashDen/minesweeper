import Vue from 'vue'
import Vuex from 'vuex'
import { CellType } from "./../models/Cell"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        field: [[]],
        statistics: [
            {
                seconds: 111,
                isWin: false
            }
        ],
        theme: 0
    },
    mutations: {
        setField(state, field) {
            state.field = field
        },
        changeTheme(state) {
            state.theme = 1 - state.theme
        }
    },
    actions: {
        generateField({ commit }) {
            const bombs = 10
            const n = 9
            const m = 9

            let field = new Array(n);
            for (let i = 0; i < n; i++) {
                field[i] = new Array(m);
                for (let j = 0; j < m; ++j) {
                    field[i][j] = makeCell()
                }
            }

            let coords = []

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; ++j) {
                    coords.push({ x: i, y: j })
                }
            }

            shuffle(coords)

            console.log(coords)

            for (let i = 0; i < bombs; ++i) {
                let x = coords[i].x;
                let y = coords[i].y;

                field[x][y].type = CellType.bomb
                //console.log(field[x][y])

                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        x += dx;
                        y += dy;
                        if (x < n && x >= 0 && y < m && y >= 0) {
                            field[x][y].number++
                        }

                        x -= dx;
                        y -= dy;
                    }
                }
            }

            console.log(field)

            commit("setField", field)
        },
        changeTheme({commit}) {
            commit("changeTheme")
        }
    },
    modules: {
    }
})

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function makeCell() {
    return {
        isOpen: false,
        type: CellType.number,
        number: 0
    }
}