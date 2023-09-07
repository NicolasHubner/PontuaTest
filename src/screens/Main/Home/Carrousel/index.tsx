import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { View, Text, Skeleton, useTheme, FlatList } from 'native-base';
import Card from '@/components/Cards';
import { isTypeMovieDetails } from '@/helpers/functions/isTypeMovieDetails';

interface CarrouselProps {
    title: string;
    data: Character[] | ComicData[] | MarvelEvent[] | ComicSeries[];
}

export const Carrousel = ({ title, data }: CarrouselProps) => {
    const { colors } = useTheme();

    const hadleTitle = () => {
        switch (title) {
            case 'Heróis':
                return 'characters';
            case 'Quadrinhos':
                return 'comics';
            case 'Séries':
                return 'series';
            case 'Eventos':
                return 'events';
            default:
                return '';
        }
    };

    return (
        <View width={'100%'} paddingLeft={'24px'}>
            <Text
                fontWeight={700}
                fontSize={'18px'}
                color={'#F2264B'}
                lineHeight={'18px'}
                mb={'16px'}>
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data as Character[] | ComicData[] | MarvelEvent[] | ComicSeries[]}
                renderItem={({ item, index }) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={hadleTitle()}
                        name={
                            isTypeMovieDetails({ item: item, condition: hadleTitle() })?.name || ''
                        }
                        item={item}
                        uri={isTypeMovieDetails({ item: item, condition: hadleTitle() })?.uri || ''}
                        i={index}
                    />
                )}
                contentContainerStyle={{ paddingRight: 36 }}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View width={'24px'} />}
                ListEmptyComponent={() => (
                    <View flexDirection={'row'} flexWrap={'wrap'} width={'100%'}>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Skeleton
                                speed={1.6}
                                mb={'48px'}
                                height={230}
                                width={140}
                                borderRadius={16}
                                bgColor={colors.gray[700]}
                                key={i}
                                mr={'24px'}
                            />
                        ))}
                    </View>
                )}
            />
        </View>
    );
};
