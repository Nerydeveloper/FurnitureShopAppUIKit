import { StyleSheet, Text, View, ScrollView, Pressable, Image, FlatList } from "react-native";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons'; // Importando ícones do Material Icons

import products, { ofertas } from "../../constants/produts";
import AutoScrollFlatList from "../../componets/AutoScrollFlatList";

const DATA_PRODUCTS = products
const DATA_OFERTAS = ofertas

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.boxNaviTop}>
                <MaterialIcons name="menu" size={32} style={styles.iconsHeader}></MaterialIcons>
                <View style={styles.boxIconsHeaderR}>
                    <MaterialIcons name="search" size={32} style={styles.iconsHeader}></MaterialIcons>
                    <MaterialIcons name="store" size={32} style={styles.iconsHeader}></MaterialIcons>

                </View>

            </View>

            <AutoScrollFlatList data={DATA_OFERTAS} />
            <ScrollView style={styles.containerBody}>
                <View style={styles.boxStepOne}>

                    <View style={styles.boxProductHeader}>
                        <Text style={styles.titleCategori}>Decoração</Text>
                        <Pressable style={styles.buttonShowAll}>
                            <Text style={styles.textButtonShowAll}>ver tudo</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={DATA_PRODUCTS.filter(item => item.categori === 'Decoração')}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Image source={item.image} style={styles.imgProduct} />
                                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.nome}</Text>
                                <Text style={styles.valor}>{item.preco}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}

                        horizontal={true}
                        style={styles.list}
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>

                <View style={styles.boxStepOne}>

                    <View style={styles.boxProductHeader}>
                        <Text style={styles.titleCategori}>Cozinha</Text>
                        <Pressable style={styles.buttonShowAll}>
                            <Text style={styles.textButtonShowAll}>ver tudo</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={DATA_PRODUCTS.filter(item => item.categori === 'Cozinha')}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Image source={item.image} style={styles.imgProduct} />
                                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.nome}</Text>
                                <Text style={styles.valor}>{item.preco}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}

                        horizontal={true}
                        style={styles.list}
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
                <View style={styles.boxStepOne}>

                    <View style={styles.boxProductHeader}>
                        <Text style={styles.titleCategori}>Quarto</Text>
                        <Pressable style={styles.buttonShowAll}>
                            <Text style={styles.textButtonShowAll}>ver tudo</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={DATA_PRODUCTS.filter(item => item.categori === 'Quarto')}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Image source={item.image} style={styles.imgProduct} />
                                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.nome}</Text>
                                <Text style={styles.valor}>{item.preco}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}

                        horizontal={true}
                        style={styles.list}
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
                <View style={styles.boxStepOne}>

                    <View style={styles.boxProductHeader}>
                        <Text style={styles.titleCategori}>Eletronicos</Text>
                        <Pressable style={styles.buttonShowAll}>
                            <Text style={styles.textButtonShowAll}>ver tudo</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={DATA_PRODUCTS.filter(item => item.categori === 'Eletronicos')}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainer}>
                                <Image source={item.image} style={styles.imgProduct} />
                                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{item.nome}</Text>
                                <Text style={styles.valor}>{item.preco}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}

                        horizontal={true}
                        style={styles.list}
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </ScrollView>

        </View>
    );
}

