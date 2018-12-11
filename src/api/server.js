import axios from 'axios'

class Server {

  static getWatchBrand (data) {
    console.log('Get Brand');
    return new Promise((resolve, reject) => {
      const URL = 'https://mearto.com/brands/find_brand.json'
      axios.post(URL, data).then(watchBrand=>{
        resolve(watchBrand.data)
      }).catch(err=>{
        console.error('Get brand: ', err)
      })
    })
  }

}

export default Server
