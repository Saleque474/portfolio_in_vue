<template>
  <section class="cv">
    <CVView />
  </section>
</template>

<script>
import CVView from '../components/CVView.vue';
export default {
  name: 'CV',
  components: { CVView },
};
</script>

<style scoped>
.cv {
  padding: 2rem;
}
</style>
