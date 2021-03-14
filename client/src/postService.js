import axios from 'axios';

const url = 'http://localhost:5000/api/receipt/';

class PostService {
    // Get
        static getReceipt(){
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(receipt => ({
                        ...receipt,
                        createdAt: new Date(receipt.created)
                        }))
                    );
                })
                .catch ((error) => {
                    reject(error);
                });
            });
        }
    // Create
        static insertReceipt(name, size, type, mount, quantity, weight ){
            return axios.post(url, {
                name,
                size,
                type,
                mount,
                quantity,
                weight
            });
        }
    // Delete
        static deleteReceipt(id){
            return axios.delete(`${url}${id}`);
        }
}

export default PostService;