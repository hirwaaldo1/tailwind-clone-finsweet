module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'bg-rgba': 'rgba(255, 255, 255, 0.59)',
        'bg-rgba-2':'rgba(215, 152, 225, 0.15)',
        'bg-rgba-3':'rgba(97, 153, 237, 0.26)',
        'bg-rgba-4':"rgba(255, 255, 255, 0.69)",
        'primary':"#1D2130",
        'semi-primary':"#2B2E3C",
        'light-blue':"#3ACAF8",
        'dark-blue':"#373FFF",
        'secondary':"#E0E4FC",
        'semi-secondary':"#F4F5F7",
        'extra-secondary':"#CDC7D2",
        'danger':"#FFACAC"
      },
      height: {
        "logo-h":"1.933rem",
        "448":"28rem",
        '31':"31rem",
        '80':"80vh"
      },
      width:{
       "logo-w":"8.672rem" ,
       '6.6':"4.153rem",
       '9.10':"90%",
       '170':"10.625rem",
       '90':"32.75rem",
      },
      lineHeight:{
        "normal":"110%",
        "relaxed":"150%",
        '18':"1.125"
      },
      margin:{
        "100":"6.25rem",
        "200":"12.5rem",
        '5.5':"5%",
        "130":"8.125rem"
      },
      padding:{
        "100":"6.25rem",
        '5.5':"5%",
      },
      borderRadius: {
        "md":"4.188rem"
      },
      blur: {
        ex:"6.25rem",
        xs: '12.5rem',
      },
    },
  },
  plugins: [],
}