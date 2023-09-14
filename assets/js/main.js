/* 

MILESTONE 1 Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3 Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

const { createApp } = Vue

createApp({
    data() {
        return {

            //empty object for added task
            newTask : '',

            //validator for empty input
            error : false,

            tasks: [
                {
                    text: 'Pelare le patate 🥔',
                    done: false,
                },
                {
                    text: 'Comprare regalo fidanzata 🎁',
                    done: true,
                },
                {
                    text: 'Cena con i colleghi 🥘',
                    done: false,
                },
                {
                    text: 'Serata Magic 🎴',
                    done: true,
                },
                {
                    text: 'Fare la spesa 🛒',
                    done: false,
                },
                {
                    text: 'Portare auto dal meccanico 🔧',
                    done: false,
                },
            ],

        }
    },

    methods: {

        removeTask(index) {

            this.tasks.splice(index, 1);

        },

        addTask(newTask) {

            if (newTask != '') {

                this.tasks.unshift({text : newTask, done : false});
                this.newTask = '';
                this.error = false;

              //if input is empty  
            } else {

                this.error = true;                              
                
            }

        },

    }

}).mount('#app')