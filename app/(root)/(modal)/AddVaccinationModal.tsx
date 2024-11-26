import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Dimensions, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const screenHeight = Dimensions.get('window').height;

const AddVaccinationModal = ({ isVisible, onClose, onAddRecord }) => {
  const [type, setType] = useState('vaccination'); 
  const [name, setName] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [nextDate, setNextDate] = useState('');

  const handleAddRecord = async () => {
    if (!name || !lastDate || !nextDate) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return;
    }

    const recordData = { type, name, lastDate, nextDate };
    try {
      console.log('Данные для добавления:', recordData);
      await onAddRecord(recordData); 
      onClose();
      setName('');
      setLastDate('');
      setNextDate('');
    } catch (error) {
      console.error('Error in handleAddRecord:', error);
      Alert.alert('Ошибка', 'Не удалось добавить запись');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{
          backgroundColor: 'white',
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: screenHeight * 0.7,
        }}>
          <TouchableOpacity onPress={onClose} style={{ alignSelf: 'flex-end' }}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Нова запис</Text>

          <Text style={{ marginBottom: 5 }}>Назва</Text>
          <TextInput
            placeholder="Введите название"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              padding: 10,
              marginBottom: 15,
            }}
          />

          <Text style={{ marginBottom: 5 }}>Дата</Text>
          <TextInput
            placeholder="MM/DD/YYYY"
            value={lastDate}
            onChangeText={setLastDate}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              padding: 10,
              marginBottom: 15,
            }}
          />

          <Text style={{ marginBottom: 10 }}>Наступна дата</Text>
          <TextInput
            placeholder="MM/DD/YYYY"
            value={nextDate}
            onChangeText={setNextDate}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              padding: 10,
              marginBottom: 20,
            }}
          />

          <TouchableOpacity
            onPress={handleAddRecord}
            style={{
              backgroundColor: '#FF6C22',
              borderRadius: 10,
              padding: 15,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Додати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddVaccinationModal;
