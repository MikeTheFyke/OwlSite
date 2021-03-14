<template>
  <div class="header">
      <div id="HeaderLogo">
          <a href="/"><img src="../assets/Owl_Sight.png" id="OwlSightLogo" /></a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped>
.header{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #E26125;
    width: 100%;
    height: 100px;
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#HeaderLogo{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: white;
}

#OwlSightLogo{
    position: absolute;
    bottom: 10px;
    width: 80px;
    height: 80px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
}
</style>
