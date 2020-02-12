<template>
  <div id="container">
    <form>
      <input id="range" type="range" step="0.005" name="range" min="0.5" max="3" value="1" />
    </form>
    <button id="start">Start</button>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  name: "Howler",
  created() {}
};
</script>