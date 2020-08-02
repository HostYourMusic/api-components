/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */

import { BaseError } from "../errors";
import { Resource } from "../models";

export default interface ResponseObject {
  statusCode: number;
  data?: Resource | Resource[];
  error?: BaseError;
}
