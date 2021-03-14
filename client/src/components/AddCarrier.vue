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

</style>
