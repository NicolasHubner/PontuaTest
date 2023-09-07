import { Input } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface SearchInputProps {
    onChangeText: (text: string) => void;
}

export const SearchInput = ({ onChangeText }: SearchInputProps) => (
    <Input
        placeholder="Faça sua busca"
        pl={'6px'}
        mx={'10px'}
        mt={'16px'}
        borderRadius={'14px'}
        fontWeight={600}
        onChangeText={onChangeText}
        letterSpacing={'0.2px'}
        fontSize={'14.16px'}
        color={'#313140'}
        placeholderTextColor={'#313140'}
        lineHeight={'21.25px'}
        h={'55px'}
        leftElement={
            <AntDesign name="search1" size={20} color="black" style={{ marginLeft: 24 }} />
        }
    />
);
