const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000)
      }
    }

    // このケースはcomputedに書いたほうがいい
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = ""
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // }
  },

  computed: {
    fullName() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    // outputFullname() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Sakaki";
    // },
    submitForm() {
      alert("Submit!");
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
