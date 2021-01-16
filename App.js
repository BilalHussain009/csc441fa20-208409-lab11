import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ButtonComponent from "./components/Button";
export default class App extends Component {
  state = {
    value: null,
    displayValue: "0",
    waitingForOperand: false,
    operator: null,
    bts: " "
  };

  inputValue = digit => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit
      });
    }
  };
  performOperation = nextOperator => {
    const { displayValue, operator, value } = this.state;

    const nextValue = parseFloat(displayValue);

    const operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      x: (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": nextValue => nextValue
    };

    if (value == null) {
      this.setState({
        value: nextValue
      });
    } else if (operator) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue),
        bts: operator === "=" ? " " : `${currentValue} ${operator} ${nextValue}`
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <View style={styles.container}>
        
          <View style={styles.top}>
            <Text style={true ? styles.numberBTS : styles.numberBTSL}>
              {this.state.bts}
            </Text>
            <Text style={styles.number}>{displayValue}</Text>
          </View>


       
         

          <View style={styles.row}>
            <ButtonComponent
              text="7"
              onPress={() => this.inputValue(7)}
              colorText={true}
            />
            <ButtonComponent
              text="8"
              onPress={() => this.inputValue(8)}
              colorText={true}
            />
            <ButtonComponent
              text="9"
              onPress={() => this.inputValue(9)}
              colorText={true}
            />
            <ButtonComponent
              text="x"
              colorText={true}
              onPress={() => this.performOperation("x")}
            />
          </View>
          <View style={styles.row}>
            <ButtonComponent
              text="4"
              onPress={() => this.inputValue(4)}
              colorText={true}
            />
            <ButtonComponent
              text="5"
              onPress={() => this.inputValue(5)}
              colorText={true}
            />
            <ButtonComponent
              text="6"
              onPress={() => this.inputValue(6)}
              colorText={true}
            />
            <ButtonComponent
              text="-"
              colorText={true}
              onPress={() => this.performOperation("-")}
            />
          </View>
          <View style={styles.row}>
            <ButtonComponent
              text="1"
              onPress={() => this.inputValue(1)}
              colorText={true}
            />
            <ButtonComponent
              text="2"
              onPress={() => this.inputValue(2)}
              colorText={true}
            />
            <ButtonComponent
              text="3"
              onPress={() => this.inputValue(3)}
              colorText={true}
            />
            <ButtonComponent
              text="+"
              colorText={true}
              onPress={() => this.performOperation("+")}
            />
          </View>

          <View style={styles.row}>
            <ButtonComponent
              text="0"
              colorText={true}
              onPress={() => this.inputValue(0)}
              zero
            />

           

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.performOperation("=")}
            >
              <Text style={{ color: "black", fontSize: 36 }} colorText={true}>
                {"="}
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  number: {
    textAlign: "right",
    padding: 10,
    fontSize: 36
  },
  top: {
    paddingTop: 120
  },
  bottom: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
     },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  numberBTS: {
    textAlign: "right",
    padding: 10,
    fontSize: 26
  },
  numberBTSL: {
    textAlign: "right",
    padding: 10,
    fontSize: 26
  }
});
