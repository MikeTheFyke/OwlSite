<template>
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
</template>

<script>

import PostService from '../postService'

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
  
    mounted: function(){
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
        }
    }
}
</script>

<style scoped>
.addSign{
    margin: 140px auto;
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

</style>
