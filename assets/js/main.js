const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks : [
            {
                text : 'Pelare le patate 🥔',
                done : false,
            },
            {
                text : 'Comprare regalo fidanzata 🎁',
                done : true,
            },
            {
                text : 'Cena con i colleghi 🥘',
                done : false,
            },
            {
                text : 'Serata Magic 🎴',
                done : true,
            },
            {
                text : 'Fare la spesa 🛒',
                done : false,
            },
            {
                text : 'Portare auto dal meccanico 🔧',
                done : false,
            },
        ]
      }
    }
  }).mount('#app')