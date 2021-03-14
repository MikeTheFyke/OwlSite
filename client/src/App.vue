<template>
  <div id="app">
    <button id="ItemsButton" v-on:click="ShowItems">Items</button>
    <button id="OrdersButton" v-on:click="HideItems">Orders</button>
    <Header />
    <AddSign />
    <!-- <AddItem />
    <AddOrder />
    <AddCarrier />
    <OrderSearch /> -->
    <div id="orderTabsContainer">
      <div id="orderTabsInnerContainer">
        <button class="orderTab" id="addOrderTab" v-on:click="selectAddOrder">Add Order</button>
        <button class="orderTab" id="addCarrierTab" v-on:click="selectAddCarrier">Add Carrier</button>
        <button class="orderTab" id="searchOrderTab" v-on:click="selectSearchOrder">Search Order</button>
      </div>
    </div>
    <div id="itemTabsContainer">
      <div id="itemTabsInnerContainer">
        <button class="itemTab" id="addSignTab" v-on:click="selectAddSign">Add Sign</button>
        <button class="itemTab" id="addItemTab" v-on:click="selectAddItem">Add Item</button>
      </div>
    </div>
    <!-- <TotalWeight />
    <Receipt /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AddSign from './components/AddSign.vue'
// import Receipt from './components/Receipt.vue'
// import AddItem from './components/AddItem.vue'
// import AddOrder from './components/AddOrder.vue'
// import OrderSearch from './components/LookUpOrder.vue'
// import AddCarrier from './components/AddCarrier.vue'
// import TotalWeight from './components/TotalWeight.vue'

// import TweenMax  from 'gsap';

export default {
  name: 'App',
  components: {
    Header,
    AddSign,
    AddItem,
    AddOrder,
    OrderSearch,
    AddCarrier,
    TotalWeight,
    Receipt
  },
    data() {
      return{
      }
  },
    mounted: function(){
    //     TweenMax.to(".header", 0, { scaleY: 0 })
    //     TweenMax.to(".header", 0.5, { scaleY: 1, transformOrigin: "top center", delay: 0.25 })
    //     TweenMax.to("#HeaderLogo", 0, { opacity: 0 })
    //     TweenMax.to("#HeaderLogo", 2, { opacity: 1, delay: 1 })
    //     TweenMax.to("#receiptButton", 0, { y: "-100vh", zIndex: -1 })
    //     TweenMax.to("#receiptButton", 1.5, { y: 0, zIndex: 1, delay: 0.5, ease: "Bounce.easeOut" })
    //     TweenMax.to("#totalWeightOutterContainer", 0, { x: "100vw" })
    //     TweenMax.to("#totalWeightOutterContainer", 1, { x: 0, delay: 0.5 })
    //     TweenMax.to("#minusButton", 0, { x: "100vw" })
    //     TweenMax.to("#minusButton", 1, { x: 0, delay: 0.5 })

    //     TweenMax.to("#ItemsButton", 0, { scaleX: 0, scaleY: 0 })
    //     TweenMax.to("#ItemsButton", 0.50, { scaleX: 1, scaleY: 1, delay: 0.5 })
    //     TweenMax.to("#OrdersButton", 0, { scaleX: 0, scaleY: 0 })
    //     TweenMax.to("#OrdersButton", 0.50, { scaleX: 1, scaleY: 1, delay: 0.5 })

    //     TweenMax.to("#materialWeightContainer", 0, { x: "100vw" })
    //     TweenMax.to("#materialWeightContainer", 0.50, { x: 0, delay: 0.25 })

    //     TweenMax.to(".addSign", 0, { x: "100vw" })
    //     TweenMax.to(".addSign", 0.50, { x: 0, delay: 0.25 })

    //     TweenMax.to("#addOrderOuterContainer", 0, { x: "-100vw" })
    //     TweenMax.to("#orderSearchOuterContainer", 0, { x: "-100vw" })
    //     TweenMax.to("#addCarrierOuterContainer", 0, { x: "-100vw" })

    //     TweenMax.to("#materialOutter", 0, { display: "none" })
    //     TweenMax.to("#orderTabsContainer", 0, { x: "-100vw" })
    //     TweenMax.to("#itemTabsContainer", 0, { x: "-100vw" })
    //     TweenMax.to("#itemTabsContainer", 0.50, { x: 0, delay : 0.25 })
    },
    methods: {
        // selectAddOrder(){
        //   TweenMax.to("#addOrderOuterContainer", 0, { zIndex : 3, display: "initial" })
        //   TweenMax.to("#addCarrierOuterContainer", 0, { zIndex: 2, display: "none" })
        //   TweenMax.to("#orderSearchOuterContainer", 0, { zIndex : 1, display: "none" })
        //   TweenMax.to("#addOrderTab", 0, { backgroundColor: "#E26125", color: "white", borderColor: "#E26125" })
        //   TweenMax.to("#addCarrierTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        //   TweenMax.to("#searchOrderTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        // },
        // selectAddCarrier(){
        //   TweenMax.to("#addCarrierOuterContainer", 0, { zIndex: 3, display: "initial" })
        //   TweenMax.to("#orderSearchOuterContainer", 0, { zIndex : 2, display: "none" })
        //   TweenMax.to("#addOrderOuterContainer", 0, { zIndex : 1, display: "none" })
        //   TweenMax.to("#addCarrierTab", 0, { backgroundColor: "#E26125", color: "white", borderColor: "#E26125" })
        //   TweenMax.to("#addOrderTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        //   TweenMax.to("#searchOrderTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        // },
        // selectSearchOrder(){
        //   TweenMax.to("#orderSearchOuterContainer", 0, { zIndex : 3, display: "initial" })
        //   TweenMax.to("#addOrderOuterContainer", 0, { zIndex : 2, display: "none" })
        //   TweenMax.to("#addCarrierOuterContainer", 0, { zIndex: 1, display: "none" })
        //   TweenMax.to("#searchOrderTab", 0, { backgroundColor: "#E26125", color: "white", borderColor: "#E26125" })
        //   TweenMax.to("#addOrderTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        //   TweenMax.to("#addCarrierTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        // },
        // selectAddSign(){
        //   TweenMax.to("#addItemTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        //   TweenMax.to("#addSignTab", 0, { backgroundColor: "#E26125", color: "white", borderColor: "#E26125" })
        //   TweenMax.to(".addsign", 0, { zIndex : 1, display: "initial" })
        //   TweenMax.to("#materialOutter", 0, { zIndex: 0, display: "none" })
        // },
        // selectAddItem(){
        //   TweenMax.to("#addItemTab", 0, { backgroundColor: "#E26125", color: "white", borderColor: "#E26125" })
        //   TweenMax.to("#addSignTab", 0, { backgroundColor: "#1947BA", color: "white", borderColor: "#1947BA" })
        //   TweenMax.to(".addsign", 0, { zIndex: 0, display: "none" })
        //   TweenMax.to("#materialOutter", 0, { zIndex : 1, display: "initial" })
        // },
        // HideItems(){
        //   TweenMax.to("#materialWeightContainer", 0.50, { x: "100vw" })
        //   TweenMax.to(".addSign", 0.50, { x: "100vw" })
        //   TweenMax.to("#ItemsButton", 0.50, { x: "35px", y: "85px", scaleX: 0.5, scaleY: 0.5 })
        //   TweenMax.to("#OrdersButton", 0.50, { x: "-35px", y: "-85px", scaleX: 2, scaleY: 2 })
        //   TweenMax.to("#addOrderOuterContainer", 0.50, { x: 0 })
        //   TweenMax.to("#orderSearchOuterContainer", 0.50, { x: 0 })
        //   TweenMax.to("#addCarrierOuterContainer", 0.50, { x: 0 })
        //   TweenMax.to("#orderTabsContainer", 0.50, { x: 0 })
        //   TweenMax.to("#totalWeightOutterContainer", 0.50, { x: "100vw" })
        //   TweenMax.to("#receiptButton", 0.50, { y: "-100vh", zIndex: -1 })
        //   TweenMax.to("#itemTabsContainer", 0.50, { x: "-100vw" })
        // },
        // ShowItems(){
        //   TweenMax.to("#materialWeightContainer", 0.50, { x: 0 })
        //   TweenMax.to(".addSign", 0.50, { x: 0 })
        //   TweenMax.to("#ItemsButton", 0.50, { x: 0, y: 0 })
        //   TweenMax.to("#ItemsButton", 0.50, { x: 0, y: 0, scaleX: 1, scaleY: 1 })
        //   TweenMax.to("#OrdersButton", 0.50, { x: 0, y: 0, scaleX: 1, scaleY: 1 })
        //   TweenMax.to("#addOrderOuterContainer", 0.50, { x: "-150vw" })
        //   TweenMax.to("#orderSearchOuterContainer", 0.50, { x: "-150vw" })
        //   TweenMax.to("#addCarrierOuterContainer", 0.50, { x: "-150vw" })
        //   TweenMax.to("#orderTabsContainer", 0.50, { x: "-150vw" })
        //   TweenMax.to("#totalWeightOutterContainer", 0.50, { x: 0 })
        //   TweenMax.to("#receiptButton", 1.5, { y: 0, zIndex: 1, delay: 0.5, ease: "Bounce.easeOut" })
        //   TweenMax.to("#itemTabsContainer", 0.50, { x: 0 })
        // }
    }
}
</script>

<style>
#ItemsButton{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-style: solid;
    background-color: whitesmoke;
    border-color: red;
    outline: none;
    position: absolute;
    bottom: 80px;
    left: 20px;
    color: red;
    font-size: 20px;
}

#OrdersButton{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border-style: solid;
    background-color: whitesmoke;
    border-color: blue;
    outline: none;
    position: absolute;
    bottom: 20px;
    left: 80px;
    color: blue;
    font-size: 10px;
}

#orderTabsContainer{
    position: absolute;
    top: 110px;
    left: 0px;
    width: 100%;
    z-index: 3;
}

#orderTabsInnerContainer{
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.orderTab{
    height: 30px;
    width: 30%;
    background-color: #1947BA;
    border-color: #1947BA;
    border-style: solid;
    color: white;
    outline: none;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: 0px 10px;
    z-index: 2;
    white-space:nowrap;
}

#addOrderTab{
    background-color: #E26125;
    border-color: #E26125;
    border-style: solid;
}
/* Item Tabs */
#itemTabsContainer{
    position: absolute;
    top: 110px;
    left: 0px;
    width: 100%;
    z-index: 1;
}

#itemTabsInnerContainer{
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.itemTab{
    height: 30px;
    width: 30%;
    background-color: #1947BA;
    border-color: #1947BA;
    border-style: solid;
    color: white;
    outline: none;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: 0px 10px;
    z-index: 2;
    white-space:nowrap;
}

#addSignTab{
    background-color: #E26125;
    border-color: #E26125;
    border-style: solid;
}
</style>

