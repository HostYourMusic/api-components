/*
 * Host-Your-Music
 * Copyright 2020 - Host-Your-Music.
 * Rodrigo de Souza - rsouza01@gmail.com
 */

enum IssueType {
  CONFLICT = "conflict",
  DELETED = "deleted",
  DUPLICATE = "duplicate",
  EXCEPTION = "exception",
  EXPIRED = "expired",
  FORBIDDEN = "forbidden",
  INFORMATIONAL = "informational",
  INVALID = "invalid",
  INVARIANT = "invariant",
  NOT_FOUND = "not-found",
  NO_STORE = "no-store",
  NOT_SUPPORTED = "not-supported",
  PROCESSING = "processing",
  REQUIRED = "required",
  SECURITY = "security",
  STRUCTURE = "structure",
  SUPPRESSED = "suppressed",
  TIMEOUT = "timeout",
  VALUE = "value",
}

export default IssueType;
