let app = Vue.createApp({
    data() {
        return {
            numeroA: 0,
            numeroB: 0,
            operacion: 'suma',
        }
    },
    methods: {
    },
    computed: {
        resultado() {
            switch (this.operacion) {
                case 'suma':
                    return this.numeroA + this.numeroB;

                case 'resta':
                    return this.numeroA - this.numeroB;

                case 'multiplicacion':
                    return this.numeroA * this.numeroB;

                case 'division':
                    return this.numeroA / this.numeroB;

                case 'potencia':
                    return Math.pow(this.numeroA, this.numeroB);

                case 'raiz':
                    return Math.pow(this.numeroA, 1 / this.numeroB);

                case 'modulo':
                    return this.numeroA % this.numeroB;
            }
        }
    }
});

app.mount('#app');