import React, { useRef, useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text } from 'react-native';
import styles from '../screens/Home/styles';

const AutoScrollFlatList = ({ data }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                flatListRef.current.scrollToIndex({
                    index: nextIndex % data.length,
                    animated: true,
                });
                return nextIndex % data.length;
            });
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [data.length]);

    return (

            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) =>
                    <ImageBackground source={item.image} style={styles.containerOfertas}>
                        <Text style={styles.textTitle}>{item.nome}</Text>
                        <Text style={styles.textSubtitle}>{item.describle}</Text>
                    </ImageBackground>
                }
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScrollToIndexFailed={(info) => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        flatListRef.current.scrollToIndex({ index: info.index, animated: true });
                    });
                }}
            />
   

    );
};

export default AutoScrollFlatList;
