// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// export default function App() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmiResult, setBmiResult] = useState(null);

//   const calculateBMI = () => {
//     if (height && weight) {
//       const heightInMeters = height / 100;
//       const bmi = weight / (heightInMeters * heightInMeters);
//       setBmiResult(bmi.toFixed(2));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>BMI Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your height in cm"
//         keyboardType="numeric"
//         value={height}
//         onChangeText={(text) => setHeight(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your weight in kg"
//         keyboardType="numeric"
//         value={weight}
//         onChangeText={(text) => setWeight(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={calculateBMI}>
//         <Text style={styles.buttonText}>Calculate BMI</Text>
//       </TouchableOpacity>
//       {bmiResult && (
//         <Text style={styles.result}>
//           Your BMI is <Text style={styles.bmi}>{bmiResult}</Text>
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#1e90ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   result: {
//     marginTop: 20,
//     fontSize: 18,
//   },
//   bmi: {
//     color: '#1e90ff',
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// export default function App() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmiResult, setBmiResult] = useState(null);

//   const validateForm = () => {
//     if (!height || !weight) {
//       alert('All fields are required!');
//     } else {
//       countBmi();
//     }
//   };

//   const countBmi = () => {
//     const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
//     let result = '';
//     if (bmi < 18.5) {
//       result = 'Underweight';
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       result = 'Healthy';
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       result = 'Overweight';
//     } else if (bmi >= 30 && bmi <= 34.9) {
//       result = 'Obese';
//     } else if (bmi >= 35) {
//       result = 'Extremely obese';
//     }
//     setBmiResult({ bmi, result });
//     setHeight('');
//     setWeight('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>BMI Calculator</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your height"
//         value={height}
//         onChangeText={(text) => setHeight(text)}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your weight"
//         value={weight}
//         onChangeText={(text) => setWeight(text)}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity style={styles.button} onPress={validateForm}>
//         <Text style={styles.buttonText}>Calculate BMI</Text>
//       </TouchableOpacity>
//       {bmiResult && (
//         <View style={styles.resultContainer}>
//           <Text style={styles.resultText}>Your BMI is {bmiResult.bmi}</Text>
//           <Text style={styles.resultText}>You are {bmiResult.result}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#1c8adb',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   resultContainer: {
//     marginTop: 20,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   resultText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState([]);
  const [showHistory, setShowHistory] = useState(true);
  const currentDate = new Date().toLocaleString();
  
  
  const validateForm = () => {
    if (!height || !weight) {
      alert('All fields are required!');
    } else {
      countBmi();
    }
  };
  
  const countBmi = () => {
    const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
    let result = '';
    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Healthy';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = 'Obese';
    } else if (bmi >= 35) {
      result = 'Extremely obese';
    }
    setBmiResult([...bmiResult, { currentDate, height, weight, bmi, result }].reverse());
    setHeight('');
    setWeight('');
  };
  
  const deleteItem = (index) => {
    const newBmiResult = [...bmiResult];
    newBmiResult.splice(index, 1);
    setBmiResult(newBmiResult);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      <Text style={styles.listTitle}>BMI History</Text>
      <TouchableOpacity style={styles.toggleButton} onPress={() => setShowHistory(!showHistory)}>
        <Text style={styles.toggleButtonText}>{showHistory ? 'Hide History' : 'Show History'}</Text>
      </TouchableOpacity>
        {showHistory && (
          <ScrollView style={styles.scrollView}>
            {bmiResult.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.listItemText}>Height: {item.currentDate}</Text>
                <Text style={styles.listItemText}>Height: {item.height} cm</Text>
                <Text style={styles.listItemText}>Weight: {item.weight} kg</Text>
                <Text style={styles.listItemText}>BMI: {item.bmi}</Text>
                <Text style={styles.listItemText}>Result: {item.result}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    padding: 5,
    marginBottom: 15,
  },
  toggleButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  toggleButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});