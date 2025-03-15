import { TranslateCommon } from './translate.common.mjs';

class TranslateWeb extends TranslateCommon {
  constructor() {
    super('web-new.json');
  }

  // Function to recursively translate the values in an object
  translateObject = async (obj, targetLanguage, targetJson) => {
    const translatedObject = {};

    for (const key in obj) {
      const value = obj[key];
      const targetValue = targetJson?.[key];
      if (typeof value === 'string') {
        translatedObject[key] = await this.translateStringValue(value, targetValue, targetLanguage);
      } else if (typeof value === 'object') {
        translatedObject[key] = await this.translateObject(value, targetLanguage, targetValue);
      }
    }

    return translatedObject;
  };
}

new TranslateWeb().start();
