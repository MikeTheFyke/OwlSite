<template>
    <div>
      
     <div id="orderSearchOuterContainer">
        <div id="orderSearchContainer">
            <form onsubmit="event.preventDefault();" autocomplete="off">

                    <div class="inputContainers">
                        <input class="searchInputs" id="nameSearchInput" placeholder="Search By Carrier Name">
                    </div>

                    <div class="inputContainers">
                        <input class="searchInputs" id="destinationSearchInput" placeholder="Search By Destination City">
                    </div>

                    <button id="searchOrderButton" v-on:click="searchOrder">Search Order</button>
            </form>
        </div>
    </div>

          <div id="orderModal" class="modal" >
              <div class="modal-content">
                    <h1 id="modalHeaderText">Order List</h1>
                      <div id="orderDataContainer">
                          <table id='orderItemsTable'>
                              <tr><th>Carrier Name</th><th>Destination City</th><th>Weight</th><th>Cost</th><th>Customer Name</th></tr>
                              <tbody id="newOrderItems"></tbody>
                              <tr>
                              <tr v-for="(order, index) in newOrder" 
                                  v-bind:item="order" 
                                  v-bind:index="index" 
                                  v-bind:key="order._id"
                                  >
                                <td>{{ order.name }} </td>
                                <!-- <td>{{ order.serviceType }} </td> -->
                                <td>{{ order.destinationCity }} </td>
                                <td>{{ order.weight }} </td>
                                <!-- <td>{{ order.numberSkids }} </td> -->
                                <!-- <td>{{ order.numberSpots }} </td> -->
                                <td>{{ order.cost }} </td>
                                <td>{{ order.customerName }} </td>
                              </tr>
                          </table>
                      </div>
              </div>  
          </div>

  </div>
</template>

<script>

import OrderService from '../orderService'

export default {
  name: 'OrderSearch',
    data() {
        return{
            newOrder : [],
            error : '',
            carrierName : '',
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
        this.newOrder = await OrderService.getOrder()
        } catch(err){
        this.error = err.message;
        }
    },
    mounted: function(){
  },
    methods: {
        searchOrder () {

        },
    }
}
</script>

<style scoped>
#orderSearchOuterContainer{
    position: absolute;
    top: 140px;
    left: 0px;
    width: 100%;
    z-index: -1;
}

#orderSearchContainer{
    margin: 0px auto;
    border-color: #E26125;
    background-color: #E26125;
    border-style: solid;
    border-radius: 10px;
    width: 60%;
    height: 5vw;
    min-width: 610px;
}

@media screen and (max-width: 1175px) {
  #orderSearchContainer {
    height: 80px;
  }
}

@media screen and (max-width: 1175px) {
  button {
    margin-top: 1vw;
  }
}

.selectContainers{
    width: 300px;
    height: 30px;
    text-align: center;
    white-space:nowrap;
}

.inputContainers{
    width: 300px;
    height: 30px;
    margin-right: 5px;
    text-align: center;
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

.searchInputs{
    height: 22px;
    width: 100% ;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 3px;
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

/* Order List */

#orderModal{
    display: none;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 300px;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: transparent;
}

.modal-content{
    background-color: #E26125;
    margin: 0% auto;
    padding: 0px 5px 5px 5px;
    border-radius: 25px;
    width: 70%;
    border-color: white;
    border-width: 5px;
    border-style: solid;
}

#orderDataContainer{
    background-color: white;
    border-radius: 15px;
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
}

td{
    color: #1947BA;
    font-size: 24px;
    text-align: center;
}

#modalHeaderText {
    color: white;
    width: 150px;
    margin: 0px auto;
}

#orderItemsTable{
  border-collapse: collapse;
  width: 100%;
}

#orderItemsTable th{
  width: 20%;
  background-color: transparent;
}

#newOrderItems{
  width: 20%;
  color: #1947BA;
  text-align: center;
}

#orderItemsTable tr:nth-child(even){
  background-color: #f2f2f2;
}

</style>
