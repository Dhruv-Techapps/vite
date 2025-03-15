import { LocalStorage } from '@acf-options-page/_helpers';
import { RootState } from '@acf-options-page/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';

const HIDDEN_COLUMN_KEY = 'columnVisibility';
const defaultColumnVisibility = {
  name: true,
  initWait: false,
  repeat: false,
  repeatInterval: false,
};

type ActionStore = {
  error?: string;
  message?: string;
  columnVisibility: {
    name: boolean;
    initWait: boolean;
    repeat: boolean;
    repeatInterval: boolean;
  };
};

const initialState: ActionStore = {
  columnVisibility: LocalStorage.getItem(
    HIDDEN_COLUMN_KEY,
    defaultColumnVisibility
  ),
};

const slice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setColumnVisibility: (state, action: PayloadAction<string>) => {
      state.columnVisibility[action.payload] =
        !state.columnVisibility[action.payload];
      LocalStorage.setItem(HIDDEN_COLUMN_KEY, state.columnVisibility);
    },
    setActionMessage: (state, action: PayloadAction<string | undefined>) => {
      state.message = action.payload;
      state.error = undefined;
    },
    setActionError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      Sentry.captureException(state.error);
      state.message = undefined;
    },
  },
});

export const { setActionMessage, setActionError, setColumnVisibility } =
  slice.actions;

export const actionSelector = (state: RootState) => state.action;
export const actionReducer = slice.reducer;
