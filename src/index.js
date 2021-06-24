const cities = ['Parana', 'Crespo', 'Buenos Aires', 'Toronto', 'Vancouver', 'Oakland']

const randomCity = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

module.exports = randomCity