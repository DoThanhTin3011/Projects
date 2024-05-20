module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '19': '70px',
        '28r': '28rem',
        '25': '50px',
        '250': '500px',
        '282': '564px',
        '363': '726px',
        '124': '248px',
        '135': '270px',
        '160': '320px',
        '173': '346px',


      },
      colors:{
        primary:{
          1:'hsla(0,0%,45.9%,.85)',
          5: '#f23737',
          10:'#f04145',
        },
        bgprm:{
          5: '#f8f9fa',
        },
        bd:{
          5:' #eee',
        },
        maxWidth: {
          '270': '270px',

        },
        minHeight:{
          '160': '320px',
        },
      },
      screens:{
        'lg': {'min':'1023px'},
        'down_lg': {'max':'1023px' },
        'md': {'min':'740px'},
        'down_md': {'max':'740px' },
        'sm': {'max':'480px'},
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
