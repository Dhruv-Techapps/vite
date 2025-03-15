import { RuntimeMessageRequest } from '@dhruv-techapps/core-common';
import { CoreService } from '@dhruv-techapps/core-service';
import { RUNTIME_MESSAGE_GOOGLE_SHEETS } from './google-sheets.constant';
import { GoogleSheetsRequest, GoogleSheetsResponse } from './google-sheets.types';

export class GoogleSheetsService extends CoreService {
  static async getSheets(spreadsheetId: string, ranges: Array<string>) {
    return await this.message<RuntimeMessageRequest<GoogleSheetsRequest>, GoogleSheetsResponse>({
      messenger: RUNTIME_MESSAGE_GOOGLE_SHEETS,
      methodName: 'getSheets',
      message: { spreadsheetId, ranges },
    });
  }
}
