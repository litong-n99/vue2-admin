import localforage from "localforage";

import BaseModel from "./BaseModel";
import MODELS, { ModelsKey } from "./index";

import { LOCALFRAGE_PREFIX } from "@model/Constant";

/**
 * @description storage model
 * @param model
 */
export function saveModel(model: BaseModel) {
  const localStorageKey = `${LOCALFRAGE_PREFIX}/${model.namespaced}`;
  localforage.setItem(localStorageKey, model.toSaveObject());
}

/**
 * @description init model before initing app
 */
export async function initModels() {
  for (const name in MODELS) {
    if (!Object.hasOwnProperty.call(MODELS, name)) continue;
    const model = MODELS[name as ModelsKey];
    const localStorageKey = `${LOCALFRAGE_PREFIX}/${name}`;
    const modelData = await localforage.getItem(localStorageKey);
    if (modelData) {
      model.initProps(modelData);
    }
  }

  Object.values(MODELS).forEach((item: BaseModel) => {
    item.init();
  });
}

/**
 * @description clear session infomation
 */
export function cleanSessionInfo() {
  sessionStorage.clear();
}

/**
 * @description clear all models
 */
export async function cleanModels() {
  await localforage.clear();
  for (const name in MODELS) {
    if (!Object.hasOwnProperty.call(MODELS, name)) continue;
    const model = MODELS[name as ModelsKey];
    model.cleanModel();
  }

  cleanSessionInfo();
}
