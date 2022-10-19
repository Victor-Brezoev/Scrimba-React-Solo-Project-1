/**
 * Use in Footer.js
 */

const socialsData = [
  {
    type: 'twitter',
    enabled: true
  },
  {
    type: 'facebook',
    enabled: true
  },
  {
    // Intentionally not instagram
    // Handle the case if it's insta the class to be -> instagram
    type: 'insta',
    enabled: true
  },
  {
    type: 'github',
    // Hide social element if it's disabled or enabled === false
    enabled: false
  },
]

export default socialsData