<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model.trim="editedItem.name"
              :rules="nameRules"
              :counter="32"
              label="Dessert name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model.number="editedItem.calories"
              :rules="numberRules"
              label="Calories"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model.number="editedItem.fat" :rules="numberRules" label="Fat (g)"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model.number="editedItem.carbs" :rules="numberRules" label="Carbs (g)"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model.number="editedItem.protein"
              :rules="numberRules"
              label="Protein (g)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn v-if="isShowSaveBtn" color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true
    },
    save: {
      type: Function,
      required: true
    },
    editedItem: {
      type: Object,
      required: true
    },
    formTitle: {
      type: String,
      required: true
    },
    isShowSaveBtn: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    nameRules: [v => v.length <= 32 || "Name must <= 32 characters"],
    numberRules: [v => !isNaN(v) || "Must be number!"]
  })
};
</script>