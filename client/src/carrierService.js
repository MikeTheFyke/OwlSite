import axios from 'axios';

const url = 'http://localhost:5000/api/carriers/';

class CarrierService {
    // Get
        static getCarrier(){
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(carrier => ({
                        ...carrier,
                        createdAt: new Date(carrier.created)
                        }))
                    );
                })
                .catch ((error) => {
                    reject(error);
                });
            });
        }
    // Create
        static insertCarrier(carrierName, carrierPhone, carrierEmail ){
            return axios.post(url, {
                carrierName,
                carrierPhone,
                carrierEmail
            });
        }
    // Delete
        static deleteCarrier(id){
            return axios.delete(`${url}${id}`);
        }
}

export default CarrierService;