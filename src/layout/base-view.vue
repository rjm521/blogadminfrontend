<template>
<div>
  <div class="header-part">header content</div>
  <div class="content-box">
    <div class="nav">
      <router-link to="/home">home</router-link>
      <br>
      <router-link to="/article">article</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>


<srcipt>


</srcipt>


<style>
.header-part{
background: #42b983;
}
.nav {
  background: #2c3e50;
  width: 159px;
}

</style>