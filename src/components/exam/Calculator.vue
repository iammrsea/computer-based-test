<template>
  <v-container>
    <v-dialog v-model="calculatorDialog" width="300">
      <v-btn flat slot="activator" class="white teal--text ml-1">Calculator</v-btn>
      <v-card>
        <v-card-text justify-center class="calculator">
          <div class="calc-body teal">
            <div class="calc-body-screen">
              <div class="q">{{calculatorInput}}</div>
              <div class="a">{{calculatorAnswer}}</div>
            </div>
            <button class="calculator-btn" @click="backArrow">←</button>
            <button class="calculator-btn" @click="clearAll">CE</button>
            <button class="calculator-btn" @click="sin">sin</button>
            <button class="calculator-btn" @click="cos">cos</button>
            <button class="calculator-btn" @click="squareRoot">√</button>
            <button class="calculator-btn" @click="numberOrOperator">7</button>
            <button class="calculator-btn" @click="numberOrOperator">8</button>
            <button class="calculator-btn" @click="numberOrOperator">9</button>
            <button class="calculator-btn" @click="numberOrOperator">/</button>
            <button class="calculator-btn" @click="tan">tan</button>
            <button class="calculator-btn" @click="numberOrOperator">4</button>
            <button class="calculator-btn" @click="numberOrOperator">5</button>
            <button class="calculator-btn" @click="numberOrOperator">6</button>
            <button class="calculator-btn" @click="numberOrOperator">x</button>
            <button class="calculator-btn" @click="inverse">1/x</button>
            <div class="left">
              <button class="calculator-btn" @click="numberOrOperator">1</button>
              <button class="calculator-btn" @click="numberOrOperator">2</button>
              <button class="calculator-btn" @click="numberOrOperator">3</button>
              <button class="calculator-btn" @click="numberOrOperator">-</button>
              <button class="calculator-btn zero" @click="numberOrOperator">0</button>
              <button class="calculator-btn" @click="numberOrOperator">.</button>
              <button class="calculator-btn" @click="numberOrOperator">+</button>
            </div>
            <button class="calculator-btn eq" @click="equals">=</button>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      calculatorDialog: false,
      calculatorInput: "",
      calculatorAnswer: 0,
      calcDone: false
    };
  },
  methods: {
    backArrow() {
      this.calculatorInput = this.calculatorInput.substr(
        0,
        this.calculatorInput.length - 1
      );
    },
    convertNumToRadian(number) {
      return parseInt(number) * 0.01745;
    },
    clearAll() {
      this.calculatorInput = "";
      this.calculatorAnswer = 0;
      this.calcDone = true;
    },
    sin() {
      this.calculatorAnswer = (
        "" + Math.sin(this.convertNumToRadian(this.calculatorInput))
      ).substr(0, 10);
      this.calculatorInput = "";
    },
    cos() {
      this.calculatorAnswer = (
        "" + Math.cos(this.convertNumToRadian(this.calculatorInput))
      ).substr(0, 10);
      this.calculatorInput = "";
    },
    tan() {
      this.calculatorAnswer = (
        "" + Math.tan(this.convertNumToRadian(this.calculatorInput))
      ).substr(0, 10);
      this.calculatorInput = "";
    },
    plusOrMinus() {
      this.calculatorAnswer = ("" + -1 * parseInt(this.calculatorInput)).substr(
        0,
        10
      );
      this.calculatorInput = "";
      this.calcDone = true;
    },
    squareRoot() {
      if (this.calcDone) {
        this.calculatorAnswer = (
          "" + Math.sqrt(parseInt(this.calculatorAnswer))
        ).substr(0, 10);
      } else {
        this.calculatorAnswer = (
          "" + Math.sqrt(parseInt(this.calculatorInput))
        ).substr(0, 10);
      }
      this.calculatorInput = "";
      this.calcDone = true;
    },
    numberOrOperator(e) {
      this.calculatorInput += e.target.innerHTML;
      this.calcDone = false;
    },
    inverse() {
      if (this.calcDone) {
        this.calculatorAnswer = (
          "" +
          1 / parseInt(this.calculatorAnswer)
        ).substr(0, 10);
      } else {
        this.calculatorAnswer = (
          "" +
          1 / parseInt(this.calculatorInput)
        ).substr(0, 10);
      }

      this.calculatorInput = "";
      this.calcDone = true;
    },
    equals() {
      this.calculatorAnswer = (
        "" + eval(this.calculatorInput.split("x").join("*"))
      ).substr(0, 10);
      this.calculatorInput = "";
      this.calcDone = true;
    }
  }
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.calculator {
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(to bottom, #038fa1, #023e6e); */
  display: flex;
  justify-content: center;
  align-items: center;
}
.calc-body {
  width: 100%;
  height: 375px;
  padding: 10px;
  border-radius: 20px;
  /*flex*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: space-between;
}
.calc-body-screen {
  flex: 1 0 100%;
  height: 24%;
  color: #a8eeff;
  box-shadow: inset 0 0 0 1px #225861;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.calc-body-screen .q {
  width: 100%;
  line-height: 40px;
  padding: 0 5%;
  box-sizing: border-box;
  font-size: 15px;
}
.calc-body-screen .a {
  line-height: 50px;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
  font-size: 28px;
}
.calculator-btn {
  font-size: 12px;
  flex: 0 1 18%;
  height: 11%;
  color: #a8eeff;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #225861;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculator-btn:hover {
  background-color: #225861;
}
.calculator-btn.eq {
  height: 23%;
}
.left {
  display: flex;
  flex: 0 0 79.5%;
  height: 23%;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
}
.left .calculator-btn {
  height: 46%;
  flex: 0 0 23%;
}
.left .calculator-btn.zero {
  flex: 0 1 48.5%;
}
</style>
