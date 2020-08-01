/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */

import ErrorSeverity from "./severityType";
import IssueType from "./issueType";

export default interface ErrorObject {
  code: string;
  message: string;
  severity: ErrorSeverity;
  error: Error;
  issue: IssueType;
}
