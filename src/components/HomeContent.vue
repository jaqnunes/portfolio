<template>
  <div>
    <div class="container">
      <h1>Hello! <br> I am Jackelyne, <br> a front-end developer.</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeContent',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900');

.container {
	background-color:#151314;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
  min-width: 100%;
}

h1 {
	font-family: 'Playfair Display', serif;
	font-size: 6em;
	letter-spacing: 2px;
	font-weight: 900;
	line-height: .9em;
}
</style>