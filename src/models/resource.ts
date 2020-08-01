/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */

import MetaData from "./metaData";
import ResourceType from "./resourceType";

export default interface Resource {
  resourceType?: ResourceType | string;
  id?: string;
  meta?: MetaData;

  createdBy?: string;

  [key: string]: any;
}
