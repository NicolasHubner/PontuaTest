import { isTypeMovieDetails } from '@/helpers/functions/isTypeMovieDetails';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { truncateText } from '@/helpers/text/truncateText';
import { Routes } from '@/routes/routes';
import { RootState } from '@/store/store';
import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { useNavigation } from '@react-navigation/native';
import { Pressable, FlatList, Text, View, Image } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface RenderCardProps {
    image: string;
    title: string;
    description: string;
    item: ComicData | Character | ComicSeries | MarvelEvent;
}

interface SearchDataProps {
    data: ComicData[] | Character[] | ComicSeries[] | MarvelEvent[];
    TypeMarvel: 'characters' | 'comics' | 'series' | 'events';
}

export function SearchData({ data, TypeMarvel }: SearchDataProps) {
    const navigate = useNavigation<INavigation>();

    const RenderCard = useCallback(
        ({ image, title, description, item }: RenderCardProps) => {
            return (
                <Pressable
                    w={'382px'}
                    h={'143px'}
                    mb={'12px'}
                    mx={'12px'}
                    onPress={() =>
                        navigate.navigate(Routes.Main.MOVIE_DETAILS, {
                            data: item,
                            type: TypeMarvel,
                        })
                    }
                    p={'12px'}
                    overflow={'hidden'}
                    flexDirection={'row'}
                    borderRadius={'12px'}
                    backgroundColor={'#313140'}>
                    <Image
                        source={{ uri: image }}
                        alt={title}
                        w={'96px'}
                        h={'119px'}
                        borderRadius={'12px'}
                    />
                    <View flexDir={'column'} ml={'12px'} w={'235px'} gap={'7px'}>
                        <Text color={'#FFFFFF'}>{title}</Text>

                        <Text
                            fontWeight={300}
                            fontSize={'13px'}
                            lineHeight={'13px'}
                            overflow={'hidden'}
                            maxH={'80px'}
                            flex-flexWrap={'wrap'}
                            color={'#FFFFFF'}>
                            {truncateText(
                                description,
                                description.length > 30 ? 32 : description.length
                            )}
                        </Text>
                    </View>
                </Pressable>
            );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [TypeMarvel]
    );

    return (
        <View width={'100%'} paddingY={'24px'} alignItems={'center'}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data as Character[] | ComicData[] | ComicSeries[] | MarvelEvent[]}
                contentContainerStyle={{ paddingBottom: 120 }}
                renderItem={({ item }) => (
                    <RenderCard
                        image={isTypeMovieDetails({ item: item, condition: TypeMarvel })?.uri || ''}
                        title={
                            isTypeMovieDetails({ item: item, condition: TypeMarvel })?.name || ''
                        }
                        description={
                            isTypeMovieDetails({ item: item, condition: TypeMarvel })
                                ?.description || ''
                        }
                        item={item}
                    />
                )}
                keyExtractor={(_, i) => i.toString()}
            />

            {/* {isData().map(item => (
                <RenderCard
                    key={item.id}
                    image={isTypeMovieDetails({ item: item, condition: TypeMarvel })?.uri || ''}
                    title={isTypeMovieDetails({ item: item, condition: TypeMarvel })?.name || ''}
                    description={
                        isTypeMovieDetails({ item: item, condition: TypeMarvel })?.description || ''
                    }
                    data={item}
                />
            ))} */}
        </View>
    );
}
