import axios from 'axios';

const url = 'http://localhost:5000/api/orders/';

class CarrierService {
    // Get
        static getOrder(){
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(order => ({
                        ...order,
                        createdAt: new Date(order.created)
                        }))
                    );
                })
                .catch ((error) => {
                    reject(error);
                });
            });
        }
    // Create
        static insertOrder(carrierName, serviceType, destinationCity, weight, numberSkids, numberSpots, cost, customerName ){
            return axios.post(url, {
                carrierName,
                serviceType,
                destinationCity,
                weight,
                numberSkids,
                numberSpots,
                cost,
                customerName
            });
        }
    // Delete
        static deleteOrder(id){
            return axios.delete(`${url}${id}`);
        }
}

export default CarrierService;