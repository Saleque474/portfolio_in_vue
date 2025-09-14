<template>
  <div class="loading-screen">
    <div class="progress-bar">
      <div class="progress" :style="{ width: percent + '%' }"></div>
    </div>
    <p>Loading... {{ percent }}%</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  z-index: 9999;
}
.progress-bar {
  width: 80%;
  max-width: 500px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.progress {
  height: 100%;
  background: #4caf50;
  border-radius: 10px;
  transition: width 0.3s;
}
</style>
