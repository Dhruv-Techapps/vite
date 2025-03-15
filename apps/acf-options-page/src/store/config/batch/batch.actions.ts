import { PayloadAction } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';
import { ConfigStore } from '../config.slice';

export const batchActions = {
  updateBatch: (state: ConfigStore, action: PayloadAction<{ name: string; value: number }>) => {
    const { configs, selectedConfigId } = state;
    const { name, value } = action.payload;
    const config = configs.find((config) => config.id === selectedConfigId);
    if (!config) {
      state.error = 'Invalid Configuration';
      Sentry.captureException(state.error);
      return;
    }
    const { batch } = config;
    if (batch) {
      batch[name] = value;
    } else {
      config.batch = { [name]: value };
    }
    config.updated = true;
  },
  updateBatchRefresh: (state: ConfigStore) => {
    const { configs, selectedConfigId } = state;
    const config = configs.find((config) => config.id === selectedConfigId);
    if (!config) {
      state.error = 'Invalid Configuration';
      Sentry.captureException(state.error);
      return;
    }
    const { batch } = config;
    if (batch) {
      batch.refresh = !batch.refresh;
    }
    config.updated = true;
  },
};
