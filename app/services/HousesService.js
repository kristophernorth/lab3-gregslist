import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



class HousesService {

  createHouseListing(houseData) { // carData is "RAW" data, it does not have it's "backing class"
    // console.log('service creating car', carData);
    const createdCard = new House(houseData)
    AppState.houses.push(createdCard)
    // console.log('AppState houses', AppState.houses);
    this.saveHouses() // as i add cars, save to localStorage
  }


  deleteHouseListing(houseId) {
    // console.log('service delteting', carId);
    const houseToDelete = AppState.houses.find(house => house.id == houseId)
    // console.log('🔥🚙', carToDelete);
    // const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    const indexToRemove = AppState.houses.indexOf(houseToDelete)
    AppState.houses.splice(indexToRemove, 1)
    this.saveHouses()
  }


  saveHouses() {
    let stringData = JSON.stringify(AppState.houses)
    localStorage.setItem('gregslist_houses', stringData)
  }


  // This is called from the constructor in the Controller
  loadHouses() {
    let stringData = localStorage.getItem('gregslist_houses')
    // console.log('🧵💾', stringData);
    let housesData = JSON.parse(stringData)
    // console.log('🚙🚙💾', carsData);
    // AppState.cars = carsData
    // carsData.forEach(carData => AppState.cars.push(new Car(carData))) kinda works ish
    // new arr ................POJO transforms into "new Car()"
    if (!housesData) return // don't map over nothing, if the app has no storage
    // if (carsData == null) return // don't map over nothing, if the app has no storage
    const houses = housesData.map(houseData => new House(houseData))
    // console.log('✨🚙🚙', cars);
    AppState.houses = houses // overwrite the data in the AppState, with the data from localStorage
  }
}

export const housesService = new HousesService()