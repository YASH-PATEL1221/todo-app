module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      "placeholderColor":{
          "blue":'#008cff'
      },

      extend: {
        backgroundColor:{
          'color-blue':'rgb(1,91,234)'
        },
        width:{
          'w':'80%'
        },
        height: {
          '15':'15%',
          '20':'20%'
        }
        
      },
    },
    plugins: [],
}