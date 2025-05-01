import SearchIcon from '@mui/icons-material/Search';
import { Paper, InputBase, IconButton, styled } from '@mui/material';

const SearchPaper = styled(Paper)(({ theme }) => ({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '24px',
  boxShadow: theme.shadows[1],
  marginBottom: '24px',
}));

const SearchBar = ({
  placeholder = 'Search...',
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
}) => {
  return (
    <SearchPaper elevation={1}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
        onKeyDown={e => {
          if (e.key === 'Enter' && onSearch) {
            onSearch((e.target as HTMLInputElement).value);
          }
        }}
      />
      <IconButton sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </SearchPaper>
  );
};

export default SearchBar;
