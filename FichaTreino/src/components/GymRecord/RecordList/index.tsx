import React from 'react';
import { FlatList } from 'react-native';

import { StyledContainer } from './styles';
import RecordButton from './RecordButton';
import AddRecordButton from '../RecordList/AddRecordButton';
import { RecordListData, IRecordListData } from '../../../mocks/RecordList';

interface IRecordListProps {
  setSelectedId: React.Dispatch<string>;
}

const RecordList = ({ setSelectedId }: IRecordListProps): JSX.Element => {
  return (
    <StyledContainer>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={RecordListData}
        renderItem={({ item }) => <RecordButton data={item} setSelectedId={setSelectedId} />}
        ListFooterComponent={() => <AddRecordButton />}
        keyExtractor={(item: IRecordListData) => item.id}
      />
    </StyledContainer>
  );
};

export default RecordList;
