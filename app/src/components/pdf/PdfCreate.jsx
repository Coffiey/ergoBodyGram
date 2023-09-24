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
    header : {width: "100%", height: "80px", backgroundColor: "#028579",},
    headerTextAlign : {margin: "auto 0px", },
    headerTitle : {textAlign: "center", color: "white", fontSize: 24, fontWeight: 'bold'},
    headerSubTitle :{textAlign: "center",color: "white", fontSize: 10, fontWeight: 'bold'},
    title: {fontSize: 20, textAlign: "center", marginVertical: "20px"},
    dataView: {paddingHorizontal: "15px", width:"90%", backgroundColor:"#028579", opacity:0.5, borderRadius: 10, margin: "10px auto", flexDirection:"row",justifyContent:"space-between"},
    dataTitle: {fontSize: 17, textAlign:"center", marginVertical: "10px"},
    datSubView:{ margin: 0, minWidth:"48%",},
    sittingImage: {width: "250px",height: "350px", borderRadius:5},
    sittingTable: {marginVertical: "auto",},
    footer : {width: "100%", height: "80px", backgroundColor: "#028579", position: 'absolute', bottom: 0},
    page: {
        flexDirection: 'column',
        padding: 20,
        width: "100%"
      },
    themeTitle: {
        fontSize: 15,
        marginBottom: 3,
        // textAlign: 'center',
      },
      table: {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
      },
      tableCell: {
        flex: 1,
        padding: 8,
        borderRightColor: '#000',
        borderRightWidth: 1,
        fontSize:8,
      },
      tableHeader: {
        backgroundColor: '#028579',
        color: 'white',
        fontWeight: 'bold',
      },
      tableTitle: {
        fontSize: 10,
        marginBottom: 10,
        textAlign: 'center',
      },
});

const PdfCreate = (props) => {
    const {userData} = props
    console.log(userData)

    return (
    <Document>
    <Page>
        <View style={styles.header}>
            <View style={styles.headerTextAlign}>
                <Text style={styles.headerTitle}>Painless Depression</Text>
                <Text style={styles.headerSubTitle}>Ergonomically Waste your life</Text>
            </View>
        </View>
        <Text style={styles.title}>Your Personalised workspace setup</Text>
        <View style={styles.dataView}>   
            <View style={styles.dataSubView}>
                <Text style={styles.dataTitle}>Sitting</Text>
                <Image src="/sitting.png" style={styles.sittingImage}/>
                <View style={styles.sittingTable}>
                    {/* Table */}
                    <View size="A4" style={styles.page}>
                    <Text style={styles.themeTitle}>Sitting Table</Text>
                        <View style={styles.table}>
                            {/* Table Title */}
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Reference</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Value</Text>
                            </View>

                            {/* Table Data */}
                            {[
                                {name :'A. Screen Height', ref: 'topOfScreenStand' },
                                {name :'B. Desk Height', ref: 'deskHeightStand'},
                                {name: 'C. Chair Height', ref:"chairHeightSit"},
                                {name:'D. Keyboard distance', ref: "endOfKeyboards"}
                            ].map((rowName, index) => (
                                <View key={index} style={styles.tableRow}>
                                <Text style={styles.tableCell}>{rowName.name}</Text>
                                <Text style={styles.tableCell}>{Math.round(userData[rowName.ref])+ " mm"}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.dataSubView}>
                <Text style={styles.dataTitle}>Standing</Text>
                <Image src="/standing.png" style={styles.sittingImage}/>
                <View style={styles.sittingTable}>
                    {/* Table */}
                    <View size="A4" style={styles.page}>
                    <Text style={styles.themeTitle}>Standing Table</Text>
                        <View style={styles.table}>
                            {/* Table Title */}
                            <View style={styles.tableRow}>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Reference</Text>
                                <Text style={[styles.tableCell, styles.tableHeader]}>Value</Text>
                            </View>

                            {/* Table Data */}
                            {[{name :'A. Screen Height', ref: 'topOfScreenStand' }, {name :'B. Desk Height', ref: 'deskHeightStand'}, {name :'C. Keyboard distance', ref: 'endOfKeyboards'}].map((rowName, index) => (
                                <View key={index} style={styles.tableRow}>
                                <Text style={styles.tableCell}>{rowName.name}</Text>
                                <Text style={styles.tableCell}>{Math.round(userData[rowName.ref])+ " mm"}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.footer} />
    </Page>
  </Document>
);}

export default PdfCreate;