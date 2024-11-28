import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  // Hàm xử lý khi nhấn vào cà phê
  const handleCoffeePress = (coffeeName: string) => {
    Alert.alert(`Bạn đã chọn ${coffeeName}!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}>Chào buổi sáng</Text>
        </View>
        
        <View style={styles.userContainer}>
          <Text style={styles.userName}>Anderson</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="shopping-cart" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="user" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.loyaltyCard}>
          <Text style={styles.loyaltyText}>Thẻ thành viên</Text>
          <Text style={styles.loyaltyProgress}>4 / 8</Text>
          <View style={styles.loyaltyIcons}>
            {[...Array(8)].map((_, index) => (
              <FontAwesome
                key={index}
                name="coffee"
                size={24}
                color={index < 4 ? '#6B4226' : '#D3D3D3'}
                style={styles.loyaltyIcon}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.coffeeSelection}>
        <Text style={styles.selectionTitle}>Chọn cà phê của bạn</Text>
        <View style={styles.coffeeGrid}>
          {[
            { name: 'Americano', image: require('@/assets/images/americano.png') },
            { name: 'Cappuccino', image: require('@/assets/images/cappuccino.png') },
            { name: 'Mocha', image: require('@/assets/images/mocha.png') },
            { name: 'Flat White', image: require('@/assets/images/flat-white.png') },
          ].map((coffee, index) => (
            <TouchableOpacity
              key={index}
              style={styles.coffeeItem}
              onPress={() => handleCoffeePress(coffee.name)} // Thêm sự kiện onPress
            >
              <View style={styles.coffeeImageContainer}>
                <Image source={coffee.image} style={styles.coffeeImage} />
              </View>
              <Text style={styles.coffeeText}>{coffee.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

// Các kiểu dáng cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 16,
    color: '#888',
    marginTop: 40,
    marginBottom: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  loyaltyCard: {
    backgroundColor: '#324A59',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  loyaltyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  loyaltyProgress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  loyaltyIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loyaltyIcon: {
    marginHorizontal: 4,
  },
  coffeeSelection: {
    backgroundColor: '#324A59',
    borderRadius: 12,
    flex: 1,
    padding: 16,
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  coffeeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  coffeeItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  coffeeImageContainer: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#F7F8FB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  coffeeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  coffeeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});