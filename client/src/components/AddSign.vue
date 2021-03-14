<template>
    <div>
        <!-- Item Add Container -->
        <div id="materialOutter">
          <div id="materialWeightContainer">
              <div id="materialWeightInputContainer">
                  <form onsubmit="event.preventDefault();" autocomplete="off">
                      <label for="otherMaterial">Select a item type:</label>
                          <select name="otherMaterial" id="otherMaterial">
                              <option value="hBase">H Base</option>
                              <option value="centerMount">Center Mount</option>
                              <option value="offCenterMount">Off Center Mount</option>
                              <option value="tireBase">TC-54 Tire Bases</option>
                              <option value="barrels"> TC-54 Barrels</option>
                              <option value="windMasters">WindMasters</option>
                              <option value="flipMasters">FlipMasters</option>
                              <option value="aFrame">A Frame</option>
                              <option value="metalALeg">S3-Metal A-Leg</option>
                              <option value="briteline">Briteline Tape (Box)</option>
                              <option value="ssPaddle">Stop/Slow Paddle</option>
                          </select>
                      <div>
                          <input id="otherNumberInput" placeholder="Enter amount of items">
                          <button id="submitButton" v-on:click="weightCalculator2">SUBMIT</button>
                      </div>
                  </form>
              </div>
              <div id="materialWeightOutputContainer">
                  <h1 id="materialTotalWeightText">Lbs.</h1>
                  <h1 id="materialTotalWeight">0</h1>
              <!-- Plus sign weight to total Container -->
                  <div id="plusItemContainer">
                      <button id="plusItemButton" v-on:click="itemWeightAdd"><img id="plus" src="../assets/plus.png"></button>
                  </div>
              </div>
          </div>
        </div>

      <div id="signOutter">
        <div class="addSign">
            <div id="inputSign">
                <form onsubmit="event.preventDefault();" autocomplete="off"> 
                    <div id="signSizeContainer" class="containers">
                        <label for="signs">Select Size : </label>
                        <select name="signs" id="signsSize">
                            <option value="30X30">30X30</option>
                            <option value="30X45">30X45</option>
                            <option value="30X60">30X60</option>
                            <option value="30X90">30X90</option>
                            <option value="30X120">30X120</option>
                            <option value="45X45">45X45</option>
                            <option value="45X60">45X60</option>
                            <option value="45X75">45X75</option>
                            <option value="45X90">45X90</option>
                            <option value="60X60">60X60</option>
                            <option value="60X75">60X75</option>
                            <option value="60X90">60X90</option>
                            <option value="75X75">75X75</option>
                            <option value="75X90">75X90</option>
                            <option value="90X90">90X90</option>
                            <option value="90X120">90X120</option>
                            <option value="120X120">120X120</option>
                        </select>
                    </div>
                    <div id="signMaterialContainer" class="containers">
                        <label for="signType">Select Material : </label>
                        <select name="signsType" id="signsType">
                            <option value=".20GA">.20</option>
                            <option value=".40GA">.40</option>
                            <option value=".064GA">.064</option>
                            <option value=".081GA">.081</option>
                            <option value="1.25GA">1.25</option>
                            <option value="16GA">16GA</option>
                            <option value="1/2PLY">1/2 PLY</option>
                            <option value="3/4MDO">3/4 MDO</option>
                            <option value=".090POLY">.090 POLY</option>
                        </select>
                    </div>
                    <div id="signMountedContainer" class="containers">
                        <label for="mountedType">Mounted : </label>
                        <select name="mountedType" id="mountedType">
                            <option value="noMount">No Mount</option>
                            <option value="dualMount">Dual Mount</option>
                            <option value="singleMount">Single Mount</option>
                        </select>
                    </div>

                    <div id="signInputContainer" class="containers">
                        <input id="signsNumberInput" placeholder="Enter amount of signs">
                        <button id="signSubmitButton" v-on:click="weightCalculator">Submit</button>
                    </div>
                    </form>
                    <div id="weightOutputContainer">
                        <h1 id="totalWeightText">Lbs.</h1>
                        <h1 id="totalWeight">0</h1>
                    <!-- Plus sign weight to total Container -->
                        <div id="plusContainer">
                            <button id="plusButton" v-on:click="totalWeightAdd"><img id="plus" src="../assets/plus.png"></button>
                        </div>
                    </div>
            </div>  
        </div>
        </div>

        <!-- Total Weight Container -->
        <div id="totalWeightOutterContainer">
            <button id="minusButton"><img v-on:click="totalWeightClear" id="minus" src="../assets/minus.png"></button>
            <div id="totalWeightContainer">
                <h1 id="completeWeightLbs">Lbs.</h1>
                <h1 id="completeTotalWeight">0</h1>
            </div>  
        </div>
        <!-- Receipt Container -->
        <div class="Receipt-Container">
          <div id="Receipt-Back"></div>
          <button id="receiptButton" v-on:click="openReceiptModal"><img id="receipt" src="../assets/receipt.png"></button>
            <div id="receiptModal" class="modal" >
              <div class="modal-content">
                    <span class="close" v-on:click="closeReceiptModal">&times;</span>
                    <h1 id="modalHeaderText">Your Weight Receipt</h1>
                      <div id="receiptDataContainer">
                          <table id='receiptItemsTable'>
                              <tr><th>Item type</th><th>Description</th><th>Quantity</th><th>Weight</th></tr>
                              <tbody id="newItems"></tbody>
                              <tr>
                              <tr v-for="(receipt, index) in newReceipt" 
                                  v-bind:item="receipt" 
                                  v-bind:index="index" 
                                  v-bind:key="receipt._id"
                                  
                                  >
                                <td>{{ receipt.name}} </td>
                                <td>{{ receipt.size }} {{ receipt.type }} {{ receipt.mount }}</td>
                                <td>{{ receipt.quantity }}</td>
                                <td id="itemWeight">{{ receipt.weight }}</td>
                                <button id="deleteButton" v-on:click="deleteReceipt(receipt._id)">X</button>
                              </tr>
                          </table>
                      </div>
                        <!-- <div id="receiptTotals">
                            <td class="receiptTotalsItem" id="receiptTotalSpots">Spots</td>
                            <td class="receiptTotalsItem" id="receiptTotalHandling">Handling Units</td>
                            <td class="receiptTotalsItem" id="receiptTotalPieces">Piece Count</td>
                            <td class="receiptTotalsItem" id="receiptCalculatedWeight"> 0 </td>
                            <td class="receiptTotalsItem" id="receiptTotalWeight"> Total Weight </td>
                        </div> -->
              </div>  
          </div>
        </div>

  </div>
</template>

<script>

import PostService from '../postService'
import TweenMax  from 'gsap';

export default {
  name: 'AddSign',
    data() {
        return{
            calculatedWeight : 0,
            numberOfSigns : 0,
            mountWeight : 0,
            signUnitWeight : 0,
            strUser : "",
            signsType : "",
            strUser3 : "",
            signTotalWeight : 0,
            receiptItems : [],
            
            newReceipt : [],
            error : '',
            name: 'Sign',
            size: '', 
            type: '', 
            mount: '', 
            quantity: '', 
            weight: '', 
            totalWeight : 0
            
        }
  },
  async created(){
    try{
      this.newReceipt = await PostService.getReceipt()

    } catch(err){
      this.error = err.message;
    }
  },
  
    mounted: function(){
    this.modal = document.getElementById("receiptModal")
    this.btn = document.getElementById("receiptButton");
    this.span = document.getElementsByClassName("close")[0];
    this.back = document.getElementById("Receipt-Back");
    
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
        this.back.style.display = "none";
      }
    }
  },
    methods: {
          weightCalculator(){
            this.signsSize = document.getElementById("signsSize").value;
            this.signsType = document.getElementById("signsType").value;
            this.numberOfSigns = document.getElementById("signsNumberInput").value;
            this.mountType = document.getElementById("mountedType").value;

            if (this.signsSize == "30X30"){ this.signs30X30();}
            else if (this.signsSize == "30X45"){ this.signs30X45();}
            else if (this.signsSize == "30X60"){ this.signs30X60();}
            else if (this.signsSize == "30X30"){ this.signs30X30 ();}
            else if (this.signsSize == "30X45"){ this.signs30X45 ();}
            else if (this.signsSize == "30X60"){ this.signs30X60 ();}
            else if (this.signsSize == "30X90"){ this.signs30X90 ();}
            else if (this.signsSize == "30X120"){ this.signs30X120 ();}
            else if (this.signsSize == "45X45"){ this.signs45X45 ();}
            else if (this.signsSize == "45X60"){ this.signs45X60 ();}
            else if (this.signsSize == "45X75"){ this.signs45X75 ();}
            else if (this.signsSize == "45X90"){ this.signs45X90 ();}
            else if (this.signsSize == "60X60"){ this.signs60X60 ();}
            else if (this.signsSize == "60X75"){ this.signs60X75 ();}
            else if (this.signsSize == "60X90"){ this.signs60X90 ();}
            else if (this.signsSize == "75X75"){ this.signs75X75 ();}
            else if (this.signsSize == "75X90"){ this.signs75X90 ();}
            else if (this.signsSize == "90X90"){ this.signs90X90 ();}
            else if (this.signsSize == "90X120"){ this.signs90X120 ();}
            else if (this.signsSize == "120X120"){ this.signs120X120 ();}

            if (this.mountType == "noMount"){ this.mountWeight = 0 } 
            else if (this.mountType == "dualMount"){ this.mountWeight = 16 } 
            else if (this.mountType == "singleMount"){ this.mountWeight = 4 }

            this.calculatedWeight = (this.signUnitWeight * this.numberOfSigns) + (this.mountWeight * this.numberOfSigns)
            document.getElementById("totalWeight").innerHTML = Math.round(this.calculatedWeight * 100) / 100
            console.log(this.calculatedWeight)
          },
            async totalWeightAdd(){

            this.newWeight = document.getElementById("totalWeight").innerHTML
            this.signTotalWeight += parseFloat(this.newWeight)
            document.getElementById("completeTotalWeight").innerHTML = Math.round(this.signTotalWeight * 100) / 100

            this.totalWeight += this.newWeight
            await PostService.insertReceipt(this.name, this.signsSize, this.signsType, this.mountType, this.numberOfSigns, this.newWeight + " Lbs." )
            this.newReceipt = await PostService.getReceipt()

            document.getElementById("signsSize").value = "30X30";
            document.getElementById("signsType").value = ".20GA";
            document.getElementById("mountedType").value = "noMount";
            document.getElementById("totalWeight").innerHTML = 0;
            document.getElementById("signsNumberInput").value = "";
          },
          signs30X30 () {
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 0.29;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 0.58;    
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 0.901;
            } 
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 1.41;
            } 
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 1.8;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 2.65;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 1.25;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 2.25;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = .75;
            }    
          },
          signs30X45 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = .43 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = .86 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 1.35 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 1.71 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 2.7 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 3.98 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 1.88 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 3.38 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = .75 ;
            } 
          },
          signs30X60 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = .58 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 1.15 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 1.8 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 2.26 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 3.6 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 5.3 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 2.5 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 4.5 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 1 ;
                
            } 
          },
          signs30X90 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = .36 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 1.73 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 2.7 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 3.42 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 5.4 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 7.9 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 3.75 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 6.75 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 1.5 ;
            } 
          },
          signs30X120 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.15 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 2.3 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 3.63 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 4.6 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 7.2 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 10.92 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 5 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 9 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 2 ;
            } 
          },
          signs45X45 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = .65 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 1.3 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 2.03 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 2.57 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 4.05 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 5.96 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 2.81 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 5.06 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 1.13 ;
            } 
          },
          signs45X60 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = .85 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 1.73 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 2.7 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 3.42 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 5.4 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 7.9 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 3.75 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 6.75 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 1.5 ;
            } 
          },
          signs45X75 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.08 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 2.16 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 3.38 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 4.28 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 6.75 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 9.94 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 4.69 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 8.44 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 1.88 ;
            } 
          },
          signs45X90 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.3 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 2.59 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 4.05 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 5.14 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 8.1 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 11.93 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 5.63 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 10.13 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 2.25 ;
            } 
          },
          signs60X60 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.15 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 2.3 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 3.6 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 5.64 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 7.2 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 10.6 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 5 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 9 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 2 ;
            } 
          },
          signs60X75 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.44 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 2.88 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 4.5 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 5.7 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 9 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 13.25 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 6.25 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 11.25 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 2.5 ;
            } 
          },
          signs60X90 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.73 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 3.46 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 5.41 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 6.85 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 10.8 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 15.9 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 7.5 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 13.5 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 3 ;
            } 
          },
          signs75X75 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 1.9 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 3.6 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 5.63 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 8.7 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 11.25 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 16.56 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 7.81 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 14.06 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 3.13 ;
            } 
          },
          signs75X90 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 2.16 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 4.32 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 6.3 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 8.93 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 13.5 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 19.04 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 9.38 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 16.88 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 3.75 ;
            } 
          },
          signs90X90 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 2.59 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 5.18 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 8.11 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 10.37 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 16.2 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 23.35 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 11.25 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 20.25 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 4.5 ;
            } 
          },
          signs90X120 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 3.46 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 6.91 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 10.31 ;   
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 13.63 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 21.5 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 31.8 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 15 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 27 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 6 ;
            } 
          },
          signs120X120 (){
            if (this.signsType == ".20GA"){
                this.signUnitWeight = 4.61 ;
            }
            else if (this.signsType == ".40GA"){
                this.signUnitWeight = 9.22 ;
            }
            else if (this.signsType == ".064GA"){
                this.signUnitWeight = 14.14 ;
            }
            else if (this.signsType == ".081GA"){
                this.signUnitWeight = 18.26 ;
            }
            else if (this.signsType == "1.25GA"){
                this.signUnitWeight = 28.8 ;
            } 
            else if (this.signsType == "16GA"){
                this.signUnitWeight = 42.4 ;
            }
            else if (this.signsType == "1/2PLY"){
                this.signUnitWeight = 20 ;
            }
            else if (this.signsType == "3/4MDO"){
                this.signUnitWeight = 36 ;
            }
            else if (this.signsType == ".090POLY"){
                this.signUnitWeight = 8 ;
            } 
        },
                weightCalculator2 () {
            this.otherMaterial = document.getElementById("otherMaterial").value;
            this.numberOfItems = document.getElementById("otherNumberInput").value;
            
            if (this.otherMaterial == "hBase"){ this.hBases ();}
            else if (this.otherMaterial == "centerMount"){ this.centerMounts ();}
            else if (this.otherMaterial == "offCenterMount"){ this.offCenterMounts ();}
            else if (this.otherMaterial == "tireBase"){ this.tireBases ();}
            else if (this.otherMaterial == "barrels"){ this.barrels ();}
            else if (this.otherMaterial == "windMasters"){ this.windMasters ();}
            else if (this.otherMaterial == "flipMasters"){ this.flipMasters ();}
            else if (this.otherMaterial == "aFrame"){ this.aFrames ();}
            else if (this.otherMaterial == "metalALeg"){ this.aLegs ();}
            else if (this.otherMaterial == "briteline"){ this.britelines ();}
            else if (this.otherMaterial == "ssPaddle"){ this.ssPaddles ();}

            console.log(this.baseUnitWeight)
            console.log(this.numberOfItems)

            this.calculateItemWeight = this.baseUnitWeight * this.numberOfItems;
            document.getElementById("materialTotalWeight").innerHTML = this.calculateItemWeight;
        },
        async itemWeightAdd () {
            this.newItemWeight = document.getElementById("materialTotalWeight").innerHTML;
            console.log("New Item Weight :" + this.newItemWeight);
            this.signTotalWeight += parseFloat(this.newItemWeight);
            document.getElementById("completeTotalWeight").innerHTML = Math.round(this.signTotalWeight * 100) / 100;
            // this.receiptItems.push({
            //     name: this.otherMaterial,
            //     size: "",
            //     type: "",
            //     mount: "",
            //     quantity: this.numberOfItems,
            //     weight: this.newItemWeight
            // });
            await PostService.insertReceipt(this.otherMaterial, "", "", "", this.numberOfItems, this.newItemWeight + " Lbs." )
            this.newReceipt = await PostService.getReceipt()
            // var newRow  = document.createElement("tr");
            // var newName = document.createElement("td"); 
            // var newSize = document.createElement("td");
            // var newQuantity = document.createElement("td");
            // var newWeight = document.createElement("td");
            // for (this.receiptItem in this.receiptItems){
            //     newRow.remove();
            //     newName.innerHTML = this.receiptItems[this.receiptItem].name;
            //     newSize.innerHTML = "";
            //     newQuantity.innerHTML = this.receiptItems[this.receiptItem].quantity;
            //     newWeight.innerHTML = this.receiptItems[this.receiptItem].weight  + " lbs.";
            //     newRow.append(newName, newSize, newQuantity, newWeight);
            //     document.getElementById("newItems").appendChild(newRow);
            // }
            
            // console.log(this.receiptItems);
            document.getElementById("completeTotalWeight").innerHTML = this.signTotalWeight;
            document.getElementById("otherMaterial").value = "hBase";
            document.getElementById("materialTotalWeight").innerHTML = 0;
            document.getElementById("otherNumberInput").value = "";
        },
        hBases () {
            this.baseUnitWeight = 28 ;
        },
        centerMounts (){
            this.baseUnitWeight = 16 ;
        },
        offCenterMounts (){
            this.baseUnitWeight = 16 ;
        },
        tireBases (){
            this.baseUnitWeight = 20.8 ;
        },
        barrels (){
            this.baseUnitWeight = 3.64 ;
        },
        windMasters (){
            this.baseUnitWeight = 32 ;
        },
        flipMasters (){
            this.baseUnitWeight = 24 ;
        },
        aFrames (){
            this.baseUnitWeight = 22 ;
        },
        aLegs (){
            this.baseUnitWeight = 8 ;
        },
        britelines (){
            this.baseUnitWeight = 42 ;
        },
        ssPaddles (){
            this.baseUnitWeight = 4 ;
        },
        totalWeightClear(){
          document.getElementById("completeTotalWeight").innerHTML = 0;  
        },
        closeReceiptModal() {
        this.modal.style.display = "none";
        this.back.style.display = "none";
        TweenMax.to("#itemTabsContainer", 0, { x : 0 })
        TweenMax.to("#materialOutter", 0, { x : 0 })
      },
      openReceiptModal () {
        this.modal.style.display = "block";
        this.back.style.display = "block";
        TweenMax.to("#itemTabsContainer", 0, { x : "100vw" })
        TweenMax.to("#materialOutter", 0, { x : "100vw" })
      },
      async deleteReceipt( id ){
        console.log(id)
            await PostService.deleteReceipt( id )
            this.newReceipt = await PostService.getReceipt()
      },
    }
}
</script>

<style scoped>
/* ADD SIGN */

#signOutter{
    position: absolute;
    top: 140px;
    left: 0px;
    width: 100%;
}

.addSign{
    margin: 0px auto;
    background-color: #E26125;
    border-color: #E26125;
    border-bottom-color: white;
    border-style: solid;
    border-radius: 10px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 60%;
    height: 10%;
    min-width: 610px;
}

form{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
}

#signSizeContainer{
    white-space:nowrap;
}

.containers{
    width: 300px;
    height: 30px;
    text-align: center;
    white-space:nowrap;
}

label{
    color: white;
    font-size: 20px;
    width: 200px;
}

select{
    height: 24px;
    width: 100px;
    border-radius: 10px;
    border-color: white;
    outline: none;
    text-align-last:center;
}

input{
    height: 24px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
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

#weightOutputContainer{
    position: relative;
    bottom: -20px;
    left: -3px;
    display: inline-block;
    width: 100%;
    height: 40px;
    background-color: white;
    color: #1947BA;
    border-style: solid;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-left-color: #1947BA;
    border-right-color: #1947BA;
    border-bottom-color: #1947BA;
    border-top-color: transparent;
}

#totalWeight{
    margin: 0px;
    float: right;
    padding-right: 5px;
}

#totalWeightText{
    margin: 0px 10px;
    float: right;
}

#plusContainer{
    height: 30px;
    text-align: center;
    float: left;
    background-color: transparent;
    border-color: transparent;
    outline: none;
}

#plusButton{
    background-color: transparent;
    border-color: transparent;
    outline: none;
}

#plus{
    width: 30px;
    height: 30px;
}
/* ADD SIGN */

/* ADD ITEM */
#materialOutter{
    position: absolute;
    top: 140px;
    left: 0px;
    width: 100%;
}

#materialWeightContainer{
    margin: 0px auto;
    border-color: #E26125;
    border-bottom-color: white;
    border-style: solid;
    border-radius: 10px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    width: 60%;
    height: 10%;
    min-width: 610px;
}
#materialWeightInputContainer{
    background-color: #E26125;
    height: 80%;
}

#otherMaterial{
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
    justify-content: space-around;
}

label{
    color: white;
    font-size: 20px;
    width: 200px;
    margin-right: 10px;
}

#otherNumberInput{
    height: 24px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-style: hidden;
    text-align: center;
    outline: none;
}

#materialWeightOutputContainer{
    position: relative;
    bottom: 0px;
    left: -3px;
    display: inline-block;
    width: 100%;
    height: 40px;
    background-color: white;
    color: #1947BA;
    border-style: solid;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-left-color: #1947BA;
    border-right-color: #1947BA;
    border-bottom-color: #1947BA;
    border-top-color: transparent;
}

button{
    height: 30px;
    background-color: #1947BA;
    border-radius: 10px;
    color: white;
    outline: none;
}

#materialTotalWeight{
    margin: 0px;
    float: right;
    padding-right: 5px;
}

#materialTotalWeightText{
    margin: 0px 10px;
    float: right;
}

#plusItemContainer{
    width: 30px;
    height: 30px;
    text-align: center;
    float: left;
    background-color: transparent;
    border-color: transparent;
    outline: none;
}

#plusItemButton{
    background-color: transparent;
    border-color: transparent;
    outline: none;
}

#plus{
    width: 30px;
    height: 30px;
}

/* ADD ITEM */

#totalWeightOutterContainer{
    position: absolute;
    bottom: 10px;
    right: 10px;
}

#minusButton{
    background-color: transparent;
    border-color: transparent;
    outline: none;
    position: absolute;
    bottom: 5px;
    right: 220px;
}

#minus{
    width: 30px;
    height: 30px;
}

#totalWeightContainer{
    display: inline-block;
    background-color: white;
    border-color: #E26125;
    border-style: solid;
    border-top-left-radius: 25px;
    width: 200px;
    height: 33px;
    padding-bottom: 5px;
    padding-right: 5px;
}

#completeWeightLbs {
    color: #E26125;
    float: right;
    margin: 0px;
}

#completeTotalWeight {
    color: #E26125;
    float: right;
    padding-right:  5px;
    margin: 0px;
}

/* Receipt Styles */

#Receipt-Back{
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.95;
}

#receiptModal{
    display: none;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 200px;
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

.close{
    float: right;
    color: #1947BA;
    font-size: 32px;
    font-weight: bold;
    margin-right: 5px;
}

.close:hover,
.close:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
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
}

/* Receipt Button */
#receiptButton{
    background-color: transparent;
    border-color: transparent;
    outline: none;
    position: absolute;
    bottom: 115px;
    right: 20px;
}
#receipt{
    width: 75px;
    height: 75px;
}
/* Receipt Button */

#receiptTotals{
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  display: flex;

}

.receiptTotalsItem{
  width: 20%;
  font-size: 16px;
  text-align: center;
  white-space:nowrap;
}

</style>
