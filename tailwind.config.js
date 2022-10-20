/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google': ['Poppins', 'sans-serif'] 
      },
      fontSize: {
        'xsm': '0.72rem',
        'xxs': '0.65rem',
      
      },
    
      colors: {
        'github-blue': '#161b22',
        'github-darker-blue': '#0d1117',
        'github-medium-blue': '#394c5d',
        'github-light-blue': '#394c5d',
        'github-grey': '#8b9095',
        'github-darker-grey': '#21262c',
        'github-another-grey': '#c9d1d9',
        'github-other-blue': '#58a6ff',
        'search' : '#0d1117',
        'blue': '#195A94',
        'light-grey': '#747474',
        'github-border' : '#30363d',
        'news-yellow': '#ffb926',
      
      },
      screens: {
        'max500': {'max': '499px'},
        'min500': {'min': '499px'},
        'm640': {'min': '640px', 'max': '767px'},
        'm768': {'min': '768px', 'max': '991px'},
        'm992': {'min': '992px', 'max': '1023px'},
    
        'm1024': {'min': '1024px', 'max': '1149px'},

        'm1150': {'min': '1150px', 'max': '1279px'},

        'm1204': {'min': '1204px', 'max': '1279px'},
 
        'm1280': {'min': '1280px', 'max': '1399px'},

        'm1400': '1400px',


      
      },
      width: {
        '128': '520px',
        '370': '370px',
        '540': '540px',
        '270': '270px',
      },
      height: {
        '128': '520px',
        '140': '680px',
        '300': '300px',
        '370': '370px',
        '540': '540px',
        '270': '270px',
      },
      margin: {
      
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
