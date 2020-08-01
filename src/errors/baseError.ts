/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */


import ErrorObject from "./errorObject";
import ErrorSeverity from "./severityType";
import IssueType from "./issueType";

export default abstract class BaseError extends Error {
  public stack: any;
  public reason: string;
  public data: any;
  public code: string;
  public severity: ErrorSeverity;
  public issue: IssueType;

  constructor(errorObj: ErrorObject,  data: any = {}) {
    super(errorObj.message);

    this.code = errorObj.code;
    this.severity = errorObj.severity;
    this.issue = errorObj.issue;
    this.data = data;
    this.reason = errorObj.error.message;
    this.stack = errorObj.error.stack;
  }
}
