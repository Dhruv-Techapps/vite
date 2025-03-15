import { GoogleBackupService } from '@dhruv-techapps/acf-service';
import { AUTO_BACKUP, GoogleDriveService } from '@dhruv-techapps/google-drive';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateSettingsBackup } from '../../settings';

export const googleDriveBackupAPI = createAsyncThunk('googleDrive/backup', async (_, thunkAPI) => {
  await GoogleBackupService.backup();
  thunkAPI.dispatch(googleDriveListWithContentAPI());
});

export const googleDriveRestoreAPI = createAsyncThunk('googleDrive/restore', async (req: { id: string; name: string }) => {
  await GoogleBackupService.restore(req.id, req.name);
});

export const googleDriveAutoBackupAPI = createAsyncThunk('googleDrive/autoBackup', async (autoBackup: AUTO_BACKUP, thunkAPI) => {
  await GoogleDriveService.autoBackup(autoBackup);
  thunkAPI.dispatch(updateSettingsBackup(autoBackup));
});

export const googleDriveListWithContentAPI = createAsyncThunk('googleDrive/listWithContent', async () => {
  const response = await GoogleDriveService.listWithContent();
  return response;
});

export const googleDriveDeleteAPI = createAsyncThunk('googleDrive/delete', async (req: { id: string; name: string }) => {
  await GoogleDriveService.delete(req.id, req.name);
  return req;
});
