import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const HowToMakePongalTamil = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>பொங்கல் செய்யும் முறை</Text>
      </View>

      {/* Introduction Section */}
      <View style={styles.section}>
        <Text style={styles.title}>அறிமுகம்</Text>
        <Text style={styles.description}>
          பொங்கல் என்பது தமிழகத்தின் சிறப்பு உணவாகும். இது சூரியன் மற்றும் இயற்கைக்கு நன்றி கூறும் பொங்கல் திருவிழாவில் செய்யப்படும் ஒரு பாரம்பரிய உணவு வகையாகும். 
          இருவகை பொங்கல்களும் மிகவும் பிரபலமானவை:{"\n"}
          - வெண் பொங்கல் {"\n"}
          - சக்கரை பொங்கல்
        </Text>
      </View>

      {/* Ingredients Section */}
      <View style={styles.section}>
        <Text style={styles.title}>தேவையான பொருட்கள்</Text>
        <Text style={styles.description}>
          **சக்கரை பொங்கலுக்கு:**{"\n"}
          - பச்சரிசி - 1 கப் {"\n"}
          - பால் - 2 கப் {"\n"}
          - வெல்லம் - 1 கப் {"\n"}
          - ஏலக்காய் - 2 {"\n"}
          - தேங்காய் துருவல் - 2 தேக்கரண்டி {"\n"}
          - நெய் - 2 தேக்கரண்டி {"\n"}
          - முந்திரி பருப்பு மற்றும் திராட்சை{"\n\n"}

          **வெண் பொங்கலுக்கு:**{"\n"}
          - பச்சரிசி - 1 கப் {"\n"}
          - பாசிப்பருப்பு - 1/4 கப் {"\n"}
          - தண்ணீர் - 3 கப் {"\n"}
          - நெய் - 2 தேக்கரண்டி {"\n"}
          - மிளகு, ஜீரகம் - சிறிதளவு {"\n"}
          - கறிவேப்பிலை - சில
        </Text>
      </View>

      {/* Preparation Section */}
      <View style={styles.section}>
        <Text style={styles.title}>செய்முறை - சக்கரை பொங்கல்</Text>
        <Text style={styles.description}>
          1. முதலில் அரிசி மற்றும் பாசிப்பருப்பை சுத்தமாக கழுவி தனியாக வைக்கவும்.{"\n"}
          2. மண் பாத்திரத்தில் பால் மற்றும் தண்ணீர் சேர்த்து அதில் அரிசி மற்றும் பாசிப்பருப்பை வேக விடவும்.{"\n"}
          3. வெல்லத்தைச் சிறு அளவு தண்ணீரில் கரைத்து வடிகட்டி, வேகிய அரிசியில் சேர்க்கவும்.{"\n"}
          4. நெய், ஏலக்காய், முந்திரி பருப்பு, திராட்சையை சேர்த்து நன்கு கலந்து இறக்கவும்.{"\n"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>செய்முறை - வெண் பொங்கல்</Text>
        <Text style={styles.description}>
          1. பாசிப்பருப்பை நெய் சேர்த்து மிதமான ஆக்சியில் துவண்டு மணம் வரும் வரை வறுக்கவும்.{"\n"}
          2. அரிசி மற்றும் வறுத்த பருப்பை தண்ணீரில் வேக விடவும்.{"\n"}
          3. அரிசி நன்கு மையமாகும் போது அதில் நெய், மிளகு, ஜீரகம், கறிவேப்பிலை சேர்க்கவும்.{"\n"}
          4. வெண்ணெயில் வறுத்த முந்திரி பருப்பை மேலே தூவி பரிமாறவும்.{"\n"}
        </Text>
      </View>

      {/* Serving Suggestions */}
      <View style={styles.section}>
        <Text style={styles.title}>சர்வ் செய்யும் முறை</Text>
        <Text style={styles.description}>
          - சக்கரை பொங்கலை சிறிது நெய் சேர்த்து பரிமாறவும்.{"\n"}
          - வெண் பொங்கலை தேங்காய் சட்னி மற்றும் சாம்பார் சேர்த்து பரிமாறவும்.{"\n"}
          - கரும்பு மற்றும் வாழை இலைகளுடன் பரிமாறுதல் பொங்கல் சிறப்பு வண்ணம் சேர்க்கும்.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          பொங்கல் திருவிழாவில் உங்களின் பொங்கல் உண்டுணவுகள் இனிமையாக அமையட்டும்!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e1",
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#ff9800",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#d84315",
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  footer: {
    marginVertical: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    color: "#6a1b9a",
    fontStyle: "italic",
  },
});

export default HowToMakePongalTamil;
