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
  </div>
</template>

<script>

export default {
  name: 'OrderSearch',
    data() {
        return{
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

</style>
