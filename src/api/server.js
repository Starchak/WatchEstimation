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
        reject()
      })
    })
  }

  static getWatchEstimate (id) {
    return new Promise((resolve, reject) => {
      const URL = 'https://mearto.com/brands/'+ id +'/stats.json'
      console.log(URL);
      axios.get(URL).then(watchEstimate=>{
        resolve(watchEstimate.data)
      }).catch(err=>{
        console.error('Get estimate: ', err)
        reject()
      })
    })
  }

}

export default Server
