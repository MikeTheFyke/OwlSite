<template>
    <div>
     <div id="addCarrierOuterContainer">
        <div id="addCarrierContainer">
            <form onsubmit="event.preventDefault();" autocomplete="off">
                    <div class="inputContainers">
                        <input class="carrierInputs" id="carrierNameInput" placeholder="Enter Carrier Name">
                    </div>
                    <div class="inputContainers">
                        <input class="carrierInputs" id="carrierPhoneInput" placeholder="Enter Carrier Phone Number">
                    </div>
                    <div class="inputContainers">
                        <input class="carrierInputs" id="carrierEmailInput" placeholder="Enter Carrier Email">
                    </div>
                    <button id="submitCarrierButton" v-on:click="createCarrier">Add Carrier</button>
            </form>
        </div>
    </div>

        <div class="Receipt-Container">
            <div id="carrierModal" class="modal" >
              <div class="modal-content">
                    <h1 id="modalHeaderText">Carrier List</h1>
                      <div id="receiptDataContainer">
                          <table id='receiptItemsTable'>
                              <tr><th>Carrier Name</th><th>Carrier Phone Number</th><th>Carrier Email Address</th></tr>
                              <tbody id="newItems"></tbody>
                              <tr>
                              <tr v-for="(carrier, index) in newCarrier" 
                                  v-bind:item="carrier" 
                                  v-bind:index="index" 
                                  v-bind:key="carrier._id"
                                  >
                                <td>{{ carrier.carrierName}} </td>
                                <td>{{ carrier.carrierPhone }} </td>
                                <td>{{ carrier.carrierEmail }}</td>
                                <button id="deleteButton" v-on:click="deleteCarrier(carrier._id)">X</button>
                              </tr>
                          </table>
                      </div>
              </div>  
          </div>
        </div>

  </div>
</template>

<script>

import CarrierService from '../carrierService'

export default {
  name: 'AddCarrier',
    data() {
        return{
          newCarrier : [],
          error : '',
          carrierName : '',
          carrierPhone : '',
          carrierEmail : '',
          name : '',
          number : '',
          email : ''
        }
  },
  async created(){
    try{
      this.newCarrier = await CarrierService.getCarrier()
    } catch(err){
      this.error = err.message;
    }
  },
    mounted: function(){
  },
    methods: {
        async createCarrier () {
            this.carrierName = document.getElementById("carrierNameInput").value
            this.carrierPhone = document.getElementById("carrierPhoneInput").value
            this.carrierEmail = document.getElementById("carrierEmailInput").value
            console.log(this.carrierName)
            console.log(this.carrierPhone)
            console.log(this.carrierEmail)
            await CarrierService.insertCarrier(this.carrierName, this.carrierPhone, this.carrierEmail )
            this.newCarrier = await CarrierService.getCarrier()

            document.getElementById("carrierNameInput").value = ""
            document.getElementById("carrierPhoneInput").value = ""
            document.getElementById("carrierEmailInput").value = ""
        },
    }
}
</script>

<style scoped>
#addCarrierOuterContainer{
    position: absolute;
    top: 140px;
    left: 0px;
    width: 100%;
    z-index: 0;
}

#addCarrierContainer{
    margin: 0px auto;
    border-color: #E26125;
    background-color: #E26125;
    border-style: solid;
    border-radius: 10px;
    width: 60%;
    height: 5vw;
    min-width: 610px;
    align-items: center;
}

@media screen and (max-width: 2000px) {
  #addCarrierContainer {
    height: 120px;
  }
}

@media screen and (max-width: 1900px) {
  #inputContainers {
    margin-top: 10px;
  }
}

.inputContainers{
    width: 300px;
    height: 30px;
    margin-right: 5px;
    text-align: center;
    white-space:nowrap;
    margin: 1vw 0px 10px 0px;
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

.carrierInputs{
    height: 22px;
    width: 300px;
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
    width: 300px;
    background-color: #1947BA;
    border-radius: 10px;
    color: white;
    outline: none;
    margin: 1vw 0px 10px 0px;
}

/* Carrier List */

#carrierModal{
    display: initial;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 380px;
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

#receiptDataContainer{
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
    width: 300px;
    margin: 0px auto;
}

#receiptItemsTable{
  border-collapse: collapse;
  width: 100%;
}

#receiptItemsTable th{
  width: 25%;
  background-color: transparent;
}

#newItems{
  width: 25%;
  color: #1947BA;
  text-align: center;
}

#receiptItemsTable tr:nth-child(even){
  background-color: #f2f2f2;
}

#deleteButton{
  width: 24px;
  height: 24px;
  border-radius: 12px;
  color: white;
  font-size: 12px;
  background-color: #1947BA;
  outline: none;
  float: right;
  margin-right: 20px;
}
</style>
