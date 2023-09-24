import React from 'react';
import { Document, Text, Page, StyleSheet, View, Link, Image  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        marginTop: 30,
        fontSize: 30,
        padding: 20,
    },
    layout: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    header : {width: "100%", height: "90px", backgroundColor: "#028579",},
    headerTextAlign : {margin: "auto 0px"},
    headerTitle : {textAlign: "center", color: "white", fontSize: 24, fontWeight: 'bold'},
    headerSubTitle :{textAlign: "center",color: "white", fontSize: 10, fontWeight: 'bold'},
    title: {fontSize: 20, textAlign: "center", marginVertical: "20px"},
    sittingView: {width:"90%", backgroundColor:"#028579", opacity:0.5, borderRadius: 10, margin: "10px auto"},
    sittingTitle: {fontSize: 17, textAlign: "center", marginVertical: "10px"},
    sittingData:{flexDirection:"row", margin: "30px 20px", justifyContent:"space-between"},
    sittingImage: {width: "48%", borderRadius:5},
    sittingTable: {},
    footer : {width: "100%", height: "90px", backgroundColor: "#028579", position: 'absolute', bottom: 0}
});

const PdfCreate = () => (
  <Document>
    <Page>
        <View style={styles.header}>
            <View style={styles.headerTextAlign}>
                <Text style={styles.headerTitle}>Painless Depression</Text>
                <Text style={styles.headerSubTitle}>Ergonomically Waste your life</Text>
            </View>
        </View>
      <Text style={styles.title}>Your Personalised workspace setup</Text>
      <View style={styles.sittingView}>
        <Text style={styles.sittingTitle}>Ergonomic Sitting Position</Text>
        <View style={styles.sittingData}>
            <Image src="/sitting.png" style={styles.sittingImage}/>
            <View style={styles.sittingTable}><Text>PUT TABLE HERE</Text></View>
        </View>
      </View>
      <View style={styles.sittingView}>
        <Text style={styles.sittingTitle}>Ergonomic Standing Position</Text>
        <View style={styles.sittingData}>
            <Image src="/standing.png" style={styles.sittingImage}/>
            <View style={styles.sittingTable}><Text>PUT TABLE HERE</Text></View>
        </View>
        </View>
        <View style={styles.footer}></View>
    </Page>
  </Document>
);

export default PdfCreate;