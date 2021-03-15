<template>
    <div>
     <div id="addOrderOuterContainer">
        <div id="addOrderContainer">
            <form onsubmit="event.preventDefault();" autocomplete="off">
                <div id="carrierSelectContainer" class="selectContainers">
                    <label for="carrierSelect">Select a carrier : </label>
                        <select name="carrierSelect" id="carrierSelect"
                                  >
                            <option value="`${carrier.carrierName}`"
                                    v-for="(carrier, index) in newCarrier" 
                                    v-bind:item="carrier" 
                                    v-bind:index="index" 
                                    v-bind:key="carrier._id"
                                    >{{ carrier.carrierName }}</option>
                        </select>
                </div>
                <div id="serviceSelectContainer" class="selectContainers">
                    <label for="serviceSelect">Select a service : </label>
                    <select name="serviceSelect" id="serviceSelect">
                        <option value="Sameday">Same Day</option>
                        <option value="Nextday">Next Day</option>
                        <option value="Appointment">Appointment</option>
                    </select>
                </div>
                    <div class="inputContainers">
                        <input class="orderInputs" id="destinationInput" placeholder="Enter Destination City">
                    </div>

                    <div class="inputContainers">
                        <input class="orderInputs" id="weightInput" placeholder="Enter Total Weight">
                    </div>

                    <div class="inputContainers">
                        <input class="orderInputs" id="skidsInput" placeholder="Enter Amount of Skids">
                    </div>

                    <div class="inputContainers">
                        <input class="orderInputs" id="handlingUnitInput" placeholder="Enter Amount of Spots">
                    </div>

                    <div class="inputContainers">
                        <input class="orderInputs" id="costInput" placeholder="Enter Total Cost">
                    </div>

                    <div class="inputContainers">
                        <input class="orderInputs" id="customerInput" placeholder="Enter Customer Name">
                    </div>
                    
                    <div id="submitButtonContainer">
                    <button id="submitOrderButton" v-on:click="submitOrder">Add Order</button>
                    </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>

import CarrierService from '../carrierService'
import OrderService from '../orderService'

export default {
    
  name: 'AddOrder',
    data() {
        return{
            newCarrier : [],
            error : '',
            carrierName : '',
            carrierPhone : '',
            carrierEmail : '',
            name : '',
            number : '',
            email : '',
            serviceType: '',
            destinationCity: '',
            weight: '',
            numberSkids: '',
            numberSpots: '',
            cost: '',
            customerName: ''
        }
  },
    async created(){
    try{
        this.newCarrier = await CarrierService.getCarrier()
        } catch(err){
        this.error = err.message;
        }
    },
    async createdOrder(){
    try{
        this.newOrder = await OrderService.getOrder()
        } catch(err){
        this.error = err.message;
        }
    },
    mounted: function(){
  },
    methods: {
        async submitOrder () {
            this.carrierName = document.getElementById("carrierSelect").value;
            this.serviceType = document.getElementById("serviceSelect").value;
            this.destinationCity = document.getElementById("destinationInput").value;
            this.weight = document.getElementById("weightInput").value;
            this.numberSkids = document.getElementById("skidsInput").value;
            this.numberSpots = document.getElementById("handlingUnitInput").value;
            this.cost = document.getElementById("costInput").value;
            this.customerName = document.getElementById("customerInput").value;
            await OrderService.insertOrder(this.carrierName, this.serviceType, this.destinationCity, this.weight, this.numberSkids, this.numberSpots, this.cost, this.customerName )
            this.newOrder = await OrderService.getOrder()
        },
    }
}
</script>

<style scoped>
#addOrderOuterContainer{
    position: absolute;
    top: 140px;
    left: 0px;
    width: 100%;
    z-index: 1;
}

#addOrderContainer{
    margin: 0px auto;
    border-color: #E26125;
    background-color: #E26125;
    border-style: solid;
    border-radius: 10px;
    width: 60%;
    height: 10vw;
    min-width: 610px;
}

@media screen and (max-width: 1850px) {
  #addOrderContainer {
    height: 220px;
  }
}

.selectContainers{
    width: 300px;
    height: 30px;
    text-align: center;
    white-space:nowrap;
    margin: 10px 0px;
}

.inputContainers{
    width: 300px;
    height: 30px;
    margin-right: 5px;
    text-align: right;
    white-space:nowrap;
}

select{
    height: 24px;
    width: 100px;
    border-radius: 10px;
    border-color: white;
    outline: none;
    text-align-last:center;
    margin-right: 10px;
}

form{
    margin-top: 1vw;
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
}

label{
    color: white;
    font-size: 20px;
    width: 200px;
    margin-right: 10px;
}

.orderInputs{
    height: 22px;
    width: 100%;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 12px;
    border-style: hidden;
    text-align: center;
    outline: none;
}

button{
    height: 30px;
    background-color: #1947BA;
    border-radius: 10px;
    color: white;
    outline: none;
}

#submitButtonContainer{
    width: 100%;
    text-align: center;
    margin: 20px 0px;
}
</style>
